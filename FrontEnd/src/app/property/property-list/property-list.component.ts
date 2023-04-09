import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Hassan Omar',
      Type: 'Big Villa',
      Price: 1200000,
    },
    {
      Id: 2,
      Name: 'Samer Elkomy',
      Type: 'Retail Store',
      Price: 300000,
    },
    {
      Id: 3,
      Name: 'Basem Mohamed',
      Type: 'Small Villa',
      Price: 1200000,
    },
    {
      Id: 4,
      Name: 'Shady Rageh',
      Type: 'Apartment',
      Price: 800000,
    },
    {
      Id: 5,
      Name: 'Adel Samy',
      Type: 'Family House',
      Price: 650000,
    },
    {
      Id: 6,
      Name: 'Magdy Elhofy',
      Type: 'Store',
      Price: 500000,
    },
  ];
}
