import { inject, Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as HWSelectors from './hello-world.selector';
import * as HWActions from './hello-world.action';

@Injectable()
export class HelloWorldFacade {

  store = inject(Store);
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  message$ = this.store.pipe(select(HWSelectors.getMessge));

  setMessage(message: string) {
    this.store.dispatch(HWActions.setMessage({ message }));
  }

  appendMessage(messageAppend: string) {
    this.store.dispatch(HWActions.appendMessage({ messageAppend }));
  }

}
