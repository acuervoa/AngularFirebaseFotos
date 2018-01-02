import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { FileItem } from "../models/file-item";


import * as firebase from "firebase"

@Injectable()
export class CargaImagenesService {


  private CARPETA_IMAGENES: string = 'img';

  constructor(public db: AngularFireDatabase) {
    //db.list(`/${this.CARPETA_IMAGENES}`).valueChanges().subscribe(console.log);
  }

  listaUltimasImagenes(numeroImagenes: number): AngularFireList<any[]> {
    //
    return this.db.list(`/${this.CARPETA_IMAGENES}`);
      // .valueChanges()
      // .subscribe(items => {
      //   items.map( items => items)
      // });
    //return this.db.list(`/${this.CARPETA_IMAGENES}`);
    // ,
    //   (query) => { return query.limitToLast(numeroImagenes) })
    //   .valueChanges().subscribe();
    // //
  }

  cargar_imagenes_firebase(archivos: FileItem[]) {

    console.log(archivos);
    let storageRef = firebase.storage().ref();

    for (let item of archivos) {
      item.estaSubiendo = true;

      let uploadTask: firebase.storage.UploadTask =
        storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
          .put(item.archivo)

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,

        (snapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error("Error al subir ", error),
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
        }


      )
    }

  }

  private guardarImagen(imagen: any) {
    this.db.list(`/${this.CARPETA_IMAGENES}`)
      .push(imagen);
  }

}
