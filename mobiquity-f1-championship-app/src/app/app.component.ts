import { Component } from '@angular/core';
import {MobiquityF1ChampionshipServicesService} from "./mobiquity-f1-championship-services.service";
import {WorldChampions} from "./models/worldChampions";
import {WinnersOfTheYear} from "./models/winnersOfTheYear";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobiquity-f1-championship-app';
  worldChampions: WorldChampions;
  winnersOfTheYear: WinnersOfTheYear;
  constructor(private championshipServicesService: MobiquityF1ChampionshipServicesService) {

  }
  getWorldChampions(): void {
    this.championshipServicesService.getWorldChampions().subscribe((response: WorldChampions) => {
      this.worldChampions = response;
    })
  }

  getWinnersOfSelectedYear(year): void {
    this.championshipServicesService.getWinnersOfSelectedYear(year).subscribe((response: WinnersOfTheYear) => {
      this.winnersOfTheYear = response;
    })
  }

  ngOnInit() {
    this.getWorldChampions();
  }

}
