import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { Category } from '../category';
import { WishListService } from '../wish-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {

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
  CategoryOptions: OwlOptions = {
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
HomeData:any;
categories:Category[] = [];
wishListData:string[] = []
constructor(private _productservice:ProductsService 
  , private _CartService:CartService,
  private toastEvokeService: ToastEvokeService,
  private _WishListService:WishListService
  ){}




ngOnInit(): void {
localStorage.setItem("currentPage","/home")
this._productservice.getProductApi().subscribe(data =>{
 this.HomeData = data

})

this._productservice.getCategoryApi().subscribe({
  next:(res)=>{this.categories =  res.data;
  },
  error:(err)=>{console.log(err);
  }
})

this._WishListService.getWishList().subscribe({

  next:(res)=>{console.log(res.data);

    const newData = res.data.map((item:any)=> item._id)

    this.wishListData = newData
  }
})
}


btnAdd(PId:string){

  this._CartService.addTocartApI(PId).subscribe({

    next:(res)=>{this.toastEvokeService.success('Success', res.message).subscribe(),
  this._CartService.cartItemsNum.next(res.numOfCartItems)
  
  },
    error:(err)=>{this.toastEvokeService.danger('faild', err.message).subscribe();}
    
  })
}



addWish(PId:string){
this._WishListService.addTowISHApI(PId).subscribe({

next: (res)=> {console.log(res);
this.toastEvokeService.success('Added to wishlist', res.message).subscribe(),
  this.wishListData = res.data},

error: (err)=>{console.log(err.message)}


})

   
}

removewisList(ProdID:string){
this._WishListService.RemoveItems(ProdID).subscribe({

next:(res)=>{console.log(res);
this.toastEvokeService.success('Success', res.message)
this.wishListData = res.data
},
error:(err)=>{console.log(err);
}
})
}
}
