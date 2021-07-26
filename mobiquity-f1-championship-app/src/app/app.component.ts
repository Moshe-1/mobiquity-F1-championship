import { Component } from '@angular/core';
import {MobiquityF1ChampionshipServicesService} from "./services/mobiquity-f1-championship-services.service";
import {WorldChampions} from "./models/worldChampions";
import {WinnersOfTheYear} from "./models/winnersOfTheYear";
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mobiquity-f1-championship-app';

  constructor() {

  }

}
