/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Address = {
  __typename: "Address",
  address: string,
  address2?: string | null,
  city: string,
  createdAt: string,
  id: string,
  isRecipientAddress: boolean,
  name: string,
  owner?: string | null,
  state: string,
  updatedAt: string,
  zip: string,
};

export type Category = {
  __typename: "Category",
  createdAt: string,
  id: string,
  scriptures?: ModelScriptureConnection | null,
  text: string,
  updatedAt: string,
};

export type ModelScriptureConnection = {
  __typename: "ModelScriptureConnection",
  items:  Array<Scripture | null >,
  nextToken?: string | null,
};

export type Scripture = {
  __typename: "Scripture",
  category?: Category | null,
  categoryId: string,
  createdAt: string,
  id: string,
  postcards?: ModelPostcardConnection | null,
  reference: string,
  text: string,
  updatedAt: string,
};

export type ModelPostcardConnection = {
  __typename: "ModelPostcardConnection",
  items:  Array<Postcard | null >,
  nextToken?: string | null,
};

export type Postcard = {
  __typename: "Postcard",
  createdAt: string,
  delivered: boolean,
  id: string,
  owner?: string | null,
  scheduledDate: string,
  scripture?: Scripture | null,
  scriptureId: string,
  shipped: boolean,
  updatedAt: string,
};

export type Payment = {
  __typename: "Payment",
  amount: number,
  createdAt: string,
  date: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
};

export type ApiKeyHandlerResponse = {
  __typename: "ApiKeyHandlerResponse",
  googleMapsApiKey?: string | null,
  stripePublicKey?: string | null,
};

export type ModelAddressFilterInput = {
  address?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  city?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isRecipientAddress?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelAddressFilterInput | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  owner?: ModelStringInput | null,
  state?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  zip?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  and?: Array< ModelCategoryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCategoryFilterInput | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelPaymentFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPaymentFilterInput | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
};

export type ModelPostcardFilterInput = {
  and?: Array< ModelPostcardFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  delivered?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  not?: ModelPostcardFilterInput | null,
  or?: Array< ModelPostcardFilterInput | null > | null,
  owner?: ModelStringInput | null,
  scheduledDate?: ModelStringInput | null,
  scriptureId?: ModelIDInput | null,
  shipped?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelScriptureFilterInput = {
  and?: Array< ModelScriptureFilterInput | null > | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelScriptureFilterInput | null,
  or?: Array< ModelScriptureFilterInput | null > | null,
  reference?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type StripeCreateIntentResponse = {
  __typename: "StripeCreateIntentResponse",
  stripeClientSecret?: string | null,
};

export type StripeSummarizePaymentResponse = {
  __typename: "StripeSummarizePaymentResponse",
  details?: string | null,
};

export type StripeWebhookPaymentResponse = {
  __typename: "StripeWebhookPaymentResponse",
  greeting?: string | null,
};

export type ModelAddressConditionInput = {
  address?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  city?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isRecipientAddress?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  not?: ModelAddressConditionInput | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  owner?: ModelStringInput | null,
  state?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  zip?: ModelStringInput | null,
};

export type CreateAddressInput = {
  address: string,
  address2?: string | null,
  city: string,
  id?: string | null,
  isRecipientAddress: boolean,
  name: string,
  state: string,
  zip: string,
};

export type ModelCategoryConditionInput = {
  and?: Array< ModelCategoryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCategoryConditionInput | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  text: string,
};

export type ModelPaymentConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  date?: ModelStringInput | null,
  not?: ModelPaymentConditionInput | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePaymentInput = {
  amount: number,
  date: string,
  id?: string | null,
};

export type ModelPostcardConditionInput = {
  and?: Array< ModelPostcardConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  delivered?: ModelBooleanInput | null,
  not?: ModelPostcardConditionInput | null,
  or?: Array< ModelPostcardConditionInput | null > | null,
  owner?: ModelStringInput | null,
  scheduledDate?: ModelStringInput | null,
  scriptureId?: ModelIDInput | null,
  shipped?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePostcardInput = {
  delivered: boolean,
  id?: string | null,
  scheduledDate: string,
  scriptureId: string,
  shipped: boolean,
};

export type ModelScriptureConditionInput = {
  and?: Array< ModelScriptureConditionInput | null > | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelScriptureConditionInput | null,
  or?: Array< ModelScriptureConditionInput | null > | null,
  reference?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateScriptureInput = {
  categoryId: string,
  id?: string | null,
  reference: string,
  text: string,
};

export type DeleteAddressInput = {
  id: string,
};

export type DeleteCategoryInput = {
  id: string,
};

export type DeletePaymentInput = {
  id: string,
};

export type DeletePostcardInput = {
  id: string,
};

export type DeleteScriptureInput = {
  id: string,
};

export type UpdateAddressInput = {
  address?: string | null,
  address2?: string | null,
  city?: string | null,
  id: string,
  isRecipientAddress?: boolean | null,
  name?: string | null,
  state?: string | null,
  zip?: string | null,
};

export type UpdateCategoryInput = {
  id: string,
  text?: string | null,
};

export type UpdatePaymentInput = {
  amount?: number | null,
  date?: string | null,
  id: string,
};

export type UpdatePostcardInput = {
  delivered?: boolean | null,
  id: string,
  scheduledDate?: string | null,
  scriptureId?: string | null,
  shipped?: boolean | null,
};

export type UpdateScriptureInput = {
  categoryId?: string | null,
  id: string,
  reference?: string | null,
  text?: string | null,
};

export type ModelSubscriptionAddressFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  city?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isRecipientAddress?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  owner?: ModelStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPaymentFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPostcardFilterInput = {
  and?: Array< ModelSubscriptionPostcardFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  delivered?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPostcardFilterInput | null > | null,
  owner?: ModelStringInput | null,
  scheduledDate?: ModelSubscriptionStringInput | null,
  scriptureId?: ModelSubscriptionIDInput | null,
  shipped?: ModelSubscriptionBooleanInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionScriptureFilterInput = {
  and?: Array< ModelSubscriptionScriptureFilterInput | null > | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionScriptureFilterInput | null > | null,
  reference?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    address: string,
    address2?: string | null,
    city: string,
    createdAt: string,
    id: string,
    isRecipientAddress: boolean,
    name: string,
    owner?: string | null,
    state: string,
    updatedAt: string,
    zip: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    scriptures?:  {
      __typename: "ModelScriptureConnection",
      nextToken?: string | null,
    } | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    amount: number,
    createdAt: string,
    date: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetPostcardQueryVariables = {
  id: string,
};

export type GetPostcardQuery = {
  getPostcard?:  {
    __typename: "Postcard",
    createdAt: string,
    delivered: boolean,
    id: string,
    owner?: string | null,
    scheduledDate: string,
    scripture?:  {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null,
    scriptureId: string,
    shipped: boolean,
    updatedAt: string,
  } | null,
};

export type GetScriptureQueryVariables = {
  id: string,
};

export type GetScriptureQuery = {
  getScripture?:  {
    __typename: "Scripture",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    postcards?:  {
      __typename: "ModelPostcardConnection",
      nextToken?: string | null,
    } | null,
    reference: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type HandleApiKeysQueryVariables = {
};

export type HandleApiKeysQuery = {
  handleApiKeys?:  {
    __typename: "ApiKeyHandlerResponse",
    googleMapsApiKey?: string | null,
    stripePublicKey?: string | null,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      address: string,
      address2?: string | null,
      city: string,
      createdAt: string,
      id: string,
      isRecipientAddress: boolean,
      name: string,
      owner?: string | null,
      state: string,
      updatedAt: string,
      zip: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      amount: number,
      createdAt: string,
      date: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostcardsQueryVariables = {
  filter?: ModelPostcardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostcardsQuery = {
  listPostcards?:  {
    __typename: "ModelPostcardConnection",
    items:  Array< {
      __typename: "Postcard",
      createdAt: string,
      delivered: boolean,
      id: string,
      owner?: string | null,
      scheduledDate: string,
      scriptureId: string,
      shipped: boolean,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListScripturesQueryVariables = {
  filter?: ModelScriptureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScripturesQuery = {
  listScriptures?:  {
    __typename: "ModelScriptureConnection",
    items:  Array< {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StripeCreateIntentQueryVariables = {
};

export type StripeCreateIntentQuery = {
  stripeCreateIntent?:  {
    __typename: "StripeCreateIntentResponse",
    stripeClientSecret?: string | null,
  } | null,
};

export type StripeSummarizePaymentQueryVariables = {
  confTokenId?: string | null,
};

export type StripeSummarizePaymentQuery = {
  stripeSummarizePayment?:  {
    __typename: "StripeSummarizePaymentResponse",
    details?: string | null,
  } | null,
};

export type StripeWebhookPaymentQueryVariables = {
};

export type StripeWebhookPaymentQuery = {
  stripeWebhookPayment?:  {
    __typename: "StripeWebhookPaymentResponse",
    greeting?: string | null,
  } | null,
};

export type CreateAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: CreateAddressInput,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    address: string,
    address2?: string | null,
    city: string,
    createdAt: string,
    id: string,
    isRecipientAddress: boolean,
    name: string,
    owner?: string | null,
    state: string,
    updatedAt: string,
    zip: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    scriptures?:  {
      __typename: "ModelScriptureConnection",
      nextToken?: string | null,
    } | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type CreatePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: CreatePaymentInput,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    amount: number,
    createdAt: string,
    date: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreatePostcardMutationVariables = {
  condition?: ModelPostcardConditionInput | null,
  input: CreatePostcardInput,
};

export type CreatePostcardMutation = {
  createPostcard?:  {
    __typename: "Postcard",
    createdAt: string,
    delivered: boolean,
    id: string,
    owner?: string | null,
    scheduledDate: string,
    scripture?:  {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null,
    scriptureId: string,
    shipped: boolean,
    updatedAt: string,
  } | null,
};

export type CreateScriptureMutationVariables = {
  condition?: ModelScriptureConditionInput | null,
  input: CreateScriptureInput,
};

export type CreateScriptureMutation = {
  createScripture?:  {
    __typename: "Scripture",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    postcards?:  {
      __typename: "ModelPostcardConnection",
      nextToken?: string | null,
    } | null,
    reference: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: DeleteAddressInput,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    address: string,
    address2?: string | null,
    city: string,
    createdAt: string,
    id: string,
    isRecipientAddress: boolean,
    name: string,
    owner?: string | null,
    state: string,
    updatedAt: string,
    zip: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    scriptures?:  {
      __typename: "ModelScriptureConnection",
      nextToken?: string | null,
    } | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: DeletePaymentInput,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    amount: number,
    createdAt: string,
    date: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePostcardMutationVariables = {
  condition?: ModelPostcardConditionInput | null,
  input: DeletePostcardInput,
};

export type DeletePostcardMutation = {
  deletePostcard?:  {
    __typename: "Postcard",
    createdAt: string,
    delivered: boolean,
    id: string,
    owner?: string | null,
    scheduledDate: string,
    scripture?:  {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null,
    scriptureId: string,
    shipped: boolean,
    updatedAt: string,
  } | null,
};

export type DeleteScriptureMutationVariables = {
  condition?: ModelScriptureConditionInput | null,
  input: DeleteScriptureInput,
};

export type DeleteScriptureMutation = {
  deleteScripture?:  {
    __typename: "Scripture",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    postcards?:  {
      __typename: "ModelPostcardConnection",
      nextToken?: string | null,
    } | null,
    reference: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: UpdateAddressInput,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    address: string,
    address2?: string | null,
    city: string,
    createdAt: string,
    id: string,
    isRecipientAddress: boolean,
    name: string,
    owner?: string | null,
    state: string,
    updatedAt: string,
    zip: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    scriptures?:  {
      __typename: "ModelScriptureConnection",
      nextToken?: string | null,
    } | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: UpdatePaymentInput,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    amount: number,
    createdAt: string,
    date: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostcardMutationVariables = {
  condition?: ModelPostcardConditionInput | null,
  input: UpdatePostcardInput,
};

export type UpdatePostcardMutation = {
  updatePostcard?:  {
    __typename: "Postcard",
    createdAt: string,
    delivered: boolean,
    id: string,
    owner?: string | null,
    scheduledDate: string,
    scripture?:  {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null,
    scriptureId: string,
    shipped: boolean,
    updatedAt: string,
  } | null,
};

export type UpdateScriptureMutationVariables = {
  condition?: ModelScriptureConditionInput | null,
  input: UpdateScriptureInput,
};

export type UpdateScriptureMutation = {
  updateScripture?:  {
    __typename: "Scripture",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    postcards?:  {
      __typename: "ModelPostcardConnection",
      nextToken?: string | null,
    } | null,
    reference: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
  owner?: string | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    address: string,
    address2?: string | null,
    city: string,
    createdAt: string,
    id: string,
    isRecipientAddress: boolean,
    name: string,
    owner?: string | null,
    state: string,
    updatedAt: string,
    zip: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    scriptures?:  {
      __typename: "ModelScriptureConnection",
      nextToken?: string | null,
    } | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    amount: number,
    createdAt: string,
    date: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePostcardSubscriptionVariables = {
  filter?: ModelSubscriptionPostcardFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostcardSubscription = {
  onCreatePostcard?:  {
    __typename: "Postcard",
    createdAt: string,
    delivered: boolean,
    id: string,
    owner?: string | null,
    scheduledDate: string,
    scripture?:  {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null,
    scriptureId: string,
    shipped: boolean,
    updatedAt: string,
  } | null,
};

export type OnCreateScriptureSubscriptionVariables = {
  filter?: ModelSubscriptionScriptureFilterInput | null,
};

export type OnCreateScriptureSubscription = {
  onCreateScripture?:  {
    __typename: "Scripture",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    postcards?:  {
      __typename: "ModelPostcardConnection",
      nextToken?: string | null,
    } | null,
    reference: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    address: string,
    address2?: string | null,
    city: string,
    createdAt: string,
    id: string,
    isRecipientAddress: boolean,
    name: string,
    owner?: string | null,
    state: string,
    updatedAt: string,
    zip: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    scriptures?:  {
      __typename: "ModelScriptureConnection",
      nextToken?: string | null,
    } | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    amount: number,
    createdAt: string,
    date: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostcardSubscriptionVariables = {
  filter?: ModelSubscriptionPostcardFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostcardSubscription = {
  onDeletePostcard?:  {
    __typename: "Postcard",
    createdAt: string,
    delivered: boolean,
    id: string,
    owner?: string | null,
    scheduledDate: string,
    scripture?:  {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null,
    scriptureId: string,
    shipped: boolean,
    updatedAt: string,
  } | null,
};

export type OnDeleteScriptureSubscriptionVariables = {
  filter?: ModelSubscriptionScriptureFilterInput | null,
};

export type OnDeleteScriptureSubscription = {
  onDeleteScripture?:  {
    __typename: "Scripture",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    postcards?:  {
      __typename: "ModelPostcardConnection",
      nextToken?: string | null,
    } | null,
    reference: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    address: string,
    address2?: string | null,
    city: string,
    createdAt: string,
    id: string,
    isRecipientAddress: boolean,
    name: string,
    owner?: string | null,
    state: string,
    updatedAt: string,
    zip: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    scriptures?:  {
      __typename: "ModelScriptureConnection",
      nextToken?: string | null,
    } | null,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    amount: number,
    createdAt: string,
    date: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostcardSubscriptionVariables = {
  filter?: ModelSubscriptionPostcardFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostcardSubscription = {
  onUpdatePostcard?:  {
    __typename: "Postcard",
    createdAt: string,
    delivered: boolean,
    id: string,
    owner?: string | null,
    scheduledDate: string,
    scripture?:  {
      __typename: "Scripture",
      categoryId: string,
      createdAt: string,
      id: string,
      reference: string,
      text: string,
      updatedAt: string,
    } | null,
    scriptureId: string,
    shipped: boolean,
    updatedAt: string,
  } | null,
};

export type OnUpdateScriptureSubscriptionVariables = {
  filter?: ModelSubscriptionScriptureFilterInput | null,
};

export type OnUpdateScriptureSubscription = {
  onUpdateScripture?:  {
    __typename: "Scripture",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      text: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    postcards?:  {
      __typename: "ModelPostcardConnection",
      nextToken?: string | null,
    } | null,
    reference: string,
    text: string,
    updatedAt: string,
  } | null,
};
