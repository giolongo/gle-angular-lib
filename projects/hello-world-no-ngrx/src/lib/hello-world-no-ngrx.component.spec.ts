import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldNoNgrxComponent } from './hello-world-no-ngrx.component';

describe('HelloWorldNoNgrxComponent', () => {
  let component: HelloWorldNoNgrxComponent;
  let fixture: ComponentFixture<HelloWorldNoNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorldNoNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldNoNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
