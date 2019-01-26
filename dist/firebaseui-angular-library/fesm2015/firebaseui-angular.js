import { Injectable, NgModule, Component, EventEmitter, Inject, NgZone, Output, Input, defineInjectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import * as firebaseuiOriginal from 'firebaseui-en-es/dist/npm__es';
import 'firebase/auth';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FirebaseuiAngularLibraryService {
    /**
     * @param {?} angularFireAuth
     */
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    /**
     * @param {?} library
     * @return {?}
     */
    init(library) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiInstance) {
            ((/** @type {?} */ (window))).firebaseUiInstance = new library.auth.AuthUI(this.angularFireAuth.auth);
        }
        this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
    }
}
FirebaseuiAngularLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FirebaseuiAngularLibraryService.ctorParameters = () => [
    { type: AngularFireAuth }
];
/** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = defineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(inject(AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const firebase$1 = firebase;
/** @type {?} */
const firebaseui = firebaseuiOriginal;
/**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
class FirebaseUIAuthConfig {
}
class FirebaseUISignInSuccessWithAuthResult {
}
class FirebaseUISignInFailure {
}
/**
 * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
 */
class FirebaseUISignInSuccess {
}
/** @enum {number} */
const CredentialHelper = {
    AccountChooser: 0, OneTap: 1, None: 2,
};
CredentialHelper[CredentialHelper.AccountChooser] = 'AccountChooser';
CredentialHelper[CredentialHelper.OneTap] = 'OneTap';
CredentialHelper[CredentialHelper.None] = 'None';
/** @enum {number} */
const AuthProvider = {
    Google: 0, Facebook: 1, Twitter: 2, Github: 3, Password: 4, Phone: 5,
};
AuthProvider[AuthProvider.Google] = 'Google';
AuthProvider[AuthProvider.Facebook] = 'Facebook';
AuthProvider[AuthProvider.Twitter] = 'Twitter';
AuthProvider[AuthProvider.Github] = 'Github';
AuthProvider[AuthProvider.Password] = 'Password';
AuthProvider[AuthProvider.Phone] = 'Phone';
/** @enum {number} */
const AuthMethods = {
    Popup: 0, Redirect: 1,
};
AuthMethods[AuthMethods.Popup] = 'Popup';
AuthMethods[AuthMethods.Redirect] = 'Redirect';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var GoogleAuthProvider = auth.GoogleAuthProvider;
var FacebookAuthProvider = auth.FacebookAuthProvider;
var TwitterAuthProvider = auth.TwitterAuthProvider;
var GithubAuthProvider = auth.GithubAuthProvider;
var EmailAuthProvider = auth.EmailAuthProvider;
var PhoneAuthProvider = auth.PhoneAuthProvider;
class FirebaseuiAngularLibraryComponent {
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
     * @return {?}
     */
    get firebaseUiConfig() {
        return (/** @type {?} */ (Object.assign({}, this._firebaseUiConfig, this._firebaseUiConfig_Feature)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (['en', 'es'].indexOf(this.language) === -1) {
            console.error('Language must be either "en" or "es"');
            return;
        }
        else {
            this.firebaseuiLibrary = (this.language === 'en') ?
                require('firebaseui-en-es/dist/npm__en') :
                require('firebaseui-en-es/dist/npm__es');
            this.firebaseUIService.init(this.firebaseuiLibrary);
        }
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
        this.firebaseUIService.firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
        if (resetCallbacks) {
            ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = null;
        }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FirebaseUIModule {
    /**
     * @param {?} firebaseUiAuthConfig
     * @return {?}
     */
    static forRoot(firebaseUiAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfig', useValue: firebaseUiAuthConfig },
                { provide: 'firebaseUIAuthConfigFeature', useValue: {} }
            ]
        };
    }
    /**
     * @param {?} firebaseUIAuthConfig
     * @return {?}
     */
    static forFeature(firebaseUIAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfigFeature', useValue: firebaseUIAuthConfig }
            ]
        };
    }
}
FirebaseUIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [FirebaseuiAngularLibraryComponent],
                exports: [FirebaseuiAngularLibraryComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { FirebaseuiAngularLibraryService, FirebaseuiAngularLibraryComponent, firebase$1 as firebase, firebaseui, FirebaseUIAuthConfig, FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure, FirebaseUISignInSuccess, CredentialHelper, AuthProvider, AuthMethods, FirebaseUIModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyLnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBmaXJlYmFzZVVpSW5zdGFuY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGggKSB7fVxyXG4gICAgXHJcbiAgaW5pdCggbGlicmFyeTogYW55ICkge1xyXG4gICAgLy8gc3RvcmUgdGhlIGZpcmViYXNldWkgaW5zdGFuY2Ugb24gdGhlIHdpbmRvdyBvYmplY3QgdG8gcHJldmVudCBkb3VibGUgaW5pdGlhbGl6YXRpb25cclxuICAgIGlmICggISg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlICkge1xyXG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlJbnN0YW5jZSA9IG5ldyBsaWJyYXJ5LmF1dGguQXV0aFVJKCB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcmViYXNlVWlJbnN0YW5jZSA9ICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDcmVhdGVkIGJ5IFJhcGhhZWwgSmVubmlcclxuICogQ29weXJpZ2h0IChjKSAyMDE3IFJhcGhhZWwgSmVubmlcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZU9yaWdpbmFsIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNldWlPcmlnaW5hbCBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmlyZWJhc2UgPSBmaXJlYmFzZU9yaWdpbmFsO1xyXG5leHBvcnQgY29uc3QgZmlyZWJhc2V1aSA9IGZpcmViYXNldWlPcmlnaW5hbDtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgKGZpcmViYXNldWkuYXV0aC5Db25maWcpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSUF1dGhDb25maWcge1xyXG4gIHByb3ZpZGVyczogQXJyYXk8QXV0aFByb3ZpZGVyIHwgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZz47XHJcbiAgbWV0aG9kPzogQXV0aE1ldGhvZHM7XHJcbiAgc2lnbkluU3VjY2Vzc1VybD86IHN0cmluZztcclxuICB0b3M/OiBzdHJpbmc7XHJcbiAgcHJpdmFjeVBvbGljeVVybD86IHN0cmluZztcclxuICBjcmVkZW50aWFsSGVscGVyPzogQ3JlZGVudGlhbEhlbHBlcjtcclxuICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2lsbCBiZSBkZWZhdWx0IGluIHRoZSBmdXR1cmVcclxuICAgKi9cclxuICBkaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgPSBmaXJlYmFzZXVpT3JpZ2luYWwuYXV0aC5Db25maWc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQge1xyXG4gIGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsO1xyXG4gIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSB7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyB7XHJcbiAgY3VycmVudFVzZXI6IGZpcmViYXNlT3JpZ2luYWwuVXNlcjtcclxuICBjcmVkZW50aWFsOiBmaXJlYmFzZU9yaWdpbmFsLmF1dGguQXV0aENyZWRlbnRpYWw7XHJcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIENyZWRlbnRpYWxIZWxwZXIge1xyXG4gIEFjY291bnRDaG9vc2VyLCBPbmVUYXAsIE5vbmVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aFByb3ZpZGVyIHtcclxuICBHb29nbGUsIEZhY2Vib29rLCBUd2l0dGVyLCBHaXRodWIsIFBhc3N3b3JkLCBQaG9uZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcge1xyXG4gIHByb3ZpZGVyOiBBdXRoUHJvdmlkZXI7XHJcbiAgY3VzdG9tQ29uZmlnOiBPYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhNZXRob2RzIHtcclxuICBQb3B1cCwgUmVkaXJlY3RcclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIEF1dGhNZXRob2RzLFxyXG4gIEF1dGhQcm92aWRlcixcclxuICBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnLFxyXG4gIENyZWRlbnRpYWxIZWxwZXIsXHJcbiAgRmlyZWJhc2VVSUF1dGhDb25maWcsXHJcbiAgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUsXHJcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3MsXHJcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcclxuICBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyxcclxufSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XHJcbi8vIG5vaW5zcGVjdGlvbiBFUzZVbnVzZWRJbXBvcnRzXHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgR29vZ2xlQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBGYWNlYm9va0F1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBUd2l0dGVyQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyO1xyXG5pbXBvcnQgR2l0aHViQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBFbWFpbEF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBQaG9uZUF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XHJcblxyXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmlyZWJhc2UtdWknLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cImZpcmViYXNldWktYXV0aC1jb250YWluZXJcIj48L2Rpdj4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURURfQ0FMTEJBQ0tTID0gJ0NPTVBVVEVEX0NBTExCQUNLUyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRcclxuICAgKi9cclxuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzJykgc2lnbkluU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcblxyXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCcpIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuICBAT3V0cHV0KCdzaWduSW5GYWlsdXJlJykgc2lnbkluRmFpbHVyZUNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JbkZhaWx1cmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbiAgLy8gbGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgJ2VuJyBvciAnZXMnXHJcbiAgQElucHV0KCkgbGFuZ3VhZ2U6IHN0cmluZzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIGZpcmViYXNldWlMaWJyYXJ5OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldEF1dGhQcm92aWRlcihwcm92aWRlcjogQXV0aFByb3ZpZGVyKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR29vZ2xlOlxyXG4gICAgICAgIHJldHVybiBHb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkZhY2Vib29rOlxyXG4gICAgICAgIHJldHVybiBGYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuVHdpdHRlcjpcclxuICAgICAgICByZXR1cm4gVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR2l0aHViOlxyXG4gICAgICAgIHJldHVybiBHaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBhc3N3b3JkOlxyXG4gICAgICAgIHJldHVybiBFbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGhvbmU6XHJcbiAgICAgICAgcmV0dXJuIFBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcclxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZycpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXHJcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVVJU2VydmljZTogRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpcmViYXNlVWlDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnLFxyXG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmVcclxuICAgIH0gYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCBbJ2VuJywnZXMnXS5pbmRleE9mKHRoaXMubGFuZ3VhZ2UpID09PSAtMSApIHtcclxuICAgICAgY29uc29sZS5lcnJvciggJ0xhbmd1YWdlIG11c3QgYmUgZWl0aGVyIFwiZW5cIiBvciBcImVzXCInICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgPSAoIHRoaXMubGFuZ3VhZ2UgPT09ICdlbicgKSA/XHJcbiAgICAgICAgcmVxdWlyZSggJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJyApIDpcclxuICAgICAgICByZXF1aXJlKCAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnICk7XHJcbiAgICAgIHRoaXMuZmlyZWJhc2VVSVNlcnZpY2UuaW5pdCggdGhpcy5maXJlYmFzZXVpTGlicmFyeSApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hbmd1bGFyRmlyZUF1dGguYXV0aFN0YXRlLnN1YnNjcmliZSgodmFsdWU6IFVzZXIpID0+IHtcclxuICAgICAgaWYgKCh2YWx1ZSAmJiB2YWx1ZS5pc0Fub255bW91cykgfHwgIXZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFwiRmlyZWJhc2VVSUF1dGhDb25maWdcIiBpc24ndCBzdXBwb3J0ZWQgc2luY2UgdmVyc2lvbiAzLjMuMCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXFxuUGxlYXNlIHVzZSB0aGUgbmF0aXZlIGNvbmZpZ3VyYXRpb24gb2YgZmlyZWJhc2V1aSBcImZpcmViYXNldWkuYXV0aC5Db25maWdcImApO1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgY2FuIGNvcHkgeW91ciBjb252ZXJ0ZWQgY29uZmlndXJhdGlvbjpcXG4nLCB0aGlzLmdldE5ld0NvbmZpZ3VyYXRpb25TdHJpbmcodGhpcy5nZXRVSUF1dGhDb25maWcoKSkpO1xyXG5cclxuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLnNpZ25Jbk9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAoISF0aGlzLnN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVSUF1dGhDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcge1xyXG4gICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcclxuICAgICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MpIHtcclxuICAgICAgICB0aGlzLl9maXJlYmFzZVVpQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gdGhpcy5nZXRDYWxsYmFja3MoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0aENvbmZpZzogRmlyZWJhc2VVSUF1dGhDb25maWcgPSAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKTtcclxuXHJcbiAgICBjb25zdCBhdXRoUHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBmb3IgKGxldCBwcm92aWRlciBvZiBhdXRoQ29uZmlnLnByb3ZpZGVycykge1xyXG4gICAgICBpZiAoISEocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZykuY3VzdG9tQ29uZmlnKSB7XHJcbiAgICAgICAgcHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyV2l0aENvbmZpZyA9IHByb3ZpZGVyLmN1c3RvbUNvbmZpZztcclxuICAgICAgICBwcm92aWRlcldpdGhDb25maWdbJ3Byb3ZpZGVyJ10gPSBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyKTtcclxuXHJcbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKHByb3ZpZGVyV2l0aENvbmZpZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3NVUkwgPSBhdXRoQ29uZmlnLnRvcyA/IGF1dGhDb25maWcudG9zIDogJyc7XHJcbiAgICBjb25zdCBwcml2YWN5UG9saWN5VXJsID0gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsID8gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsIDogJyc7XHJcblxyXG4gICAgbGV0IGF1dGhNZXRob2QgPSAncG9wdXAnO1xyXG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLm1ldGhvZCkge1xyXG4gICAgICBjYXNlIEF1dGhNZXRob2RzLlJlZGlyZWN0OlxyXG4gICAgICAgIGF1dGhNZXRob2QgPSAncmVkaXJlY3QnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIG51bGw6XHJcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUG9wdXA6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNyZWRlbnRpYWxIZWxwZXI7XHJcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcuY3JlZGVudGlhbEhlbHBlcikge1xyXG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuTm9uZTpcclxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk9uZVRhcDpcclxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE87XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5BY2NvdW50Q2hvb3NlcjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuQUNDT1VOVF9DSE9PU0VSX0NPTTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRvVXBncmFkZUFub255bW91c1VzZXJzID0gYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzID09IG51bGwgPyBmYWxzZSA6IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcclxuXHJcbiAgICBjb25zdCBzaWduSW5TdWNjZXNzQ2FsbGJhY2sgPSAoY3VycmVudFVzZXI6IGZpcmViYXNlLlVzZXIsIGNyZWRlbnRpYWw6IGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwsIHJlZGlyZWN0VXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NDYWxsYmFjay5lbWl0KHtcclxuICAgICAgICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgICAgICAgY3JlZGVudGlhbCxcclxuICAgICAgICAgIHJlZGlyZWN0VXJsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrczogYW55ID0ge1xyXG4gICAgICAuLi50aGlzLmdldENhbGxiYWNrcygpLFxyXG4gICAgICBzaWduSW5TdWNjZXNzOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghYXV0aENvbmZpZy5kaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW0ZpcmViYXNlVWlBbmd1bGFyXSBzaWduSW5TdWNjZXNzIGNhbGxiYWNrIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0IGNhbGxiYWNrIGluc3RlYWQuXFxuJyArXHJcbiAgICAgICAgJ1RvIHJlbW92ZSB0aGlzIHdhcm5pbmcgc2V0IGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2sgb24gdGhlIEZpcmViYXNlVWlDb25maWcgT2JqZWN0LicpO1xyXG4gICAgICBjYWxsYmFja3Muc2lnbkluU3VjY2VzcyA9IHNpZ25JblN1Y2Nlc3NDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYXRpdmVDb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IHtcclxuICAgICAgY2FsbGJhY2tzOiBjYWxsYmFja3MsXHJcbiAgICAgIHNpZ25JbkZsb3c6IGF1dGhNZXRob2QsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IGF1dGhQcm92aWRlcnMsXHJcbiAgICAgIHRvc1VybDogdG9zVVJMLFxyXG4gICAgICBwcml2YWN5UG9saWN5VXJsOiBwcml2YWN5UG9saWN5VXJsLFxyXG4gICAgICBjcmVkZW50aWFsSGVscGVyOiBjcmVkZW50aWFsSGVscGVyLFxyXG4gICAgICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzOiBhdXRvVXBncmFkZUFub255bW91c1VzZXJzXHJcbiAgICB9O1xyXG4gICAgaWYgKCEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsKSB7XHJcbiAgICAgIG5hdGl2ZUNvbmZpZ3VyYXRpb24uc2lnbkluU3VjY2Vzc1VybCA9IGF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVDb25maWd1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXJlYmFzZVVJUG9wdXAoKSB7XHJcbiAgICBjb25zdCB1aUF1dGhDb25maWcgPSB0aGlzLmdldFVJQXV0aENvbmZpZygpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGNhbGxiYWNrcyBnb3QgY29tcHV0ZWQgdG8gcmVzZXQgdGhlbSBhZ2FpbiBhZnRlciBwcm92aWRpbmcgdGhlIHRvIGZpcmViYXNldWkuXHJcbiAgICAvLyBOZWNlc3NhcnkgZm9yIGFsbG93aW5nIHVwZGF0aW5nIHRoZSBmaXJlYmFzZXVpIGNvbmZpZyBkdXJpbmcgcnVudGltZS5cclxuICAgIGxldCByZXNldENhbGxiYWNrcyA9IGZhbHNlO1xyXG4gICAgaWYgKHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSkge1xyXG4gICAgICByZXNldENhbGxiYWNrcyA9IHRydWU7XHJcbiAgICAgIGRlbGV0ZSB1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hvdyB0aGUgZmlyZWJhc2V1aVxyXG4gICAgdGhpcy5maXJlYmFzZVVJU2VydmljZS5maXJlYmFzZVVpSW5zdGFuY2Uuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlBdXRoQ29uZmlnKTtcclxuXHJcbiAgICBpZiAocmVzZXRDYWxsYmFja3MpIHtcclxuICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENhbGxiYWNrcygpOiBhbnkge1xyXG4gICAgY29uc3Qgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0ID0gKGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsLCByZWRpcmVjdFVybCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2suZW1pdCh7XHJcbiAgICAgICAgICBhdXRoUmVzdWx0LFxyXG4gICAgICAgICAgcmVkaXJlY3RVcmxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlVWlDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2lnbkluRmFpbHVyZUNhbGxiYWNrID0gKGVycm9yOiBhbnkgKSA9PiB7IC8vIGVycm9yIHR5cGUgaXMgZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJRXJyb3JcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNpZ25JbkZhaWx1cmVDYWxsYmFjay5lbWl0KHtcclxuICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXHJcbiAgICAgICAgICBjcmVkZW50aWFsOiBlcnJvci5jcmVkZW50aWFsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXHJcbiAgICAgIHNpZ25JbkZhaWx1cmU6IHNpZ25JbkZhaWx1cmVDYWxsYmFjayxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5ld0NvbmZpZ3VyYXRpb25TdHJpbmcoY29uZmlndXJhdGlvbjogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpOiBzdHJpbmcge1xyXG4gICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzO1xyXG5cclxuICAgIGlmICghY29uZmlndXJhdGlvbi5hdXRvVXBncmFkZUFub255bW91c1VzZXJzKSB7XHJcbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24sIG51bGwsIDIpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJhY2NvdW50Y2hvb3Nlci5jb21cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuQUNDT1VOVF9DSE9PU0VSX0NPTScpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImdvb2dsZXlvbG9cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8nKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJub25lXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkUnKTtcclxuXHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdvb2dsZS5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImZhY2Vib29rLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJ0d2l0dGVyLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdpdGh1Yi5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBhc3N3b3JkXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBob25lXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcblxyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ29vZ2xlLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJmYWNlYm9vay5jb21cIicsICdmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJ0d2l0dGVyLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ2l0aHViLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicGFzc3dvcmRcIicsICdmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwaG9uZVwiJywgJ2ZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuXHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgvXCIoW2EtekEtWjAtOV0qKVwiOiAoLiopL2csICckMTogJDInKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIi9nLCAnXFwnJyk7XHJcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICByZXR1cm4gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnR9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGhDb25maWcsIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoZmlyZWJhc2VVaUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGaXJlYmFzZVVJTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJywgdXNlVmFsdWU6IGZpcmViYXNlVWlBdXRoQ29uZmlnfSxcclxuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiB7fX1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JGZWF0dXJlKGZpcmViYXNlVUlBdXRoQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHwgYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnLCB1c2VWYWx1ZTogZmlyZWJhc2VVSUF1dGhDb25maWd9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlT3JpZ2luYWwiLCJmaXJlYmFzZS5hdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQU1hLCtCQUErQjs7OztJQUcxQyxZQUFxQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7S0FBSzs7Ozs7SUFFMUQsSUFBSSxDQUFFLE9BQVk7O1FBRWhCLElBQUssQ0FBQyxvQkFBTSxNQUFNLElBQUUsa0JBQWtCLEVBQUc7WUFDdkMsb0JBQU0sTUFBTSxJQUFFLGtCQUFrQixHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsQ0FBQztTQUN6RjtRQUNELElBQUksQ0FBQyxr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