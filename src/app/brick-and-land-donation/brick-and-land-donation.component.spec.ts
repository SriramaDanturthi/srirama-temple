import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickAndLandDonationComponent } from './brick-and-land-donation.component';

describe('BrickAndLandDonationComponent', () => {
  let component: BrickAndLandDonationComponent;
  let fixture: ComponentFixture<BrickAndLandDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickAndLandDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickAndLandDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
