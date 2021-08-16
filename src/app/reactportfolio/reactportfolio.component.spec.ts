import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactportfolioComponent } from './reactportfolio.component';

describe('ReactportfolioComponent', () => {
  let component: ReactportfolioComponent;
  let fixture: ComponentFixture<ReactportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
