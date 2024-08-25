import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PokedexAppModule } from './app/pokedex-app.module';

platformBrowserDynamic()
  .bootstrapModule(PokedexAppModule)
  .catch((err) => console.error(err));
