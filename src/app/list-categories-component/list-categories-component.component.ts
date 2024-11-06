import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrl: './list-categories-component.component.css'
})
export class ListCategoriesComponentComponent {
  categories : Categorie[]=[ 
    {"id":1,"title":"Grand électroménager", 
      "image":"images/categorie_electromenager.jpg", "description":"description categorie_electromenager", 
      "available":true}, 
      {"id":2,"title":"Petit électroménager", 
      "image":"images/categorie_petit_electromenager.jpg", "description":"description categorie_petit_electromenager", 
      "available":true}, 
      {"id":3,"title":"Produits informatiques", 
      "image":"images/categorie_produits_informatiques.jpg", "description":"description categorie_produits_informatiques", 
      "available":true}, 
      {"id":4,"title":"Smart Phones", "image":"images/categorie_smartPhone.jpg", 
      "description":"description categorie_smartPhone", "available":true}, 
      {"id":5,"title":"TV, images et son", 
      "image":"images/categorie_tv_image_son.jpg", "description":"description categorie_tv_image_son", 
      "available":true}, 
      {"id":6,"title":"Produits nettoyages", "image":"images/produits_nettoyages.jpg", 
      "description":"description produits_nettoyages","available":false}, 
      ]
      
      alertDescription(description : string): void {
      alert(description);

    }
    
    
      

    
}
