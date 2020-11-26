import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtableComponent } from './mtable.component';

describe('MtableComponent', () => {
  let component: MtableComponent;
  let fixture: ComponentFixture<MtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
