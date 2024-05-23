/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $condition: ModelAddressConditionInput
  $input: CreateAddressInput!
) {
  createAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $condition: ModelCategoryConditionInput
  $input: CreateCategoryInput!
) {
  createCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const createPayment = /* GraphQL */ `mutation CreatePayment(
  $condition: ModelPaymentConditionInput
  $input: CreatePaymentInput!
) {
  createPayment(condition: $condition, input: $input) {
    amount
    createdAt
    date
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePaymentMutationVariables,
  APITypes.CreatePaymentMutation
>;
export const createPostcard = /* GraphQL */ `mutation CreatePostcard(
  $condition: ModelPostcardConditionInput
  $input: CreatePostcardInput!
) {
  createPostcard(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePostcardMutationVariables,
  APITypes.CreatePostcardMutation
>;
export const createScripture = /* GraphQL */ `mutation CreateScripture(
  $condition: ModelScriptureConditionInput
  $input: CreateScriptureInput!
) {
  createScripture(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateScriptureMutationVariables,
  APITypes.CreateScriptureMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $condition: ModelAddressConditionInput
  $input: DeleteAddressInput!
) {
  deleteAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $condition: ModelCategoryConditionInput
  $input: DeleteCategoryInput!
) {
  deleteCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const deletePayment = /* GraphQL */ `mutation DeletePayment(
  $condition: ModelPaymentConditionInput
  $input: DeletePaymentInput!
) {
  deletePayment(condition: $condition, input: $input) {
    amount
    createdAt
    date
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePaymentMutationVariables,
  APITypes.DeletePaymentMutation
>;
export const deletePostcard = /* GraphQL */ `mutation DeletePostcard(
  $condition: ModelPostcardConditionInput
  $input: DeletePostcardInput!
) {
  deletePostcard(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePostcardMutationVariables,
  APITypes.DeletePostcardMutation
>;
export const deleteScripture = /* GraphQL */ `mutation DeleteScripture(
  $condition: ModelScriptureConditionInput
  $input: DeleteScriptureInput!
) {
  deleteScripture(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteScriptureMutationVariables,
  APITypes.DeleteScriptureMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $condition: ModelAddressConditionInput
  $input: UpdateAddressInput!
) {
  updateAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $condition: ModelCategoryConditionInput
  $input: UpdateCategoryInput!
) {
  updateCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const updatePayment = /* GraphQL */ `mutation UpdatePayment(
  $condition: ModelPaymentConditionInput
  $input: UpdatePaymentInput!
) {
  updatePayment(condition: $condition, input: $input) {
    amount
    createdAt
    date
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePaymentMutationVariables,
  APITypes.UpdatePaymentMutation
>;
export const updatePostcard = /* GraphQL */ `mutation UpdatePostcard(
  $condition: ModelPostcardConditionInput
  $input: UpdatePostcardInput!
) {
  updatePostcard(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePostcardMutationVariables,
  APITypes.UpdatePostcardMutation
>;
export const updateScripture = /* GraphQL */ `mutation UpdateScripture(
  $condition: ModelScriptureConditionInput
  $input: UpdateScriptureInput!
) {
  updateScripture(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateScriptureMutationVariables,
  APITypes.UpdateScriptureMutation
>;
