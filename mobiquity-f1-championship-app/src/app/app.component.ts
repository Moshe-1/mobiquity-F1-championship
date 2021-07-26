import { Component } from '@angular/core';
import {MobiquityF1ChampionshipServicesService} from "./services/mobiquity-f1-championship-services.service";
import {WorldChampions} from "./models/worldChampions";
import {WinnersOfTheYear} from "./models/winnersOfTheYear";
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
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
  ],
})
export class AppComponent {
  title = 'mobiquity-f1-championship-app';
  worldChampions: WorldChampions;
  winnersOfTheYear: WinnersOfTheYear;
  seasonWinnerId: string = '' ;
  selectedYear: string = '' ;
  isShown: boolean = false ;
  showError: boolean = false ;
  isLoading: boolean = true ;
  constructor(private championshipServicesService: MobiquityF1ChampionshipServicesService) {

  }
  //This function call getWorldChampions() from our services to make API get call
  getWorldChampions(): WorldChampions {
    //this.isLoading = true ;
    //calling getWorldChampions() from our services to make API get call
    this.championshipServicesService.getWorldChampions().subscribe((response: WorldChampions) => {
      //assigning local variable value the json response
      this.worldChampions = response;
      //Hide the loader when API call came back successful
      this.isLoading = false ;
    }, error => {
        //this.isLoading = false;
        this.showError = true;
      }); //Error handling if API call fails

    //return worldChampions object
    return this.worldChampions;
  }
  //This function call getWinnersOfSelectedYear() from our services to make API get call
  getWinnersOfSelectedYear(year, driverId): void {
    //Holding the selected year in  this.selectedYear to use in our heading
    this.selectedYear = year;
    //calling getWinnersOfSelectedYear(year) and passing in the year parameter from our services to make API get call
    this.championshipServicesService.getWinnersOfSelectedYear(year).subscribe((response: WinnersOfTheYear) => {
      this.winnersOfTheYear = response;
    })
    //equating our local variable to passed in driver id so we can can check later if the driver is/was the season winner as well
    this.seasonWinnerId = driverId;
  }

  //This function is used to toggle between a list of champions and list of the selected year winners
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  //getting the world champion when the page loads
  ngOnInit() {
    this.getWorldChampions();
  }

}
