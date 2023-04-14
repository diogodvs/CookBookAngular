import { Component, Input } from '@angular/core';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {

  @Input() category!: Category;


}
