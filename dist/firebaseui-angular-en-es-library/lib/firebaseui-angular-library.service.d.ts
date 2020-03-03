import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
export declare class FirebaseuiAngularLibraryService {
    private angularFireAuth;
    firebaseUiInstance: firebaseuiEs.auth.AuthUI;
    currentLanguage: 'en' | 'es';
    constructor(angularFireAuth: AngularFireAuth);
    getInstance(language: 'en' | 'es'): Promise<any>;
}
