import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TestQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TestQuery = { something: { aField: MyScalar | null } };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"something"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aField"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;