import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentStore } from '../pages/components/student-details/state/student.store';
import { StudentDetailsService } from './student-details.service';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient,private store: StudentStore,private studentDetailsService : StudentDetailsService) { }

  getStudentDetails()
  {
    this.getStudents().subscribe();
  }

  getStudents() {
    this.store.update({
      loading: true
    });

    return this.studentDetailsService.getStudentDetails().pipe(
      tap(data => {
        this.store.update({
          studentDetails: data
        })
      }),
      finalize(() => {
        this.store.update({
          loading: false
        })
      })
    );
  }
}
