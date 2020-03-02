import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolboxListComponent } from './toolbox/toolbox-list/toolbox-list.component';
import { ToolListComponent } from './tool/tool-list/tool-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'toolbox', component: ToolboxListComponent },
  { path: 'tools', component: ToolListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
