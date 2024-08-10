import { Injectable } from '@angular/core';
import { QueryParam } from '../types/global.types';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  urlRegex = /^(https?:\/\/)[\w\-\.]+(\:[0-9]+)?(\/[\w\-\.\/\?\&\=\#]*)?$/i;

  // Example usage:
  isHttpLink(str: string): boolean {
    return this.urlRegex.test(str);
  }

  getQueryParams(url: string): QueryParam[] {
    try {
      // Create a URL object from the input string
      const parsedUrl = new URL(url);
      // Extract the query parameters
      const searchParams = new URLSearchParams(parsedUrl.search);
      
      // Map the query parameters to the desired format
      const queryParams: QueryParam[] = [];
      searchParams.forEach((value, key) => {
        queryParams.push({ key, value, isChecked: true });
      });
      
      return queryParams;
    } catch (error) {
      // Handle invalid URLs or other errors
      console.error("Invalid URL provided", error);
      return [];
    }
  }
}
