import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public createUser(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/user`, body);
  }


  public getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/user`);
  }

  public getuser(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}api/user/${id}`);
  }

  public editUser(id: any, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/user/${id}`, body);
  }

  public deleteUser(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/user/${id}`);
  }

  public assignSkillToUser(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/user/skill`, body);
  }

  public removeSkillFromUser(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/user/removeSkill`, body);
  }

  public getUserByName(name: any): Observable<any> {
    return this.http.get(`${this.baseUrl}api/user/byName/${name}`);
  }

  public getUserBySkill(name: any): Observable<any> {
    return this.http.get(`${this.baseUrl}api/user/bySkill/${name}`);
  }

}
