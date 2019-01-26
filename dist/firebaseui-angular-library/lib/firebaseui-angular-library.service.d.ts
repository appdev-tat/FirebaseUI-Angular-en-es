import { AngularFireAuth } from '@angular/fire/auth';
export declare class FirebaseuiAngularLibraryService {
    private angularFireAuth;
    firebaseUiInstance: any;
    constructor(angularFireAuth: AngularFireAuth);
    init(library: any): void;
}
