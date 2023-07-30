import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}character`);
  }

  getCharacterById(id: number) {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getEpisodes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}episode`);
  }

  getEpisodeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}episode/${id}`);
  }

  getLocation(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}location`);
  }

  getLocationById(id: number) {
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }
}
