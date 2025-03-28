import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldWithNgrxComponent } from './hello-world-with-ngrx.component';

describe('HelloWorldWithNgrxComponent', () => {
  let component: HelloWorldWithNgrxComponent;
  let fixture: ComponentFixture<HelloWorldWithNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorldWithNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldWithNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
