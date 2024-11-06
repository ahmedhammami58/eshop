import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products-category-component',
  templateUrl: './products-category-component.component.html',
  styleUrl: './products-category-component.component.css'
})
export class ProductsCategoryComponentComponent {
  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LG Inox","image":"images/grand_electromenagers/refrigerateur.jpg","categoryId":1,
    "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"images/grand_electromenagers/refrigerateur.jpg","categoryId":1,
    "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Cuisiniere Beko",
    "image":"images/grand_electromenagers/cuisiniere.png", "categoryId":1,
    "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"images/smart_phones/Oppo.jpg","categoryId":4,
    "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"robot_petrin",
    "image":"images/petit_electromenager/robot_petrin.jpg","categoryId":2,
    "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50''LG","image":"images/tv_images_son/tv1.jpg", "categoryId":5, "description":"",
    "price":1800,"brand":"LG","promotion":0}]

  
  id = 0;
 constructor(private ac:ActivatedRoute){}
 ngOnInit(){
  this.ac.paramMap.subscribe(param=>{
    this.id = parseInt(param.get('id')+"");
  })
 };
}
