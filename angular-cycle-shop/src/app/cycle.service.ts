import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from './brand';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor(private _http:HttpClient) { }

  getAllCycle() : Observable<Brand[]> {
    return this._http.get<Brand[]>("http://localhost:8080/api/cycle/list");
  }

  borrowCycle(id : number) : Observable<Brand[]> {
    return this._http.post<Brand[]>(`http://localhost:8080/api/borrow/${id}`, null);
  }

  restockCycle(id : number, count : number) : Observable<Brand[]> {
    console.log(count);
    return this._http.post<Brand[]>(`http://localhost:8080/api/restock/${id}`, {qty : count}, {
      responseType: 'json'
    });
  }
  
}
