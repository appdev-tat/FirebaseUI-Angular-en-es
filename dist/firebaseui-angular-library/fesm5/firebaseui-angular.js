import { Injectable, NgModule, defineInjectable, inject, EventEmitter, Component, Inject, NgZone, Output, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import * as firebaseuiOriginal from 'firebaseui-en-es/dist/npm__es';
import { __assign, __values } from 'tslib';
import 'firebase/auth';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var FirebaseuiAngularLibraryService = /** @class */ (function () {
    function FirebaseuiAngularLibraryService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    /**
     * @param {?} library
     * @return {?}
     */
    FirebaseuiAngularLibraryService.prototype.init = /**
     * @param {?} library
     * @return {?}
     */
    function (library) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiInstance) {
            ((/** @type {?} */ (window))).firebaseUiInstance = new library.auth.AuthUI(this.angularFireAuth.auth);
        }
        this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
    };
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
var firebaseui = firebaseuiOriginal;
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
var GoogleAuthProvider = auth.GoogleAuthProvider;
var FacebookAuthProvider = auth.FacebookAuthProvider;
var TwitterAuthProvider = auth.TwitterAuthProvider;
var GithubAuthProvider = auth.GithubAuthProvider;
var EmailAuthProvider = auth.EmailAuthProvider;
var PhoneAuthProvider = auth.PhoneAuthProvider;
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
        this.firebaseUIService.firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
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
        language: [{ type: Input }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyLnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBmaXJlYmFzZVVpSW5zdGFuY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGggKSB7fVxyXG4gICAgXHJcbiAgaW5pdCggbGlicmFyeTogYW55ICkge1xyXG4gICAgLy8gc3RvcmUgdGhlIGZpcmViYXNldWkgaW5zdGFuY2Ugb24gdGhlIHdpbmRvdyBvYmplY3QgdG8gcHJldmVudCBkb3VibGUgaW5pdGlhbGl6YXRpb25cclxuICAgIGlmICggISg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlICkge1xyXG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlJbnN0YW5jZSA9IG5ldyBsaWJyYXJ5LmF1dGguQXV0aFVJKCB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcmViYXNlVWlJbnN0YW5jZSA9ICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDcmVhdGVkIGJ5IFJhcGhhZWwgSmVubmlcclxuICogQ29weXJpZ2h0IChjKSAyMDE3IFJhcGhhZWwgSmVubmlcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZU9yaWdpbmFsIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XHJcbmltcG9ydCAqIGFzIGZpcmViYXNldWlPcmlnaW5hbCBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmlyZWJhc2UgPSBmaXJlYmFzZU9yaWdpbmFsO1xyXG5leHBvcnQgY29uc3QgZmlyZWJhc2V1aSA9IGZpcmViYXNldWlPcmlnaW5hbDtcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgKGZpcmViYXNldWkuYXV0aC5Db25maWcpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSUF1dGhDb25maWcge1xyXG4gIHByb3ZpZGVyczogQXJyYXk8QXV0aFByb3ZpZGVyIHwgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZz47XHJcbiAgbWV0aG9kPzogQXV0aE1ldGhvZHM7XHJcbiAgc2lnbkluU3VjY2Vzc1VybD86IHN0cmluZztcclxuICB0b3M/OiBzdHJpbmc7XHJcbiAgcHJpdmFjeVBvbGljeVVybD86IHN0cmluZztcclxuICBjcmVkZW50aWFsSGVscGVyPzogQ3JlZGVudGlhbEhlbHBlcjtcclxuICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogV2lsbCBiZSBkZWZhdWx0IGluIHRoZSBmdXR1cmVcclxuICAgKi9cclxuICBkaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgPSBmaXJlYmFzZXVpT3JpZ2luYWwuYXV0aC5Db25maWc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQge1xyXG4gIGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsO1xyXG4gIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSB7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyB7XHJcbiAgY3VycmVudFVzZXI6IGZpcmViYXNlT3JpZ2luYWwuVXNlcjtcclxuICBjcmVkZW50aWFsOiBmaXJlYmFzZU9yaWdpbmFsLmF1dGguQXV0aENyZWRlbnRpYWw7XHJcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIENyZWRlbnRpYWxIZWxwZXIge1xyXG4gIEFjY291bnRDaG9vc2VyLCBPbmVUYXAsIE5vbmVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aFByb3ZpZGVyIHtcclxuICBHb29nbGUsIEZhY2Vib29rLCBUd2l0dGVyLCBHaXRodWIsIFBhc3N3b3JkLCBQaG9uZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcge1xyXG4gIHByb3ZpZGVyOiBBdXRoUHJvdmlkZXI7XHJcbiAgY3VzdG9tQ29uZmlnOiBPYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhNZXRob2RzIHtcclxuICBQb3B1cCwgUmVkaXJlY3RcclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIEF1dGhNZXRob2RzLFxyXG4gIEF1dGhQcm92aWRlcixcclxuICBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnLFxyXG4gIENyZWRlbnRpYWxIZWxwZXIsXHJcbiAgRmlyZWJhc2VVSUF1dGhDb25maWcsXHJcbiAgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUsXHJcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3MsXHJcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcclxuICBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyxcclxufSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XHJcbi8vIG5vaW5zcGVjdGlvbiBFUzZVbnVzZWRJbXBvcnRzXHJcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgR29vZ2xlQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBGYWNlYm9va0F1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBUd2l0dGVyQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyO1xyXG5pbXBvcnQgR2l0aHViQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBFbWFpbEF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBQaG9uZUF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XHJcblxyXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmlyZWJhc2UtdWknLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cImZpcmViYXNldWktYXV0aC1jb250YWluZXJcIj48L2Rpdj4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURURfQ0FMTEJBQ0tTID0gJ0NPTVBVVEVEX0NBTExCQUNLUyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRcclxuICAgKi9cclxuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzJykgc2lnbkluU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcblxyXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCcpIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuICBAT3V0cHV0KCdzaWduSW5GYWlsdXJlJykgc2lnbkluRmFpbHVyZUNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JbkZhaWx1cmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbiAgLy8gbGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgJ2VuJyBvciAnZXMnXHJcbiAgQElucHV0KCkgbGFuZ3VhZ2U6IHN0cmluZzsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIGZpcmViYXNldWlMaWJyYXJ5OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldEF1dGhQcm92aWRlcihwcm92aWRlcjogQXV0aFByb3ZpZGVyKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR29vZ2xlOlxyXG4gICAgICAgIHJldHVybiBHb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkZhY2Vib29rOlxyXG4gICAgICAgIHJldHVybiBGYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuVHdpdHRlcjpcclxuICAgICAgICByZXR1cm4gVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR2l0aHViOlxyXG4gICAgICAgIHJldHVybiBHaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBhc3N3b3JkOlxyXG4gICAgICAgIHJldHVybiBFbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGhvbmU6XHJcbiAgICAgICAgcmV0dXJuIFBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcclxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZycpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXHJcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVVJU2VydmljZTogRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpcmViYXNlVWlDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnLFxyXG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmVcclxuICAgIH0gYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCBbJ2VuJywnZXMnXS5pbmRleE9mKHRoaXMubGFuZ3VhZ2UpID09PSAtMSApIHtcclxuICAgICAgY29uc29sZS5lcnJvciggJ0xhbmd1YWdlIG11c3QgYmUgZWl0aGVyIFwiZW5cIiBvciBcImVzXCInICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgPSAoIHRoaXMubGFuZ3VhZ2UgPT09ICdlbicgKSA/XHJcbiAgICAgICAgcmVxdWlyZSggJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VuJyApIDpcclxuICAgICAgICByZXF1aXJlKCAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnICk7XHJcbiAgICAgIHRoaXMuZmlyZWJhc2VVSVNlcnZpY2UuaW5pdCggdGhpcy5maXJlYmFzZXVpTGlicmFyeSApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hbmd1bGFyRmlyZUF1dGguYXV0aFN0YXRlLnN1YnNjcmliZSgodmFsdWU6IFVzZXIpID0+IHtcclxuICAgICAgaWYgKCh2YWx1ZSAmJiB2YWx1ZS5pc0Fub255bW91cykgfHwgIXZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFwiRmlyZWJhc2VVSUF1dGhDb25maWdcIiBpc24ndCBzdXBwb3J0ZWQgc2luY2UgdmVyc2lvbiAzLjMuMCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXFxuUGxlYXNlIHVzZSB0aGUgbmF0aXZlIGNvbmZpZ3VyYXRpb24gb2YgZmlyZWJhc2V1aSBcImZpcmViYXNldWkuYXV0aC5Db25maWdcImApO1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgY2FuIGNvcHkgeW91ciBjb252ZXJ0ZWQgY29uZmlndXJhdGlvbjpcXG4nLCB0aGlzLmdldE5ld0NvbmZpZ3VyYXRpb25TdHJpbmcodGhpcy5nZXRVSUF1dGhDb25maWcoKSkpO1xyXG5cclxuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLnNpZ25Jbk9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAoISF0aGlzLnN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVSUF1dGhDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcge1xyXG4gICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcclxuICAgICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MpIHtcclxuICAgICAgICB0aGlzLl9maXJlYmFzZVVpQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gdGhpcy5nZXRDYWxsYmFja3MoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0aENvbmZpZzogRmlyZWJhc2VVSUF1dGhDb25maWcgPSAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKTtcclxuXHJcbiAgICBjb25zdCBhdXRoUHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBmb3IgKGxldCBwcm92aWRlciBvZiBhdXRoQ29uZmlnLnByb3ZpZGVycykge1xyXG4gICAgICBpZiAoISEocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZykuY3VzdG9tQ29uZmlnKSB7XHJcbiAgICAgICAgcHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyV2l0aENvbmZpZyA9IHByb3ZpZGVyLmN1c3RvbUNvbmZpZztcclxuICAgICAgICBwcm92aWRlcldpdGhDb25maWdbJ3Byb3ZpZGVyJ10gPSBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyKTtcclxuXHJcbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKHByb3ZpZGVyV2l0aENvbmZpZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3NVUkwgPSBhdXRoQ29uZmlnLnRvcyA/IGF1dGhDb25maWcudG9zIDogJyc7XHJcbiAgICBjb25zdCBwcml2YWN5UG9saWN5VXJsID0gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsID8gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsIDogJyc7XHJcblxyXG4gICAgbGV0IGF1dGhNZXRob2QgPSAncG9wdXAnO1xyXG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLm1ldGhvZCkge1xyXG4gICAgICBjYXNlIEF1dGhNZXRob2RzLlJlZGlyZWN0OlxyXG4gICAgICAgIGF1dGhNZXRob2QgPSAncmVkaXJlY3QnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIG51bGw6XHJcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUG9wdXA6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNyZWRlbnRpYWxIZWxwZXI7XHJcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcuY3JlZGVudGlhbEhlbHBlcikge1xyXG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuTm9uZTpcclxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk9uZVRhcDpcclxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE87XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5BY2NvdW50Q2hvb3NlcjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuQUNDT1VOVF9DSE9PU0VSX0NPTTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRvVXBncmFkZUFub255bW91c1VzZXJzID0gYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzID09IG51bGwgPyBmYWxzZSA6IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcclxuXHJcbiAgICBjb25zdCBzaWduSW5TdWNjZXNzQ2FsbGJhY2sgPSAoY3VycmVudFVzZXI6IGZpcmViYXNlLlVzZXIsIGNyZWRlbnRpYWw6IGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwsIHJlZGlyZWN0VXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NDYWxsYmFjay5lbWl0KHtcclxuICAgICAgICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgICAgICAgY3JlZGVudGlhbCxcclxuICAgICAgICAgIHJlZGlyZWN0VXJsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrczogYW55ID0ge1xyXG4gICAgICAuLi50aGlzLmdldENhbGxiYWNrcygpLFxyXG4gICAgICBzaWduSW5TdWNjZXNzOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghYXV0aENvbmZpZy5kaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW0ZpcmViYXNlVWlBbmd1bGFyXSBzaWduSW5TdWNjZXNzIGNhbGxiYWNrIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0IGNhbGxiYWNrIGluc3RlYWQuXFxuJyArXHJcbiAgICAgICAgJ1RvIHJlbW92ZSB0aGlzIHdhcm5pbmcgc2V0IGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2sgb24gdGhlIEZpcmViYXNlVWlDb25maWcgT2JqZWN0LicpO1xyXG4gICAgICBjYWxsYmFja3Muc2lnbkluU3VjY2VzcyA9IHNpZ25JblN1Y2Nlc3NDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYXRpdmVDb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IHtcclxuICAgICAgY2FsbGJhY2tzOiBjYWxsYmFja3MsXHJcbiAgICAgIHNpZ25JbkZsb3c6IGF1dGhNZXRob2QsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IGF1dGhQcm92aWRlcnMsXHJcbiAgICAgIHRvc1VybDogdG9zVVJMLFxyXG4gICAgICBwcml2YWN5UG9saWN5VXJsOiBwcml2YWN5UG9saWN5VXJsLFxyXG4gICAgICBjcmVkZW50aWFsSGVscGVyOiBjcmVkZW50aWFsSGVscGVyLFxyXG4gICAgICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzOiBhdXRvVXBncmFkZUFub255bW91c1VzZXJzXHJcbiAgICB9O1xyXG4gICAgaWYgKCEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsKSB7XHJcbiAgICAgIG5hdGl2ZUNvbmZpZ3VyYXRpb24uc2lnbkluU3VjY2Vzc1VybCA9IGF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcclxuICAgIH1cclxuICAgIHJldHVybiBuYXRpdmVDb25maWd1cmF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXJlYmFzZVVJUG9wdXAoKSB7XHJcbiAgICBjb25zdCB1aUF1dGhDb25maWcgPSB0aGlzLmdldFVJQXV0aENvbmZpZygpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGNhbGxiYWNrcyBnb3QgY29tcHV0ZWQgdG8gcmVzZXQgdGhlbSBhZ2FpbiBhZnRlciBwcm92aWRpbmcgdGhlIHRvIGZpcmViYXNldWkuXHJcbiAgICAvLyBOZWNlc3NhcnkgZm9yIGFsbG93aW5nIHVwZGF0aW5nIHRoZSBmaXJlYmFzZXVpIGNvbmZpZyBkdXJpbmcgcnVudGltZS5cclxuICAgIGxldCByZXNldENhbGxiYWNrcyA9IGZhbHNlO1xyXG4gICAgaWYgKHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSkge1xyXG4gICAgICByZXNldENhbGxiYWNrcyA9IHRydWU7XHJcbiAgICAgIGRlbGV0ZSB1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hvdyB0aGUgZmlyZWJhc2V1aVxyXG4gICAgdGhpcy5maXJlYmFzZVVJU2VydmljZS5maXJlYmFzZVVpSW5zdGFuY2Uuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlBdXRoQ29uZmlnKTtcclxuXHJcbiAgICBpZiAocmVzZXRDYWxsYmFja3MpIHtcclxuICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENhbGxiYWNrcygpOiBhbnkge1xyXG4gICAgY29uc3Qgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0ID0gKGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsLCByZWRpcmVjdFVybCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2suZW1pdCh7XHJcbiAgICAgICAgICBhdXRoUmVzdWx0LFxyXG4gICAgICAgICAgcmVkaXJlY3RVcmxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlVWlDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2lnbkluRmFpbHVyZUNhbGxiYWNrID0gKGVycm9yOiBhbnkgKSA9PiB7IC8vIGVycm9yIHR5cGUgaXMgZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJRXJyb3JcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNpZ25JbkZhaWx1cmVDYWxsYmFjay5lbWl0KHtcclxuICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXHJcbiAgICAgICAgICBjcmVkZW50aWFsOiBlcnJvci5jcmVkZW50aWFsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXHJcbiAgICAgIHNpZ25JbkZhaWx1cmU6IHNpZ25JbkZhaWx1cmVDYWxsYmFjayxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5ld0NvbmZpZ3VyYXRpb25TdHJpbmcoY29uZmlndXJhdGlvbjogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpOiBzdHJpbmcge1xyXG4gICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzO1xyXG5cclxuICAgIGlmICghY29uZmlndXJhdGlvbi5hdXRvVXBncmFkZUFub255bW91c1VzZXJzKSB7XHJcbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24sIG51bGwsIDIpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJhY2NvdW50Y2hvb3Nlci5jb21cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuQUNDT1VOVF9DSE9PU0VSX0NPTScpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImdvb2dsZXlvbG9cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8nKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJub25lXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkUnKTtcclxuXHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdvb2dsZS5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImZhY2Vib29rLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJ0d2l0dGVyLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdpdGh1Yi5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBhc3N3b3JkXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBob25lXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcblxyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ29vZ2xlLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJmYWNlYm9vay5jb21cIicsICdmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJ0d2l0dGVyLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ2l0aHViLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicGFzc3dvcmRcIicsICdmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwaG9uZVwiJywgJ2ZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuXHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgvXCIoW2EtekEtWjAtOV0qKVwiOiAoLiopL2csICckMTogJDInKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIi9nLCAnXFwnJyk7XHJcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICByZXR1cm4gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnR9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGhDb25maWcsIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoZmlyZWJhc2VVaUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGaXJlYmFzZVVJTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJywgdXNlVmFsdWU6IGZpcmViYXNlVWlBdXRoQ29uZmlnfSxcclxuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiB7fX1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JGZWF0dXJlKGZpcmViYXNlVUlBdXRoQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHwgYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnLCB1c2VWYWx1ZTogZmlyZWJhc2VVSUF1dGhDb25maWd9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlT3JpZ2luYWwiLCJmaXJlYmFzZS5hdXRoIiwidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBU0UseUNBQXFCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtLQUFLOzs7OztJQUUxRCw4Q0FBSTs7OztJQUFKLFVBQU0sT0FBWTs7UUFFaEIsSUFBSyxDQUFDLG9CQUFNLE1BQU0sSUFBRSxrQkFBa0IsRUFBRztZQUN2QyxvQkFBTSxNQUFNLElBQUUsa0JBQWtCLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxDQUFDO1NBQ3pGO1FB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