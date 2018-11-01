import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable ()

export class UserService {

    constructor ( private http: HttpClient ) {}

    public getUser ( userId: string ): Observable<any> {

        return this.http.get ( `/api/v1/users/${userId}`);
    }


}
