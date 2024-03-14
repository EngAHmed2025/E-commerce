import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { CartService } from '../cart.service';
CartService
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
 wishListData:string[] = []
  HomeData:any;
  constructor(private _wishListService :WishListService ,private _ToastEvokeService:ToastEvokeService , private _CartService:CartService) { }
  ngOnInit(): void {
    localStorage.setItem("currentPage","/wishlist")
  this._wishListService.getWishList().subscribe({
    next:(res)=>{this.HomeData=res.data;
      const newData = res.data.map((item:any)=> item._id)

      this.wishListData = newData
    },
    error:(err)=>{console.log(err);
    }
  })
    }

  
addWish(PId:string){
  this._wishListService.addTowISHApI(PId).subscribe({
  
  next: (res)=> {console.log(res);
  this._ToastEvokeService.success('Added to wishlist', res.message).subscribe(),
    this.wishListData = res.data},
  
  error: (err)=>{console.log(err.message)}
  
  
  })
  
     
  }
  



  removewisList(ProdID:string){
  this._wishListService.RemoveItems(ProdID).subscribe({
  
  next:(res)=>{console.log(res);
  this._ToastEvokeService.success('Success', res.message)
  this.wishListData = res.data
  this._wishListService.getWishList().subscribe({
    next:(res)=>{this.HomeData =res.data}

  })
  },
  error:(err)=>{console.log(err);
  }
  })
  }





  
btnAdd(PId:string){

this._CartService.addTocartApI(PId).subscribe({

next:(res)=>{this._ToastEvokeService.success('Success', res.message).subscribe(),
this._CartService.cartItemsNum.next(res.numOfCartItems)
},
error:(err)=>{this._ToastEvokeService.danger('faild', err.message).subscribe();}

})
}
  }
  

      









