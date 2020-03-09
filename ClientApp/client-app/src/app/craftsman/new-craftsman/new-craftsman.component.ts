import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-craftsman',
  templateUrl: './new-craftsman.component.html',
  styleUrls: ['./new-craftsman.component.scss'],
})
export class NewCraftsmanComponent implements OnInit {
  public craftsman: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.craftsman = formBuilder.group({
      firstName: '',
      lastName: '',
    });
  }

  ngOnInit(): void {}
}
