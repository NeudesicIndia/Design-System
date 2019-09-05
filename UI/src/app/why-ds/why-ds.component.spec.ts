import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDsComponent } from './why-ds.component';

describe('WhyDsComponent', () => {
  let component: WhyDsComponent;
  let fixture: ComponentFixture<WhyDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
