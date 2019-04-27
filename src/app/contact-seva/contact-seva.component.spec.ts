import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSevaComponent } from './contact-seva.component';

describe('ContactSevaComponent', () => {
  let component: ContactSevaComponent;
  let fixture: ComponentFixture<ContactSevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
