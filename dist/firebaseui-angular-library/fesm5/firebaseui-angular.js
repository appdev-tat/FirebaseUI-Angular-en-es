import { Injectable, NgModule, defineInjectable, inject, EventEmitter, Component, Inject, NgZone, Output, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
import { auth } from 'firebaseui-en-es/dist/npm__es';
import * as firebaseuiEn from 'firebaseui-en-es/dist/npm__en';
import { auth as auth$1 } from 'firebaseui-en-es/dist/npm__en';
import * as firebase from 'firebase/app';
import { auth as auth$2 } from 'firebase/app';
import { __assign, __values } from 'tslib';
import 'firebase/auth';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var FirebaseuiAngularLibraryService = /** @class */ (function () {
    function FirebaseuiAngularLibraryService(angularFireAuth) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiEnInstance) {
            ((/** @type {?} */ (window))).firebaseUiEnInstance = new auth$1.AuthUI(angularFireAuth.auth);
            ((/** @type {?} */ (window))).firebaseUiEsInstance = new auth.AuthUI(angularFireAuth.auth);
        }
        this.firebaseUiEnInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEnInstance));
        this.firebaseUiEsInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEsInstance));
    }
    FirebaseuiAngularLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FirebaseuiAngularLibraryService.ctorParameters = function () { return [
        { type: AngularFireAuth }
    ]; };
    /** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = defineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(inject(AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
    return FirebaseuiAngularLibraryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var firebase$1 = firebase;
/** @type {?} */
var firebaseui = firebaseuiEs;
/**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
var  /**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
FirebaseUIAuthConfig = /** @class */ (function () {
    function FirebaseUIAuthConfig() {
    }
    return FirebaseUIAuthConfig;
}());
var FirebaseUISignInSuccessWithAuthResult = /** @class */ (function () {
    function FirebaseUISignInSuccessWithAuthResult() {
    }
    return FirebaseUISignInSuccessWithAuthResult;
}());
var FirebaseUISignInFailure = /** @class */ (function () {
    function FirebaseUISignInFailure() {
    }
    return FirebaseUISignInFailure;
}());
/**
 * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
 */
var  /**
 * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
 */
FirebaseUISignInSuccess = /** @class */ (function () {
    function FirebaseUISignInSuccess() {
    }
    return FirebaseUISignInSuccess;
}());
/** @enum {number} */
var CredentialHelper = {
    AccountChooser: 0, OneTap: 1, None: 2,
};
CredentialHelper[CredentialHelper.AccountChooser] = 'AccountChooser';
CredentialHelper[CredentialHelper.OneTap] = 'OneTap';
CredentialHelper[CredentialHelper.None] = 'None';
/** @enum {number} */
var AuthProvider = {
    Google: 0, Facebook: 1, Twitter: 2, Github: 3, Password: 4, Phone: 5,
};
AuthProvider[AuthProvider.Google] = 'Google';
AuthProvider[AuthProvider.Facebook] = 'Facebook';
AuthProvider[AuthProvider.Twitter] = 'Twitter';
AuthProvider[AuthProvider.Github] = 'Github';
AuthProvider[AuthProvider.Password] = 'Password';
AuthProvider[AuthProvider.Phone] = 'Phone';
/** @enum {number} */
var AuthMethods = {
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
var FirebaseuiAngularLibraryComponent = /** @class */ (function () {
    function FirebaseuiAngularLibraryComponent(angularFireAuth, _firebaseUiConfig, _firebaseUiConfig_Feature, ngZone, firebaseUIService) {
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
    FirebaseuiAngularLibraryComponent.getAuthProvider = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
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
    };
    Object.defineProperty(FirebaseuiAngularLibraryComponent.prototype, "firebaseUiConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (__assign({}, this._firebaseUiConfig, this._firebaseUiConfig_Feature)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.angularFireAuth.authState.subscribe(function (value) {
            if ((value && value.isAnonymous) || !value) {
                if (((/** @type {?} */ (_this.firebaseUiConfig))).providers) {
                    // tslint:disable-next-line
                    console.warn("\"FirebaseUIAuthConfig\" isn't supported since version 3.3.0 and will be removed in the future.\nPlease use the native configuration of firebaseui \"firebaseui.auth.Config\"");
                    console.warn('You can copy your converted configuration:\n', _this.getNewConfigurationString(_this.getUIAuthConfig()));
                    if (((/** @type {?} */ (_this.firebaseUiConfig))).providers.length !== 0) {
                        _this.firebaseUIPopup();
                    }
                    else {
                        throw new Error('There must be at least one AuthProvider.');
                    }
                }
                else {
                    if (((/** @type {?} */ (_this.firebaseUiConfig))).signInOptions.length !== 0) {
                        _this.firebaseUIPopup();
                    }
                    else {
                        throw new Error('There must be at least one AuthProvider.');
                    }
                }
            }
        });
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (!!this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.getUIAuthConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        if (!((/** @type {?} */ (this.firebaseUiConfig))).providers) {
            if (!((/** @type {?} */ (this.firebaseUiConfig))).callbacks) {
                this._firebaseUiConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS] = true;
                ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = this.getCallbacks();
            }
            return ((/** @type {?} */ (this.firebaseUiConfig)));
        }
        /** @type {?} */
        var authConfig = ((/** @type {?} */ (this.firebaseUiConfig)));
        /** @type {?} */
        var authProviders = [];
        try {
            for (var _b = __values(authConfig.providers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var provider = _c.value;
                if (!!((/** @type {?} */ (provider))).customConfig) {
                    provider = ((/** @type {?} */ (provider)));
                    /** @type {?} */
                    var providerWithConfig = provider.customConfig;
                    providerWithConfig['provider'] = FirebaseuiAngularLibraryComponent.getAuthProvider(provider.provider);
                    authProviders.push(providerWithConfig);
                }
                else {
                    authProviders.push(FirebaseuiAngularLibraryComponent.getAuthProvider((/** @type {?} */ (provider))));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var tosURL = authConfig.tos ? authConfig.tos : '';
        /** @type {?} */
        var privacyPolicyUrl = authConfig.privacyPolicyUrl ? authConfig.privacyPolicyUrl : '';
        /** @type {?} */
        var authMethod = 'popup';
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
        var credentialHelper;
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
        var autoUpgradeAnonymousUsers = authConfig.autoUpgradeAnonymousUsers == null ? false : authConfig.autoUpgradeAnonymousUsers;
        /** @type {?} */
        var signInSuccessCallback = function (currentUser, credential, redirectUrl) {
            _this.ngZone.run(function () {
                _this.signInSuccessCallback.emit({
                    currentUser: currentUser,
                    credential: credential,
                    redirectUrl: redirectUrl
                });
            });
            return !!authConfig.signInSuccessUrl;
        };
        /** @type {?} */
        var callbacks = __assign({}, this.getCallbacks(), { signInSuccess: null });
        if (!authConfig.disableSignInSuccessCallback) {
            console.warn('[FirebaseUiAngular] signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead.\n' +
                'To remove this warning set disableSignInSuccessCallback on the FirebaseUiConfig Object.');
            callbacks.signInSuccess = signInSuccessCallback;
        }
        /** @type {?} */
        var nativeConfiguration = {
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
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.firebaseUIPopup = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firebaseUiInstance = (this.language === 'en') ?
            this.firebaseUIService.firebaseUiEnInstance :
            this.firebaseUIService.firebaseUiEsInstance;
        /** @type {?} */
        var uiAuthConfig = this.getUIAuthConfig();
        // Check if callbacks got computed to reset them again after providing the to firebaseui.
        // Necessary for allowing updating the firebaseui config during runtime.
        /** @type {?} */
        var resetCallbacks = false;
        if (uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS]) {
            resetCallbacks = true;
            delete uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS];
        }
        // show the firebaseui
        firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
        if (resetCallbacks) {
            ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = null;
        }
    };
    /**
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.getCallbacks = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var signInSuccessWithAuthResult = function (authResult, redirectUrl) {
            _this.ngZone.run(function () {
                _this.signInSuccessWithAuthResultCallback.emit({
                    authResult: authResult,
                    redirectUrl: redirectUrl
                });
            });
            return _this.firebaseUiConfig.signInSuccessUrl;
        };
        /** @type {?} */
        var signInFailureCallback = function (error) {
            _this.ngZone.run(function () {
                _this.signInFailureCallback.emit({
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
    };
    /**
     * @param {?} configuration
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.getNewConfigurationString = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        delete configuration.callbacks;
        if (!configuration.autoUpgradeAnonymousUsers) {
            delete configuration.autoUpgradeAnonymousUsers;
        }
        /** @type {?} */
        var stringifiedConfiguration = JSON.stringify(configuration, null, 2);
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
    };
    FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS = 'COMPUTED_CALLBACKS';
    FirebaseuiAngularLibraryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'firebase-ui',
                    template: '<div id="firebaseui-auth-container"></div>'
                }] }
    ];
    /** @nocollapse */
    FirebaseuiAngularLibraryComponent.ctorParameters = function () { return [
        { type: AngularFireAuth },
        { type: undefined, decorators: [{ type: Inject, args: ['firebaseUIAuthConfig',] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['firebaseUIAuthConfigFeature',] }] },
        { type: NgZone },
        { type: FirebaseuiAngularLibraryService }
    ]; };
    FirebaseuiAngularLibraryComponent.propDecorators = {
        signInSuccessCallback: [{ type: Output, args: ['signInSuccess',] }],
        signInSuccessWithAuthResultCallback: [{ type: Output, args: ['signInSuccessWithAuthResult',] }],
        signInFailureCallback: [{ type: Output, args: ['signInFailure',] }],
        language: [{ type: Input, args: ['language',] }]
    };
    return FirebaseuiAngularLibraryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var FirebaseUIModule = /** @class */ (function () {
    function FirebaseUIModule() {
    }
    /**
     * @param {?} firebaseUiAuthConfig
     * @return {?}
     */
    FirebaseUIModule.forRoot = /**
     * @param {?} firebaseUiAuthConfig
     * @return {?}
     */
    function (firebaseUiAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfig', useValue: firebaseUiAuthConfig },
                { provide: 'firebaseUIAuthConfigFeature', useValue: {} }
            ]
        };
    };
    /**
     * @param {?} firebaseUIAuthConfig
     * @return {?}
     */
    FirebaseUIModule.forFeature = /**
     * @param {?} firebaseUIAuthConfig
     * @return {?}
     */
    function (firebaseUIAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfigFeature', useValue: firebaseUIAuthConfig }
            ]
        };
    };
    FirebaseUIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [FirebaseuiAngularLibraryComponent],
                    exports: [FirebaseuiAngularLibraryComponent]
                },] }
    ];
    return FirebaseUIModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { FirebaseuiAngularLibraryService, FirebaseuiAngularLibraryComponent, firebase$1 as firebase, firebaseui, FirebaseUIAuthConfig, FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure, FirebaseUISignInSuccess, CredentialHelper, AuthProvider, AuthMethods, FirebaseUIModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyLnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRXMgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVuIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSB7XG4gIHB1YmxpYyBmaXJlYmFzZVVpRW5JbnN0YW5jZTogZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJO1xuICBwdWJsaWMgZmlyZWJhc2VVaUVzSW5zdGFuY2U6IGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSTtcblxuICBjb25zdHJ1Y3Rvcihhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCkge1xuICAgIC8vIHN0b3JlIHRoZSBmaXJlYmFzZXVpIGluc3RhbmNlIG9uIHRoZSB3aW5kb3cgb2JqZWN0IHRvIHByZXZlbnQgZG91YmxlIGluaXRpYWxpemF0aW9uXG4gICAgaWYgKCEoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFbkluc3RhbmNlKSB7XG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFbkluc3RhbmNlID0gbmV3IGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSShhbmd1bGFyRmlyZUF1dGguYXV0aCk7XG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlID0gbmV3IGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSShhbmd1bGFyRmlyZUF1dGguYXV0aCk7XG4gICAgfVxuICAgIHRoaXMuZmlyZWJhc2VVaUVuSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFbkluc3RhbmNlIGFzIGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSTtcbiAgICB0aGlzLmZpcmViYXNlVWlFc0luc3RhbmNlID0gKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRXNJbnN0YW5jZSBhcyBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUk7XG4gIH1cbn1cbiIsIi8qXG4gKiBDcmVhdGVkIGJ5IFJhcGhhZWwgSmVubmlcbiAqIENvcHlyaWdodCAoYykgMjAxNyBSYXBoYWVsIEplbm5pXG4gKi9cblxuaW1wb3J0ICogYXMgZmlyZWJhc2VPcmlnaW5hbCBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcbmltcG9ydCAqIGFzIGZpcmViYXNldWlPcmlnaW5hbCBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XG5cbmV4cG9ydCBjb25zdCBmaXJlYmFzZSA9IGZpcmViYXNlT3JpZ2luYWw7XG5leHBvcnQgY29uc3QgZmlyZWJhc2V1aSA9IGZpcmViYXNldWlPcmlnaW5hbDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgKGZpcmViYXNldWkuYXV0aC5Db25maWcpXG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gIHByb3ZpZGVyczogQXJyYXk8QXV0aFByb3ZpZGVyIHwgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZz47XG4gIG1ldGhvZD86IEF1dGhNZXRob2RzO1xuICBzaWduSW5TdWNjZXNzVXJsPzogc3RyaW5nO1xuICB0b3M/OiBzdHJpbmc7XG4gIHByaXZhY3lQb2xpY3lVcmw/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxIZWxwZXI/OiBDcmVkZW50aWFsSGVscGVyO1xuICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2lsbCBiZSBkZWZhdWx0IGluIHRoZSBmdXR1cmVcbiAgICovXG4gIGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IGZpcmViYXNldWlPcmlnaW5hbC5hdXRoLkNvbmZpZztcblxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCB7XG4gIGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsO1xuICByZWRpcmVjdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUge1xuICBjb2RlOiBzdHJpbmc7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHR9XG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyB7XG4gIGN1cnJlbnRVc2VyOiBmaXJlYmFzZU9yaWdpbmFsLlVzZXI7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcbn1cblxuXG5leHBvcnQgZW51bSBDcmVkZW50aWFsSGVscGVyIHtcbiAgQWNjb3VudENob29zZXIsIE9uZVRhcCwgTm9uZVxufVxuXG5leHBvcnQgZW51bSBBdXRoUHJvdmlkZXIge1xuICBHb29nbGUsIEZhY2Vib29rLCBUd2l0dGVyLCBHaXRodWIsIFBhc3N3b3JkLCBQaG9uZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcge1xuICBwcm92aWRlcjogQXV0aFByb3ZpZGVyO1xuICBjdXN0b21Db25maWc6IE9iamVjdDtcbn1cblxuZXhwb3J0IGVudW0gQXV0aE1ldGhvZHMge1xuICBQb3B1cCwgUmVkaXJlY3Rcbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEF1dGhNZXRob2RzLFxuICBBdXRoUHJvdmlkZXIsXG4gIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcsXG4gIENyZWRlbnRpYWxIZWxwZXIsXG4gIEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSxcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3MsXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnLFxufSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRXMgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVuIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJztcbi8vIG5vaW5zcGVjdGlvbiBFUzZVbnVzZWRJbXBvcnRzXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCBHb29nbGVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcjtcbmltcG9ydCBGYWNlYm9va0F1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXI7XG5pbXBvcnQgVHdpdHRlckF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlcjtcbmltcG9ydCBHaXRodWJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcjtcbmltcG9ydCBFbWFpbEF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXI7XG5pbXBvcnQgUGhvbmVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmlyZWJhc2UtdWknLFxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVEX0NBTExCQUNLUyA9ICdDT01QVVRFRF9DQUxMQkFDS1MnO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0XG4gICAqL1xuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzJykgc2lnbkluU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgQE91dHB1dCgnc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Jykgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBAT3V0cHV0KCdzaWduSW5GYWlsdXJlJykgc2lnbkluRmFpbHVyZUNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JbkZhaWx1cmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIC8vIGxhbmd1YWdlIG11c3QgYmUgZWl0aGVyICdlbicgb3IgJ2VzJ1xuICBASW5wdXQoJ2xhbmd1YWdlJykgbGFuZ3VhZ2U6IHN0cmluZyA9ICdlbic7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZmlyZWJhc2V1aUxpYnJhcnk6IGFueTtcblxuICBwcml2YXRlIHN0YXRpYyBnZXRBdXRoUHJvdmlkZXIocHJvdmlkZXI6IEF1dGhQcm92aWRlcik6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwcm92aWRlcikge1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR29vZ2xlOlxuICAgICAgICByZXR1cm4gR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuRmFjZWJvb2s6XG4gICAgICAgIHJldHVybiBGYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlR3aXR0ZXI6XG4gICAgICAgIHJldHVybiBUd2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR2l0aHViOlxuICAgICAgICByZXR1cm4gR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGFzc3dvcmQ6XG4gICAgICAgIHJldHVybiBFbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBob25lOlxuICAgICAgICByZXR1cm4gUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWcnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmU6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VVSVNlcnZpY2U6IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2UpIHtcbiAgICAgIGlmICggdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyApIHtcbiAgICAgICAgdGhpcy5maXJlYmFzZXVpTGlicmFyeSA9IGZpcmViYXNldWlFbjtcbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMubGFuZ3VhZ2UgPT09ICdlcycgKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgPSBmaXJlYmFzZXVpRXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCAnTGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgXCJlblwiIG9yIFwiZXNcIicgKTtcbiAgICAgIH1cbiAgfVxuXG4gIGdldCBmaXJlYmFzZVVpQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnLFxuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlXG4gICAgfSBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh2YWx1ZTogVXNlcikgPT4ge1xuICAgICAgaWYgKCh2YWx1ZSAmJiB2YWx1ZS5pc0Fub255bW91cykgfHwgIXZhbHVlKSB7XG4gICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFwiRmlyZWJhc2VVSUF1dGhDb25maWdcIiBpc24ndCBzdXBwb3J0ZWQgc2luY2UgdmVyc2lvbiAzLjMuMCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXFxuUGxlYXNlIHVzZSB0aGUgbmF0aXZlIGNvbmZpZ3VyYXRpb24gb2YgZmlyZWJhc2V1aSBcImZpcmViYXNldWkuYXV0aC5Db25maWdcImApO1xuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbiBjb3B5IHlvdXIgY29udmVydGVkIGNvbmZpZ3VyYXRpb246XFxuJywgdGhpcy5nZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCkpKTtcblxuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLnNpZ25Jbk9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICghIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VUlBdXRoQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHtcbiAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xuICAgICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MpIHtcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VVaUNvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSA9IHRydWU7XG4gICAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSB0aGlzLmdldENhbGxiYWNrcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dGhDb25maWc6IEZpcmViYXNlVUlBdXRoQ29uZmlnID0gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZyk7XG5cbiAgICBjb25zdCBhdXRoUHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW107XG4gICAgZm9yIChsZXQgcHJvdmlkZXIgb2YgYXV0aENvbmZpZy5wcm92aWRlcnMpIHtcbiAgICAgIGlmICghIShwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKS5jdXN0b21Db25maWcpIHtcbiAgICAgICAgcHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgcHJvdmlkZXJXaXRoQ29uZmlnID0gcHJvdmlkZXIuY3VzdG9tQ29uZmlnO1xuICAgICAgICBwcm92aWRlcldpdGhDb25maWdbJ3Byb3ZpZGVyJ10gPSBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyKTtcblxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2gocHJvdmlkZXJXaXRoQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvc1VSTCA9IGF1dGhDb25maWcudG9zID8gYXV0aENvbmZpZy50b3MgOiAnJztcbiAgICBjb25zdCBwcml2YWN5UG9saWN5VXJsID0gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsID8gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsIDogJyc7XG5cbiAgICBsZXQgYXV0aE1ldGhvZCA9ICdwb3B1cCc7XG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLm1ldGhvZCkge1xuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5SZWRpcmVjdDpcbiAgICAgICAgYXV0aE1ldGhvZCA9ICdyZWRpcmVjdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5Qb3B1cDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBjcmVkZW50aWFsSGVscGVyO1xuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5jcmVkZW50aWFsSGVscGVyKSB7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuTm9uZTpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk9uZVRhcDpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5BY2NvdW50Q2hvb3NlcjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBhdXRvVXBncmFkZUFub255bW91c1VzZXJzID0gYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzID09IG51bGwgPyBmYWxzZSA6IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcblxuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NDYWxsYmFjayA9IChjdXJyZW50VXNlcjogZmlyZWJhc2UuVXNlciwgY3JlZGVudGlhbDogZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgICAgY3JlZGVudGlhbCxcbiAgICAgICAgICByZWRpcmVjdFVybFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxsYmFja3M6IGFueSA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q2FsbGJhY2tzKCksXG4gICAgICBzaWduSW5TdWNjZXNzOiBudWxsXG4gICAgfTtcblxuICAgIGlmICghYXV0aENvbmZpZy5kaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tGaXJlYmFzZVVpQW5ndWxhcl0gc2lnbkluU3VjY2VzcyBjYWxsYmFjayBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCBjYWxsYmFjayBpbnN0ZWFkLlxcbicgK1xuICAgICAgICAnVG8gcmVtb3ZlIHRoaXMgd2FybmluZyBzZXQgZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjayBvbiB0aGUgRmlyZWJhc2VVaUNvbmZpZyBPYmplY3QuJyk7XG4gICAgICBjYWxsYmFja3Muc2lnbkluU3VjY2VzcyA9IHNpZ25JblN1Y2Nlc3NDYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVDb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IHtcbiAgICAgIGNhbGxiYWNrczogY2FsbGJhY2tzLFxuICAgICAgc2lnbkluRmxvdzogYXV0aE1ldGhvZCxcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IGF1dGhQcm92aWRlcnMsXG4gICAgICB0b3NVcmw6IHRvc1VSTCxcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHByaXZhY3lQb2xpY3lVcmwsXG4gICAgICBjcmVkZW50aWFsSGVscGVyOiBjcmVkZW50aWFsSGVscGVyLFxuICAgICAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VyczogYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vyc1xuICAgIH07XG4gICAgaWYgKCEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsKSB7XG4gICAgICBuYXRpdmVDb25maWd1cmF0aW9uLnNpZ25JblN1Y2Nlc3NVcmwgPSBhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXJlYmFzZVVJUG9wdXAoKSB7XG4gICAgY29uc3QgZmlyZWJhc2VVaUluc3RhbmNlID0gKCB0aGlzLmxhbmd1YWdlID09PSAnZW4nICkgP1xuICAgICAgdGhpcy5maXJlYmFzZVVJU2VydmljZS5maXJlYmFzZVVpRW5JbnN0YW5jZSA6XG4gICAgICB0aGlzLmZpcmViYXNlVUlTZXJ2aWNlLmZpcmViYXNlVWlFc0luc3RhbmNlO1xuICAgIGNvbnN0IHVpQXV0aENvbmZpZyA9IHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCk7XG5cbiAgICAvLyBDaGVjayBpZiBjYWxsYmFja3MgZ290IGNvbXB1dGVkIHRvIHJlc2V0IHRoZW0gYWdhaW4gYWZ0ZXIgcHJvdmlkaW5nIHRoZSB0byBmaXJlYmFzZXVpLlxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgYWxsb3dpbmcgdXBkYXRpbmcgdGhlIGZpcmViYXNldWkgY29uZmlnIGR1cmluZyBydW50aW1lLlxuICAgIGxldCByZXNldENhbGxiYWNrcyA9IGZhbHNlO1xuICAgIGlmICh1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10pIHtcbiAgICAgIHJlc2V0Q2FsbGJhY2tzID0gdHJ1ZTtcbiAgICAgIGRlbGV0ZSB1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU107XG4gICAgfVxuXG4gICAgLy8gc2hvdyB0aGUgZmlyZWJhc2V1aVxuICAgIGZpcmViYXNlVWlJbnN0YW5jZS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB1aUF1dGhDb25maWcpO1xuXG4gICAgaWYgKHJlc2V0Q2FsbGJhY2tzKSB7XG4gICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENhbGxiYWNrcygpOiBhbnkge1xuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCA9IChhdXRoUmVzdWx0OiBVc2VyQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgYXV0aFJlc3VsdCxcbiAgICAgICAgICByZWRpcmVjdFVybFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VVaUNvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH07XG5cbiAgICBjb25zdCBzaWduSW5GYWlsdXJlQ2FsbGJhY2sgPSAoZXJyb3I6IGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSUVycm9yKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JbkZhaWx1cmVDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgIGNyZWRlbnRpYWw6IGVycm9yLmNyZWRlbnRpYWxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gICAgICBzaWduSW5GYWlsdXJlOiBzaWduSW5GYWlsdXJlQ2FsbGJhY2ssXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyhjb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk6IHN0cmluZyB7XG4gICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzO1xuXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMpIHtcbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XG4gICAgfVxuXG4gICAgbGV0IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24sIG51bGwsIDIpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImFjY291bnRjaG9vc2VyLmNvbVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImdvb2dsZXlvbG9cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8nKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwibm9uZVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FJyk7XG5cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdvb2dsZS5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJmYWNlYm9vay5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInR3aXR0ZXIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdpdGh1Yi5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwYXNzd29yZFwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGhvbmVcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdvb2dsZS5jb21cIicsICdmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImZhY2Vib29rLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJ0d2l0dGVyLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdpdGh1Yi5jb21cIicsICdmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwYXNzd29yZFwiJywgJ2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwaG9uZVwiJywgJ2ZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIihbYS16QS1aMC05XSopXCI6ICguKikvZywgJyQxOiAkMicpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIi9nLCAnXFwnJyk7XG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgIHJldHVybiBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnR9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aENvbmZpZywgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWd9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZmlyZWJhc2VVaUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZycsIHVzZVZhbHVlOiBmaXJlYmFzZVVpQXV0aENvbmZpZ30sXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IHt9fVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yRmVhdHVyZShmaXJlYmFzZVVJQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB8IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiBmaXJlYmFzZVVJQXV0aENvbmZpZ31cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyZWJhc2V1aUVuLmF1dGgiLCJmaXJlYmFzZXVpRXMuYXV0aCIsImZpcmViYXNlIiwiZmlyZWJhc2VPcmlnaW5hbCIsImZpcmViYXNldWlPcmlnaW5hbCIsImZpcmViYXNlLmF1dGgiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFZRSx5Q0FBWSxlQUFnQzs7UUFFMUMsSUFBSSxDQUFDLG9CQUFNLE1BQU0sSUFBRSxvQkFBb0IsRUFBRTtZQUN2QyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEdBQUcsSUFBSUEsTUFBaUIsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hGLG9CQUFNLE1BQU0sSUFBRSxvQkFBb0IsR0FBRyxJQUFJQyxJQUFpQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLENBQUMsb0JBQW9CLHNCQUFHLG9CQUFNLE1BQU0sSUFBRSxvQkFBb0IsRUFBNEIsQ0FBQztRQUMzRixJQUFJLENBQUMsb0JBQW9CLHNCQUFHLG9CQUFNLE1BQU0sSUFBRSxvQkFBb0IsRUFBNEIsQ0FBQztLQUM1Rjs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOTyxlQUFlOzs7MENBRHZCO0NBS0E7Ozs7Ozs7QUNJQSxJQUFhQyxVQUFRLEdBQUdDOztBQUN4QixJQUFhLFVBQVUs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