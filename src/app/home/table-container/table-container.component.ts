import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductsService } from '../services/products.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';



export interface Product {
  id: number;
  code: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {

  products: Product[] = [];
  dataSource = null;

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public productService: ProductsService, public dialog: MatDialog) {

    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];

  }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(products => {
      console.log('topTracks: ', products);
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
      console.log('DATA', this.dataSource);
      this.dataSource.paginator = this.paginator;
    });
  }

/*   getProducts(){
    this.productService.getProducts()
    .subscribe(products => {
      console.log("topTracks: ", products);
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
      console.log('DATA', this.dataSource);
      this.dataSource.paginator = this.paginator;
    });
  } */

  deleteProduct( product: Product, i: number ) {

    this.products.splice(i, 1);
    this.productService.deleteProduct(product.id).subscribe();

    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(product: Product, i: number ): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: 'Estas seguro de eliminar este registro?'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        console.log('Se booro');
        this.deleteProduct(product, i);
      }

    });
  }

}
