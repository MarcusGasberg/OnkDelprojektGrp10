import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/tool';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-newtool',
  templateUrl: './newtool.component.html',
  styleUrls: ['./newtool.component.scss'],
})
export class NewtoolComponent implements OnInit {
  public tool: FormGroup;
  floatLabelControl = new FormControl('auto');
  // public required = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    this.tool = formBuilder.group({
      color: [null, Validators.required],
      dateAcquired: [null, Validators.required],
      make: [null, Validators.required],
      serialNumber: [null, Validators.required],
      type: [null, Validators.required],
      model: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSubmit(craftsmanData) {
    if (this.tool.valid) {
      // TODO: Send to db
    }
  }
}
