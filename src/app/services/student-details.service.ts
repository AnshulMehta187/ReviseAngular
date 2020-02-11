import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetails } from '../models/student.model';
import { merge } from 'rxjs';

@Injectable()
export class StudentDetailsService {

  constructor(private http: HttpClient) { }


  saveStudent(studentInfo: StudentDetails) {

    return this.http.post(`https://localhost:44358/api/student`, studentInfo);
  }
}
