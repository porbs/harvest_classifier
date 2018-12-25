import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from './data.service';
import {ModelService} from './model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataForm: FormGroup;
  data: any;
  res: any;
  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private model: ModelService
  ) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      attribute1: ['', Validators.required],
      attribute2: ['', Validators.required],
      attribute3: ['', Validators.required],
      attribute4: ['', Validators.required],
      attribute5: ['', Validators.required],
      attribute6: ['', Validators.required],
    });

    this.data = this.ds.getData();
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      return;
    }

    const value = this.dataForm['value'];
    this.res = this.model.evaluate(value);
  }

}
