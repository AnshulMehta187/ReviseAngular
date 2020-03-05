import { Injectable } from '@angular/core';
import { ID, Store, StoreConfig } from '@datorama/akita';



export interface User {
    firstName: string;
    lastName: string;
    token: string;
}
//First we basically define a State which will be base and you can inlcude whatever you want to include in store
export interface SessionState {
    user?: User ;
    loading: boolean;
}

export function createSession(user: User): User {
    return { ...user };
}


//This is the base function we create and we can set any initial properties to whatever you want in the intial beginning 
export function createInitialState(): SessionState {
    return {
        loading:true
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'session' })
//Now you create a store for the state you want
export class SessionStore extends Store<SessionState> {

    constructor() {
        super(createInitialState());
    }

    login(data: User) {
        const user = createSession(data);
        this.update({ user });
    }

    logout() {
        this.update(createInitialState());
    }
}
