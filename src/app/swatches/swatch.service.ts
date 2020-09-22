import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ISwatch } from './swatch';

@Injectable({
    providedIn: 'root'
})

export class SwatchService {
    private swatchUrl = './api/colors/colors.json';

    constructor(private http: HttpClient){}

    getSwatches(): Observable<ISwatch[]> {
        return this.http.get<ISwatch[]>(this.swatchUrl)
        .pipe(
            tap(data => console.log('All '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `Error : ${err.error.message} `;
        }else{
            errorMessage = `Server returned ${err.status}, error message ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
