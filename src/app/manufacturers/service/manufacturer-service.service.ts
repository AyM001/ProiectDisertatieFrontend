import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../products/model/product';
import {Target} from '../model/target';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerServiceService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Target[]> {
    return this.http.get<Target[]>('http://localhost:8080/getManufacturers');
  }
  // tslint:disable-next-line:typedef
  public findById(id: number): Observable<any>{
    return this.http.get(`${'http://localhost:8080//getManufacturerById'}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public save(manufacturer: Target){
    return this.http.post<Target>('http://localhost:8080/addManufacturer' , manufacturer);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number){
    return this.http.delete(`${'http://localhost:8080/deleteManufacturer'}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public update(manufacturer: Target){
    return this.http.put<Target>('http://localhost:8080/updateManufacturer' , manufacturer);
  }
}
