import { Injectable, Component, EventEmitter, Inject, NgZone, Output, Input, NgModule, defineInjectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
import { auth } from 'firebaseui-en-es/dist/npm__es';
import * as firebaseuiEn from 'firebaseui-en-es/dist/npm__en';
import { auth as auth$1 } from 'firebaseui-en-es/dist/npm__en';
import * as firebase from 'firebase/app';
import { auth as auth$2 } from 'firebase/app';
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
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiEnInstance) {
            ((/** @type {?} */ (window))).firebaseUiEnInstance = new auth$1.AuthUI(angularFireAuth.auth);
            ((/** @type {?} */ (window))).firebaseUiEsInstance = new auth.AuthUI(angularFireAuth.auth);
        }
        this.firebaseUiEnInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEnInstance));
        this.firebaseUiEsInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEsInstance));
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
const firebaseui = firebaseuiEs;
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
var GoogleAuthProvider = auth$2.GoogleAuthProvider;
var FacebookAuthProvider = auth$2.FacebookAuthProvider;
var TwitterAuthProvider = auth$2.TwitterAuthProvider;
var GithubAuthProvider = auth$2.GithubAuthProvider;
var EmailAuthProvider = auth$2.EmailAuthProvider;
var PhoneAuthProvider = auth$2.PhoneAuthProvider;
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
        // tslint:disable-line
        // language must be either 'en' or 'es'
        this.language = 'en'; // tslint:disable-line
        if (this.language === 'en') {
            this.firebaseuiLibrary = firebaseuiEn;
        }
        else if (this.language === 'es') {
            this.firebaseuiLibrary = firebaseuiEs;
        }
        else {
            console.error('Language must be either "en" or "es"');
        }
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
        const firebaseUiInstance = (this.language === 'en') ?
            this.firebaseUIService.firebaseUiEnInstance :
            this.firebaseUIService.firebaseUiEsInstance;
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
    language: [{ type: Input, args: ['language',] }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyLnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRXMgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVuIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSB7XG4gIHB1YmxpYyBmaXJlYmFzZVVpRW5JbnN0YW5jZTogZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJO1xuICBwdWJsaWMgZmlyZWJhc2VVaUVzSW5zdGFuY2U6IGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSTtcblxuICBjb25zdHJ1Y3Rvcihhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCkge1xuICAgIC8vIHN0b3JlIHRoZSBmaXJlYmFzZXVpIGluc3RhbmNlIG9uIHRoZSB3aW5kb3cgb2JqZWN0IHRvIHByZXZlbnQgZG91YmxlIGluaXRpYWxpemF0aW9uXG4gICAgaWYgKCEoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFbkluc3RhbmNlKSB7XG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFbkluc3RhbmNlID0gbmV3IGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSShhbmd1bGFyRmlyZUF1dGguYXV0aCk7XG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlID0gbmV3IGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSShhbmd1bGFyRmlyZUF1dGguYXV0aCk7XG4gICAgfVxuICAgIHRoaXMuZmlyZWJhc2VVaUVuSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFbkluc3RhbmNlIGFzIGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSTtcbiAgICB0aGlzLmZpcmViYXNlVWlFc0luc3RhbmNlID0gKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRXNJbnN0YW5jZSBhcyBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUk7XG4gIH1cbn1cbiIsIi8qXG4gKiBDcmVhdGVkIGJ5IFJhcGhhZWwgSmVubmlcbiAqIENvcHlyaWdodCAoYykgMjAxNyBSYXBoYWVsIEplbm5pXG4gKi9cblxuaW1wb3J0ICogYXMgZmlyZWJhc2VPcmlnaW5hbCBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcbmltcG9ydCAqIGFzIGZpcmViYXNldWlPcmlnaW5hbCBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XG5cbmV4cG9ydCBjb25zdCBmaXJlYmFzZSA9IGZpcmViYXNlT3JpZ2luYWw7XG5leHBvcnQgY29uc3QgZmlyZWJhc2V1aSA9IGZpcmViYXNldWlPcmlnaW5hbDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgKGZpcmViYXNldWkuYXV0aC5Db25maWcpXG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gIHByb3ZpZGVyczogQXJyYXk8QXV0aFByb3ZpZGVyIHwgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZz47XG4gIG1ldGhvZD86IEF1dGhNZXRob2RzO1xuICBzaWduSW5TdWNjZXNzVXJsPzogc3RyaW5nO1xuICB0b3M/OiBzdHJpbmc7XG4gIHByaXZhY3lQb2xpY3lVcmw/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxIZWxwZXI/OiBDcmVkZW50aWFsSGVscGVyO1xuICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2lsbCBiZSBkZWZhdWx0IGluIHRoZSBmdXR1cmVcbiAgICovXG4gIGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IGZpcmViYXNldWlPcmlnaW5hbC5hdXRoLkNvbmZpZztcblxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCB7XG4gIGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsO1xuICByZWRpcmVjdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUge1xuICBjb2RlOiBzdHJpbmc7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHR9XG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyB7XG4gIGN1cnJlbnRVc2VyOiBmaXJlYmFzZU9yaWdpbmFsLlVzZXI7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcbn1cblxuXG5leHBvcnQgZW51bSBDcmVkZW50aWFsSGVscGVyIHtcbiAgQWNjb3VudENob29zZXIsIE9uZVRhcCwgTm9uZVxufVxuXG5leHBvcnQgZW51bSBBdXRoUHJvdmlkZXIge1xuICBHb29nbGUsIEZhY2Vib29rLCBUd2l0dGVyLCBHaXRodWIsIFBhc3N3b3JkLCBQaG9uZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcge1xuICBwcm92aWRlcjogQXV0aFByb3ZpZGVyO1xuICBjdXN0b21Db25maWc6IE9iamVjdDtcbn1cblxuZXhwb3J0IGVudW0gQXV0aE1ldGhvZHMge1xuICBQb3B1cCwgUmVkaXJlY3Rcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEF1dGhNZXRob2RzLFxuICBBdXRoUHJvdmlkZXIsXG4gIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcsXG4gIENyZWRlbnRpYWxIZWxwZXIsXG4gIEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSxcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3MsXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnLFxufSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRXMgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVuIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJztcbi8vIG5vaW5zcGVjdGlvbiBFUzZVbnVzZWRJbXBvcnRzXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCBHb29nbGVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcjtcbmltcG9ydCBGYWNlYm9va0F1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXI7XG5pbXBvcnQgVHdpdHRlckF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlcjtcbmltcG9ydCBHaXRodWJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcjtcbmltcG9ydCBFbWFpbEF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXI7XG5pbXBvcnQgUGhvbmVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmlyZWJhc2UtdWknLFxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVEX0NBTExCQUNLUyA9ICdDT01QVVRFRF9DQUxMQkFDS1MnO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0XG4gICAqL1xuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzJykgc2lnbkluU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgQE91dHB1dCgnc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Jykgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBAT3V0cHV0KCdzaWduSW5GYWlsdXJlJykgc2lnbkluRmFpbHVyZUNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JbkZhaWx1cmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIC8vIGxhbmd1YWdlIG11c3QgYmUgZWl0aGVyICdlbicgb3IgJ2VzJ1xuICBASW5wdXQoJ2xhbmd1YWdlJykgbGFuZ3VhZ2U6IHN0cmluZyA9ICdlbic7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZmlyZWJhc2V1aUxpYnJhcnk6IGFueTtcblxuICBwcml2YXRlIHN0YXRpYyBnZXRBdXRoUHJvdmlkZXIocHJvdmlkZXI6IEF1dGhQcm92aWRlcik6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwcm92aWRlcikge1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR29vZ2xlOlxuICAgICAgICByZXR1cm4gR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuRmFjZWJvb2s6XG4gICAgICAgIHJldHVybiBGYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlR3aXR0ZXI6XG4gICAgICAgIHJldHVybiBUd2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR2l0aHViOlxuICAgICAgICByZXR1cm4gR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGFzc3dvcmQ6XG4gICAgICAgIHJldHVybiBFbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBob25lOlxuICAgICAgICByZXR1cm4gUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWcnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmU6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VVSVNlcnZpY2U6IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2UpIHtcbiAgICAgIGlmICggdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyApIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZXVpTGlicmFyeSA9IGZpcmViYXNldWlFbjtcbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMubGFuZ3VhZ2UgPT09ICdlcycgKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgPSBmaXJlYmFzZXVpRXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCAnTGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgXCJlblwiIG9yIFwiZXNcIicgKTtcbiAgICAgIH1cbiAgfVxuXG4gIGdldCBmaXJlYmFzZVVpQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnLFxuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlXG4gICAgfSBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh2YWx1ZTogVXNlcikgPT4ge1xuICAgICAgaWYgKCh2YWx1ZSAmJiB2YWx1ZS5pc0Fub255bW91cykgfHwgIXZhbHVlKSB7XG4gICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFwiRmlyZWJhc2VVSUF1dGhDb25maWdcIiBpc24ndCBzdXBwb3J0ZWQgc2luY2UgdmVyc2lvbiAzLjMuMCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXFxuUGxlYXNlIHVzZSB0aGUgbmF0aXZlIGNvbmZpZ3VyYXRpb24gb2YgZmlyZWJhc2V1aSBcImZpcmViYXNldWkuYXV0aC5Db25maWdcImApO1xuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbiBjb3B5IHlvdXIgY29udmVydGVkIGNvbmZpZ3VyYXRpb246XFxuJywgdGhpcy5nZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCkpKTtcblxuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLnNpZ25Jbk9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICghIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VUlBdXRoQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHtcbiAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xuICAgICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MpIHtcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VVaUNvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSA9IHRydWU7XG4gICAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSB0aGlzLmdldENhbGxiYWNrcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dGhDb25maWc6IEZpcmViYXNlVUlBdXRoQ29uZmlnID0gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZyk7XG5cbiAgICBjb25zdCBhdXRoUHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW107XG4gICAgZm9yIChsZXQgcHJvdmlkZXIgb2YgYXV0aENvbmZpZy5wcm92aWRlcnMpIHtcbiAgICAgIGlmICghIShwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKS5jdXN0b21Db25maWcpIHtcbiAgICAgICAgcHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgcHJvdmlkZXJXaXRoQ29uZmlnID0gcHJvdmlkZXIuY3VzdG9tQ29uZmlnO1xuICAgICAgICBwcm92aWRlcldpdGhDb25maWdbJ3Byb3ZpZGVyJ10gPSBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyKTtcblxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2gocHJvdmlkZXJXaXRoQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvc1VSTCA9IGF1dGhDb25maWcudG9zID8gYXV0aENvbmZpZy50b3MgOiAnJztcbiAgICBjb25zdCBwcml2YWN5UG9saWN5VXJsID0gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsID8gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsIDogJyc7XG5cbiAgICBsZXQgYXV0aE1ldGhvZCA9ICdwb3B1cCc7XG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLm1ldGhvZCkge1xuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5SZWRpcmVjdDpcbiAgICAgICAgYXV0aE1ldGhvZCA9ICdyZWRpcmVjdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5Qb3B1cDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBjcmVkZW50aWFsSGVscGVyO1xuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5jcmVkZW50aWFsSGVscGVyKSB7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuTm9uZTpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk9uZVRhcDpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5BY2NvdW50Q2hvb3NlcjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBhdXRvVXBncmFkZUFub255bW91c1VzZXJzID0gYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzID09IG51bGwgPyBmYWxzZSA6IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcblxuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NDYWxsYmFjayA9IChjdXJyZW50VXNlcjogZmlyZWJhc2UuVXNlciwgY3JlZGVudGlhbDogZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgICAgY3JlZGVudGlhbCxcbiAgICAgICAgICByZWRpcmVjdFVybFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxsYmFja3M6IGFueSA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q2FsbGJhY2tzKCksXG4gICAgICBzaWduSW5TdWNjZXNzOiBudWxsXG4gICAgfTtcblxuICAgIGlmICghYXV0aENvbmZpZy5kaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tGaXJlYmFzZVVpQW5ndWxhcl0gc2lnbkluU3VjY2VzcyBjYWxsYmFjayBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCBjYWxsYmFjayBpbnN0ZWFkLlxcbicgK1xuICAgICAgICAnVG8gcmVtb3ZlIHRoaXMgd2FybmluZyBzZXQgZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjayBvbiB0aGUgRmlyZWJhc2VVaUNvbmZpZyBPYmplY3QuJyk7XG4gICAgICBjYWxsYmFja3Muc2lnbkluU3VjY2VzcyA9IHNpZ25JblN1Y2Nlc3NDYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVDb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IHtcbiAgICAgIGNhbGxiYWNrczogY2FsbGJhY2tzLFxuICAgICAgc2lnbkluRmxvdzogYXV0aE1ldGhvZCxcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IGF1dGhQcm92aWRlcnMsXG4gICAgICB0b3NVcmw6IHRvc1VSTCxcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHByaXZhY3lQb2xpY3lVcmwsXG4gICAgICBjcmVkZW50aWFsSGVscGVyOiBjcmVkZW50aWFsSGVscGVyLFxuICAgICAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VyczogYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vyc1xuICAgIH07XG4gICAgaWYgKCEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsKSB7XG4gICAgICBuYXRpdmVDb25maWd1cmF0aW9uLnNpZ25JblN1Y2Nlc3NVcmwgPSBhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXJlYmFzZVVJUG9wdXAoKSB7XG4gICAgY29uc3QgZmlyZWJhc2VVaUluc3RhbmNlID0gKCB0aGlzLmxhbmd1YWdlID09PSAnZW4nICkgP1xuICAgICAgdGhpcy5maXJlYmFzZVVJU2VydmljZS5maXJlYmFzZVVpRW5JbnN0YW5jZSA6XG4gICAgICB0aGlzLmZpcmViYXNlVUlTZXJ2aWNlLmZpcmViYXNlVWlFc0luc3RhbmNlO1xuICAgIGNvbnN0IHVpQXV0aENvbmZpZyA9IHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCk7XG5cbiAgICAvLyBDaGVjayBpZiBjYWxsYmFja3MgZ290IGNvbXB1dGVkIHRvIHJlc2V0IHRoZW0gYWdhaW4gYWZ0ZXIgcHJvdmlkaW5nIHRoZSB0byBmaXJlYmFzZXVpLlxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgYWxsb3dpbmcgdXBkYXRpbmcgdGhlIGZpcmViYXNldWkgY29uZmlnIGR1cmluZyBydW50aW1lLlxuICAgIGxldCByZXNldENhbGxiYWNrcyA9IGZhbHNlO1xuICAgIGlmICh1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10pIHtcbiAgICAgIHJlc2V0Q2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgIGRlbGV0ZSB1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU107XG4gICAgfVxuXG4gICAgLy8gc2hvdyB0aGUgZmlyZWJhc2V1aVxuICAgIGZpcmViYXNlVWlJbnN0YW5jZS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB1aUF1dGhDb25maWcpO1xuXG4gICAgaWYgKHJlc2V0Q2FsbGJhY2tzKSB7XG4gICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhbGxiYWNrcygpOiBhbnkge1xuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCA9IChhdXRoUmVzdWx0OiBVc2VyQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgYXV0aFJlc3VsdCxcbiAgICAgICAgICByZWRpcmVjdFVybFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VVaUNvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH07XG5cbiAgICBjb25zdCBzaWduSW5GYWlsdXJlQ2FsbGJhY2sgPSAoZXJyb3I6IGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSUVycm9yKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JbkZhaWx1cmVDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgIGNyZWRlbnRpYWw6IGVycm9yLmNyZWRlbnRpYWxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gICAgICBzaWduSW5GYWlsdXJlOiBzaWduSW5GYWlsdXJlQ2FsbGJhY2ssXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyhjb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk6IHN0cmluZyB7XG4gICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzO1xuXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMpIHtcbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XG4gICAgfVxuXG4gICAgbGV0IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24sIG51bGwsIDIpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImFjY291bnRjaG9vc2VyLmNvbVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImdvb2dsZXlvbG9cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8nKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwibm9uZVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FJyk7XG5cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdvb2dsZS5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJmYWNlYm9vay5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInR3aXR0ZXIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdpdGh1Yi5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwYXNzd29yZFwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGhvbmVcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdvb2dsZS5jb21cIicsICdmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImZhY2Vib29rLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJ0d2l0dGVyLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdpdGh1Yi5jb21cIicsICdmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwYXNzd29yZFwiJywgJ2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwaG9uZVwiJywgJ2ZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIihbYS16QS1aMC05XSopXCI6ICguKikvZywgJyQxOiAkMicpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIi9nLCAnXFwnJyk7XG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgIHJldHVybiBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnR9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aENvbmZpZywgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWd9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZmlyZWJhc2VVaUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZycsIHVzZVZhbHVlOiBmaXJlYmFzZVVpQXV0aENvbmZpZ30sXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IHt9fVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yRmVhdHVyZShmaXJlYmFzZVVJQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB8IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiBmaXJlYmFzZVVJQXV0aENvbmZpZ31cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyZWJhc2V1aUVuLmF1dGgiLCJmaXJlYmFzZXVpRXMuYXV0aCIsImZpcmViYXNlIiwiZmlyZWJhc2VPcmlnaW5hbCIsImZpcmViYXNldWlPcmlnaW5hbCIsImZpcmViYXNlLmF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BUWEsK0JBQStCOzs7O0lBSTFDLFlBQVksZUFBZ0M7O1FBRTFDLElBQUksQ0FBQyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEVBQUU7WUFDdkMsb0JBQU0sTUFBTSxJQUFFLG9CQUFvQixHQUFHLElBQUlBLE1BQWlCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RixvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEdBQUcsSUFBSUMsSUFBaUIsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixzQkFBRyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEVBQTRCLENBQUM7UUFDM0YsSUFBSSxDQUFDLG9CQUFvQixzQkFBRyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEVBQTRCLENBQUM7S0FDNUY7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5PLGVBQWU7Ozs7Ozs7OztBQ1F2QixNQUFhQyxVQUFRLEdBQUdDOztBQUN4QixNQUFhLFVBQVUsR0FBR0M7Ozs7QUFLMUIsTUFB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