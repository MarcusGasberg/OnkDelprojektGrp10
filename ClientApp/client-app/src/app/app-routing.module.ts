import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolboxListComponent } from './toolbox/toolbox-list/toolbox-list.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "toolbox", component: ToolboxListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
