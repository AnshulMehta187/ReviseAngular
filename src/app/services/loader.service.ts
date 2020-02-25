import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable()
export class LoaderService {
    public loading$ = new BehaviorSubject(false);
    constructor() { }
}