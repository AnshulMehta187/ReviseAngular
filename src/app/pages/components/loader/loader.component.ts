import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  public loading$;
        constructor(private loaderService: LoaderService) {
          this.loading$ = this.loaderService.loading$;
        }


  ngOnInit() {
  }

}
