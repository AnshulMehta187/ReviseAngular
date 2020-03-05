import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceListService } from 'src/app/services/service-list.service';
import { pipe, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetails } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
displayedColumns: string[] = ['link','firstName','lastName','gender','dateofBirth','delete'];
isLoading : boolean

 rowData: Observable<StudentDetails[]>;
  constructor(public dialog: MatDialog,private serviceListService: ServiceListService) { }

  ngOnInit()
  {
    this.isLoading = true;
    return this.getStudentDetails();
  }

  
  private getStudentDetails() {

    return this.serviceListService.getStudentDetails().subscribe(data => {
      this.isLoading = false;
      this.rowData = data;
    },error => this.isLoading =false);
  }



  openStudentDialog(student : any): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      data : student,
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

    deleteStudent(studentInfo: StudentDetails) {
      return this.serviceListService.deleteStudent(studentInfo.id).subscribe(resp =>{
          this.getStudentDetails();
        })
    }
  }
