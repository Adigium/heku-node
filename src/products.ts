import { ApolloClient, FetchResult, NormalizedCacheObject } from "@apollo/client";
import { CreateProductMutation, CreateProductMutationVariables, DeleteProductMutation, DeleteProductMutationVariables, GetProductQuery, GetProductQueryVariables, GetProductsQuery, GetProductsQueryVariables } from "./generated/graphql";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS } from "./graphql";

export default class Products {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  public async create(payload: CreateProductMutationVariables): Promise<FetchResult<CreateProductMutation>> {
    return await this.client.mutate({ mutation: CREATE_PRODUCT, variables: { ...payload } })
  }

  public async delete(payload: DeleteProductMutationVariables): Promise<FetchResult<DeleteProductMutation>> {
    return await this.client.mutate({ mutation: DELETE_PRODUCT, variables: { ...payload } })
  }

  public async getProduct(payload: GetProductQueryVariables): Promise<FetchResult<GetProductQuery>> {
    return await this.client.query({ query: GET_PRODUCT, variables: { ...payload } })
  }

  public async getProducts(payload: GetProductsQueryVariables): Promise<FetchResult<GetProductsQuery>> {
    return await this.client.query({ query: GET_PRODUCTS, variables: { ...payload } })
  }
}