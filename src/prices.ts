import { ApolloClient, FetchResult, NormalizedCacheObject } from "@apollo/client";
import { CreatePriceMutation, CreatePriceMutationVariables, DeletePriceMutation, DeletePriceMutationVariables, GetPriceQuery, GetPricesQuery, GetProductQueryVariables, GetProductsQueryVariables } from "./generated/graphql";
import { CREATE_PRICE, DELETE_PRICE, GET_PRICE, GET_PRICES } from "./graphql";

export default class Prices {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  public async create(payload: CreatePriceMutationVariables): Promise<FetchResult<CreatePriceMutation>> {
    return await this.client.mutate({ mutation: CREATE_PRICE, variables: { ...payload } })
  }

  public async delete(payload: DeletePriceMutationVariables): Promise<FetchResult<DeletePriceMutation>> {
    return await this.client.mutate({ mutation: DELETE_PRICE, variables: { ...payload } })
  }

  public async getPrice(payload: GetProductQueryVariables): Promise<FetchResult<GetPriceQuery>> {
    return await this.client.query({ query: GET_PRICE, variables: { ...payload } })
  }

  public async getPrices(payload: GetProductsQueryVariables): Promise<FetchResult<GetPricesQuery>> {
    return await this.client.query({ query: GET_PRICES, variables: { ...payload } })
  }
}