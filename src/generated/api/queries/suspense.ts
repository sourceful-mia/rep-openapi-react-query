// generated with @7nohe/openapi-react-query-codegen@1.0.6 
import * as Common from "./common";
import { useQuery, useSuspenseQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { DefaultService, DefaultData } from "../requests";
import { Project, ApiInternalError, ApiResponseListMeta, ApiResponseList_Project_, ApiResponse_Project_, ProjectCreateParams } from "../requests/models";
export const useDefaultServiceGetProjectsSuspense = <TData = Common.DefaultServiceGetProjectsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useSuspenseQuery<TData, TError>({ queryKey: [Common.useDefaultServiceGetProjectsKey, ...(queryKey ?? [])], queryFn: () => DefaultService.getProjects() as TData, ...options });
export const useDefaultServiceGetProjectSuspense = <TData = Common.DefaultServiceGetProjectDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useSuspenseQuery<TData, TError>({ queryKey: [Common.useDefaultServiceGetProjectKey, ...(queryKey ?? [{ id }])], queryFn: () => DefaultService.getProject({ id }) as TData, ...options });
