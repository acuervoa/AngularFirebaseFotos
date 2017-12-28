import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { FileItem } from "../models/file-item";

import * as firebase from "firebase";

@Injectable()
export class CargaImagenesService {

    items: Observable<any[]>;
    private CARPETA_IMAGENES:string = 'img';

    constructor(db: AngularFirestore) {
        this.items = db.collection('items').valueChanges();
    }

}
