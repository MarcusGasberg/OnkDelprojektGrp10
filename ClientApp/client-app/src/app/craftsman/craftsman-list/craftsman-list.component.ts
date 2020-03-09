import { Component, OnInit } from '@angular/core';
import { Craftsman } from 'src/app/models/craftsman';
import { CraftsmanService } from '../craftsman.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-craftsman-list',
  templateUrl: './craftsman-list.component.html',
  styleUrls: ['./craftsman-list.component.scss'],
})
export class CraftsmanListComponent implements OnInit {
  public craftsmen$: Observable<Craftsman[]>;

  constructor(private service: CraftsmanService) {}

  ngOnInit(): void {
    this.craftsmen$ = this.service.fetchAll().pipe();
  }
}
