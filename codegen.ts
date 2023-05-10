import { CodegenConfig } from '@graphql-codegen/cli';

const scalars = {
    MyScalar: './ExternalType#MyScalar',
};

const config: CodegenConfig = {
    schema: [
        'src/GqlTypedef.ts',
    ],
    documents: ['src/Query.gql'],
    generates: {
        './src/types.generated.ts': {
            config: {
                skipTypename: true,
                avoidOptionals: true,
                strictScalars: true,
                scalars,
            },
            plugins: ['typescript'],
        },
        './': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.gql.generated.ts',
                baseTypesPath: './src/types.generated.ts',
            },
            config: {
                skipTypename: true,
                avoidOptionals: true,
                strictScalars: true,
                scalars,
            },
            plugins: ['typescript-operations', 'typed-document-node'],
        },
    },
};

export default config;
