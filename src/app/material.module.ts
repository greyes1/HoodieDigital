import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [MatButtonModule,
            MatTabsModule],
  exports: [MatButtonModule,
            MatTabsModule]
})

export class MaterialModule { }
