import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivineMemoriesComponent } from './divine-memories.component';

describe('DivineMemoriesComponent', () => {
  let component: DivineMemoriesComponent;
  let fixture: ComponentFixture<DivineMemoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivineMemoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivineMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
