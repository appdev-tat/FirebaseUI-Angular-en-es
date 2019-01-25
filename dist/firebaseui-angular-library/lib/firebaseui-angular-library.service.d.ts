import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui-en-es/dist/npm__en';
export declare class FirebaseuiAngularLibraryService {
    firebaseUiInstance: firebaseui.auth.AuthUI;
    constructor(angularFireAuth: AngularFireAuth);
}
