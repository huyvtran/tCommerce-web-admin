import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsGroupComponent } from './fields-group.component';

describe('FieldsGroupComponent', () => {
  let component: FieldsGroupComponent;
  let fixture: ComponentFixture<FieldsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
