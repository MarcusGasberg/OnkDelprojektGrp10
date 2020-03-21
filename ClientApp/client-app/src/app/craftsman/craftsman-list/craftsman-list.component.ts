import { Component, OnInit } from '@angular/core';
import { Craftsman } from 'src/app/models/craftsman';
import { CraftsmanService } from '../craftsman.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-craftsman-list',
  templateUrl: './craftsman-list.component.html',
  styleUrls: ['./craftsman-list.component.scss'],
})
export class CraftsmanListComponent implements OnInit {
  public craftsmen$: BehaviorSubject<Craftsman[]> = new BehaviorSubject([]);

  constructor(private service: CraftsmanService) {}

  ngOnInit(): void {
    this.getCraftsmen();
  }

  public onDeleteTool(id: number): void {
    this.service.deleteCraftsman(id).subscribe({
      next: this.getCraftsmen,
    });
  }

  public onEditTool(id: number): void {
    throw new Error('Not implemented yet.');
  }

  public getCraftsmen(): void {
    this.service
      .getAll()
      .subscribe(craftsmen => this.craftsmen$.next(craftsmen));
  }
}
