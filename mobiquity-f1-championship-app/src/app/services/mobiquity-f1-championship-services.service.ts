import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {WorldChampions} from "../models/worldChampions";
import {WinnersOfTheYear} from "../models/winnersOfTheYear";
@Injectable({
  providedIn: 'root'
})
export class MobiquityF1ChampionshipServicesService {

  constructor(private http: HttpClient) {
  }

  //Http service function to get world champions
  getWorldChampions() {
    //Defining a param that will be passed to the API during the get() call
    //this is to filter the response for driver standings from 2005 until present
    const params = new HttpParams().append('offset', '55');
    //Using HttpClient get() method to make an API call/request of F1 world champions.
    return this.http.get<WorldChampions>('https://ergast.com/api/f1/driverStandings/1.json', {params});
  }
  //Http service function that accepts a year as a param and return the winners of the selected year
  getWinnersOfSelectedYear(year){
    //Using HttpClient get() method to make an API call/request of selected year winners
    return this.http.get<WinnersOfTheYear>(' https://ergast.com/api/f1/' + year + '/results/1.json');
  }
}