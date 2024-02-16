import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareTeamPage } from './care-team.page';

describe('CareTeamPage', () => {
  let component: CareTeamPage;
  let fixture: ComponentFixture<CareTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CareTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
