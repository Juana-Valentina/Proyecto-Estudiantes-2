import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, untracked } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public urlBase = '';

  constructor(public http: HttpClient

  ) { 
    this.urlBase = environment.DOMINE;
  }

  getPromise(rute: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        authorization: '',
        'Content-Type': 'aplication/json',
      });
      this.http.get(this.urlBase + rute, {headers}).subscribe({
        next: (resp) => {
          resolve(resp);
        }, 
        error: (err) => {
          reject(err);
        }
      });
    });
  }
  
  getObservable(rute: string): Observable <any> {
    return this.http.get(this.urlBase + rute);
  } 
  
  postPromise(rute: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.urlBase + rute, data).subscribe({
        next: (resp) => { resolve(resp);
        }, error: (err) => { reject(err);
        }
      });
    });
  }
  
  postObservable(rute: string, data: any): Observable <any> {
    return this.http.post(this.urlBase + rute, data);
  }

  putPromise(rute: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.urlBase + rute, data).subscribe({
        next: (resp) => {
          resolve(resp);
        }, 
        error: (err) => {
          reject(err);
        }
      });
    });
  }
  
//proyecto estudiantes

  putObservable(rute: string, data: any): Observable <any> {
    return this.http.put(this.urlBase + rute, data);
  } 

  deletePromise(rute: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.urlBase + rute).subscribe({
        next: (resp) => {
          resolve(resp);
        }, 
        error: (err) => {
          reject(err);
        }
      });
    });
  }
  
  deleteObservable(rute: string): Observable <any> {
    return this.http.delete(this.urlBase + rute);
  }
} 
  

  // patchPromise(rute: string, data: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http.patch(this.urlBase + rute, data).subscribe({
  //       next: (resp) => {
  //         resolve(resp);
  //       }, 
  //       error: (err) => {
  //         reject(err);
  //       }
  //     });
  //   });
  // }

  // patchObservable(rute: string, data: any): Observable<any> {
  //   return this.http.patch(this.urlBase + rute, data);
  