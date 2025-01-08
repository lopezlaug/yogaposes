import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosesListComponent } from './poses-list.component';

describe('CatsListComponent', () => {
  let component: PosesListComponent;
  let fixture: ComponentFixture<PosesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PosesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
