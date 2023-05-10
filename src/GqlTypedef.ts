import gql from "graphql-tag";

export default gql`
    scalar MyScalar

    type MyType {
        aField: MyScalar
    }

    extend type Query {
        something: MyType!
    }
`;