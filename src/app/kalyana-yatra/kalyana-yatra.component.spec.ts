import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalyanaYatraComponent } from './kalyana-yatra.component';

describe('KalyanaYatraComponent', () => {
  let component: KalyanaYatraComponent;
  let fixture: ComponentFixture<KalyanaYatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalyanaYatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalyanaYatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
