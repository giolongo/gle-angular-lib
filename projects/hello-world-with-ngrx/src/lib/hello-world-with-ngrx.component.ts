import { Component, inject, OnInit } from '@angular/core';
import { HelloWorldFacade } from './+state/hello-world.facade';
import { Observable } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'lib-hello-world-with-ngrx',
  standalone: false,
  template: `
      {{message$ | async}}
  `,
  styles: ``
})
export class HelloWorldWithNgrxComponent implements OnInit{

  public message$?: Observable<string>;
  private hwFacade = inject(HelloWorldFacade);


  ngOnInit(): void {
    this.message$ = this.hwFacade.message$

    setInterval(() => {
      this.hwFacade.appendMessage('a');
    }, 10000);
  }

}
