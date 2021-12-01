import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsIncomingComponent } from './requests-incoming.component';

describe('RequestsIncomingComponent', () => {
  let component: RequestsIncomingComponent;
  let fixture: ComponentFixture<RequestsIncomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsIncomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
