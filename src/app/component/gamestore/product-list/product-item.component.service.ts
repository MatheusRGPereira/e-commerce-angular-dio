import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Games } from "./model/games";


@Injectable()


export class GamesService
{
    private url = "https://e-commerce-dio.herokuapp.com/"

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    httpClient: any;

    constructor(private http:HttpClient){}

    getAllGames(){
        var getAll = this.url + 'produtos/all';

        return this.http.get(getAll);
    }
    getGameById(id: number): Observable<Games> {
        
        var getGameById = this.url + '/produtos'+ id;
        return this.httpClient.get(getGameById)
          .pipe(
            retry(2),
            catchError(this.handleError)
          )
      }
      handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = error.error.message;
        } else {
          // Erro ocorreu no lado do servidor
          errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      };


}