import { TestBed } from '@angular/core/testing';

import { MobiquityF1ChampionshipServicesService } from './mobiquity-f1-championship-services.service';

describe('MobiquityF1ChampionshipServicesService', () => {
  let service: MobiquityF1ChampionshipServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobiquityF1ChampionshipServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
