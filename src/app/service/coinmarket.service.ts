import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoinmarketService{

// url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=NGN,USD';

// url = " https://min-api.cryptocompare.com/data/pricemultifull"
// url="https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms="
  constructor( private apiCaller: HttpClient) { }


  getCoinDetails(fsyms, tsyms) : Observable<any>{
    let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=${tsyms}`;
    return this.apiCaller.get(url)
  }



getLatestNews(url):Observable<any>{
  return this.apiCaller.get(url)
}

}
