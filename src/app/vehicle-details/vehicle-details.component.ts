import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  @Input()
  vehicle:Vehicle=new Vehicle;
  constructor() { }

  ngOnInit(): void {
  }

}
