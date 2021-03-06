import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolboxListComponent } from './toolbox/toolbox-list/toolbox-list.component';
import { ToolListComponent } from './tool/tool-list/tool-list.component';
import { CraftsmanListComponent } from './craftsman/craftsman-list/craftsman-list.component';
import { NewCraftsmanComponent } from './craftsman/new-craftsman/new-craftsman.component';
import { NewtoolComponent } from './tool/newtool/newtool.component';
import { NewToolboxComponent } from './toolbox/new-toolbox/new-toolbox.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'toolboxes', component: ToolboxListComponent },
  { path: 'tools', component: ToolListComponent },
  { path: 'craftsmen', component: CraftsmanListComponent },
  { path: 'craftsmen/new', component: NewCraftsmanComponent },
  { path: 'tools/new', component: NewtoolComponent },
  { path: 'toolboxes/new', component: NewToolboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
