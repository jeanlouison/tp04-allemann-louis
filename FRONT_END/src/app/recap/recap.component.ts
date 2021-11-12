import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  @Input()
  formControls: FormGroup = new FormGroup({foo: new FormControl()});

  isObject(val: undefined): boolean { return typeof val === 'object'; }

  constructor() { }

  ngOnInit(): void {
  }

}
