import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPanelComponent } from './number-panel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NumberPanelComponent', () => {
  let component: NumberPanelComponent;
  let fixture: ComponentFixture<NumberPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberPanelComponent],

      // added this to avoid error for missing fa-icon reference
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('after clear selectedNumbers should be empty', () => {
    component.clear();
    expect(component.selectedNumbers).toHaveSize(0);
  });

  it('after toggleNumber the number should be present in selectedNumbers', () => {
    component.toggleNumber(1);
    expect(component.selectedNumbers.includes(1)).toBeTruthy();
  });
});
