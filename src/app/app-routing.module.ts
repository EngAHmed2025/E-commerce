import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { PayComponent } from './pay/pay.component';


const routes: Routes = [
{ path: '', redirectTo: 'register', pathMatch: 'full' },
{path:"register",component:RegisterComponent},
{path:"login",component:LoginComponent},
{path:"home",canActivate :[authGuard], component:HomeComponent}, 
{path:"brands",canActivate :[authGuard],component:BrandsComponent},
{path:"products",canActivate :[authGuard],component:ProductsComponent},
{path:"categories",canActivate :[authGuard],component:CategoriesComponent},
{path:"wishlist",canActivate :[authGuard],component:WishlistComponent},
{path:"cart",canActivate :[authGuard],component:CartComponent},
{path:"pay/:id",canActivate :[authGuard],component:PayComponent},
{path:"DetailsProduct/:id",canActivate :[authGuard],component:DetailsProductComponent},
{path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
