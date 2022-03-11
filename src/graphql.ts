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

      payments {
        id
      }
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

      payments {
        id
      }
      prices {
        id
      }
    }
  }
`




/*******************************************************************************************************************************
 *  PRODUCTS     
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

