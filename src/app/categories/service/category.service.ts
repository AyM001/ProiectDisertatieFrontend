import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Participant} from '../model/participant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Participant[]> {
    return this.http.get<Participant[]>('http://localhost:8080/getCategories');
  }

  // tslint:disable-next-line:typedef
  public save(category: Participant) {
    return this.http.post<Participant>('http://localhost:8080/addCategory', category);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${'http://localhost:8080/deleteCategory'}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public update(category: Participant) {
    return this.http.put<Participant>('http://localhost:8080/updateCategory', category);
  }

  // tslint:disable-next-line:typedef
  public getById(id: number): Observable<any> {
    return this.http.get(`${'http://localhost:8080/getCategoryById'}/${id}`);
  }
}
