import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivineSankalpamComponent } from './divine-sankalpam.component';

describe('DivineSankalpamComponent', () => {
  let component: DivineSankalpamComponent;
  let fixture: ComponentFixture<DivineSankalpamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivineSankalpamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivineSankalpamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
