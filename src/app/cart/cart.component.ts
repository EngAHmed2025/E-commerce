
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
CartItems:any= [];
totalPrice :string =""
cartId:any =""
constructor(private _CartService:CartService,private toastEvokeService: ToastEvokeService){}
ngOnInit(): void {
  localStorage.setItem("currentPage","/cart")
  this._CartService.GetAllCartItemsAPI().subscribe({

  next:(res)=>{this.CartItems = res.data.products
  this.totalPrice =  res.data.totalCartPrice
  this.cartId = res.data._id;
   },
  error:(err)=>{console.log(err)}
  
  
  })

}

RemoveItem(PId:string){
this._CartService.RemoveItemsApI(PId).subscribe({
next:(res)=>{
  this.toastEvokeService.success('Success', "Item Deleted Successfully").subscribe
  this._CartService.cartItemsNum.next(res.numOfCartItems)
  
  this.CartItems = res.data.products;
},
error:(err)=>{console.log(err);
}
})
}




UpdateItemsQunBtn(whichBtn:any , Pcount:any|number , pId:string){
if (whichBtn == "plus") {
Pcount = (Number(Pcount) +1).toString();
}else{
  Pcount = (Number(Pcount) -1).toString();
  if (Number(Pcount) == 0 ) {
    this.RemoveItem(pId)
  }
}

this._CartService.UpdateCartItemQunAPI(pId ,Pcount).subscribe({


next:(res)=>{
  this.CartItems =  res.data.products
  


},
error:(err)=>{console.log(err);
}
})
}



clear(){
this._CartService.ClearCartAPI().subscribe({
next:(res)=>{if(res.message == 'success'){
this.CartItems = null
}
},
error:(err)=>{console.log(err);
}
})
}
}