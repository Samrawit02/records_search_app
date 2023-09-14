import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { map, Observable } from 'rxjs';
import { Component } from '@angular/core';

@Injectable()
export class UserService {

  private usersUrl: string;
  private allRecordsUrl: string;
  private searchAutocomplete: string;
  private keyword: string;
  searchKey: any = ''; // Property for input text
  selectedType: string = ''; // Property for radio button selection



  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/public/create-records';
    this.allRecordsUrl = 'http://localhost:8080/public/all-records'
    this.searchAutocomplete= 'http://localhost:8080/public/search/records-auto-complete'
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.allRecordsUrl);
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public search(form: any): Observable<User[]>{

  let searchValue = form.value.search;
  let typeValue = form.value.selectedType;


    const url = `${this.searchAutocomplete}?keyword=${searchValue}&type=${typeValue}`;
    return this.http.get<User[]>(url)
  } 

}