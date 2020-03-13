import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms' ;
import {PriceModel} from './model/crypto.model'
import * as _datas from '../../response2.json';
import {CoinmarketService} from './service/coinmarket.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crypto-tracker';
datas : PriceModel;

constructor(private service : CoinmarketService){}
baseCoinSys;
reqCoinSys ;
baseUrl = 'https://www.cryptocompare.com'
  currency_data = new FormGroup({
    fsyms : new FormControl(),
    tsyms : new FormControl()
  })

  getCoinPrice( data ){
    console.log(data)
    this.baseCoinSys = data.fsyms;
    this.reqCoinSys = data.tsyms
    this.service.getCoinDetails(this.baseCoinSys, this.reqCoinSys)
    .subscribe( data => {
      console.log(data)
      this.datas = data;
     // let  thi = [data.DISPLAY]
     // let thi = Object.keys(data)
     // console.log(thi)
    // thi.map(items =>{
    //   [items].map(item => console.log(item))
    // })
    })
  }

ngOnInit(){
  console.log("this is the data", _datas.DISPLAY.BTC.NGN.PRICE)
}
}
