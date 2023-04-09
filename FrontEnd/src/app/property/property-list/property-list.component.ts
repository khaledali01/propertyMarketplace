import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  constructor(private propertyService: PropertyService) {}
  properties: Array<IProperty> = [];
  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
