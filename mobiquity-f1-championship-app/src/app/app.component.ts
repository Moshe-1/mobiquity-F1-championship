import { Component } from '@angular/core';
import {MobiquityF1ChampionshipServicesService} from "./mobiquity-f1-championship-services.service";
import {WorldChampions} from "./models/worldChampions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mobiquity-f1-championship-app';
  worldChampions: WorldChampions;
  constructor(private championshipServicesService: MobiquityF1ChampionshipServicesService) {

  }
  getWorldChampions(): void {
    this.championshipServicesService.getWorldChampions().subscribe((response: WorldChampions) => {
      this.worldChampions = response;
    })
  }

  ngOnInit() {
    this.getWorldChampions();
  }

}
