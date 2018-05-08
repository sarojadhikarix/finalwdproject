import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivepreviewComponent } from './livepreview.component';

describe('LivepreviewComponent', () => {
  let component: LivepreviewComponent;
  let fixture: ComponentFixture<LivepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
