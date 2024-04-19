

export const $Project = {
    properties: {
        description: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        id: {
            type: 'string'
        }
    },
    required: ['description', 'name', 'id'],
    type: 'object'
} as const;

export const $ApiInternalError = {
    type: 'string'
} as const;

export const $ApiResponseListMeta = {
    properties: {
        total: {
            type: 'number',
            format: 'double'
        }
    },
    required: ['total'],
    type: 'object',
    additionalProperties: false
} as const;

export const $ApiResponseList_Project_ = {
    properties: {
        data: {
            items: {
                '$ref': '#/components/schemas/Project'
            },
            type: 'array'
        },
        errors: {
            items: {
                '$ref': '#/components/schemas/ApiInternalError'
            },
            type: 'array'
        },
        meta: {
            '$ref': '#/components/schemas/ApiResponseListMeta'
        }
    },
    required: ['data', 'errors'],
    type: 'object',
    additionalProperties: false
} as const;

export const $ApiResponse_Project_ = {
    properties: {
        data: {
            '$ref': '#/components/schemas/Project'
        },
        errors: {
            items: {
                '$ref': '#/components/schemas/ApiInternalError'
            },
            type: 'array'
        },
        meta: {
            type: 'number',
            enum: [
                null
            ],
            nullable: true
        }
    },
    required: ['data', 'errors'],
    type: 'object',
    additionalProperties: false
} as const;

export const $ProjectCreateParams = {
    properties: {
        name: {
            type: 'string'
        }
    },
    required: ['name'],
    type: 'object',
    additionalProperties: false
} as const;