import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeTESTNOTINCLUDEDComponent } from './add-recipe-testnotincluded.component';

describe('AddRecipeTESTNOTINCLUDEDComponent', () => {
  let component: AddRecipeTESTNOTINCLUDEDComponent;
  let fixture: ComponentFixture<AddRecipeTESTNOTINCLUDEDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeTESTNOTINCLUDEDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeTESTNOTINCLUDEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
