import { SuaSanPhamComponent } from './../sua-san-pham/sua-san-pham.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ThemSanPhamComponent } from '../them-san-pham/them-san-pham.component';

const routes:Routes =[
  {path:'admin',component:AdminComponent},
  {path:'sua/:id',component:SuaSanPhamComponent},
  {path:'themsp',component:ThemSanPhamComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
