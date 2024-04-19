

export type Project = {
        description: string
name: string
id: string
    };

export type ApiInternalError = string;

export type ApiResponseListMeta = {
        total: number
    };

export type ApiResponseList_Project_ = {
        data: Array<Project>
errors: Array<ApiInternalError>
meta?: ApiResponseListMeta
    };

export type ApiResponse_Project_ = {
        data: Project
errors: Array<ApiInternalError>
meta?: number | null
    };

export type ProjectCreateParams = {
        name: string
    };