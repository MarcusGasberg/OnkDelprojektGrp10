import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolboxComponent } from './toolbox/toolbox/toolbox.component';
import { ToolboxListComponent } from './toolbox/toolbox-list/toolbox-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolComponent } from './tool/tool/tool.component';
import { ToolListComponent } from './tool/tool-list/tool-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ToolboxComponent,
    ToolboxListComponent,
    ToolComponent,
    ToolListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
