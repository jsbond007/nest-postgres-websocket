import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHorseComponent } from './modify-horse.component';

describe('ModifyHorseComponent', () => {
  let component: ModifyHorseComponent;
  let fixture: ComponentFixture<ModifyHorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
