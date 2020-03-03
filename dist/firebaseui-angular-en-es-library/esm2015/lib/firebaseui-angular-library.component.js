/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Inject, NgZone, Output, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthMethods, AuthProvider, CredentialHelper, } from './firebaseui-angular-library.helper';
// noinspection ES6UnusedImports
import * as firebase from 'firebase/app';
import { FirebaseuiAngularLibraryService } from './firebaseui-angular-library.service';
import 'firebase/auth';
var GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
var FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
var TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
var GithubAuthProvider = firebase.auth.GithubAuthProvider;
var EmailAuthProvider = firebase.auth.EmailAuthProvider;
var PhoneAuthProvider = firebase.auth.PhoneAuthProvider;
export class FirebaseuiAngularLibraryComponent {
    /**
     * @param {?} angularFireAuth
     * @param {?} _firebaseUiConfig
     * @param {?} _firebaseUiConfig_Feature
     * @param {?} ngZone
     * @param {?} firebaseUIService
     */
    constructor(angularFireAuth, _firebaseUiConfig, _firebaseUiConfig_Feature, ngZone, firebaseUIService) {
        this.angularFireAuth = angularFireAuth;
        this._firebaseUiConfig = _firebaseUiConfig;
        this._firebaseUiConfig_Feature = _firebaseUiConfig_Feature;
        this.ngZone = ngZone;
        this.firebaseUIService = firebaseUIService;
        /**
         * @deprecated Use signInSuccessWithAuthResult
         */
        this.signInSuccessCallback = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.signInSuccessWithAuthResultCallback = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.signInFailureCallback = new EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        // language must be either 'en' or 'es'
        this.language = 'en';
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    static getAuthProvider(provider) {
        switch (provider) {
            case AuthProvider.Google:
                return GoogleAuthProvider.PROVIDER_ID;
            case AuthProvider.Facebook:
                return FacebookAuthProvider.PROVIDER_ID;
            case AuthProvider.Twitter:
                return TwitterAuthProvider.PROVIDER_ID;
            case AuthProvider.Github:
                return GithubAuthProvider.PROVIDER_ID;
            case AuthProvider.Password:
                return EmailAuthProvider.PROVIDER_ID;
            case AuthProvider.Phone:
                return PhoneAuthProvider.PROVIDER_ID;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (changes.language) {
                if (this.language === 'en') {
                    this.firebaseuiLibrary = yield import('firebaseui-en-es/dist/npm__en');
                }
                else if (this.language === 'es') {
                    this.firebaseuiLibrary = yield import('firebaseui-en-es/dist/npm__es');
                }
                else {
                    console.error('Language must be either "en" or "es"');
                }
            }
            ((/** @type {?} */ (window))).firebaseui = this.firebaseuiLibrary;
        });
    }
    /**
     * @return {?}
     */
    get firebaseUiConfig() {
        return (/** @type {?} */ (Object.assign({}, this._firebaseUiConfig, this._firebaseUiConfig_Feature)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.angularFireAuth.authState.subscribe((value) => {
            if ((value && value.isAnonymous) || !value) {
                if (((/** @type {?} */ (this.firebaseUiConfig))).providers) {
                    // tslint:disable-next-line
                    console.warn(`"FirebaseUIAuthConfig" isn't supported since version 3.3.0 and will be removed in the future.\nPlease use the native configuration of firebaseui "firebaseui.auth.Config"`);
                    console.warn('You can copy your converted configuration:\n', this.getNewConfigurationString(this.getUIAuthConfig()));
                    if (((/** @type {?} */ (this.firebaseUiConfig))).providers.length !== 0) {
                        this.firebaseUIPopup();
                    }
                    else {
                        throw new Error('There must be at least one AuthProvider.');
                    }
                }
                else {
                    if (((/** @type {?} */ (this.firebaseUiConfig))).signInOptions.length !== 0) {
                        this.firebaseUIPopup();
                    }
                    else {
                        throw new Error('There must be at least one AuthProvider.');
                    }
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (!!this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    getUIAuthConfig() {
        if (!((/** @type {?} */ (this.firebaseUiConfig))).providers) {
            if (!((/** @type {?} */ (this.firebaseUiConfig))).callbacks) {
                this._firebaseUiConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS] = true;
                ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = this.getCallbacks();
            }
            return ((/** @type {?} */ (this.firebaseUiConfig)));
        }
        /** @type {?} */
        const authConfig = ((/** @type {?} */ (this.firebaseUiConfig)));
        /** @type {?} */
        const authProviders = [];
        for (let provider of authConfig.providers) {
            if (!!((/** @type {?} */ (provider))).customConfig) {
                provider = ((/** @type {?} */ (provider)));
                /** @type {?} */
                const providerWithConfig = provider.customConfig;
                providerWithConfig['provider'] = FirebaseuiAngularLibraryComponent.getAuthProvider(provider.provider);
                authProviders.push(providerWithConfig);
            }
            else {
                authProviders.push(FirebaseuiAngularLibraryComponent.getAuthProvider((/** @type {?} */ (provider))));
            }
        }
        /** @type {?} */
        const tosURL = authConfig.tos ? authConfig.tos : '';
        /** @type {?} */
        const privacyPolicyUrl = authConfig.privacyPolicyUrl ? authConfig.privacyPolicyUrl : '';
        /** @type {?} */
        let authMethod = 'popup';
        switch (authConfig.method) {
            case AuthMethods.Redirect:
                authMethod = 'redirect';
                break;
            case null:
            case AuthMethods.Popup:
            default:
                break;
        }
        /** @type {?} */
        let credentialHelper;
        switch (authConfig.credentialHelper) {
            case CredentialHelper.None:
                credentialHelper = this.firebaseuiLibrary.auth.CredentialHelper.NONE;
                break;
            case CredentialHelper.OneTap:
                credentialHelper = this.firebaseuiLibrary.auth.CredentialHelper.GOOGLE_YOLO;
                break;
            case CredentialHelper.AccountChooser:
            default:
                credentialHelper = this.firebaseuiLibrary.auth.CredentialHelper.ACCOUNT_CHOOSER_COM;
                break;
        }
        /** @type {?} */
        const autoUpgradeAnonymousUsers = authConfig.autoUpgradeAnonymousUsers == null ? false : authConfig.autoUpgradeAnonymousUsers;
        /** @type {?} */
        const signInSuccessCallback = (currentUser, credential, redirectUrl) => {
            this.ngZone.run(() => {
                this.signInSuccessCallback.emit({
                    currentUser,
                    credential,
                    redirectUrl
                });
            });
            return !!authConfig.signInSuccessUrl;
        };
        /** @type {?} */
        const callbacks = Object.assign({}, this.getCallbacks(), { signInSuccess: null });
        if (!authConfig.disableSignInSuccessCallback) {
            console.warn('[FirebaseUiAngular] signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead.\n' +
                'To remove this warning set disableSignInSuccessCallback on the FirebaseUiConfig Object.');
            callbacks.signInSuccess = signInSuccessCallback;
        }
        /** @type {?} */
        const nativeConfiguration = {
            callbacks: callbacks,
            signInFlow: authMethod,
            signInOptions: authProviders,
            tosUrl: tosURL,
            privacyPolicyUrl: privacyPolicyUrl,
            credentialHelper: credentialHelper,
            autoUpgradeAnonymousUsers: autoUpgradeAnonymousUsers
        };
        if (!!authConfig.signInSuccessUrl) {
            nativeConfiguration.signInSuccessUrl = authConfig.signInSuccessUrl;
        }
        return nativeConfiguration;
    }
    /**
     * @return {?}
     */
    firebaseUIPopup() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const firebaseUiInstance = yield this.firebaseUIService.getInstance(this.language);
            /** @type {?} */
            const uiAuthConfig = this.getUIAuthConfig();
            // Check if callbacks got computed to reset them again after providing the to firebaseui.
            // Necessary for allowing updating the firebaseui config during runtime.
            /** @type {?} */
            let resetCallbacks = false;
            if (uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS]) {
                resetCallbacks = true;
                delete uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS];
            }
            // show the firebaseui
            firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
            if (resetCallbacks) {
                ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = null;
            }
        });
    }
    /**
     * @return {?}
     */
    getCallbacks() {
        /** @type {?} */
        const signInSuccessWithAuthResult = (authResult, redirectUrl) => {
            this.ngZone.run(() => {
                this.signInSuccessWithAuthResultCallback.emit({
                    authResult,
                    redirectUrl
                });
            });
            return this.firebaseUiConfig.signInSuccessUrl;
        };
        /** @type {?} */
        const signInFailureCallback = (error) => {
            this.ngZone.run(() => {
                this.signInFailureCallback.emit({
                    code: error.code,
                    credential: error.credential
                });
            });
            return Promise.reject();
        };
        return {
            signInSuccessWithAuthResult: signInSuccessWithAuthResult,
            signInFailure: signInFailureCallback,
        };
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    getNewConfigurationString(configuration) {
        delete configuration.callbacks;
        if (!configuration.autoUpgradeAnonymousUsers) {
            delete configuration.autoUpgradeAnonymousUsers;
        }
        /** @type {?} */
        let stringifiedConfiguration = JSON.stringify(configuration, null, 2);
        /* tslint:disable */
        stringifiedConfiguration = stringifiedConfiguration.replace('"credentialHelper": "accountchooser.com"', '"credentialHelper": firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM');
        stringifiedConfiguration = stringifiedConfiguration.replace('"credentialHelper": "googleyolo"', '"credentialHelper": firebaseui.auth.CredentialHelper.GOOGLE_YOLO');
        stringifiedConfiguration = stringifiedConfiguration.replace('"credentialHelper": "none"', '"credentialHelper": firebaseui.auth.CredentialHelper.NONE');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "google.com"', '"provider": firebase.auth.GoogleAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "facebook.com"', '"provider": firebase.auth.FacebookAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "twitter.com"', '"provider": firebase.auth.TwitterAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "github.com"', '"provider": firebase.auth.GithubAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "password"', '"provider": firebase.auth.EmailAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"provider": "phone"', '"provider": firebase.auth.PhoneAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"google.com"', 'firebase.auth.GoogleAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"facebook.com"', 'firebase.auth.FacebookAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"twitter.com"', 'firebase.auth.TwitterAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"github.com"', 'firebase.auth.TwitterAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"password"', 'firebase.auth.EmailAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace('"phone"', 'firebase.auth.PhoneAuthProvider.PROVIDER_ID');
        stringifiedConfiguration = stringifiedConfiguration.replace(/"([a-zA-Z0-9]*)": (.*)/g, '$1: $2');
        stringifiedConfiguration = stringifiedConfiguration.replace(/"/g, '\'');
        /* tslint:enable */
        return stringifiedConfiguration;
    }
}
FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS = 'COMPUTED_CALLBACKS';
FirebaseuiAngularLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'firebase-ui',
                template: '<div id="firebaseui-auth-container"></div>'
            }] }
];
/** @nocollapse */
FirebaseuiAngularLibraryComponent.ctorParameters = () => [
    { type: AngularFireAuth },
    { type: undefined, decorators: [{ type: Inject, args: ['firebaseUIAuthConfig',] }] },
    { type: undefined, decorators: [{ type: Inject, args: ['firebaseUIAuthConfigFeature',] }] },
    { type: NgZone },
    { type: FirebaseuiAngularLibraryService }
];
FirebaseuiAngularLibraryComponent.propDecorators = {
    signInSuccessCallback: [{ type: Output, args: ['signInSuccess',] }],
    signInSuccessWithAuthResultCallback: [{ type: Output, args: ['signInSuccessWithAuthResult',] }],
    signInFailureCallback: [{ type: Output, args: ['signInFailure',] }],
    language: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS;
    /**
     * @deprecated Use signInSuccessWithAuthResult
     * @type {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.signInSuccessCallback;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.signInSuccessWithAuthResultCallback;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.signInFailureCallback;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.language;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.subscription;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.firebaseuiLibrary;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.angularFireAuth;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype._firebaseUiConfig;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype._firebaseUiConfig_Feature;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.ngZone;
    /** @type {?} */
    FirebaseuiAngularLibraryComponent.prototype.firebaseUIService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLWVuLWVzLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQWdDLE1BQU0sRUFBRSxLQUFLLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xJLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFFWixnQkFBZ0IsR0FNakIsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFJN0MsT0FBTyxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFFekMsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckYsT0FBTyxlQUFlLENBQUM7QUFDdkIsSUFBTyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzdELElBQU8sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztBQUNqRSxJQUFPLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDL0QsSUFBTyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzdELElBQU8saUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRCxJQUFPLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFPM0QsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7Ozs7SUFrQzVDLFlBQW9CLGVBQWdDLEVBQ0EsaUJBQW9FLEVBQzdELHlCQUE0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QztRQUN4RSxtQkFBbUI7UUFDbkIsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDOztBQXBRdUIsb0RBQWtCLEdBQUcsb0JBQW9CLENBQUM7O1lBTG5FLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLDRDQUE0QzthQUN2RDs7OztZQS9CTyxlQUFlOzRDQW1FUixNQUFNLFNBQUMsc0JBQXNCOzRDQUM3QixNQUFNLFNBQUMsNkJBQTZCO1lBckVWLE1BQU07WUFtQnZDLCtCQUErQjs7O29DQW9CcEMsTUFBTSxTQUFDLGVBQWU7a0RBRXRCLE1BQU0sU0FBQyw2QkFBNkI7b0NBQ3BDLE1BQU0sU0FBQyxlQUFlO3VCQUV0QixLQUFLOzs7O0lBVk4scURBQWtFOzs7OztJQUtsRSxrRUFBMkc7O0lBRTNHLGdGQUFxSjs7SUFDckosa0VBQTJHOztJQUUzRyxxREFBc0M7O0lBRXRDLHlEQUFtQzs7SUFFbkMsOERBQStCOztJQW1CbkIsNERBQXdDOztJQUN4Qyw4REFBNEc7O0lBQzVHLHNFQUEySDs7SUFDM0gsbURBQXNCOztJQUN0Qiw4REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBJbnB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEF1dGhNZXRob2RzLFxuICBBdXRoUHJvdmlkZXIsXG4gIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcsXG4gIENyZWRlbnRpYWxIZWxwZXIsXG4gIEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSxcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3MsXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnLFxufSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRXMgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVuIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJztcbi8vIG5vaW5zcGVjdGlvbiBFUzZVbnVzZWRJbXBvcnRzXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCBHb29nbGVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcjtcbmltcG9ydCBGYWNlYm9va0F1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXI7XG5pbXBvcnQgVHdpdHRlckF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlcjtcbmltcG9ydCBHaXRodWJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcjtcbmltcG9ydCBFbWFpbEF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXI7XG5pbXBvcnQgUGhvbmVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmlyZWJhc2UtdWknLFxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURURfQ0FMTEJBQ0tTID0gJ0NPTVBVVEVEX0NBTExCQUNLUyc7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRcbiAgICovXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3MnKSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQnKSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIEBPdXRwdXQoJ3NpZ25JbkZhaWx1cmUnKSBzaWduSW5GYWlsdXJlQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluRmFpbHVyZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgLy8gbGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgJ2VuJyBvciAnZXMnXG4gIEBJbnB1dCgpIGxhbmd1YWdlOiAnZW4nIHwgJ2VzJyA9ICdlbic7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGZpcmViYXNldWlMaWJyYXJ5OiBhbnk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyOiBBdXRoUHJvdmlkZXIpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkdvb2dsZTpcbiAgICAgICAgcmV0dXJuIEdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkZhY2Vib29rOlxuICAgICAgICByZXR1cm4gRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Ud2l0dGVyOlxuICAgICAgICByZXR1cm4gVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkdpdGh1YjpcbiAgICAgICAgcmV0dXJuIEdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBhc3N3b3JkOlxuICAgICAgICByZXR1cm4gRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QaG9uZTpcbiAgICAgICAgcmV0dXJuIFBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGgsXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlVUlTZXJ2aWNlOiBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuICAgIGlmICggY2hhbmdlcy5sYW5ndWFnZSApIHtcbiAgICAgIGlmICggdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyApIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZXVpTGlicmFyeSA9IGF3YWl0IGltcG9ydCgnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZW4nKTtcbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMubGFuZ3VhZ2UgPT09ICdlcycgKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgPSBhd2FpdCBpbXBvcnQoJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCAnTGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgXCJlblwiIG9yIFwiZXNcIicgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgKDxhbnk+d2luZG93KS5maXJlYmFzZXVpID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeTtcbiAgfVxuXG4gIGdldCBmaXJlYmFzZVVpQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnLFxuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlXG4gICAgfSBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh2YWx1ZTogVXNlcikgPT4ge1xuICAgICAgaWYgKCh2YWx1ZSAmJiB2YWx1ZS5pc0Fub255bW91cykgfHwgIXZhbHVlKSB7XG4gICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFwiRmlyZWJhc2VVSUF1dGhDb25maWdcIiBpc24ndCBzdXBwb3J0ZWQgc2luY2UgdmVyc2lvbiAzLjMuMCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXFxuUGxlYXNlIHVzZSB0aGUgbmF0aXZlIGNvbmZpZ3VyYXRpb24gb2YgZmlyZWJhc2V1aSBcImZpcmViYXNldWkuYXV0aC5Db25maWdcImApO1xuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbiBjb3B5IHlvdXIgY29udmVydGVkIGNvbmZpZ3VyYXRpb246XFxuJywgdGhpcy5nZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCkpKTtcblxuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLnNpZ25Jbk9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICghIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VUlBdXRoQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHtcbiAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xuICAgICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MpIHtcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VVaUNvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSA9IHRydWU7XG4gICAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSB0aGlzLmdldENhbGxiYWNrcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dGhDb25maWc6IEZpcmViYXNlVUlBdXRoQ29uZmlnID0gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZyk7XG5cbiAgICBjb25zdCBhdXRoUHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW107XG4gICAgZm9yIChsZXQgcHJvdmlkZXIgb2YgYXV0aENvbmZpZy5wcm92aWRlcnMpIHtcbiAgICAgIGlmICghIShwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKS5jdXN0b21Db25maWcpIHtcbiAgICAgICAgcHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgcHJvdmlkZXJXaXRoQ29uZmlnID0gcHJvdmlkZXIuY3VzdG9tQ29uZmlnO1xuICAgICAgICBwcm92aWRlcldpdGhDb25maWdbJ3Byb3ZpZGVyJ10gPSBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyKTtcblxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2gocHJvdmlkZXJXaXRoQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvc1VSTCA9IGF1dGhDb25maWcudG9zID8gYXV0aENvbmZpZy50b3MgOiAnJztcbiAgICBjb25zdCBwcml2YWN5UG9saWN5VXJsID0gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsID8gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsIDogJyc7XG5cbiAgICBsZXQgYXV0aE1ldGhvZCA9ICdwb3B1cCc7XG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLm1ldGhvZCkge1xuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5SZWRpcmVjdDpcbiAgICAgICAgYXV0aE1ldGhvZCA9ICdyZWRpcmVjdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5Qb3B1cDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBjcmVkZW50aWFsSGVscGVyO1xuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5jcmVkZW50aWFsSGVscGVyKSB7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuTm9uZTpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk9uZVRhcDpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5BY2NvdW50Q2hvb3NlcjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBhdXRvVXBncmFkZUFub255bW91c1VzZXJzID0gYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzID09IG51bGwgPyBmYWxzZSA6IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcblxuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NDYWxsYmFjayA9IChjdXJyZW50VXNlcjogZmlyZWJhc2UuVXNlciwgY3JlZGVudGlhbDogZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgICAgY3JlZGVudGlhbCxcbiAgICAgICAgICByZWRpcmVjdFVybFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxsYmFja3M6IGFueSA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q2FsbGJhY2tzKCksXG4gICAgICBzaWduSW5TdWNjZXNzOiBudWxsXG4gICAgfTtcblxuICAgIGlmICghYXV0aENvbmZpZy5kaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tGaXJlYmFzZVVpQW5ndWxhcl0gc2lnbkluU3VjY2VzcyBjYWxsYmFjayBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCBjYWxsYmFjayBpbnN0ZWFkLlxcbicgK1xuICAgICAgICAnVG8gcmVtb3ZlIHRoaXMgd2FybmluZyBzZXQgZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjayBvbiB0aGUgRmlyZWJhc2VVaUNvbmZpZyBPYmplY3QuJyk7XG4gICAgICBjYWxsYmFja3Muc2lnbkluU3VjY2VzcyA9IHNpZ25JblN1Y2Nlc3NDYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVDb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IHtcbiAgICAgIGNhbGxiYWNrczogY2FsbGJhY2tzLFxuICAgICAgc2lnbkluRmxvdzogYXV0aE1ldGhvZCxcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IGF1dGhQcm92aWRlcnMsXG4gICAgICB0b3NVcmw6IHRvc1VSTCxcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHByaXZhY3lQb2xpY3lVcmwsXG4gICAgICBjcmVkZW50aWFsSGVscGVyOiBjcmVkZW50aWFsSGVscGVyLFxuICAgICAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VyczogYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vyc1xuICAgIH07XG4gICAgaWYgKCEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsKSB7XG4gICAgICBuYXRpdmVDb25maWd1cmF0aW9uLnNpZ25JblN1Y2Nlc3NVcmwgPSBhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaXJlYmFzZVVJUG9wdXAoKSB7XG4gICAgY29uc3QgZmlyZWJhc2VVaUluc3RhbmNlID0gYXdhaXQgdGhpcy5maXJlYmFzZVVJU2VydmljZS5nZXRJbnN0YW5jZSggdGhpcy5sYW5ndWFnZSApO1xuXG4gICAgY29uc3QgdWlBdXRoQ29uZmlnID0gdGhpcy5nZXRVSUF1dGhDb25maWcoKTtcblxuICAgIC8vIENoZWNrIGlmIGNhbGxiYWNrcyBnb3QgY29tcHV0ZWQgdG8gcmVzZXQgdGhlbSBhZ2FpbiBhZnRlciBwcm92aWRpbmcgdGhlIHRvIGZpcmViYXNldWkuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciBhbGxvd2luZyB1cGRhdGluZyB0aGUgZmlyZWJhc2V1aSBjb25maWcgZHVyaW5nIHJ1bnRpbWUuXG4gICAgbGV0IHJlc2V0Q2FsbGJhY2tzID0gZmFsc2U7XG4gICAgaWYgKHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSkge1xuICAgICAgcmVzZXRDYWxsYmFja3MgPSB0cnVlO1xuICAgICAgZGVsZXRlIHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXTtcbiAgICB9XG5cbiAgICAvLyBzaG93IHRoZSBmaXJlYmFzZXVpXG4gICAgZmlyZWJhc2VVaUluc3RhbmNlLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHVpQXV0aENvbmZpZyk7XG5cbiAgICBpZiAocmVzZXRDYWxsYmFja3MpIHtcbiAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FsbGJhY2tzKCk6IGFueSB7XG4gICAgY29uc3Qgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0ID0gKGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsLCByZWRpcmVjdFVybCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBhdXRoUmVzdWx0LFxuICAgICAgICAgIHJlZGlyZWN0VXJsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVpQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfTtcblxuICAgIGNvbnN0IHNpZ25JbkZhaWx1cmVDYWxsYmFjayA9IChlcnJvcjogZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJRXJyb3IpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluRmFpbHVyZUNhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXG4gICAgICAgICAgY3JlZGVudGlhbDogZXJyb3IuY3JlZGVudGlhbFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcbiAgICAgIHNpZ25JbkZhaWx1cmU6IHNpZ25JbkZhaWx1cmVDYWxsYmFjayxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKGNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTogc3RyaW5nIHtcbiAgICBkZWxldGUgY29uZmlndXJhdGlvbi5jYWxsYmFja3M7XG5cbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vycykge1xuICAgICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcbiAgICB9XG5cbiAgICBsZXQgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlndXJhdGlvbiwgbnVsbCwgMik7XG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiYWNjb3VudGNob29zZXIuY29tXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkFDQ09VTlRfQ0hPT1NFUl9DT00nKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiZ29vZ2xleW9sb1wiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTycpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJub25lXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkUnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ29vZ2xlLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImZhY2Vib29rLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwidHdpdHRlci5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ2l0aHViLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBhc3N3b3JkXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwaG9uZVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ29vZ2xlLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZmFjZWJvb2suY29tXCInLCAnZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInR3aXR0ZXIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ2l0aHViLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBhc3N3b3JkXCInLCAnZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBob25lXCInLCAnZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiKFthLXpBLVowLTldKilcIjogKC4qKS9nLCAnJDE6ICQyJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiL2csICdcXCcnKTtcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbjtcbiAgfVxufVxuIl19