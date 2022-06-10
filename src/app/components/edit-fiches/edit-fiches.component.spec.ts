import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFichesComponent } from './edit-fiches.component';

describe('EditFichesComponent', () => {
  let component: EditFichesComponent;
  let fixture: ComponentFixture<EditFichesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFichesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
