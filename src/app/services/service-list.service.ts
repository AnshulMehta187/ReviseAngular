import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetails } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor(private http: HttpClient) { }

  getStudentDetails()
  {
    return this.http.get<any>(`https://localhost:44358/api/student/GetStudents`);
  }
}
