import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatTabsModule, MatDialogModule,],
  exports: [MatButtonModule,
            MatTabsModule,MatDialogModule]
})

export class MaterialModule { }
