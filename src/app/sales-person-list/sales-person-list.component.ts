import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of salesperson object

  salesPersonList:SalesPerson[]=[
    new SalesPerson("Anup","kumar","xyz@gmail.com",40000),
    new SalesPerson("dsada","kumar","xyz@3.com",3444),
    new SalesPerson("Andassaup","kumar","xyz@2.com",40000),
    new SalesPerson("qwerty","kumar","xyz@1.com",40000)
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
