import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs'
import { NgxSpinnerService } from "ngx-spinner";
import { CoinmarketService} from '../service/coinmarket.service'
import { CryptoNews } from '../model/news.model'

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-crypto-news',
  templateUrl: './crypto-news.component.html',
  styleUrls: ['./crypto-news.component.css']
})
export class CryptoNewsComponent implements OnInit, OnDestroy {
private url : string = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
datas: Observable<CryptoNews[]>;
contents;
_contents;
subscriber: Subscription;
p: number = 1;
  constructor( private service: CoinmarketService, private spinner : NgxSpinnerService) {
   }

getNews(){
   this.spinner.show()
  this.subscriber = this.service.getLatestNews(this.url)
    .subscribe(_datas =>{
      // this._zone.run(()=> {
        this.datas = _datas.Data
        console.log("api call made", this.datas)

      // })
      this.spinner.hide()
    })
 
    
  }


  ngOnInit() {
    
    this.getNews()
    
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

}
