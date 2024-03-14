import { Component, OnInit } from '@angular/core';
import { CategorysService } from '../categorys.service';
import { Category } from '../category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
getAll:Category[] = []
  constructor(private _CategorysService:CategorysService){}

  ngOnInit():void {
    localStorage.setItem("currentPage","/categories")

    this._CategorysService.categApi().subscribe({
      next:(res)=>{this.getAll= res.data;
      },
      error:(err)=>{console.log(err);
      }
    })
    }
}
