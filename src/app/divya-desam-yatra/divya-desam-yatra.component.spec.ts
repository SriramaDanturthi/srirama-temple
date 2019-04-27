import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivyaDesamYatraComponent } from './divya-desam-yatra.component';

describe('DivyaDesamYatraComponent', () => {
  let component: DivyaDesamYatraComponent;
  let fixture: ComponentFixture<DivyaDesamYatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivyaDesamYatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivyaDesamYatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
