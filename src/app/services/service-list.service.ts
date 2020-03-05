import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor(private http: HttpClient) { }

  getStudentDetails()
  {
    //setTimeout(() => this.http.get<any[]>(`https://localhost:44358/api/student/GetNothing`).subscribe(), 1000);
    return this.http.get<any>(`https://localhost:44358/api/student/GetStudents`);
  }

  deleteStudent(studentId : number)
  {
    return this.http.delete(`https://localhost:44358/api/student/DeleteStudent/${studentId}`);
  }

  // getStudentInformation(id)
  // {
  //   //setTimeout(() => this.http.get<any[]>(`https://localhost:44358/api/student/GetNothing`).subscribe(), 1000);
  //   return this.http.get<any>(`https://localhost:44358/api/student/Get`);
  // }
}
