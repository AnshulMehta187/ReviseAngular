import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/student-details.service';
import { StudentDetails } from 'src/app/models/student.model';
@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.scss']
})
export class StudentInformationComponent implements OnInit {

  student : FormGroup
  editMode: boolean;
  constructor(private fb: FormBuilder,private studentDetailsService: StudentDetailsService) { }

  ngOnInit() {
    this.editMode = false;
    this.student = this.fb.group({
          firstName: ['',Validators.required],
          lastName: [''],
          dateofBirth:[''],
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
    this.studentDetailsService.saveStudent(this.student.value).subscribe(data =>{
      this.student.patchValue(data);
      this.student.markAsPristine();
    })
  }

}
