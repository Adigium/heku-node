import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  key: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
};

export type AccountSession = {
  __typename?: 'AccountSession';
  account: Account;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
};

export type Asset = {
  __typename?: 'Asset';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['String']>;
  balanceConvert: Array<Maybe<Scalars['String']>>;
  blockchain: Blockchain;
  coinMarketCap?: Maybe<Scalars['Int']>;
  decimals: Scalars['Int'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isCoin: Scalars['Boolean'];
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  protocol?: Maybe<Protocol>;
  symbol: Scalars['String'];
};


export type AssetBalanceConvertArgs = {
  currency?: InputMaybe<Scalars['String']>;
};

export type Blockchain = {
  __typename?: 'Blockchain';
  assets?: Maybe<Array<Maybe<Asset>>>;
  chainId?: Maybe<Scalars['Int']>;
  coin: Asset;
  id: Scalars['ID'];
  isTestnet?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  protocols?: Maybe<Array<Maybe<Protocol>>>;
  rpc?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateProduct?: Maybe<Product>;
  completePayment: Payment;
  createPayment: Payment;
  createPrice?: Maybe<Price>;
  createProduct?: Maybe<Product>;
  deletePrice?: Maybe<Scalars['Boolean']>;
  deleteProduct?: Maybe<Scalars['Boolean']>;
  processPayment: TransactionConfig;
};


export type MutationActivateProductArgs = {
  activated?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationCompletePaymentArgs = {
  isFailed?: InputMaybe<Scalars['Boolean']>;
  paymentId: Scalars['ID'];
  transaction?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePaymentArgs = {
  items: Array<PaymentItemInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
};


export type MutationCreatePriceArgs = {
  amount: Scalars['String'];
  asset: Scalars['ID'];
  productId: Scalars['ID'];
};


export type MutationCreateProductArgs = {
  description?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
};


export type MutationDeletePriceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationProcessPaymentArgs = {
  customerAddress: Scalars['String'];
  paymentId: Scalars['ID'];
};

export type Payment = {
  __typename?: 'Payment';
  amountSubtotal?: Maybe<Scalars['String']>;
  amountTotal?: Maybe<Scalars['String']>;
  asset?: Maybe<Asset>;
  blockchain?: Maybe<Blockchain>;
  completedAt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  customerAddress?: Maybe<Scalars['String']>;
  estimatedTransactionFee?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items?: Maybe<Array<PaymentItem>>;
  metadata?: Maybe<Scalars['JSON']>;
  status: PaymentStatus;
  transaction?: Maybe<Transaction>;
  transactionFee?: Maybe<Scalars['String']>;
};

export type PaymentItem = {
  __typename?: 'PaymentItem';
  id: Scalars['ID'];
  itemAsset: Asset;
  itemQuantity: Scalars['Float'];
  itemTotal: Scalars['String'];
  payment: Payment;
  price: Price;
  product: Product;
};

export type PaymentItemInput = {
  paymentId?: InputMaybe<Scalars['ID']>;
  priceData?: InputMaybe<PriceInput>;
  priceId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export enum PaymentStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Incomplete = 'INCOMPLETE',
  Pending = 'PENDING'
}

export type Price = {
  __typename?: 'Price';
  amount?: Maybe<Scalars['String']>;
  asset: Asset;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  payments?: Maybe<Array<Maybe<Payment>>>;
  product: Product;
};

export type PriceInput = {
  amount: Scalars['String'];
  amountAsset: Scalars['ID'];
  productData?: InputMaybe<ProductInput>;
  productId?: InputMaybe<Scalars['ID']>;
};

export type Product = {
  __typename?: 'Product';
  account: Account;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  prices?: Maybe<Array<Price>>;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
};

export type Protocol = {
  __typename?: 'Protocol';
  blockchain: Blockchain;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountSession?: Maybe<AccountSession>;
  accountSessions?: Maybe<Array<Maybe<AccountSession>>>;
  accounts?: Maybe<Array<Account>>;
  asset?: Maybe<Asset>;
  assets?: Maybe<Array<Asset>>;
  blockchain?: Maybe<Blockchain>;
  blockchains?: Maybe<Array<Blockchain>>;
  convertFromAsset?: Maybe<Scalars['String']>;
  convertToAsset?: Maybe<Scalars['String']>;
  payment?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  price?: Maybe<Price>;
  prices?: Maybe<Array<Price>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Product>>;
  protocol?: Maybe<Protocol>;
  protocols?: Maybe<Array<Protocol>>;
};


export type QueryAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountSessionArgs = {
  id: Scalars['ID'];
};


export type QueryAccountsArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetsArgs = {
  blockchain?: InputMaybe<Scalars['String']>;
};


export type QueryBlockchainArgs = {
  id: Scalars['ID'];
};


export type QueryConvertFromAssetArgs = {
  amount: Scalars['String'];
  asset: Scalars['ID'];
  currency?: InputMaybe<Scalars['String']>;
};


export type QueryConvertToAssetArgs = {
  amount: Scalars['String'];
  asset: Scalars['ID'];
  currency?: InputMaybe<Scalars['String']>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  asset?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PaymentStatus>;
  transaction?: InputMaybe<Scalars['String']>;
};


export type QueryPriceArgs = {
  id: Scalars['ID'];
};


export type QueryPricesArgs = {
  productId?: InputMaybe<Scalars['String']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  metadata?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryProtocolArgs = {
  id: Scalars['ID'];
};

export type Transaction = {
  __typename?: 'Transaction';
  asset: Asset;
  blockchain: Blockchain;
  hash: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
};

export type TransactionConfig = {
  __typename?: 'TransactionConfig';
  chainId: Scalars['Int'];
  common?: Maybe<Scalars['JSON']>;
  data?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CreatePaymentMutationVariables = Exact<{
  items: Array<PaymentItemInput> | PaymentItemInput;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'Payment', id: string } };

export type ProcessPaymentMutationVariables = Exact<{
  paymentId: Scalars['ID'];
  customerAddress: Scalars['String'];
}>;


export type ProcessPaymentMutation = { __typename?: 'Mutation', processPayment: { __typename?: 'TransactionConfig', chainId: number, to: string, from?: string | null, common?: any | null, value?: string | null, data?: string | null } };

export type CompletePaymentMutationVariables = Exact<{
  paymentId: Scalars['ID'];
  transaction: Scalars['String'];
}>;


export type CompletePaymentMutation = { __typename?: 'Mutation', completePayment: { __typename?: 'Payment', status: PaymentStatus } };

export type GetPaymentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPaymentQuery = { __typename?: 'Query', payment?: { __typename?: 'Payment', id: string, amountTotal?: string | null, amountSubtotal?: string | null, transactionFee?: string | null, estimatedTransactionFee?: string | null, status: PaymentStatus, metadata?: any | null, createdAt?: string | null, completedAt?: string | null, asset?: { __typename?: 'Asset', id: string } | null, blockchain?: { __typename?: 'Blockchain', id: string } | null, items?: Array<{ __typename?: 'PaymentItem', id: string }> | null } | null };

export type GetPaymentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPaymentsQuery = { __typename?: 'Query', payments?: Array<{ __typename?: 'Payment', id: string, amountTotal?: string | null, amountSubtotal?: string | null, transactionFee?: string | null, estimatedTransactionFee?: string | null, status: PaymentStatus, metadata?: any | null, createdAt?: string | null, completedAt?: string | null, asset?: { __typename?: 'Asset', id: string } | null, blockchain?: { __typename?: 'Blockchain', id: string } | null, items?: Array<{ __typename?: 'PaymentItem', id: string }> | null }> | null };

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id: string } | null };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: boolean | null };

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description?: string | null, metadata?: any | null, isActive: boolean, createdAt?: string | null, prices?: Array<{ __typename?: 'Price', id: string }> | null } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, description?: string | null, metadata?: any | null, isActive: boolean, createdAt?: string | null, prices?: Array<{ __typename?: 'Price', id: string }> | null }> | null };

export type CreatePriceMutationVariables = Exact<{
  productId: Scalars['ID'];
  amount: Scalars['String'];
  asset: Scalars['ID'];
}>;


export type CreatePriceMutation = { __typename?: 'Mutation', createPrice?: { __typename?: 'Price', id: string } | null };

export type DeletePriceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePriceMutation = { __typename?: 'Mutation', deletePrice?: boolean | null };

export type GetPriceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPriceQuery = { __typename?: 'Query', price?: { __typename?: 'Price', id: string, amount?: string | null, asset: { __typename?: 'Asset', id: string }, product: { __typename?: 'Product', id: string }, payments?: Array<{ __typename?: 'Payment', id: string } | null> | null } | null };

export type GetPricesQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['String']>;
}>;


export type GetPricesQuery = { __typename?: 'Query', prices?: Array<{ __typename?: 'Price', id: string, amount?: string | null, asset: { __typename?: 'Asset', id: string }, product: { __typename?: 'Product', id: string }, payments?: Array<{ __typename?: 'Payment', id: string } | null> | null }> | null };

export type GetAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAssetsQuery = { __typename?: 'Query', assets?: Array<{ __typename?: 'Asset', id: string, name: string, imageUrl: string, symbol: string, decimals: number, isCoin: boolean, address?: string | null, metadata?: any | null, coinMarketCap?: number | null, blockchain: { __typename?: 'Blockchain', id: string }, protocol?: { __typename?: 'Protocol', id: string } | null }> | null };

export type GetAssetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAssetQuery = { __typename?: 'Query', asset?: { __typename?: 'Asset', id: string, name: string, symbol: string, imageUrl: string, decimals: number, isCoin: boolean, address?: string | null, metadata?: any | null, coinMarketCap?: number | null, blockchain: { __typename?: 'Blockchain', id: string }, protocol?: { __typename?: 'Protocol', id: string } | null } | null };

export type GetBlockchainsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlockchainsQuery = { __typename?: 'Query', blockchains?: Array<{ __typename?: 'Blockchain', id: string, name: string, metadata?: any | null, rpc?: string | null, chainId?: number | null, isTestnet?: boolean | null, coin: { __typename?: 'Asset', id: string }, assets?: Array<{ __typename?: 'Asset', id: string } | null> | null, protocols?: Array<{ __typename?: 'Protocol', id: string } | null> | null }> | null };

export type GetBlockchainQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBlockchainQuery = { __typename?: 'Query', blockchain?: { __typename?: 'Blockchain', id: string, name: string, metadata?: any | null, rpc?: string | null, chainId?: number | null, isTestnet?: boolean | null, coin: { __typename?: 'Asset', id: string }, assets?: Array<{ __typename?: 'Asset', id: string } | null> | null, protocols?: Array<{ __typename?: 'Protocol', id: string } | null> | null } | null };

export type ConvertFromAssetQueryVariables = Exact<{
  asset: Scalars['ID'];
  amount: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
}>;


export type ConvertFromAssetQuery = { __typename?: 'Query', convertFromAsset?: string | null };

export type ConvertToAssetQueryVariables = Exact<{
  asset: Scalars['ID'];
  amount: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
}>;


export type ConvertToAssetQuery = { __typename?: 'Query', convertToAsset?: string | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  AccountSession: ResolverTypeWrapper<AccountSession>;
  Asset: ResolverTypeWrapper<Asset>;
  Blockchain: ResolverTypeWrapper<Blockchain>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentItem: ResolverTypeWrapper<PaymentItem>;
  PaymentItemInput: PaymentItemInput;
  PaymentStatus: PaymentStatus;
  Price: ResolverTypeWrapper<Price>;
  PriceInput: PriceInput;
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  Protocol: ResolverTypeWrapper<Protocol>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionConfig: ResolverTypeWrapper<TransactionConfig>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  AccountSession: AccountSession;
  Asset: Asset;
  Blockchain: Blockchain;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Mutation: {};
  Payment: Payment;
  PaymentItem: PaymentItem;
  PaymentItemInput: PaymentItemInput;
  Price: Price;
  PriceInput: PriceInput;
  Product: Product;
  ProductInput: ProductInput;
  Protocol: Protocol;
  Query: {};
  String: Scalars['String'];
  Transaction: Transaction;
  TransactionConfig: TransactionConfig;
};

export type ProtectedDirectiveArgs = {
  table?: Maybe<Scalars['String']>;
};

export type ProtectedDirectiveResolver<Result, Parent, ContextType = any, Args = ProtectedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TranslatableDirectiveArgs = {
  attr?: Maybe<Scalars['String']>;
  column?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
};

export type TranslatableDirectiveResolver<Result, Parent, ContextType = any, Args = TranslatableDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountSessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountSession'] = ResolversParentTypes['AccountSession']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balanceConvert?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType, Partial<AssetBalanceConvertArgs>>;
  blockchain?: Resolver<ResolversTypes['Blockchain'], ParentType, ContextType>;
  coinMarketCap?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCoin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockchainResolvers<ContextType = any, ParentType extends ResolversParentTypes['Blockchain'] = ResolversParentTypes['Blockchain']> = {
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coin?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isTestnet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  protocols?: Resolver<Maybe<Array<Maybe<ResolversTypes['Protocol']>>>, ParentType, ContextType>;
  rpc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  activateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationActivateProductArgs, 'id'>>;
  completePayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationCompletePaymentArgs, 'paymentId'>>;
  createPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationCreatePaymentArgs, 'items'>>;
  createPrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType, RequireFields<MutationCreatePriceArgs, 'amount' | 'asset' | 'productId'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'name'>>;
  deletePrice?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePriceArgs, 'id'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  processPayment?: Resolver<ResolversTypes['TransactionConfig'], ParentType, ContextType, RequireFields<MutationProcessPaymentArgs, 'customerAddress' | 'paymentId'>>;
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  amountSubtotal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amountTotal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  blockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  estimatedTransactionFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['PaymentItem']>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PaymentStatus'], ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  transactionFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentItem'] = ResolversParentTypes['PaymentItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemAsset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  itemQuantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  itemTotal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Price'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payment']>>>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<Array<ResolversTypes['Price']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProtocolResolvers<ContextType = any, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = {
  blockchain?: Resolver<ResolversTypes['Blockchain'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, Partial<QueryAccountArgs>>;
  accountSession?: Resolver<Maybe<ResolversTypes['AccountSession']>, ParentType, ContextType, RequireFields<QueryAccountSessionArgs, 'id'>>;
  accountSessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountSession']>>>, ParentType, ContextType>;
  accounts?: Resolver<Maybe<Array<ResolversTypes['Account']>>, ParentType, ContextType, Partial<QueryAccountsArgs>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assets?: Resolver<Maybe<Array<ResolversTypes['Asset']>>, ParentType, ContextType, Partial<QueryAssetsArgs>>;
  blockchain?: Resolver<Maybe<ResolversTypes['Blockchain']>, ParentType, ContextType, RequireFields<QueryBlockchainArgs, 'id'>>;
  blockchains?: Resolver<Maybe<Array<ResolversTypes['Blockchain']>>, ParentType, ContextType>;
  convertFromAsset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryConvertFromAssetArgs, 'amount' | 'asset'>>;
  convertToAsset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryConvertToAssetArgs, 'amount' | 'asset'>>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<QueryPaymentArgs, 'id'>>;
  payments?: Resolver<Maybe<Array<ResolversTypes['Payment']>>, ParentType, ContextType, Partial<QueryPaymentsArgs>>;
  price?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType, RequireFields<QueryPriceArgs, 'id'>>;
  prices?: Resolver<Maybe<Array<ResolversTypes['Price']>>, ParentType, ContextType, Partial<QueryPricesArgs>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType, Partial<QueryProductsArgs>>;
  protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryProtocolArgs, 'id'>>;
  protocols?: Resolver<Maybe<Array<ResolversTypes['Protocol']>>, ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  blockchain?: Resolver<ResolversTypes['Blockchain'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionConfig'] = ResolversParentTypes['TransactionConfig']> = {
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  common?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountSession?: AccountSessionResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  Blockchain?: BlockchainResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentItem?: PaymentItemResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Protocol?: ProtocolResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  TransactionConfig?: TransactionConfigResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  protected?: ProtectedDirectiveResolver<any, any, ContextType>;
  translatable?: TranslatableDirectiveResolver<any, any, ContextType>;
};
