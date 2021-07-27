import { Component, OnInit } from '@angular/core';
import {WorldChampions} from "../../models/worldChampions";
import {WinnersOfTheYear} from "../../models/winnersOfTheYear";
import {MobiquityF1ChampionshipServicesService} from "../../services/mobiquity-f1-championship-services.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class ChampionsComponent implements OnInit {
  worldChampions: WorldChampions;
  winnersOfTheYear: WinnersOfTheYear;
  seasonWinnerId: string = '';
  selectedYear: string = '';
  isShown: boolean = false;
  showError: boolean = false;
  isLoading: boolean = true;
  constructor(private championshipServicesService: MobiquityF1ChampionshipServicesService) { }

  /**
   * @description Call getWorldChampions() from our services to make API get call and return champions
   */
  getWorldChampions(): WorldChampions {

    this.isLoading = true;

    //calling getWorldChampions() from our services to make API get call
    this.championshipServicesService.getWorldChampions().subscribe((response: WorldChampions) => {

      //assigning local variable value the json response
      this.worldChampions = response;

      //Hide the loader when API call came back successful
      this.isLoading = false;

    }, error => {

      //Error handling if API call fails
      this.isLoading = false;

      this.showError = true;
    });

    //return worldChampions object
    return this.worldChampions;
  }

  /**
   * @description Call getWinnersOfSelectedYear() from our services to make API get call
   * @param year,driverId - year to get selected item/season race winners and driverId to compare season winner and race winner
   */
  getWinnersOfSelectedYear(year, driverId): void {

    this.isLoading = true;

    //calling getWinnersOfSelectedYear(year) and passing in the year parameter from our services to make API get call
    this.championshipServicesService.getWinnersOfSelectedYear(year).subscribe((response: WinnersOfTheYear) => {
      this.winnersOfTheYear = response;
    }, error => {

      //Error handling if API call fails
      this.isLoading = false;

      this.showError = true;
    });

    //Holding the selected year in  this.selectedYear to use in our heading
    this.selectedYear = year;

    //equating our local variable(seasonWinnerId) to passed in driverId so we can can check later if the driver is/was the season winner as well
    this.seasonWinnerId = driverId;
  }

  /**
   * @description This function is used to toggle between a list of champions and list of the selected year winners
   */
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  /**
   * @description Return the world champions when the page loads
   */
  ngOnInit() {
    this.isLoading = true;
    this.getWorldChampions();
  }

}
