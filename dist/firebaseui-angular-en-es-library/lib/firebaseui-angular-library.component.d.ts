import { EventEmitter, NgZone, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUIAuthConfig, FirebaseUISignInFailure, FirebaseUISignInSuccess, FirebaseUISignInSuccessWithAuthResult, NativeFirebaseUIAuthConfig } from './firebaseui-angular-library.helper';
import { FirebaseuiAngularLibraryService } from './firebaseui-angular-library.service';
import 'firebase/auth';
export declare class FirebaseuiAngularLibraryComponent implements OnInit, OnDestroy, OnChanges {
    private angularFireAuth;
    private _firebaseUiConfig;
    private _firebaseUiConfig_Feature;
    private ngZone;
    private firebaseUIService;
    private static readonly COMPUTED_CALLBACKS;
    /**
     * @deprecated Use signInSuccessWithAuthResult
     */
    signInSuccessCallback: EventEmitter<FirebaseUISignInSuccess>;
    signInSuccessWithAuthResultCallback: EventEmitter<FirebaseUISignInSuccessWithAuthResult>;
    signInFailureCallback: EventEmitter<FirebaseUISignInFailure>;
    language: 'en' | 'es';
    private subscription;
    private firebaseuiLibrary;
    private static getAuthProvider;
    constructor(angularFireAuth: AngularFireAuth, _firebaseUiConfig: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig, _firebaseUiConfig_Feature: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig, ngZone: NgZone, firebaseUIService: FirebaseuiAngularLibraryService);
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    readonly firebaseUiConfig: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getUIAuthConfig;
    private firebaseUIPopup;
    private getCallbacks;
    private getNewConfigurationString;
}
