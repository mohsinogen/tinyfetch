export interface QueryParam {
  key: string;
  value: string;
  isChecked: boolean;  // Optional property
}

export interface Authorization {
  authType: 'basic' | 'bearer' | 'api-key' | null;
  basicAuth: {
    username: string;
    password: string;
  };
  token: string;
  apiAuth: {
    key: string;
    value: string;
    passBy: 'header' | 'query';
  };

}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export interface TinyRequest {
  url: string;
  method: HttpMethod;
  queryParams: QueryParam[];
  authorization: Authorization;
}