import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumsubPage } from './sumsub.page';

describe('SumsubPage', () => {
  let component: SumsubPage;
  let fixture: ComponentFixture<SumsubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SumsubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
