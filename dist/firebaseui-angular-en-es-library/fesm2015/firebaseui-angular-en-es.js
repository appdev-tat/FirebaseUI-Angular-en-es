import { __awaiter } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Component, Inject, NgZone, Output, Input, NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase$1 from 'firebase/app';
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
     * @param {?} language
     * @return {?}
     */
    getInstance(language) {
        return __awaiter(this, void 0, void 0, function* () {
            // return the existing UI instance if it's in the correct language
            if (this.currentLanguage === language) {
                return this.firebaseUiInstance;
            }
            // delete the current UI instance if one already exists
            this.currentLanguage = language;
            if (((/** @type {?} */ (window))).firebaseUiInstance) {
                yield ((/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiInstance))).delete();
            }
            if (language === 'en') {
                ((/** @type {?} */ (window))).firebaseUiInstance = new (yield import('firebaseui-en-es/dist/npm__en')).auth.AuthUI(this.angularFireAuth.auth);
            }
            else {
                ((/** @type {?} */ (window))).firebaseUiInstance = new (yield import('firebaseui-en-es/dist/npm__es')).auth.AuthUI(this.angularFireAuth.auth);
            }
            this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
            return this.firebaseUiInstance;
        });
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
/** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(ɵɵinject(AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.firebaseUiInstance;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.currentLanguage;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.angularFireAuth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const firebase = firebase$1;
/** @type {?} */
const firebaseui = firebaseuiOriginal;
/**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
class FirebaseUIAuthConfig {
}
if (false) {
    /** @type {?} */
    FirebaseUIAuthConfig.prototype.providers;
    /** @type {?} */
    FirebaseUIAuthConfig.prototype.method;
    /** @type {?} */
    FirebaseUIAuthConfig.prototype.signInSuccessUrl;
    /** @type {?} */
    FirebaseUIAuthConfig.prototype.tos;
    /** @type {?} */
    FirebaseUIAuthConfig.prototype.privacyPolicyUrl;
    /** @type {?} */
    FirebaseUIAuthConfig.prototype.credentialHelper;
    /** @type {?} */
    FirebaseUIAuthConfig.prototype.autoUpgradeAnonymousUsers;
    /**
     * Will be default in the future
     * @type {?}
     */
    FirebaseUIAuthConfig.prototype.disableSignInSuccessCallback;
}
class FirebaseUISignInSuccessWithAuthResult {
}
if (false) {
    /** @type {?} */
    FirebaseUISignInSuccessWithAuthResult.prototype.authResult;
    /** @type {?} */
    FirebaseUISignInSuccessWithAuthResult.prototype.redirectUrl;
}
class FirebaseUISignInFailure {
}
if (false) {
    /** @type {?} */
    FirebaseUISignInFailure.prototype.code;
    /** @type {?} */
    FirebaseUISignInFailure.prototype.credential;
}
/**
 * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
 */
class FirebaseUISignInSuccess {
}
if (false) {
    /** @type {?} */
    FirebaseUISignInSuccess.prototype.currentUser;
    /** @type {?} */
    FirebaseUISignInSuccess.prototype.credential;
    /** @type {?} */
    FirebaseUISignInSuccess.prototype.redirectUrl;
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
/**
 * @record
 */
function AuthProviderWithCustomConfig() { }
if (false) {
    /** @type {?} */
    AuthProviderWithCustomConfig.prototype.provider;
    /** @type {?} */
    AuthProviderWithCustomConfig.prototype.customConfig;
}
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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

export { AuthMethods, AuthProvider, CredentialHelper, FirebaseUIAuthConfig, FirebaseUIModule, FirebaseUISignInFailure, FirebaseUISignInSuccess, FirebaseUISignInSuccessWithAuthResult, FirebaseuiAngularLibraryComponent, FirebaseuiAngularLibraryService, firebase, firebaseui };
//# sourceMappingURL=firebaseui-angular-en-es.js.map
