import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeedsPage } from './needs.page';

describe('NeedsPage', () => {
  let component: NeedsPage;
  let fixture: ComponentFixture<NeedsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
