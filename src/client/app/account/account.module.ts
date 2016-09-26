import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SignInComponent} from './signin.component';

@NgModule({
  imports: [CommonModule, Ng2BootstrapModule],
  declarations: [SignInComponent],
  exports: [SignInComponent],
  providers: []
})

export class AccountModule { }
