import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliancesComponent } from './alliances';

describe('Alliances', () => {
  let component: AlliancesComponent;
  let fixture: ComponentFixture<AlliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlliancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
