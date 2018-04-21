import { Injectable } from '@angular/core';
import Fournitures from '../models/fournitures';
// Utilisé pour les requêtes HTTP
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// Dans le cas d'un mauvais retour HTTP
import { catchError, map, tap } from 'rxjs/operators';
 // Utilisé pour obtenir des données d'un serveur
import { Observable } from 'rxjs/Observable';
 // Utilisé pour obtenir des données d'un serveur
import { of } from 'rxjs/observable/of';


// Besoin d'un Header pour les requete "save" Http
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const fournitureUrl = 'http://127.0.0.1:8080/api/fournitures';


@Injectable()
export class FournituresService {

  private options: HttpParams = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  // retourne un tableau de toutes les fournitures
  getAllFournitures0(): Observable<Fournitures[]> {
    // Promise.all([
    //   this.http.get<Fournitures[]>(fournitureUrl + '?page=0&size=10').toPromise(),
    //   this.http.get<Fournitures[]>(fournitureUrl + '?page=1&size=10').toPromise(),
    //   this.http.get<Fournitures[]>(fournitureUrl + '?page=2&size=10').toPromise()
    // ]).then(
    //   values => console.log('values', values)
    // );
    return this.http.get<Fournitures[]>(fournitureUrl + '?page=0&size=3000')
      .pipe(
        tap(fournitures => this.log(`récupération des fournitures`)),
        catchError(this.handleError('GetAllFournitures', [])));
  }
/*
   // retourne un tableau de toutes les fournitures
   getAllFournitures1(): Observable<Fournitures[]> {
    return this.http.get<Fournitures[]>(fournitureUrl + '?page=1')
    .pipe(
      tap(fournitures => this.log(`récupération des fournitures`)),
      catchError(this.handleError('GetAllFournitures', [])));
    }

       // retourne un tableau de toutes les fournitures
   getAllFournitures2(): Observable<Fournitures[]> {
    return this.http.get<Fournitures[]>(fournitureUrl + '?page=2')
    .pipe(
      tap(fournitures => this.log(`récupération des fournitures`)),
      catchError(this.handleError('GetAllFournitures', [])));
    }

           // retourne un tableau de toutes les fournitures
   getAllFournitures3(): Observable<Fournitures[]> {
    return this.http.get<Fournitures[]>(fournitureUrl + '?page=3')
    .pipe(
      tap(fournitures => this.log(`récupération des fournitures`)),
      catchError(this.handleError('GetAllFournitures', [])));
    }
*/

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // messages.push('Voici les logs : ' + message);
  }


    /**
   * Gère l'opération Http qui a échoué.
   * Laisse l'appli continuer.
   * @param operation - nom de l'opération qui a échoué
   * @param result - valeur optionnel à retourner en tant que l'observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
