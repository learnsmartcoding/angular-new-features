import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsIntroComponent } from './signals-intro.component';

describe('SignalsIntroComponent', () => {
  let component: SignalsIntroComponent;
  let fixture: ComponentFixture<SignalsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
