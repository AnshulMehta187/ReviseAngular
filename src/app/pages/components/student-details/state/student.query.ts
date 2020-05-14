import { StudentState, StudentStore } from './student.store';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Studentquery extends Query<StudentState>
{
    studentDetails$ = this.select(data => data.studentDetails)

    constructor(protected store: StudentStore) {
        super(store);
      }
}