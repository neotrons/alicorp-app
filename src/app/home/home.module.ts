import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { TableContainerComponent } from './table-container/table-container.component';
import { PresentationComponent } from './presentation/presentation.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    PageComponent,
    TableContainerComponent,
    PresentationComponent,
    ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    PageComponent,
    TableContainerComponent,
    PresentationComponent,
    ConfirmDialogComponent
  ]
})
export class HomeModule { }
