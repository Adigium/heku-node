import { ApolloClient, FetchResult, NormalizedCacheObject } from "@apollo/client";
import { CompletePaymentMutation, CompletePaymentMutationVariables, CreatePaymentMutation, CreatePaymentMutationVariables, GetPaymentQuery, GetPaymentQueryVariables, GetPaymentsQuery, GetPaymentsQueryVariables, ProcessPaymentMutation, ProcessPaymentMutationVariables } from "./generated/graphql";
import { COMPLETE_PAYMENT, CREATE_PAYMENT, GET_PAYMENT, GET_PAYMENTS, PROCESS_PAYMENT } from "./graphql";

export default class Payments {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  public async create(payload: CreatePaymentMutationVariables): Promise<FetchResult<CreatePaymentMutation>> {
    return await this.client.mutate({ mutation: CREATE_PAYMENT, variables: { ...payload } })
  }

  public async process(payload: ProcessPaymentMutationVariables): Promise<FetchResult<ProcessPaymentMutation>> {
    return await this.client.mutate({ mutation: PROCESS_PAYMENT, variables: { ...payload } })
  }

  public async complete(payload: CompletePaymentMutationVariables): Promise<FetchResult<CompletePaymentMutation>> {
    return await this.client.mutate({ mutation: COMPLETE_PAYMENT, variables: { ...payload } })
  }

  public async getPayment(payload: GetPaymentQueryVariables): Promise<FetchResult<GetPaymentQuery>> {
    return await this.client.query({ query: GET_PAYMENT, variables: { ...payload } })
  }

  public async getPayments(payload: GetPaymentsQueryVariables): Promise<FetchResult<GetPaymentsQuery>> {
    return await this.client.query({ query: GET_PAYMENTS, variables: { ...payload } })
  }
}
