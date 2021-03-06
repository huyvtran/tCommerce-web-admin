import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeRoutingModule } from './attribute-routing.module';
import { AttributeComponent } from './attribute.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PreloaderModule } from '../../preloader/preloader.module';


@NgModule({
  declarations: [AttributeComponent],
  imports: [
    CommonModule,
    AttributeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PreloaderModule
  ]
})
export class AttributeModule { }
