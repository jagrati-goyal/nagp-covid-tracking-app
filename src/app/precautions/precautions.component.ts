import { Component, OnInit } from '@angular/core';
import { PrecautionService } from '../core/services/precautions.service';
import { IPrecautions } from '../shared/interfaces/IPrecautions';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {
  precautions: IPrecautions[] = [];

  constructor(private precautionService: PrecautionService) { }

  ngOnInit(): void {
    this.precautions = this.precautionService.getAllPrecautions();
  }

}
