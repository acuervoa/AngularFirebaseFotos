import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from "../../providers/carga-imagenes.service";
import { AngularFireList } from "angularfire2/database";
import "rxjs/Rx";

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  imagenes: any[];

  constructor(public _cargaImagenes: CargaImagenesService ) {

    this.imagenes = this._cargaImagenes.listaUltimasImagenes(10)
      .valueChanges()
      .subscribe(items => { return items.map( items => items.values ) });
    console.log(this.imagenes);
  }

  ngOnInit() {
  }

}
