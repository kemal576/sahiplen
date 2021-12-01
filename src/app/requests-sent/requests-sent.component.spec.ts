import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsSentComponent } from './requests-sent.component';

describe('RequestsSentComponent', () => {
  let component: RequestsSentComponent;
  let fixture: ComponentFixture<RequestsSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
