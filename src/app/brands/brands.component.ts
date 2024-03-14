import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { brand } from '../brand';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
allBrand:brand[] = [];
constructor(private _BrandsService:BrandsService){}


ngOnInit(): void {
  localStorage.setItem("currentPage","/brands")
  this._BrandsService.GetAllbrandsAPI().subscribe({
    next:(res)=>{this.allBrand = res.data
    },
    error:(err)=>{console.log(err);
    }
  })
  
}
}