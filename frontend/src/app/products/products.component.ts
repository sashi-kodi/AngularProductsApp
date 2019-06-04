import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  //Fetch the product details using the Service
      this.productsService.getProductsData()
      .subscribe(data=>{
        this.products = data.groups;
        this.products.forEach(p=>{
          p.carousel= false;
        })

      }, (error)=>{
         console.log(error);
      });
      
     }
     
     clickOutside = (product:any)=>{
         if (product.carousel) {
           product.carousel=false;
         }
     }

  }
  



