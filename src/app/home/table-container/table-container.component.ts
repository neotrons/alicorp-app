import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductsService } from "../services/products.service";
import { PageEvent } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Product {
  id: number;
  code: number;
  name: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  
  products: Product[] = [];
  // dataSource = null;
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public productService: ProductsService) { }
  
  datos: Product[] = [];
  dataSo = null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit(): void {

    this.getProducts();

/*     for (let x = 1; x <= 10; x++)
      this.datos.push(new Product(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSo = new MatTableDataSource<Product>(this.datos);
    this.dataSo.paginator = this.paginator;

    this.dataSource = new MatTableDataSource<Product>(this.products);
    this.dataSource.paginator = this.paginator; */

  }
  
  getProducts(){
    
    this.productService.getProducts()
    .subscribe(products => {
      console.log("topTracks: ", products);
      this.products = products;
    });
    
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.products;

}