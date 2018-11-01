
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import * as jwt from 'jsonwebtoken';

import * as moment from 'moment';

import 'rxjs/Rx';

class DecodedToken {

    exp: number = 0;

    username: string = '';
}

@Injectable ()

export class AuthService {

    private decodedToken;

    constructor (private http: HttpClient) {

        this.decodedToken = JSON.parse ( localStorage.getItem ( 'car-rental-app_meta' )) || new DecodedToken();
    }

    private saveToken( token: string ): string {

        const jwt = new JwtHelperService();

        this.decodedToken = jwt.decodeToken ( token );

        localStorage.setItem ('car-rental-app_auth', token);

        localStorage.setItem ('car-rental-app_meta', JSON.stringify ( this.decodedToken ));

        return token;
    }

    private getExpiration () {

        return moment.unix ( this.decodedToken.exp );
    }

    public register(userData: any): Observable<any> {

    return this.http.post('/api/v1/users/register', userData );

    }

    public login(userData: any): Observable<any> {

        return this.http.post('/api/v1/users/auth', userData ).pipe(map (

            ( token: string ) => this.saveToken ( token )));
            }



    public logout () {

        localStorage.removeItem ( 'car-rental-app_auth' );

        localStorage.removeItem ( 'car-rental-app_meta' );

        this.decodedToken = new DecodedToken ();
    }

    public isAuthenticated (): boolean {

        return moment().isBefore ( this.getExpiration());
    }

    public getAuthToken (): string {

        return localStorage.getItem ( 'car-rental-app_auth' );
    }

    public getUsername (): string {

        return this.decodedToken.username;
    }

    public getUserId (): string {

        return this.decodedToken.userId;
    }
}



