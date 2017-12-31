import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { FileItem } from "../models/file-item";

import * as firebase from "firebase"

@Injectable()
export class CargaImagenesService {


    private CARPETA_IMAGENES: string = 'img';

    constructor(public db:AngularFireDatabase) { }

    listaUltimasImagenes(numeroImagenes: number): AngularFireList<any[]> {

        return this.db.list(`/${this.CARPETA_IMAGENES}`)
            
    }

    cargar_imagenes_firebase(archivos: FileItem[]) {

        console.log(archivos);

    }

    private guardarImagen(imagen: any) {
        this.db.list(`/${this.CARPETA_IMAGENES}`)
            .push(imagen);
    }

}
