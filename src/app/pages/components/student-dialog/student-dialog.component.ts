import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/student-details.service';
import { merge } from 'lodash';
import {finalize } from 'rxjs/operators';
import { StudentDetails } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent implements OnInit {
  student : FormGroup 
  isEdit: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: StudentDetails,
    private studentDetailsService: StudentDetailsService)
  {
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

  ngOnInit() {
    if(this.data !== null && this.data.id !== null)
    {

      this.isEdit = true;
      console.log(this.isEdit)
      this.student.patchValue(
        {
          firstName: this.data.firstName,
          lastName: this.data.lastName,
          dateofBirth : this.data.dateofBirth,
          gender: this.data.gender,
          studentAdditionalInformation:
          {
            isBatchHolder: this.data.studentAdditionalInformation.isBatchHolder,
            grade: this.data.studentAdditionalInformation.grade
          }
        }
      ) 
    }
}
  saveClick()
  {
    if(this.data !== null && this.data.id > 0)
    {
      const { recursivelyCheckChanges, distinctValueChanges } = this.CheckChanges();
      recursivelyCheckChanges(distinctValueChanges, this.student);
      const student = merge({},this.data, distinctValueChanges);
      return this.studentDetailsService.saveStudent(student).subscribe(data =>
        { 
          this.dialogRef.close('reload');
        });
      }
      else
      {
        this.studentDetailsService.saveStudent(this.student.value).subscribe(data =>
          { 
            this.dialogRef.close('reload');
          });
      }
    }
        

    
//this is a generic code and should be used everywhere
  private CheckChanges() {
    const distinctValueChanges = {};
    const recursivelyCheckChanges = (destination: any, form: FormGroup) => {
      Object.keys(form.controls).forEach(key => {
        const control = form.controls[key];
        if (control.dirty) {
          if (control instanceof FormGroup) {
            destination[key] = {};
            recursivelyCheckChanges(destination[key], control);
          }
          else if (control instanceof FormControl) {
            destination[key] = control.value;
          }
          else {
            throw new Error('Unknown');
          }
        }
      });
    };
    return { recursivelyCheckChanges, distinctValueChanges };
  }

  cancel() {
    this.dialogRef.close(); 
    
  }

}
