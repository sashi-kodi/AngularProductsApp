import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(private httpClient: HttpClient) {
  }
  //this function will make a http get request and get the products data and return an Observable
  getProductsData = ()=>{
    return this.httpClient.get<any>("http://localhost:3000/products");
  }
}
