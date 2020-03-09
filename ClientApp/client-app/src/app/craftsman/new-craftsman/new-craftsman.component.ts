import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Craftsman } from 'src/app/models/craftsman';

@Component({
  selector: 'app-new-craftsman',
  templateUrl: './new-craftsman.component.html',
  styleUrls: ['./new-craftsman.component.scss'],
})
export class NewCraftsmanComponent implements OnInit {
  public craftsman: FormGroup;
  floatLabelControl = new FormControl('auto');
  // public required = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    this.craftsman = formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      workField: [null, Validators.required],
      employmentDate: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSubmit(craftsmanData) {
    if (this.craftsman.valid) {
      // TODO: Send to db
    }
  }
}
