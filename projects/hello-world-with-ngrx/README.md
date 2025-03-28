# How to use it

Install and import NgRx Store and Effect

# For Standalone Component

In app.config.ts

`export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot({}),
      EffectsModule.forRoot([])
    ),
  ]
};`

