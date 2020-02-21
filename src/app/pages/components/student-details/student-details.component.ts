import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceListService } from 'src/app/services/service-list.service';
import { pipe, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
displayedColumns: string[] = ['firstName','lastName','gender','dateofBirth'];

 rowData: Observable<any>[];
  constructor(public dialog: MatDialog,private serviceListService: ServiceListService) { }

  ngOnInit()
  {
    return this.getStudentDetails();
  }

  
  private getStudentDetails() {
    return this.serviceListService.getStudentDetails().subscribe(data => {
      this.rowData = data;
    });
  }



  openStudentDialog(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      autoFocus: false,
      disableClose: true,
      height: 'auto',
      minHeight:'550px',
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'reload') {
        this.getStudentDetails();
      }
    })
  }
}
