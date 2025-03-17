import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlinesComponent } from './hotlines.component';

describe('HotlinesComponent', () => {
  let component: HotlinesComponent;
  let fixture: ComponentFixture<HotlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotlinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
