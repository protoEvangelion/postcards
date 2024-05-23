/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress(
  $filter: ModelSubscriptionAddressFilterInput
  $owner: String
) {
  onCreateAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onCreatePayment = /* GraphQL */ `subscription OnCreatePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onCreatePayment(filter: $filter, owner: $owner) {
    amount
    createdAt
    date
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePaymentSubscriptionVariables,
  APITypes.OnCreatePaymentSubscription
>;
export const onCreatePostcard = /* GraphQL */ `subscription OnCreatePostcard(
  $filter: ModelSubscriptionPostcardFilterInput
  $owner: String
) {
  onCreatePostcard(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostcardSubscriptionVariables,
  APITypes.OnCreatePostcardSubscription
>;
export const onCreateScripture = /* GraphQL */ `subscription OnCreateScripture($filter: ModelSubscriptionScriptureFilterInput) {
  onCreateScripture(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScriptureSubscriptionVariables,
  APITypes.OnCreateScriptureSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress(
  $filter: ModelSubscriptionAddressFilterInput
  $owner: String
) {
  onDeleteAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onDeletePayment = /* GraphQL */ `subscription OnDeletePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onDeletePayment(filter: $filter, owner: $owner) {
    amount
    createdAt
    date
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePaymentSubscriptionVariables,
  APITypes.OnDeletePaymentSubscription
>;
export const onDeletePostcard = /* GraphQL */ `subscription OnDeletePostcard(
  $filter: ModelSubscriptionPostcardFilterInput
  $owner: String
) {
  onDeletePostcard(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostcardSubscriptionVariables,
  APITypes.OnDeletePostcardSubscription
>;
export const onDeleteScripture = /* GraphQL */ `subscription OnDeleteScripture($filter: ModelSubscriptionScriptureFilterInput) {
  onDeleteScripture(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScriptureSubscriptionVariables,
  APITypes.OnDeleteScriptureSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress(
  $filter: ModelSubscriptionAddressFilterInput
  $owner: String
) {
  onUpdateAddress(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onUpdatePayment = /* GraphQL */ `subscription OnUpdatePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onUpdatePayment(filter: $filter, owner: $owner) {
    amount
    createdAt
    date
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePaymentSubscriptionVariables,
  APITypes.OnUpdatePaymentSubscription
>;
export const onUpdatePostcard = /* GraphQL */ `subscription OnUpdatePostcard(
  $filter: ModelSubscriptionPostcardFilterInput
  $owner: String
) {
  onUpdatePostcard(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostcardSubscriptionVariables,
  APITypes.OnUpdatePostcardSubscription
>;
export const onUpdateScripture = /* GraphQL */ `subscription OnUpdateScripture($filter: ModelSubscriptionScriptureFilterInput) {
  onUpdateScripture(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScriptureSubscriptionVariables,
  APITypes.OnUpdateScriptureSubscription
>;
