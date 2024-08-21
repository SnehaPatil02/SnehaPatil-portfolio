import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private deviceService: DeviceDetectorService) {}

  
 isMobile = this.deviceService.isMobile();
  
   
}

