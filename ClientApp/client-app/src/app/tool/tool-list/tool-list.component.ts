import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tool } from 'src/app/models/tool';
import { ToolService } from '../tool.service';

@Component({
    selector: 'app-toolbox-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.scss'],
})
export class ToolListComponent implements OnInit {
    public tools$: Observable<Tool[]>;

    constructor(private service: ToolService) {}

    ngOnInit(): void {
        this.tools$ = this.service.fetchAll().pipe();
    }
}
