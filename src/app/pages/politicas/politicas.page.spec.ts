import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticasPage } from './politicas.page';

describe('PoliticasPage', () => {
  let component: PoliticasPage;
  let fixture: ComponentFixture<PoliticasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoliticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
