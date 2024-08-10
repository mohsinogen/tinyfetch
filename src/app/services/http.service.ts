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
    
    if(options.queryParams?.length && options.queryParams.length>0){
      url = this.buildUrlWithParams(url, options.queryParams);
    }
    
    
    if(options.method==='GET'){
      return this.http.get(url,{headers:{}});
    } else if(options.method==='POST'){
      return this.http.post(url, null);
    } else if(options.method==='PUT'){
      return this.http.put(url, null);
    } else if(options.method==='DELETE'){
      return this.http.delete(url);
    } else{
      return this.http.delete(url);
    }

  }
}
