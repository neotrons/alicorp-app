import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContainerComponent } from './table-container.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';

import { ProductsService } from '../services/products.service';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableContainerComponent', () => {
  let component: TableContainerComponent;
  let fixture: ComponentFixture<TableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableContainerComponent ],
      providers: [ProductsService, MatDialog, HttpClient],
      imports: [HttpClientModule, MatTableModule, MatButtonModule, MatPaginatorModule, MatFormFieldModule, MatDialogModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
