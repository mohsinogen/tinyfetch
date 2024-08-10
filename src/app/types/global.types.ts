export interface QueryParam {
    key: string;
    value: string;
    isChecked: boolean;  // Optional property
  }

  export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';


export interface TinyRequest {
    url: string;
    method: HttpMethod;
    queryParams?: QueryParam[];
}