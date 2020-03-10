import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Toolbox } from '../toolbox';

@Component({
  selector: 'app-new-toolbox',
  templateUrl: './new-toolbox.component.html',
  styleUrls: ['./new-toolbox.component.scss'],
})
export class NewToolboxComponent implements OnInit {
  public toolbox: FormGroup;
  floatLabelControl = new FormControl('auto');
  // public required = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    this.toolbox = formBuilder.group({
      color: [null, Validators.required],
      dateAcquired: [null, Validators.required],
      make: [null, Validators.required],
      model: [null, Validators.required],
      serialNumber: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSubmit(craftsmanData) {
    if (this.toolbox.valid) {
      this.toolbox.reset();
      // TODO: Send to db
    }
  }
}
