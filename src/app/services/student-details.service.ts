import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetails } from '../models/student.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class StudentDetailsService {

  constructor(private http: HttpClient) { }


  saveStudent(studentInfo: StudentDetails) {

    return this.http.post(`https://localhost:44358/api/student`, studentInfo).pipe(map(_ => studentInfo));
  }

  getStudentInformation(studentId : number)
  {
    //setTimeout(() => this.http.get<any[]>(`https://localhost:44358/api/student/GetNothing`).subscribe(), 1000);
    return this.http.get<StudentDetails>(`https://localhost:44358/api/student/GetStudent/${studentId}`);
  }
  getStudentDetails()
  {
    //setTimeout(() => this.http.get<any[]>(`https://localhost:44358/api/student/GetNothing`).subscribe(), 1000);
    return this.http.get<StudentDetails[]>(`https://localhost:44358/api/student/GetStudents`);
  }

  deleteStudent(studentId : number)
  {
    return this.http.delete(`https://localhost:44358/api/student/DeleteStudent/${studentId}`);
  }
}
