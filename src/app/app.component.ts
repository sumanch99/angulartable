import { Component } from '@angular/core'; 
import { VehicleListComponent} from './vehicle-list/vehicle-list.component';   

@Component({   
   
  selector: 'app-root',   
  templateUrl: 'app.component.html',   
  styleUrls: ['app.component.css'],   
}) 

export class AppComponent {   
  title = 'Vehicle registry'; 
}