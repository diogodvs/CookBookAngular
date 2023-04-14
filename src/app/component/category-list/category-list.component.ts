import { Component, Input } from '@angular/core';
import { Category } from './model/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input() category!: Category;
  
  listCategory = [
    {id: 1 , name: 'massas'},
    {id: 2 , name: 'bolos'},
    {id: 3 , name: 'bebidas'},
    {id: 4 , name: 'carnes'},
    {id: 5 , name: 'frangos'},
    {id: 6 , name: 'peixes'},
    {id: 7 , name: 'lanches'},
    {id: 8 , name: 'saladas'},
    {id: 9 , name: 'sopas'},
    {id: 10 , name: 'sobremesas'}
  ];

}
