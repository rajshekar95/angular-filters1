import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LauncherComponent } from './launcher/launcher.component';

import { FormsModule } from '@angular/forms';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LauncherComponent,
    
    SnackbarComponent
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent]
})
export class AppModule { }
