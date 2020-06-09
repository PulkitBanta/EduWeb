import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformNavComponent } from './platform-nav.component';

describe('PlatformNavComponent', () => {
  let component: PlatformNavComponent;
  let fixture: ComponentFixture<PlatformNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
