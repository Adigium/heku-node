import { gql, TypedDocumentNode } from "@apollo/client"

/*******************************************************************************************************************************
 *  PAYMENTS     
 * 
 *******************************************************************************************************************************/

/**
 * Create Payment mutation
 */

export const CREATE_PAYMENT = gql`
  mutation CreatePayment($items: [PaymentItemInput!]!) {
    createPayment(items: $items) {
      id
    }
  }
`

/**
 * Process Payment mutation
 */

export const PROCESS_PAYMENT = gql`
  mutation ProcessPayment($paymentId: ID!, $customerAddress: String!) {
    processPayment(paymentId: $paymentId, customerAddress: $customerAddress) {
      chainId
      to
      from
      common
      value
      data
    }
  }
`

/**
 * Complete Payment mutation
 */

export const COMPLETE_PAYMENT = gql`
  mutation CompletePayment($paymentId: ID!, $transaction: String!) {
    completePayment(paymentId: $paymentId, transaction: $transaction) {
      status
    }
  }
`

/**
 * Get Payment query
 */

export const GET_PAYMENT = gql`
  query GetPayment($id: ID!) {
    payment(id: $id) {
      id
      amountTotal
      amountSubtotal
      transactionFee
      estimatedTransactionFee
      status
      asset {
        id
      }
      blockchain {
        id
      }
      items {
        id
      }
      metadata
      createdAt
      completedAt
    }
  }
`

/**
 * Get Payments query
 */

export const GET_PAYMENTS = gql`
  query getPayments($id: ID!) {
    payments {
      id
      amountTotal
      amountSubtotal
      transactionFee
      estimatedTransactionFee
      status
      asset {
        id
      }
      blockchain {
        id
      }
      items {
        id
      }
      metadata
      createdAt
      completedAt
    }
  }
`




/*******************************************************************************************************************************
 *  PRODUCTS     
 * 
 *******************************************************************************************************************************/

/**
 * Create Product mutation
 */

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $description: String, $metadata: JSON, $isActive: Boolean) {
    createProduct(name: $name, description: $description, metadata: $metadata, isActive: $isActive) {
      id
    }
  }
`

/**
 * Delete Product mutation
 */

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`

/**
 * Get Product query
 */

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      metadata
      isActive
      createdAt

      prices {
        id
      }
    }
  }
`

/**
 * Get Products query
 */

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      metadata
      isActive
      createdAt

      prices {
        id
      }
    }
  }
`




/*******************************************************************************************************************************
 *  PRICES     
 * 
 *******************************************************************************************************************************/

/**
 * Create Price mutation
 */

export const CREATE_PRICE = gql`
  mutation CreatePrice($productId: ID!, $amount: String!, $asset: ID!) {
    createPrice(productId: $productId, amount: $amount, asset: $asset) {
      id
    }
  }
`

/**
* Delete Price mutation
*/

export const DELETE_PRICE = gql`
 mutation DeletePrice($id: ID!) {
   deletePrice(id: $id)
 }
`

/**
* Get Price query
*/

export const GET_PRICE = gql`
  query GetPrice($id: ID!) {
    price(id: $id) {
      id
      amount
      asset {
        id
      }
      product {
        id
      }
      payments {
        id
      }
    }
  }
`

/**
* Get Prices query
*/

export const GET_PRICES = gql`
  query GetPrices($productId: String) {
    prices(productId: $productId) {
      id
      amount
      asset {
        id
      }
      product {
        id
      }
      payments {
        id
      }
    }
  }
`


/*******************************************************************************************************************************
 *  ASSETS     
 * 
 *******************************************************************************************************************************/

export const GET_ASSETS = gql`
  query GetAssets {
    assets {
      id
      name
      imageUrl
      symbol
      blockchain {
        id
      }
      decimals
      isCoin
      address
      protocol {
        id
      }
      metadata
      coinMarketCap
    }
  }
`

export const GET_ASSET = gql`
  query GetAsset($id: ID!) {
    asset(id: $id) {
      id
      name
      symbol
      imageUrl
      blockchain {
        id
      }
      decimals
      isCoin
      address
      protocol {
        id
      }
      metadata
      coinMarketCap
    }
  }
`


/*******************************************************************************************************************************
 *  BLOCKCHAINS     
 * 
 *******************************************************************************************************************************/

export const GET_BLOCKCHAINS = gql`
  query GetBlockchains {
    blockchains {
      id
      name
      metadata
      rpc
      chainId
      isTestnet

      coin {
        id
      }
      assets {
        id
      }
      protocols {
        id
      }
    }
  }
`

export const GET_BLOCKCHAIN = gql`
  query GetBlockchain($id: ID!) {
    blockchain(id: $id) {
      id
      name
      metadata
      rpc
      chainId
      isTestnet

      coin {
        id
      }
      assets {
        id
      }
      protocols {
        id
      }
    }
  }
`


/*******************************************************************************************************************************
 *  UTILS     
 * 
 *******************************************************************************************************************************/


export const CONVERT_FROM_ASSET = gql`
  query ConvertFromAsset($asset: ID!, $amount: String!, $currency: String) {
    convertFromAsset(asset: $asset, amount: $amount, currency: $currency)
  }
`

export const CONVERT_TO_ASSET = gql`
  query ConvertToAsset($asset: ID!, $amount: String!, $currency: String) {
    convertToAsset(asset: $asset, amount: $amount, currency: $currency)
  }
`