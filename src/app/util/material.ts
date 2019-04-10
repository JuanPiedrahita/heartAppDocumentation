import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatSortModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table'; 
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSelectModule} from '@angular/material/select'; 


const modules = [
  MatButtonModule, 
  MatCheckboxModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatSelectModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }