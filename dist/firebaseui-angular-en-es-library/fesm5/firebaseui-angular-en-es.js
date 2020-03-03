import { __awaiter, __generator, __assign, __values } from 'tslib';
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
var FirebaseuiAngularLibraryService = /** @class */ (function () {
    function FirebaseuiAngularLibraryService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    /**
     * @param {?} language
     * @return {?}
     */
    FirebaseuiAngularLibraryService.prototype.getInstance = /**
     * @param {?} language
     * @return {?}
     */
    function (language) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // return the existing UI instance if it's in the correct language
                        if (this.currentLanguage === language) {
                            return [2 /*return*/, this.firebaseUiInstance];
                        }
                        // delete the current UI instance if one already exists
                        this.currentLanguage = language;
                        if (!((/** @type {?} */ (window))).firebaseUiInstance) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiInstance))).delete()];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!(language === 'en')) return [3 /*break*/, 4];
                        _a = ((/** @type {?} */ (window)));
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__en')];
                    case 3:
                        _a.firebaseUiInstance = new (_c.sent()).auth.AuthUI(this.angularFireAuth.auth);
                        return [3 /*break*/, 6];
                    case 4:
                        _b = ((/** @type {?} */ (window)));
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__es')];
                    case 5:
                        _b.firebaseUiInstance = new (_c.sent()).auth.AuthUI(this.angularFireAuth.auth);
                        _c.label = 6;
                    case 6:
                        this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
                        return [2 /*return*/, this.firebaseUiInstance];
                }
            });
        });
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
    /** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(ɵɵinject(AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
    return FirebaseuiAngularLibraryService;
}());
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
var firebase = firebase$1;
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
var FirebaseUISignInSuccessWithAuthResult = /** @class */ (function () {
    function FirebaseUISignInSuccessWithAuthResult() {
    }
    return FirebaseUISignInSuccessWithAuthResult;
}());
if (false) {
    /** @type {?} */
    FirebaseUISignInSuccessWithAuthResult.prototype.authResult;
    /** @type {?} */
    FirebaseUISignInSuccessWithAuthResult.prototype.redirectUrl;
}
var FirebaseUISignInFailure = /** @class */ (function () {
    function FirebaseUISignInFailure() {
    }
    return FirebaseUISignInFailure;
}());
if (false) {
    /** @type {?} */
    FirebaseUISignInFailure.prototype.code;
    /** @type {?} */
    FirebaseUISignInFailure.prototype.credential;
}
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
if (false) {
    /** @type {?} */
    FirebaseUISignInSuccess.prototype.currentUser;
    /** @type {?} */
    FirebaseUISignInSuccess.prototype.credential;
    /** @type {?} */
    FirebaseUISignInSuccess.prototype.redirectUrl;
}
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
        // tslint:disable-line
        // language must be either 'en' or 'es'
        this.language = 'en';
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
    /**
     * @param {?} changes
     * @return {?}
     */
    FirebaseuiAngularLibraryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!changes.language) return [3 /*break*/, 5];
                        if (!(this.language === 'en')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__en')];
                    case 1:
                        _a.firebaseuiLibrary = _c.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.language === 'es')) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__es')];
                    case 3:
                        _b.firebaseuiLibrary = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        console.error('Language must be either "en" or "es"');
                        _c.label = 5;
                    case 5:
                        ((/** @type {?} */ (window))).firebaseui = this.firebaseuiLibrary;
                        return [2 /*return*/];
                }
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            var firebaseUiInstance, uiAuthConfig, resetCallbacks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseUIService.getInstance(this.language)];
                    case 1:
                        firebaseUiInstance = _a.sent();
                        uiAuthConfig = this.getUIAuthConfig();
                        // Check if callbacks got computed to reset them again after providing the to firebaseui.
                        // Necessary for allowing updating the firebaseui config during runtime.
                        resetCallbacks = false;
                        if (uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS]) {
                            resetCallbacks = true;
                            delete uiAuthConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS];
                        }
                        // show the firebaseui
                        firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
                        if (resetCallbacks) {
                            ((/** @type {?} */ (this._firebaseUiConfig))).callbacks = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
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

export { AuthMethods, AuthProvider, CredentialHelper, FirebaseUIAuthConfig, FirebaseUIModule, FirebaseUISignInFailure, FirebaseUISignInSuccess, FirebaseUISignInSuccessWithAuthResult, FirebaseuiAngularLibraryComponent, FirebaseuiAngularLibraryService, firebase, firebaseui };
//# sourceMappingURL=firebaseui-angular-en-es.js.map
