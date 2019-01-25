import { Injectable, Component, EventEmitter, Inject, NgZone, Output, NgModule, defineInjectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui-en-es/dist/npm__es';
import { auth } from 'firebaseui-en-es/dist/npm__es';
import * as firebase from 'firebase/app';
import { auth as auth$1 } from 'firebase/app';
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
        if (!((/** @type {?} */ (window))).firebaseUiEsInstance) {
            ((/** @type {?} */ (window))).firebaseUiEsInstance = new auth.AuthUI(angularFireAuth.auth);
        }
        this.firebaseUiInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEsInstance));
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
const firebaseui$1 = firebaseui;
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
var GoogleAuthProvider = auth$1.GoogleAuthProvider;
var FacebookAuthProvider = auth$1.FacebookAuthProvider;
var TwitterAuthProvider = auth$1.TwitterAuthProvider;
var GithubAuthProvider = auth$1.GithubAuthProvider;
var EmailAuthProvider = auth$1.EmailAuthProvider;
var PhoneAuthProvider = auth$1.PhoneAuthProvider;
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
                credentialHelper = auth.CredentialHelper.NONE;
                break;
            case CredentialHelper.OneTap:
                credentialHelper = auth.CredentialHelper.GOOGLE_YOLO;
                break;
            case CredentialHelper.AccountChooser:
            default:
                credentialHelper = auth.CredentialHelper.ACCOUNT_CHOOSER_COM;
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
        const firebaseUiInstance = this.firebaseUIService.firebaseUiInstance;
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
                selector: 'firebase-ui-es',
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
    signInFailureCallback: [{ type: Output, args: ['signInFailure',] }]
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

export { FirebaseuiAngularLibraryService, FirebaseuiAngularLibraryComponent, firebase$1 as firebase, firebaseui$1 as firebaseui, FirebaseUIAuthConfig, FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure, FirebaseUISignInSuccess, CredentialHelper, AuthProvider, AuthMethods, FirebaseUIModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyLnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSB7XG4gIHB1YmxpYyBmaXJlYmFzZVVpSW5zdGFuY2U6IGZpcmViYXNldWkuYXV0aC5BdXRoVUk7XG5cbiAgY29uc3RydWN0b3IoYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGgpIHtcbiAgICAvLyBzdG9yZSB0aGUgZmlyZWJhc2V1aSBpbnN0YW5jZSBvbiB0aGUgd2luZG93IG9iamVjdCB0byBwcmV2ZW50IGRvdWJsZSBpbml0aWFsaXphdGlvblxuICAgIGlmICghKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRXNJbnN0YW5jZSkge1xuICAgICAgKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRXNJbnN0YW5jZSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGFuZ3VsYXJGaXJlQXV0aC5hdXRoKTtcbiAgICB9XG4gICAgdGhpcy5maXJlYmFzZVVpSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlIGFzIGZpcmViYXNldWkuYXV0aC5BdXRoVUk7XG4gIH1cbn1cbiIsIi8qXG4gKiBDcmVhdGVkIGJ5IFJhcGhhZWwgSmVubmlcbiAqIENvcHlyaWdodCAoYykgMjAxNyBSYXBoYWVsIEplbm5pXG4gKi9cblxuaW1wb3J0ICogYXMgZmlyZWJhc2VPcmlnaW5hbCBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcbmltcG9ydCAqIGFzIGZpcmViYXNldWlPcmlnaW5hbCBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XG5cbmV4cG9ydCBjb25zdCBmaXJlYmFzZSA9IGZpcmViYXNlT3JpZ2luYWw7XG5leHBvcnQgY29uc3QgZmlyZWJhc2V1aSA9IGZpcmViYXNldWlPcmlnaW5hbDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgKGZpcmViYXNldWkuYXV0aC5Db25maWcpXG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gIHByb3ZpZGVyczogQXJyYXk8QXV0aFByb3ZpZGVyIHwgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZz47XG4gIG1ldGhvZD86IEF1dGhNZXRob2RzO1xuICBzaWduSW5TdWNjZXNzVXJsPzogc3RyaW5nO1xuICB0b3M/OiBzdHJpbmc7XG4gIHByaXZhY3lQb2xpY3lVcmw/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxIZWxwZXI/OiBDcmVkZW50aWFsSGVscGVyO1xuICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2lsbCBiZSBkZWZhdWx0IGluIHRoZSBmdXR1cmVcbiAgICovXG4gIGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IGZpcmViYXNldWlPcmlnaW5hbC5hdXRoLkNvbmZpZztcblxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCB7XG4gIGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsO1xuICByZWRpcmVjdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUge1xuICBjb2RlOiBzdHJpbmc7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHR9XG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyB7XG4gIGN1cnJlbnRVc2VyOiBmaXJlYmFzZU9yaWdpbmFsLlVzZXI7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcbn1cblxuXG5leHBvcnQgZW51bSBDcmVkZW50aWFsSGVscGVyIHtcbiAgQWNjb3VudENob29zZXIsIE9uZVRhcCwgTm9uZVxufVxuXG5leHBvcnQgZW51bSBBdXRoUHJvdmlkZXIge1xuICBHb29nbGUsIEZhY2Vib29rLCBUd2l0dGVyLCBHaXRodWIsIFBhc3N3b3JkLCBQaG9uZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcge1xuICBwcm92aWRlcjogQXV0aFByb3ZpZGVyO1xuICBjdXN0b21Db25maWc6IE9iamVjdDtcbn1cblxuZXhwb3J0IGVudW0gQXV0aE1ldGhvZHMge1xuICBQb3B1cCwgUmVkaXJlY3Rcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQXV0aE1ldGhvZHMsXG4gIEF1dGhQcm92aWRlcixcbiAgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyxcbiAgQ3JlZGVudGlhbEhlbHBlcixcbiAgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gIEZpcmViYXNlVUlTaWduSW5GYWlsdXJlLFxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyxcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcbiAgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcsXG59IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuLy8gbm9pbnNwZWN0aW9uIEVTNlVudXNlZEltcG9ydHNcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQge0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2V9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IEdvb2dsZUF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyO1xuaW1wb3J0IEZhY2Vib29rQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcjtcbmltcG9ydCBUd2l0dGVyQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyO1xuaW1wb3J0IEdpdGh1YkF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyO1xuaW1wb3J0IEVtYWlsQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlcjtcbmltcG9ydCBQaG9uZUF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXI7XG5pbXBvcnQgVXNlckNyZWRlbnRpYWwgPSBmaXJlYmFzZS5hdXRoLlVzZXJDcmVkZW50aWFsO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXJlYmFzZS11aS1lcycsXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cImZpcmViYXNldWktYXV0aC1jb250YWluZXJcIj48L2Rpdj4nXG59KVxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURURfQ0FMTEJBQ0tTID0gJ0NPTVBVVEVEX0NBTExCQUNLUyc7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRcbiAgICovXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3MnKSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQnKSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIEBPdXRwdXQoJ3NpZ25JbkZhaWx1cmUnKSBzaWduSW5GYWlsdXJlQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluRmFpbHVyZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgc3RhdGljIGdldEF1dGhQcm92aWRlcihwcm92aWRlcjogQXV0aFByb3ZpZGVyKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHByb3ZpZGVyKSB7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Hb29nbGU6XG4gICAgICAgIHJldHVybiBHb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5GYWNlYm9vazpcbiAgICAgICAgcmV0dXJuIEZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuVHdpdHRlcjpcbiAgICAgICAgcmV0dXJuIFR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5HaXRodWI6XG4gICAgICAgIHJldHVybiBHaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QYXNzd29yZDpcbiAgICAgICAgcmV0dXJuIEVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGhvbmU6XG4gICAgICAgIHJldHVybiBQaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoLFxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZycpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVVJU2VydmljZTogRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSkge1xuICB9XG5cbiAgZ2V0IGZpcmViYXNlVWlDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWcsXG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmVcbiAgICB9IGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWc7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYW5ndWxhckZpcmVBdXRoLmF1dGhTdGF0ZS5zdWJzY3JpYmUoKHZhbHVlOiBVc2VyKSA9PiB7XG4gICAgICBpZiAoKHZhbHVlICYmIHZhbHVlLmlzQW5vbnltb3VzKSB8fCAhdmFsdWUpIHtcbiAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgXCJGaXJlYmFzZVVJQXV0aENvbmZpZ1wiIGlzbid0IHN1cHBvcnRlZCBzaW5jZSB2ZXJzaW9uIDMuMy4wIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cXG5QbGVhc2UgdXNlIHRoZSBuYXRpdmUgY29uZmlndXJhdGlvbiBvZiBmaXJlYmFzZXVpIFwiZmlyZWJhc2V1aS5hdXRoLkNvbmZpZ1wiYCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgY2FuIGNvcHkgeW91ciBjb252ZXJ0ZWQgY29uZmlndXJhdGlvbjpcXG4nLCB0aGlzLmdldE5ld0NvbmZpZ3VyYXRpb25TdHJpbmcodGhpcy5nZXRVSUF1dGhDb25maWcoKSkpO1xuXG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuc2lnbkluT3B0aW9ucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKCEhdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVSUF1dGhDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICAgIGlmICghKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzKSB7XG4gICAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcykge1xuICAgICAgICB0aGlzLl9maXJlYmFzZVVpQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdID0gdHJ1ZTtcbiAgICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IHRoaXMuZ2V0Q2FsbGJhY2tzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgYXV0aENvbmZpZzogRmlyZWJhc2VVSUF1dGhDb25maWcgPSAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKTtcblxuICAgIGNvbnN0IGF1dGhQcm92aWRlcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmb3IgKGxldCBwcm92aWRlciBvZiBhdXRoQ29uZmlnLnByb3ZpZGVycykge1xuICAgICAgaWYgKCEhKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcpLmN1c3RvbUNvbmZpZykge1xuICAgICAgICBwcm92aWRlciA9IChwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKTtcblxuICAgICAgICBjb25zdCBwcm92aWRlcldpdGhDb25maWcgPSBwcm92aWRlci5jdXN0b21Db25maWc7XG4gICAgICAgIHByb3ZpZGVyV2l0aENvbmZpZ1sncHJvdmlkZXInXSA9IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIucHJvdmlkZXIpO1xuXG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChwcm92aWRlcldpdGhDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9zVVJMID0gYXV0aENvbmZpZy50b3MgPyBhdXRoQ29uZmlnLnRvcyA6ICcnO1xuICAgIGNvbnN0IHByaXZhY3lQb2xpY3lVcmwgPSBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgPyBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgOiAnJztcblxuICAgIGxldCBhdXRoTWV0aG9kID0gJ3BvcHVwJztcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcubWV0aG9kKSB7XG4gICAgICBjYXNlIEF1dGhNZXRob2RzLlJlZGlyZWN0OlxuICAgICAgICBhdXRoTWV0aG9kID0gJ3JlZGlyZWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG51bGw6XG4gICAgICBjYXNlIEF1dGhNZXRob2RzLlBvcHVwOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IGNyZWRlbnRpYWxIZWxwZXI7XG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLmNyZWRlbnRpYWxIZWxwZXIpIHtcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5Ob25lOlxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuT25lVGFwOlxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE87XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLkFjY291bnRDaG9vc2VyOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkFDQ09VTlRfQ0hPT1NFUl9DT007XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPSBhdXRoQ29uZmlnLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPT0gbnVsbCA/IGZhbHNlIDogYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzO1xuXG4gICAgY29uc3Qgc2lnbkluU3VjY2Vzc0NhbGxiYWNrID0gKGN1cnJlbnRVc2VyOiBmaXJlYmFzZS5Vc2VyLCBjcmVkZW50aWFsOiBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsLCByZWRpcmVjdFVybDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBjdXJyZW50VXNlcixcbiAgICAgICAgICBjcmVkZW50aWFsLFxuICAgICAgICAgIHJlZGlyZWN0VXJsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGxiYWNrczogYW55ID0ge1xuICAgICAgLi4udGhpcy5nZXRDYWxsYmFja3MoKSxcbiAgICAgIHNpZ25JblN1Y2Nlc3M6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKCFhdXRoQ29uZmlnLmRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgIGNvbnNvbGUud2FybignW0ZpcmViYXNlVWlBbmd1bGFyXSBzaWduSW5TdWNjZXNzIGNhbGxiYWNrIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0IGNhbGxiYWNrIGluc3RlYWQuXFxuJyArXG4gICAgICAgICdUbyByZW1vdmUgdGhpcyB3YXJuaW5nIHNldCBkaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrIG9uIHRoZSBGaXJlYmFzZVVpQ29uZmlnIE9iamVjdC4nKTtcbiAgICAgIGNhbGxiYWNrcy5zaWduSW5TdWNjZXNzID0gc2lnbkluU3VjY2Vzc0NhbGxiYWNrO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdGl2ZUNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnID0ge1xuICAgICAgY2FsbGJhY2tzOiBjYWxsYmFja3MsXG4gICAgICBzaWduSW5GbG93OiBhdXRoTWV0aG9kLFxuICAgICAgc2lnbkluT3B0aW9uczogYXV0aFByb3ZpZGVycyxcbiAgICAgIHRvc1VybDogdG9zVVJMLFxuICAgICAgcHJpdmFjeVBvbGljeVVybDogcHJpdmFjeVBvbGljeVVybCxcbiAgICAgIGNyZWRlbnRpYWxIZWxwZXI6IGNyZWRlbnRpYWxIZWxwZXIsXG4gICAgICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzOiBhdXRvVXBncmFkZUFub255bW91c1VzZXJzXG4gICAgfTtcbiAgICBpZiAoISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmwpIHtcbiAgICAgIG5hdGl2ZUNvbmZpZ3VyYXRpb24uc2lnbkluU3VjY2Vzc1VybCA9IGF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZUNvbmZpZ3VyYXRpb247XG4gIH1cblxuICBwcml2YXRlIGZpcmViYXNlVUlQb3B1cCgpIHtcbiAgICBjb25zdCBmaXJlYmFzZVVpSW5zdGFuY2UgPSB0aGlzLmZpcmViYXNlVUlTZXJ2aWNlLmZpcmViYXNlVWlJbnN0YW5jZTtcbiAgICBjb25zdCB1aUF1dGhDb25maWcgPSB0aGlzLmdldFVJQXV0aENvbmZpZygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgY2FsbGJhY2tzIGdvdCBjb21wdXRlZCB0byByZXNldCB0aGVtIGFnYWluIGFmdGVyIHByb3ZpZGluZyB0aGUgdG8gZmlyZWJhc2V1aS5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIGFsbG93aW5nIHVwZGF0aW5nIHRoZSBmaXJlYmFzZXVpIGNvbmZpZyBkdXJpbmcgcnVudGltZS5cbiAgICBsZXQgcmVzZXRDYWxsYmFja3MgPSBmYWxzZTtcbiAgICBpZiAodWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdKSB7XG4gICAgICByZXNldENhbGxiYWNrcyA9IHRydWU7XG4gICAgICBkZWxldGUgdWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdO1xuICAgIH1cblxuICAgIC8vIHNob3cgdGhlIGZpcmViYXNldWlcbiAgICBmaXJlYmFzZVVpSW5zdGFuY2Uuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlBdXRoQ29uZmlnKTtcblxuICAgIGlmIChyZXNldENhbGxiYWNrcykge1xuICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWxsYmFja3MoKTogYW55IHtcbiAgICBjb25zdCBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgPSAoYXV0aFJlc3VsdDogVXNlckNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdENhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGF1dGhSZXN1bHQsXG4gICAgICAgICAgcmVkaXJlY3RVcmxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlVWlDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2lnbkluRmFpbHVyZUNhbGxiYWNrID0gKGVycm9yOiBmaXJlYmFzZXVpLmF1dGguQXV0aFVJRXJyb3IpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluRmFpbHVyZUNhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXG4gICAgICAgICAgY3JlZGVudGlhbDogZXJyb3IuY3JlZGVudGlhbFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcbiAgICAgIHNpZ25JbkZhaWx1cmU6IHNpZ25JbkZhaWx1cmVDYWxsYmFjayxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKGNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTogc3RyaW5nIHtcbiAgICBkZWxldGUgY29uZmlndXJhdGlvbi5jYWxsYmFja3M7XG5cbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vycykge1xuICAgICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcbiAgICB9XG5cbiAgICBsZXQgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlndXJhdGlvbiwgbnVsbCwgMik7XG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiYWNjb3VudGNob29zZXIuY29tXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkFDQ09VTlRfQ0hPT1NFUl9DT00nKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiZ29vZ2xleW9sb1wiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTycpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJub25lXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkUnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ29vZ2xlLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImZhY2Vib29rLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwidHdpdHRlci5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ2l0aHViLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBhc3N3b3JkXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwaG9uZVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ29vZ2xlLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZmFjZWJvb2suY29tXCInLCAnZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInR3aXR0ZXIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ2l0aHViLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBhc3N3b3JkXCInLCAnZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBob25lXCInLCAnZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiKFthLXpBLVowLTldKilcIjogKC4qKS9nLCAnJDE6ICQyJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiL2csICdcXCcnKTtcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudH0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0ZpcmViYXNlVUlBdXRoQ29uZmlnLCBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZ30gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChmaXJlYmFzZVVpQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJywgdXNlVmFsdWU6IGZpcmViYXNlVWlBdXRoQ29uZmlnfSxcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnLCB1c2VWYWx1ZToge319XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JGZWF0dXJlKGZpcmViYXNlVUlBdXRoQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHwgYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGaXJlYmFzZVVJTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IGZpcmViYXNlVUlBdXRoQ29uZmlnfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaXJlYmFzZXVpLmF1dGgiLCJmaXJlYmFzZSIsImZpcmViYXNlT3JpZ2luYWwiLCJmaXJlYmFzZXVpIiwiZmlyZWJhc2V1aU9yaWdpbmFsIiwiZmlyZWJhc2UuYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE1BT2EsK0JBQStCOzs7O0lBRzFDLFlBQVksZUFBZ0M7O1FBRTFDLElBQUksQ0FBQyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEVBQUU7WUFDdkMsb0JBQU0sTUFBTSxJQUFFLG9CQUFvQixHQUFHLElBQUlBLElBQWUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixzQkFBRyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEVBQTBCLENBQUM7S0FDeEY7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxPLGVBQWU7Ozs7Ozs7OztBQ1F2QixNQUFhQyxVQUFRLEdBQUdDOztBQUN4QixNQUFhQyxZQUFVLEdBQUdDOzs7O0FBSzFCLE1BQWEsb0JBQW9CO0NBYWhDO01BS1kscUNBQXFDO0NBR2pEO01BRVksdUJBQXVCO0NBR25DOzs7O0FBS0QsTUFBYSx1QkFBdUI7Q0FJbkM7OztJQUlDLGlCQUFjLEVBQUUsU0FBTSxFQUFFLE9BQUk7Ozs7Ozs7SUFJNUIsU0FBTSxFQUFFLFdBQVEsRUFBRSxVQUFPLEVBQUUsU0FBTSxFQUFFLFdBQVEsRUFBRSxRQUFLOzs7Ozs7Ozs7O0lBU2xELFFBQUssRUFBRSxXQUFROzs7Ozs7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