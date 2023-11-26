import {NgModule} from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {SharedModule} from '../../shared/shared.module';
import {NgForOf} from '@angular/common';


@NgModule({
  imports: [WelcomeRoutingModule, SharedModule, NgForOf],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
