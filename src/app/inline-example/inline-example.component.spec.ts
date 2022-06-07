import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineExampleComponent } from './inline-example.component';

describe('InlineExampleComponent', () => {
  let component: InlineExampleComponent;
  let fixture: ComponentFixture<InlineExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
