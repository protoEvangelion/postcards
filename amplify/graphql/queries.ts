/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    address
    address2
    city
    createdAt
    id
    isRecipientAddress
    name
    owner
    state
    updatedAt
    zip
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    createdAt
    id
    scriptures {
      nextToken
      __typename
    }
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const getPayment = /* GraphQL */ `query GetPayment($id: ID!) {
  getPayment(id: $id) {
    amount
    createdAt
    date
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPaymentQueryVariables,
  APITypes.GetPaymentQuery
>;
export const getPostcard = /* GraphQL */ `query GetPostcard($id: ID!) {
  getPostcard(id: $id) {
    createdAt
    delivered
    id
    owner
    scheduledDate
    scripture {
      categoryId
      createdAt
      id
      reference
      text
      updatedAt
      __typename
    }
    scriptureId
    shipped
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostcardQueryVariables,
  APITypes.GetPostcardQuery
>;
export const getScripture = /* GraphQL */ `query GetScripture($id: ID!) {
  getScripture(id: $id) {
    category {
      createdAt
      id
      text
      updatedAt
      __typename
    }
    categoryId
    createdAt
    id
    postcards {
      nextToken
      __typename
    }
    reference
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScriptureQueryVariables,
  APITypes.GetScriptureQuery
>;
export const handleApiKeys = /* GraphQL */ `query HandleApiKeys {
  handleApiKeys {
    googleMapsApiKey
    stripePublicKey
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HandleApiKeysQueryVariables,
  APITypes.HandleApiKeysQuery
>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      address
      address2
      city
      createdAt
      id
      isRecipientAddress
      name
      owner
      state
      updatedAt
      zip
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listPayments = /* GraphQL */ `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      amount
      createdAt
      date
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentsQueryVariables,
  APITypes.ListPaymentsQuery
>;
export const listPostcards = /* GraphQL */ `query ListPostcards(
  $filter: ModelPostcardFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostcards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      delivered
      id
      owner
      scheduledDate
      scriptureId
      shipped
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostcardsQueryVariables,
  APITypes.ListPostcardsQuery
>;
export const listScriptures = /* GraphQL */ `query ListScriptures(
  $filter: ModelScriptureFilterInput
  $limit: Int
  $nextToken: String
) {
  listScriptures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      categoryId
      createdAt
      id
      reference
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScripturesQueryVariables,
  APITypes.ListScripturesQuery
>;
export const stripeCreateIntent = /* GraphQL */ `query StripeCreateIntent {
  stripeCreateIntent {
    stripeClientSecret
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StripeCreateIntentQueryVariables,
  APITypes.StripeCreateIntentQuery
>;
export const stripeSummarizePayment = /* GraphQL */ `query StripeSummarizePayment($confTokenId: String) {
  stripeSummarizePayment(confTokenId: $confTokenId) {
    details
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StripeSummarizePaymentQueryVariables,
  APITypes.StripeSummarizePaymentQuery
>;
export const stripeWebhookPayment = /* GraphQL */ `query StripeWebhookPayment {
  stripeWebhookPayment {
    greeting
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StripeWebhookPaymentQueryVariables,
  APITypes.StripeWebhookPaymentQuery
>;
