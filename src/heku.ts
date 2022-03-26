import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { GRAPHQL_BASE_URL } from "./config";
import Payments from "./payments";
import Products from "./products";
import Prices from "./prices";
import Assets from "./assets";
import Blockchains from "./blockchains";
import Utils from "./utils";
import Web3 from "web3";
import fetch from "cross-fetch";

export class HekuCore {

  private apolloClient: ApolloClient<NormalizedCacheObject>
  public payments: Payments
  public products: Products
  public prices: Prices
  public assets: Assets
  public blockchains: Blockchains
  public utils = Utils

  constructor(token: String) {
    this.apolloClient = new ApolloClient({
      link: createHttpLink({
          uri: GRAPHQL_BASE_URL,
          headers: {
            Authorization: token,
          },
          fetch: fetch
        }),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    });

    this.payments = new Payments(this.apolloClient)
    this.products = new Products(this.apolloClient)
    this.prices = new Prices(this.apolloClient)
    this.assets = new Assets(this.apolloClient)
    this.blockchains = new Blockchains(this.apolloClient)
  }
}

export class HekuClient {
  public core: HekuCore
  public web3: Web3
  public addresses: string[]
  public address: string

  private constructor(token: string, provider: any) {
    this.core = new HekuCore(token)
    this.web3 = new Web3(provider)
  }

  static async build(token: string, provider: any): Promise<HekuClient> {
    const client = new HekuClient(token, provider)

    await client.initializeAddresses()

    return client
  }

  private async initializeAddresses() {
    this.addresses = await this.web3.eth.getAccounts();
    this.address = this.addresses[0]
  }

  public async setProvider(provider: any) {
    this.web3 = new Web3(provider);

    await this.initializeAddresses()
  }

  public async setAddress(index) {
    this.address = this.addresses[index]
  }

  public async finalizePayment(paymentId: string) {
    const processing = await this.core.payments.process({ paymentId: paymentId, customerAddress: this.address })
    
    const transactionConfig: any = processing.data?.processPayment

    const transaction = await this.web3.eth.sendTransaction(transactionConfig)
    
    const payment = await this.core.payments.complete({ paymentId: paymentId, transaction: transaction.transactionHash })

    return payment.data?.completePayment.status
  }

}