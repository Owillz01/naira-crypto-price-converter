import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms' ;
import {Observable, Subscription} from 'rxjs'

import {PriceModel} from './model/crypto.model'
import { CryptoNews } from './model/news.model'
import * as _datas from '../../response2.json';

import {CoinmarketService} from './service/coinmarket.service'
import {CryptoNewsComponent} from './crypto-news/crypto-news.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'crypto-tracker';
datas : PriceModel;
_datas: Observable<CryptoNews[]>
constructor(private service : CoinmarketService, private cryptoNewsComponent :CryptoNewsComponent){
  
}
isLoading=true;
subscriber : Subscription;
baseCoinSys;
reqCoinSys ;
news;
// private url : string = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
url = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
baseUrl = 'https://www.cryptocompare.com'
  currency_data = new FormGroup({
    fsyms : new FormControl(),
    // tsyms : new FormControl()
  })

  getCoinPrice( data ){
    console.log(data)
    this.baseCoinSys = data.fsyms;
    this.reqCoinSys = 'ngn';
    this.subscriber = this.service.getCoinDetails(this.baseCoinSys, this.reqCoinSys)
    .subscribe( data => {
      this.isLoading = true;
      console.log('this.isLoading ', this.isLoading )
      this.datas = data;
      this.isLoading = false;
      console.log('this.isLoading ', this.isLoading )

     // let  thi = [data.DISPLAY]
     // let thi = Object.keys(data)
     // console.log(thi)
    // thi.map(items =>{
    //   [items].map(item => console.log(item))
    // })
    })
  }


ngOnInit(){
// this.service.getCoinDetails().unsubscribe()
}
ngOnDestroy(){
  this.subscriber.unsubscribe()
}
}
