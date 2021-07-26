import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsComponent } from './champions.component';
import {HttpClientModule} from "@angular/common/http";
import {MobiquityF1ChampionshipServicesService} from "../../services/mobiquity-f1-championship-services.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;
  let service: MobiquityF1ChampionshipServicesService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsComponent ],
      providers: [MobiquityF1ChampionshipServicesService],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule
      ]

    })
    .compileComponents().then(() => {
        fixture = TestBed.createComponent(ChampionsComponent);
        component = fixture.componentInstance;
        service = TestBed.get(MobiquityF1ChampionshipServicesService);
        fixture.detectChanges();
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should get all champions', () => {
    //expect(component).toBeTruthy();
  });
});
