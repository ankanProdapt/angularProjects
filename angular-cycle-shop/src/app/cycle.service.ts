import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Brand } from './brand';
import { Observable, of } from 'rxjs';
import { Cycle } from './cycle';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor(private _http:HttpClient) { }

  getAllBrand() : Observable<Brand[]> {
    return this._http.get<Brand[]>("http://localhost:8080/api/brand/list");
  }

  addNewBrand(name: string, qty: number) : Observable<Brand[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this._http.post<Brand[]>("http://localhost:8080/api/brand/add", {name: name, qty: qty}, {
      responseType: 'json'
    });
  }

  restockCycle(id : number, count : number) : Observable<Brand[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this._http.post<Brand[]>(`http://localhost:8080/api/brand/restock/${id}`, {qty : count}, {
      responseType: 'json'
    });
  }

  borrowBrandCycle(id : number, count: number) : Observable<Brand[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this._http.post<Brand[]>(`http://localhost:8080/api/brand/borrow/${id}`, {qty : count}, {
      responseType: 'json'
    });
  }

  countAllAvailableCycleByBrandId(id : number) : Observable<number> {
    return this._http.get<number>(`http://localhost:8080/api/cycle/countAvailableByBrand/${id}`);
  }

  getAllBorrowedCycle() : Observable<Cycle[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this._http.get<Cycle[]>("http://localhost:8080/api/cycle/borrowedList");
  }

  getAllAvailableCycle() : Observable<Cycle[]> {
    return this._http.get<Cycle[]>("http://localhost:8080/api/cycle/availableList");
  }

  returnCycle(id : number) : Observable<Cycle[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this._http.post<Cycle[]>(`http://localhost:8080/api/cycle/return/${id}`, null, {headers: headers});
  }

  borrowCycle(id : number) : Observable<Cycle[]> {
    return this._http.post<Cycle[]>(`http://localhost:8080/api/cycle/borrow/${id}`, null);
  }
  
}
