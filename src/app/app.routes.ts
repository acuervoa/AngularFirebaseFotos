import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from "./components/carga/carga.component";
import { FotosComponent } from "./components/fotos/fotos.component";


const APP_ROUTES: Routes = [
  { path: 'fotos', component: FotosComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'fotos' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
