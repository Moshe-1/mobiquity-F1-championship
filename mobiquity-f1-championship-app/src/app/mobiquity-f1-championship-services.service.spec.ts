import { TestBed } from '@angular/core/testing';

import { MobiquityF1ChampionshipServicesService } from './mobiquity-f1-championship-services.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MobiquityF1ChampionshipServicesService', () => {
  let service: MobiquityF1ChampionshipServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MobiquityF1ChampionshipServicesService]
    });
    service = TestBed.inject(MobiquityF1ChampionshipServicesService);
  });


});
