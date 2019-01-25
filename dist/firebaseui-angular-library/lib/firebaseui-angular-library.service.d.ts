import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui-en-es/dist/npm__es';
export declare class FirebaseuiAngularLibraryService {
    firebaseUiInstance: firebaseui.auth.AuthUI;
    constructor(angularFireAuth: AngularFireAuth);
}
