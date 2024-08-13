import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryParam, TinyRequest } from '../types/global.types';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  buildUrlWithParams(url : string, params: QueryParam[]) {

    const checkedParams = params.filter(param => param.isChecked);

    const queryString = checkedParams
        .map(param => `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`)
        .join('&');

    // Append the query string to the URL
    const urlWithParams = `${url}${queryString ? '?' + queryString : ''}`;

    return urlWithParams;
}

  makeRequest(options: TinyRequest): Observable<any> {

    let url = options.url;
    let queryParams = options.queryParams
    
    let headers:any = {};

    if(options.authorization && options.authorization.authType!==null){
      if(options.authorization.authType==='basic'){
        const basicAuthBase64 = btoa(`${options.authorization.basicAuth.username}:${options.authorization.basicAuth.password}`);
        headers['Authorization'] = `Basic ${basicAuthBase64}`;
      } else if(options.authorization.authType==='bearer'){
        headers['Authorization'] = `Bearer ${options.authorization.token}`;
      } else if(options.authorization.authType==='api-key'){
        if(options.authorization.apiAuth.passBy==='header'){
          headers[options.authorization.apiAuth.key] = options.authorization.apiAuth.value;
        } else {
          queryParams.push({key: options.authorization.apiAuth.key, value: options.authorization.apiAuth.value, isChecked: true})
        }
      }
    }

    if(queryParams && queryParams.length>0){
      url = this.buildUrlWithParams(url, options.queryParams);
    }
    
    if(options.method==='GET'){
      return this.http.get(url,{headers});
    } else if(options.method==='POST'){
      return this.http.post(url,null, {headers});
    } else if(options.method==='PUT'){
      return this.http.put(url, null, {headers});
    } else if(options.method==='DELETE'){
      return this.http.delete(url, {headers});
    } else{
      return this.http.delete(url);
    }

  }
}
