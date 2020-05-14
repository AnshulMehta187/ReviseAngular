import { Component, OnInit, ViewChild } from '@angular/core';
import {  StudentService } from 'src/app/services/service-list.service';
import { pipe, Observable } from 'rxjs';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetails } from 'src/app/models/student.model';
import { StudentDetailsService } from 'src/app/services/student-details.service';
import { Studentquery } from './state/student.query';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
displayedColumns: string[] = ['link','firstName','lastName','gender','dateofBirth','delete'];
isLoading : boolean

 rowData: Observable<StudentDetails[]>;
  constructor(public dialog: MatDialog,private studentService: StudentService,private studentDetailsService : StudentDetailsService,private studentquery : Studentquery) { }

  ngOnInit()
  {
    this.isLoading = true;
     this.getStudentDetails();
     this.rowData = this.studentquery.studentDetails$;
  }

  
  private getStudentDetails() {
    return  this.studentService.getStudentDetails()
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
      return this.studentDetailsService.deleteStudent(studentInfo.id).subscribe(resp =>{
          this.getStudentDetails();
        })
    }
  }
