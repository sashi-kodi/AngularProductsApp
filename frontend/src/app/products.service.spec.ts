import { TestBed } from '@angular/core/testing';
import {of} from 'rxjs';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
let httpClientSpy: { get: jasmine.Spy };
let productsService;

  beforeEach(() =>{
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    productsService = new ProductsService(<any> httpClientSpy);
  });

  
  it('should return Products when called', ()=>{
    
    const products =[{id:1, name:'TV', price:500}];
    
    httpClientSpy.get.and.returnValue(of(products));
    
    productsService.getProductsData()
    .subscribe(data=>{
      expect(data).toEqual(products);
    })
    
    
    
  })
});
