import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [DataService]
})
export class JobComponent implements OnInit {
   constructor() {}
 ngOnInit() {

 }
}
