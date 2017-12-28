import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";


// Routes
import { APP_ROUTING } from "./app.routes";

// Config
import { firebaseConfig } from "./config/firebase.config";

// Services
import { CargaImagenesService } from "./providers/carga-imagenes.service";

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    APP_ROUTING
  ],
  providers: [
      CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
