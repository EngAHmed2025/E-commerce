import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  pId:string =""
  products:any
constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductsService:ProductsService ){}


ngOnInit(): void {

  this._ActivatedRoute.params.subscribe((p)=>{
   this.pId = p["id"];

   
   this._ProductsService.getSpecProductApi(this.pId).subscribe({

  next:(res)=>{this.products = res.data
  }
   })
    
  })
  
}
}
