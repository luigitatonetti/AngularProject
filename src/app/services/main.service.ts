import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(private http: HttpClient) { }

  getJobs(level: string, page: number) {
    console.log(level,page);
    return this.http.get(
      `https://www.themuse.com/api/public/jobs?category=Software%20Engineering&level=${level}&page=${page}`
    )
  }

  getCompany(id: any) {
    return this.http.get(
      `https://www.themuse.com/api/public/companies/${id}`
    )
  }
}
