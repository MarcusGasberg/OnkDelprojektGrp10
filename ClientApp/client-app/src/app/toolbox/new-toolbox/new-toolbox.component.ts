import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Toolbox } from '../../models/toolbox';
import { ToolboxService } from '../toolbox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-toolbox',
  templateUrl: './new-toolbox.component.html',
  styleUrls: ['./new-toolbox.component.scss'],
})
export class NewToolboxComponent implements OnInit {
  public toolbox: FormGroup;
  floatLabelControl = new FormControl('auto');
  // public required = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private service: ToolboxService,
    private router: Router
  ) {
    this.toolbox = formBuilder.group({
      color: [null, Validators.required],
      dateAcquired: [null, Validators.required],
      make: [null, Validators.required],
      model: [null, Validators.required],
      serial: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    if (this.toolbox.valid) {
      this.service.postToolbox(this.toolbox.value as Toolbox).subscribe({
        next: () => this.router.navigate(['toolboxes']),
      });
    }
  }
}
