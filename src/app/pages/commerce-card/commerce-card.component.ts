import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {DataService, file, stage} from '../../services/data.service';
import {
  NgbModalConfig,
  NgbModal,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-commerce-card',
  templateUrl: './commerce-card.component.html',
  styleUrls: ['./commerce-card.component.css']
})
export class CommerceCardComponent implements OnInit {
  id: number;
  StageData: stage[] = [];
  FileData: file[] = [];
  panelOpenState = false;
  public subscription: Subscription;
  constructor(public activateRoute: ActivatedRoute ,
              public dataService: DataService ,
              public modalService: NgbModal,
              config: NgbModalConfig)
  {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content): void {
    this.modalService.open(content);
  }
  ngOnInit(): void {
    this.StageData = this.dataService.getCommerceStage();
    this.FileData = this.dataService.getCommercefile();
  }

}
