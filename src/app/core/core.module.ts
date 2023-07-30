import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent, FooterComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatToolbarModule, MatButtonModule, MatIconModule
  ]
})
export class CoreModule { }
