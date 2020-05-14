import { Observable } from 'rxjs';
import { StudentDetails } from 'src/app/models/student.model';
import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

//create the state first which will include all the data you want to keep in the store
export interface StudentState
{
    loading : boolean
    studentDetails? : StudentDetails[]
}

export function createInitialState(): StudentState {
    return {
      loading: true
    };
  }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'job' })
export class StudentStore extends Store<StudentState> {
  constructor() {
    super(createInitialState());
  }
}