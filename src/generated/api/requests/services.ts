import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { ApiResponse_Project_, ApiResponseList_Project_, ProjectCreateParams } from './models';

export type DefaultData = {
        CreateProject: {
                    requestBody: ProjectCreateParams
                    
                };
GetProject: {
                    id: string
                    
                };
    }

export class DefaultService {

	/**
	 * @returns ApiResponseList_Project_ Ok
	 * @throws ApiError
	 */
	public static getProjects(): CancelablePromise<ApiResponseList_Project_> {
		
		return __request(OpenAPI, {
			method: 'GET',
			url: '/v1/projects',
		});
	}

	/**
	 * @returns any Created
	 * @throws ApiError
	 */
	public static createProject(data: DefaultData['CreateProject']): CancelablePromise<any> {
		const {
                        
                        requestBody
                    } = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/v1/projects',
			body: requestBody,
			mediaType: 'application/json',
		});
	}

	/**
	 * @returns ApiResponse_Project_ Ok
	 * @throws ApiError
	 */
	public static getProject(data: DefaultData['GetProject']): CancelablePromise<ApiResponse_Project_> {
		const {
                        
                        id
                    } = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/v1/projects/{id}',
			path: {
				id
			},
		});
	}

}