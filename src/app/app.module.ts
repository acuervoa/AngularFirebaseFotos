import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";


// Routes
import { APP_ROUTING } from "./app.routes";

// Config
import { firebaseConfig } from "./config/firebase.config";

// Services
import { CargaImagenesService } from "./providers/carga-imagenes.service";

// Directives
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    APP_ROUTING
  ],
  providers: [
      CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
