import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/skill`);
  }

  public createSkill(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/skill`, body);
  }

}
