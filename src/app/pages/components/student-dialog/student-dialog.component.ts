import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/student-details.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent implements OnInit {
  student : FormGroup 
  constructor(
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    private fb: FormBuilder,
    private studentDetailsService: StudentDetailsService)
  {

  }

  ngOnInit() {
    this.student = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    dateofBirth:['',Validators.required],
    gender:[''],
    studentAdditionalInformation : this.fb.group({
    grade:[''],
    isBatchHolder:[''],
    batcheName:['']
    })
  })
  
}
saveClick()
  {
    this.studentDetailsService.saveStudent(this.student.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close('reload');
    })
  }

  cancel() {
    this.dialogRef.close(); 
    
  }

}
