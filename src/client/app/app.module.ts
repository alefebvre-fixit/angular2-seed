import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { routes } from './app.routes';


import { SharedModule } from './shared/shared.module';
import { CollateralModule } from './collateral/collateral.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpModule, Ng2BootstrapModule, RouterModule.forRoot(routes), FormsModule, ChartsModule, CollateralModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
