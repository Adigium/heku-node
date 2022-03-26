import { ApolloClient, NormalizedCacheObject, FetchResult } from "@apollo/client"
import { ConvertFromAssetQuery, ConvertFromAssetQueryVariables, GetAssetQuery, GetAssetQueryVariables, GetAssetsQuery, GetAssetsQueryVariables } from './generated/graphql'
import { CONVERT_FROM_ASSET, GET_ASSET, GET_ASSETS } from './graphql'
import { ConvertToAssetQuery, ConvertToAssetQueryVariables } from "./generated/graphql"
import { CONVERT_TO_ASSET } from "./graphql"

export default class Assets {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  public async getAsset(payload: GetAssetQueryVariables): Promise<FetchResult<GetAssetQuery>> {
    return await this.client.query({ query: GET_ASSET, variables: { ...payload } })
  }

  public async getAssets(payload: GetAssetsQueryVariables): Promise<FetchResult<GetAssetsQuery>> {
    return await this.client.query({ query: GET_ASSETS, variables: { ...payload } })
  }

  public async convertToAsset(payload: ConvertToAssetQueryVariables): Promise<FetchResult<ConvertToAssetQuery>> {
    return await this.client.mutate({ mutation: CONVERT_TO_ASSET, variables: { ...payload } })
  }

  public async convertFromAsset(payload: ConvertFromAssetQueryVariables): Promise<FetchResult<ConvertFromAssetQuery>> {
    return await this.client.mutate({ mutation: CONVERT_FROM_ASSET, variables: { ...payload } })
  }
}