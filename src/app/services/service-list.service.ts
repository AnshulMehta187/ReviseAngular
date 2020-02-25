import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDetails } from '../models/student.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor(private http: HttpClient) { }

  getStudentDetails()
  {
    setTimeout(() => this.http.get<any>(`https://localhost:44358/api/student/GetNothing`).subscribe(), 1000);
    return this.http.get<any>(`https://localhost:44358/api/student/GetStudents`);
  }
}
