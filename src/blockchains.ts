import { ApolloClient, NormalizedCacheObject, FetchResult } from "@apollo/client"
import { GetBlockchainQuery, GetBlockchainQueryVariables, GetBlockchainsQuery, GetBlockchainsQueryVariables } from './generated/graphql'
import { GET_BLOCKCHAIN, GET_BLOCKCHAINS } from './graphql'

export default class Blockchains {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  public async getBlockchain(payload: GetBlockchainQueryVariables): Promise<FetchResult<GetBlockchainQuery>> {
    return await this.client.query({ query: GET_BLOCKCHAIN, variables: { ...payload } })
  }

  public async getBlockchains(payload: GetBlockchainsQueryVariables): Promise<FetchResult<GetBlockchainsQuery>> {
    return await this.client.query({ query: GET_BLOCKCHAINS, variables: { ...payload } })
  }
}