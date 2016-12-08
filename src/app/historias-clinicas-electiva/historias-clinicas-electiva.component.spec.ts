/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistoriasClinicasElectivaComponent } from './historias-clinicas-electiva.component';

describe('HistoriasClinicasElectivaComponent', () => {
  let component: HistoriasClinicasElectivaComponent;
  let fixture: ComponentFixture<HistoriasClinicasElectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriasClinicasElectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriasClinicasElectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
