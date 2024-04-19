// generated with @7nohe/openapi-react-query-codegen@1.0.6 
import { useQuery, useSuspenseQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { DefaultService, DefaultData } from "../requests";
import { Project, ApiInternalError, ApiResponseListMeta, ApiResponseList_Project_, ApiResponse_Project_, ProjectCreateParams } from "../requests/models";
export type DefaultServiceGetProjectsDefaultResponse = Awaited<ReturnType<typeof DefaultService.getProjects>>;
export type DefaultServiceGetProjectsQueryResult<TData = DefaultServiceGetProjectsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetProjectsKey = "DefaultServiceGetProjects";
export type DefaultServiceGetProjectDefaultResponse = Awaited<ReturnType<typeof DefaultService.getProject>>;
export type DefaultServiceGetProjectQueryResult<TData = DefaultServiceGetProjectDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceGetProjectKey = "DefaultServiceGetProject";
export type DefaultServiceCreateProjectMutationResult = Awaited<ReturnType<typeof DefaultService.createProject>>;
