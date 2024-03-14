import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
CurrentCartId:any =""
  constructor(private _OrdersService:OrdersService,private _ActivatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    localStorage.setItem("currentPage","/pay")
    this._ActivatedRoute.params.subscribe((p)=>{
      this.CurrentCartId = p["id"]
    })
  }
addressForm:FormGroup = new FormGroup({
  details : new FormControl(null),
  phone : new FormControl(null),
  city: new FormControl(null)
})


addressFormSubmit(){

this._OrdersService.Outcheck(this.CurrentCartId,this.addressForm.value).subscribe({
  next: (res)=>{if(res.status == "success"){
window.open(res.session.url ,'_blank')

  }
  },
  error:(err)=>{console.log(err)
  }
})
}
}
