import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'https://jsonplaceholder.typicode.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll() : Observable<any>{
    return this.http.get(this.baseUrl + '/posts/');
  }

  getAllbyid(id : number) : Observable<any>{
    return this.http.get(this.baseUrl + '/posts/' + id);
  }

  createpost(post : Post) : Observable<any> {
    return this.http.post(this.baseUrl + '/posts/', post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updatepost(id:number,post : Post) : Observable<any> {
    return this.http.put(this.baseUrl + '/posts/' + id, post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
      }),
    });
  }

  deletepost(id:Number) : Observable<any> {
    return this.http.delete(this.baseUrl + '/posts/' + id , this.httpOptions);
  }
}