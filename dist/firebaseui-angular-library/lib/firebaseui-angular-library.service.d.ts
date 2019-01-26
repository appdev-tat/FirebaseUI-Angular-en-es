import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
import * as firebaseuiEn from 'firebaseui-en-es/dist/npm__en';
export declare class FirebaseuiAngularLibraryService {
    firebaseUiEnInstance: firebaseuiEn.auth.AuthUI;
    firebaseUiEsInstance: firebaseuiEs.auth.AuthUI;
    constructor(angularFireAuth: AngularFireAuth);
}
