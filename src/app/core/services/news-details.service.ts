import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class NewsDetailsService {

    private apiURL: string = "api/newDetail";

    constructor(private http: HttpClient) { }

    getNewsDetails(): Observable<INewsDetails[]> {
        return this.http.get<INewsDetails[]>(this.apiURL);
    }

    addNews(newNews: INewsDetails): Observable<INewsDetails> {
        return this.http.post<INewsDetails>("api/newDetail", newNews, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}