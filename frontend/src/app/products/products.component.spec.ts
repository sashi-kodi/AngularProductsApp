import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {ProductsService} from '../products.service';

import { ProductsComponent } from './products.component';

class MockedProductService {
  public getProductsData =()=>{
     return of({groups: 
     [{name:'TV', priceRange:{selling:{high:700}}}, {name:'Iphone', priceRange:{selling:{high:1500}}}]
     })
  }
}
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productsService: ProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],  
       providers: [ {provide: ProductsService, useClass: MockedProductService }] ,
       schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsComponent);
    productsService = TestBed.get(ProductsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
