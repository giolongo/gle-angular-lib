import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-hello-world-no-ngrx',
  imports: [CommonModule],
  template: `
    <p>
      hello-world-no-ngrx works!
      {{'ciao' | uppercase}}
    </p>
  `,
  styles: ``
})
export class HelloWorldNoNgrxComponent {

}
