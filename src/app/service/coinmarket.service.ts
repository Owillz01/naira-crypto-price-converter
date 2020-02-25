import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoinmarketService{

  constructor( private apiCaller: HttpClient) { }


  getCoinDetails(url, options?) : Observable<any>{
    return this.apiCaller.get(url, options)
  }

}
