import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCounterComponent } from './app-counter.component';

describe('AppCounterComponent', () => {
  let component: AppCounterComponent;
  let fixture: ComponentFixture<AppCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
