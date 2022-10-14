import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Games } from "./model/games";

@Injectable()


export class GamesService
{
    private url = "https://e-commerce-dio.herokuapp.com/"

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private http:HttpClient){}

    getAllGames(){
        var getAll = this.url + 'produtos/all';

        return this.http.get(getAll);
    }
    getByIdGames(){
        var getByIdGames = this.url + 'produtos/{id}';

        return this.http.get(getByIdGames);
    }


}