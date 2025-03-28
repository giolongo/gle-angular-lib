import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import * as HWActions from './hello-world.action';
import { map } from "rxjs";

@Injectable()
export class HelloWorldEffects implements OnInitEffects{
  private store = inject(Store);
  private actions$ = inject(Actions);
  /**
   * Effect che torna un array di clienti associati a un tipo emissione, che sono le chiavi che identificano il flusso
   * */
  getClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HWActions.setFirstMessage),
      map((action) => {
        return HWActions.setMessage({message: action.message})
      }),
    )
  );

  // getClients$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ConfigActions.getClients),
  //     switchMap(() => {
  //       return this.configDataAccessService.getClients().pipe(
  //         map((clients) => ConfigActions.loadClients({ clients })),
  //         catchError(() => {
  //           return of(ConfigActions.getClientsFailed());
  //         }),
  //         endLoading(this.sharedLoaderService)
  //       );
  //     })
  //   )
  // );

  ngrxOnInitEffects() {
    return HWActions.setFirstMessage({message: "Hello World"});
  }
}
