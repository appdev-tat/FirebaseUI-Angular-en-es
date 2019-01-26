import { EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUIAuthConfig, FirebaseUISignInFailure, FirebaseUISignInSuccess, FirebaseUISignInSuccessWithAuthResult, NativeFirebaseUIAuthConfig } from './firebaseui-angular-library.helper';
import { FirebaseuiAngularLibraryService } from './firebaseui-angular-library.service';
import 'firebase/auth';
export declare class FirebaseuiAngularLibraryComponent implements OnInit, OnDestroy {
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
    language: string;
    private subscription;
    private firebaseuiLibrary;
    private static getAuthProvider;
    constructor(angularFireAuth: AngularFireAuth, _firebaseUiConfig: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig, _firebaseUiConfig_Feature: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig, ngZone: NgZone, firebaseUIService: FirebaseuiAngularLibraryService);
    readonly firebaseUiConfig: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getUIAuthConfig;
    private firebaseUIPopup;
    private getCallbacks;
    private getNewConfigurationString;
}
