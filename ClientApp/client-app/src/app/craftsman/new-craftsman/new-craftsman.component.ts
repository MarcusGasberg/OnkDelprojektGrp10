import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Craftsman } from 'src/app/models/craftsman';
import { CraftsmanService } from '../craftsman.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-craftsman',
  templateUrl: './new-craftsman.component.html',
  styleUrls: ['./new-craftsman.component.scss'],
})
export class NewCraftsmanComponent implements OnInit {
  public craftsman: FormGroup;
  floatLabelControl = new FormControl('auto');

  constructor(
    private formBuilder: FormBuilder,
    private service: CraftsmanService,
    private router: Router
  ) {
    this.craftsman = formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      workField: [null, Validators.required],
      employmentDate: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    if (this.craftsman.valid) {
      this.service.postCrafsman(this.craftsman.value as Craftsman).subscribe({
        next: () => this.router.navigate(['craftsmen']),
      });
    }
  }
}
