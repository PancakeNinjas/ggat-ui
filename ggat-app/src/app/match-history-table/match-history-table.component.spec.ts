import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryTableComponent } from './match-history-table.component';

describe('MatchHistoryTableComponent', () => {
  let component: MatchHistoryTableComponent;
  let fixture: ComponentFixture<MatchHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchHistoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
