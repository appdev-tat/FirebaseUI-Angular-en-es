(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/fire/auth'), require('firebaseui-en-es/dist/npm__es'), require('firebaseui-en-es/dist/npm__en'), require('firebase/app'), require('firebase/auth'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('firebaseui-angular', ['exports', '@angular/core', '@angular/fire/auth', 'firebaseui-en-es/dist/npm__es', 'firebaseui-en-es/dist/npm__en', 'firebase/app', 'firebase/auth', '@angular/common'], factory) :
    (factory((global['firebaseui-angular'] = {}),global.ng.core,global.ng.fire.auth,global.firebaseuiEs,global.firebaseuiEn,global.firebase,null,global.ng.common));
}(this, (function (exports,i0,i1,firebaseuiEs,firebaseuiEn,firebase,auth,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FirebaseuiAngularLibraryService = /** @class */ (function () {
        function FirebaseuiAngularLibraryService(angularFireAuth) {
            // store the firebaseui instance on the window object to prevent double initialization
            if (!(( /** @type {?} */(window))).firebaseUiEnInstance) {
                (( /** @type {?} */(window))).firebaseUiEnInstance = new firebaseuiEn.auth.AuthUI(angularFireAuth.auth);
                (( /** @type {?} */(window))).firebaseUiEsInstance = new firebaseuiEs.auth.AuthUI(angularFireAuth.auth);
            }
            this.firebaseUiEnInstance = ( /** @type {?} */((( /** @type {?} */(window))).firebaseUiEnInstance));
            this.firebaseUiEsInstance = ( /** @type {?} */((( /** @type {?} */(window))).firebaseUiEsInstance));
        }
        FirebaseuiAngularLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FirebaseuiAngularLibraryService.ctorParameters = function () {
            return [
                { type: i1.AngularFireAuth }
            ];
        };
        /** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(i0.inject(i1.AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
        return FirebaseuiAngularLibraryService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

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
    var /**
     * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
     */ FirebaseUIAuthConfig = /** @class */ (function () {
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
    var /**
     * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
     */ FirebaseUISignInSuccess = /** @class */ (function () {
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
    var GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
    var FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
    var TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
    var GithubAuthProvider = firebase.auth.GithubAuthProvider;
    var EmailAuthProvider = firebase.auth.EmailAuthProvider;
    var PhoneAuthProvider = firebase.auth.PhoneAuthProvider;
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
            this.signInSuccessCallback = new i0.EventEmitter(); // tslint:disable-line
            // tslint:disable-line
            this.signInSuccessWithAuthResultCallback = new i0.EventEmitter(); // tslint:disable-line
            // tslint:disable-line
            this.signInFailureCallback = new i0.EventEmitter(); // tslint:disable-line
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
             */ function () {
                return ( /** @type {?} */(__assign({}, this._firebaseUiConfig, this._firebaseUiConfig_Feature)));
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
                        if ((( /** @type {?} */(_this.firebaseUiConfig))).providers) {
                            // tslint:disable-next-line
                            console.warn("\"FirebaseUIAuthConfig\" isn't supported since version 3.3.0 and will be removed in the future.\nPlease use the native configuration of firebaseui \"firebaseui.auth.Config\"");
                            console.warn('You can copy your converted configuration:\n', _this.getNewConfigurationString(_this.getUIAuthConfig()));
                            if ((( /** @type {?} */(_this.firebaseUiConfig))).providers.length !== 0) {
                                _this.firebaseUIPopup();
                            }
                            else {
                                throw new Error('There must be at least one AuthProvider.');
                            }
                        }
                        else {
                            if ((( /** @type {?} */(_this.firebaseUiConfig))).signInOptions.length !== 0) {
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
                if (!(( /** @type {?} */(this.firebaseUiConfig))).providers) {
                    if (!(( /** @type {?} */(this.firebaseUiConfig))).callbacks) {
                        this._firebaseUiConfig[FirebaseuiAngularLibraryComponent.COMPUTED_CALLBACKS] = true;
                        (( /** @type {?} */(this._firebaseUiConfig))).callbacks = this.getCallbacks();
                    }
                    return (( /** @type {?} */(this.firebaseUiConfig)));
                }
                /** @type {?} */
                var authConfig = (( /** @type {?} */(this.firebaseUiConfig)));
                /** @type {?} */
                var authProviders = [];
                try {
                    for (var _b = __values(authConfig.providers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var provider = _c.value;
                        if (!!(( /** @type {?} */(provider))).customConfig) {
                            provider = (( /** @type {?} */(provider)));
                            /** @type {?} */
                            var providerWithConfig = provider.customConfig;
                            providerWithConfig['provider'] = FirebaseuiAngularLibraryComponent.getAuthProvider(provider.provider);
                            authProviders.push(providerWithConfig);
                        }
                        else {
                            authProviders.push(FirebaseuiAngularLibraryComponent.getAuthProvider(( /** @type {?} */(provider))));
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                    (( /** @type {?} */(this._firebaseUiConfig))).callbacks = null;
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
            { type: i0.Component, args: [{
                        selector: 'firebase-ui',
                        template: '<div id="firebaseui-auth-container"></div>'
                    }] }
        ];
        /** @nocollapse */
        FirebaseuiAngularLibraryComponent.ctorParameters = function () {
            return [
                { type: i1.AngularFireAuth },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['firebaseUIAuthConfig',] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['firebaseUIAuthConfigFeature',] }] },
                { type: i0.NgZone },
                { type: FirebaseuiAngularLibraryService }
            ];
        };
        FirebaseuiAngularLibraryComponent.propDecorators = {
            signInSuccessCallback: [{ type: i0.Output, args: ['signInSuccess',] }],
            signInSuccessWithAuthResultCallback: [{ type: i0.Output, args: ['signInSuccessWithAuthResult',] }],
            signInFailureCallback: [{ type: i0.Output, args: ['signInFailure',] }],
            language: [{ type: i0.Input, args: ['language',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.FirebaseuiAngularLibraryService = FirebaseuiAngularLibraryService;
    exports.FirebaseuiAngularLibraryComponent = FirebaseuiAngularLibraryComponent;
    exports.firebase = firebase$1;
    exports.firebaseui = firebaseui;
    exports.FirebaseUIAuthConfig = FirebaseUIAuthConfig;
    exports.FirebaseUISignInSuccessWithAuthResult = FirebaseUISignInSuccessWithAuthResult;
    exports.FirebaseUISignInFailure = FirebaseUISignInFailure;
    exports.FirebaseUISignInSuccess = FirebaseUISignInSuccess;
    exports.CredentialHelper = CredentialHelper;
    exports.AuthProvider = AuthProvider;
    exports.AuthMethods = AuthMethods;
    exports.FirebaseUIModule = FirebaseUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXIudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWlFcyBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRW4gZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlIHtcbiAgcHVibGljIGZpcmViYXNlVWlFbkluc3RhbmNlOiBmaXJlYmFzZXVpRW4uYXV0aC5BdXRoVUk7XG4gIHB1YmxpYyBmaXJlYmFzZVVpRXNJbnN0YW5jZTogZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJO1xuXG4gIGNvbnN0cnVjdG9yKGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoKSB7XG4gICAgLy8gc3RvcmUgdGhlIGZpcmViYXNldWkgaW5zdGFuY2Ugb24gdGhlIHdpbmRvdyBvYmplY3QgdG8gcHJldmVudCBkb3VibGUgaW5pdGlhbGl6YXRpb25cbiAgICBpZiAoISg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVuSW5zdGFuY2UpIHtcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVuSW5zdGFuY2UgPSBuZXcgZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJKGFuZ3VsYXJGaXJlQXV0aC5hdXRoKTtcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVzSW5zdGFuY2UgPSBuZXcgZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJKGFuZ3VsYXJGaXJlQXV0aC5hdXRoKTtcbiAgICB9XG4gICAgdGhpcy5maXJlYmFzZVVpRW5JbnN0YW5jZSA9ICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVuSW5zdGFuY2UgYXMgZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJO1xuICAgIHRoaXMuZmlyZWJhc2VVaUVzSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlIGFzIGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKlxuICogQ3JlYXRlZCBieSBSYXBoYWVsIEplbm5pXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgUmFwaGFlbCBKZW5uaVxuICovXG5cbmltcG9ydCAqIGFzIGZpcmViYXNlT3JpZ2luYWwgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpT3JpZ2luYWwgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuXG5leHBvcnQgY29uc3QgZmlyZWJhc2UgPSBmaXJlYmFzZU9yaWdpbmFsO1xuZXhwb3J0IGNvbnN0IGZpcmViYXNldWkgPSBmaXJlYmFzZXVpT3JpZ2luYWw7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBuYXRpdmUgY29uZmlndXJhdGlvbiBvZiBmaXJlYmFzZXVpIChmaXJlYmFzZXVpLmF1dGguQ29uZmlnKVxuICovXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICBwcm92aWRlcnM6IEFycmF5PEF1dGhQcm92aWRlciB8IEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWc+O1xuICBtZXRob2Q/OiBBdXRoTWV0aG9kcztcbiAgc2lnbkluU3VjY2Vzc1VybD86IHN0cmluZztcbiAgdG9zPzogc3RyaW5nO1xuICBwcml2YWN5UG9saWN5VXJsPzogc3RyaW5nO1xuICBjcmVkZW50aWFsSGVscGVyPzogQ3JlZGVudGlhbEhlbHBlcjtcbiAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdpbGwgYmUgZGVmYXVsdCBpbiB0aGUgZnV0dXJlXG4gICAqL1xuICBkaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgPSBmaXJlYmFzZXVpT3JpZ2luYWwuYXV0aC5Db25maWc7XG5cblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQge1xuICBhdXRoUmVzdWx0OiBVc2VyQ3JlZGVudGlhbDtcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlTaWduSW5GYWlsdXJlIHtcbiAgY29kZTogc3RyaW5nO1xuICBjcmVkZW50aWFsOiBmaXJlYmFzZU9yaWdpbmFsLmF1dGguQXV0aENyZWRlbnRpYWw7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0fVxuICovXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3Mge1xuICBjdXJyZW50VXNlcjogZmlyZWJhc2VPcmlnaW5hbC5Vc2VyO1xuICBjcmVkZW50aWFsOiBmaXJlYmFzZU9yaWdpbmFsLmF1dGguQXV0aENyZWRlbnRpYWw7XG4gIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGVudW0gQ3JlZGVudGlhbEhlbHBlciB7XG4gIEFjY291bnRDaG9vc2VyLCBPbmVUYXAsIE5vbmVcbn1cblxuZXhwb3J0IGVudW0gQXV0aFByb3ZpZGVyIHtcbiAgR29vZ2xlLCBGYWNlYm9vaywgVHdpdHRlciwgR2l0aHViLCBQYXNzd29yZCwgUGhvbmVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnIHtcbiAgcHJvdmlkZXI6IEF1dGhQcm92aWRlcjtcbiAgY3VzdG9tQ29uZmlnOiBPYmplY3Q7XG59XG5cbmV4cG9ydCBlbnVtIEF1dGhNZXRob2RzIHtcbiAgUG9wdXAsIFJlZGlyZWN0XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBBdXRoTWV0aG9kcyxcbiAgQXV0aFByb3ZpZGVyLFxuICBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnLFxuICBDcmVkZW50aWFsSGVscGVyLFxuICBGaXJlYmFzZVVJQXV0aENvbmZpZyxcbiAgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUsXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzLFxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LFxuICBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyxcbn0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXInO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVzIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWlFbiBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lbic7XG4vLyBub2luc3BlY3Rpb24gRVM2VW51c2VkSW1wb3J0c1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7RmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZX0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgR29vZ2xlQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXI7XG5pbXBvcnQgRmFjZWJvb2tBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFR3aXR0ZXJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXI7XG5pbXBvcnQgR2l0aHViQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXI7XG5pbXBvcnQgRW1haWxBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFBob25lQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlcjtcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZpcmViYXNlLXVpJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBDT01QVVRFRF9DQUxMQkFDS1MgPSAnQ09NUFVURURfQ0FMTEJBQ0tTJztcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdFxuICAgKi9cbiAgQE91dHB1dCgnc2lnbkluU3VjY2VzcycpIHNpZ25JblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5TdWNjZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCcpIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgQE91dHB1dCgnc2lnbkluRmFpbHVyZScpIHNpZ25JbkZhaWx1cmVDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5GYWlsdXJlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAvLyBsYW5ndWFnZSBtdXN0IGJlIGVpdGhlciAnZW4nIG9yICdlcydcbiAgQElucHV0KCdsYW5ndWFnZScpIGxhbmd1YWdlOiBzdHJpbmcgPSAnZW4nOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGZpcmViYXNldWlMaWJyYXJ5OiBhbnk7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyOiBBdXRoUHJvdmlkZXIpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkdvb2dsZTpcbiAgICAgICAgcmV0dXJuIEdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkZhY2Vib29rOlxuICAgICAgICByZXR1cm4gRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Ud2l0dGVyOlxuICAgICAgICByZXR1cm4gVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkdpdGh1YjpcbiAgICAgICAgcmV0dXJuIEdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBhc3N3b3JkOlxuICAgICAgICByZXR1cm4gRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QaG9uZTpcbiAgICAgICAgcmV0dXJuIFBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGgsXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlVUlTZXJ2aWNlOiBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlKSB7XG4gICAgICBpZiAoIHRoaXMubGFuZ3VhZ2UgPT09ICdlbicgKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgPSBmaXJlYmFzZXVpRW47XG4gICAgICB9IGVsc2UgaWYgKCB0aGlzLmxhbmd1YWdlID09PSAnZXMnICkge1xuICAgICAgICB0aGlzLmZpcmViYXNldWlMaWJyYXJ5ID0gZmlyZWJhc2V1aUVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvciggJ0xhbmd1YWdlIG11c3QgYmUgZWl0aGVyIFwiZW5cIiBvciBcImVzXCInICk7XG4gICAgICB9XG4gIH1cblxuICBnZXQgZmlyZWJhc2VVaUNvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZyxcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZVxuICAgIH0gYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hbmd1bGFyRmlyZUF1dGguYXV0aFN0YXRlLnN1YnNjcmliZSgodmFsdWU6IFVzZXIpID0+IHtcbiAgICAgIGlmICgodmFsdWUgJiYgdmFsdWUuaXNBbm9ueW1vdXMpIHx8ICF2YWx1ZSkge1xuICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgY29uc29sZS53YXJuKGBcIkZpcmViYXNlVUlBdXRoQ29uZmlnXCIgaXNuJ3Qgc3VwcG9ydGVkIHNpbmNlIHZlcnNpb24gMy4zLjAgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxcblBsZWFzZSB1c2UgdGhlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgXCJmaXJlYmFzZXVpLmF1dGguQ29uZmlnXCJgKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW4gY29weSB5b3VyIGNvbnZlcnRlZCBjb25maWd1cmF0aW9uOlxcbicsIHRoaXMuZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyh0aGlzLmdldFVJQXV0aENvbmZpZygpKSk7XG5cbiAgICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSBBdXRoUHJvdmlkZXIuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5zaWduSW5PcHRpb25zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSBBdXRoUHJvdmlkZXIuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoISF0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVJQXV0aENvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcbiAgICAgIGlmICghKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzKSB7XG4gICAgICAgIHRoaXMuX2ZpcmViYXNlVWlDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10gPSB0cnVlO1xuICAgICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gdGhpcy5nZXRDYWxsYmFja3MoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdXRoQ29uZmlnOiBGaXJlYmFzZVVJQXV0aENvbmZpZyA9ICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpO1xuXG4gICAgY29uc3QgYXV0aFByb3ZpZGVyczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGZvciAobGV0IHByb3ZpZGVyIG9mIGF1dGhDb25maWcucHJvdmlkZXJzKSB7XG4gICAgICBpZiAoISEocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZykuY3VzdG9tQ29uZmlnKSB7XG4gICAgICAgIHByb3ZpZGVyID0gKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcpO1xuXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyV2l0aENvbmZpZyA9IHByb3ZpZGVyLmN1c3RvbUNvbmZpZztcbiAgICAgICAgcHJvdmlkZXJXaXRoQ29uZmlnWydwcm92aWRlciddID0gRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LmdldEF1dGhQcm92aWRlcihwcm92aWRlci5wcm92aWRlcik7XG5cbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKHByb3ZpZGVyV2l0aENvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2goRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LmdldEF1dGhQcm92aWRlcihwcm92aWRlciBhcyBBdXRoUHJvdmlkZXIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b3NVUkwgPSBhdXRoQ29uZmlnLnRvcyA/IGF1dGhDb25maWcudG9zIDogJyc7XG4gICAgY29uc3QgcHJpdmFjeVBvbGljeVVybCA9IGF1dGhDb25maWcucHJpdmFjeVBvbGljeVVybCA/IGF1dGhDb25maWcucHJpdmFjeVBvbGljeVVybCA6ICcnO1xuXG4gICAgbGV0IGF1dGhNZXRob2QgPSAncG9wdXAnO1xuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5tZXRob2QpIHtcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUmVkaXJlY3Q6XG4gICAgICAgIGF1dGhNZXRob2QgPSAncmVkaXJlY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUG9wdXA6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgY3JlZGVudGlhbEhlbHBlcjtcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcuY3JlZGVudGlhbEhlbHBlcikge1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk5vbmU6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5PbmVUYXA6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuQWNjb3VudENob29zZXI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gdGhpcy5maXJlYmFzZXVpTGlicmFyeS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuQUNDT1VOVF9DSE9PU0VSX0NPTTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycyA9IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycyA9PSBudWxsID8gZmFsc2UgOiBhdXRoQ29uZmlnLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XG5cbiAgICBjb25zdCBzaWduSW5TdWNjZXNzQ2FsbGJhY2sgPSAoY3VycmVudFVzZXI6IGZpcmViYXNlLlVzZXIsIGNyZWRlbnRpYWw6IGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwsIHJlZGlyZWN0VXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICAgIGNyZWRlbnRpYWwsXG4gICAgICAgICAgcmVkaXJlY3RVcmxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAhIWF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsbGJhY2tzOiBhbnkgPSB7XG4gICAgICAuLi50aGlzLmdldENhbGxiYWNrcygpLFxuICAgICAgc2lnbkluU3VjY2VzczogbnVsbFxuICAgIH07XG5cbiAgICBpZiAoIWF1dGhDb25maWcuZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgY29uc29sZS53YXJuKCdbRmlyZWJhc2VVaUFuZ3VsYXJdIHNpZ25JblN1Y2Nlc3MgY2FsbGJhY2sgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgY2FsbGJhY2sgaW5zdGVhZC5cXG4nICtcbiAgICAgICAgJ1RvIHJlbW92ZSB0aGlzIHdhcm5pbmcgc2V0IGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2sgb24gdGhlIEZpcmViYXNlVWlDb25maWcgT2JqZWN0LicpO1xuICAgICAgY2FsbGJhY2tzLnNpZ25JblN1Y2Nlc3MgPSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlQ29uZmlndXJhdGlvbjogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgPSB7XG4gICAgICBjYWxsYmFja3M6IGNhbGxiYWNrcyxcbiAgICAgIHNpZ25JbkZsb3c6IGF1dGhNZXRob2QsXG4gICAgICBzaWduSW5PcHRpb25zOiBhdXRoUHJvdmlkZXJzLFxuICAgICAgdG9zVXJsOiB0b3NVUkwsXG4gICAgICBwcml2YWN5UG9saWN5VXJsOiBwcml2YWN5UG9saWN5VXJsLFxuICAgICAgY3JlZGVudGlhbEhlbHBlcjogY3JlZGVudGlhbEhlbHBlcixcbiAgICAgIGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM6IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnNcbiAgICB9O1xuICAgIGlmICghIWF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybCkge1xuICAgICAgbmF0aXZlQ29uZmlndXJhdGlvbi5zaWduSW5TdWNjZXNzVXJsID0gYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH1cbiAgICByZXR1cm4gbmF0aXZlQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZmlyZWJhc2VVSVBvcHVwKCkge1xuICAgIGNvbnN0IGZpcmViYXNlVWlJbnN0YW5jZSA9ICggdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyApID9cbiAgICAgIHRoaXMuZmlyZWJhc2VVSVNlcnZpY2UuZmlyZWJhc2VVaUVuSW5zdGFuY2UgOlxuICAgICAgdGhpcy5maXJlYmFzZVVJU2VydmljZS5maXJlYmFzZVVpRXNJbnN0YW5jZTtcbiAgICBjb25zdCB1aUF1dGhDb25maWcgPSB0aGlzLmdldFVJQXV0aENvbmZpZygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgY2FsbGJhY2tzIGdvdCBjb21wdXRlZCB0byByZXNldCB0aGVtIGFnYWluIGFmdGVyIHByb3ZpZGluZyB0aGUgdG8gZmlyZWJhc2V1aS5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIGFsbG93aW5nIHVwZGF0aW5nIHRoZSBmaXJlYmFzZXVpIGNvbmZpZyBkdXJpbmcgcnVudGltZS5cbiAgICBsZXQgcmVzZXRDYWxsYmFja3MgPSBmYWxzZTtcbiAgICBpZiAodWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdKSB7XG4gICAgICByZXNldENhbGxiYWNrcyA9IHRydWU7XG4gICAgICBkZWxldGUgdWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdO1xuICAgIH1cblxuICAgIC8vIHNob3cgdGhlIGZpcmViYXNldWlcbiAgICBmaXJlYmFzZVVpSW5zdGFuY2Uuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlBdXRoQ29uZmlnKTtcblxuICAgIGlmIChyZXNldENhbGxiYWNrcykge1xuICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWxsYmFja3MoKTogYW55IHtcbiAgICBjb25zdCBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgPSAoYXV0aFJlc3VsdDogVXNlckNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdENhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGF1dGhSZXN1bHQsXG4gICAgICAgICAgcmVkaXJlY3RVcmxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlVWlDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2lnbkluRmFpbHVyZUNhbGxiYWNrID0gKGVycm9yOiBmaXJlYmFzZXVpRW4uYXV0aC5BdXRoVUlFcnJvcikgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5GYWlsdXJlQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgY29kZTogZXJyb3IuY29kZSxcbiAgICAgICAgICBjcmVkZW50aWFsOiBlcnJvci5jcmVkZW50aWFsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdDogc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LFxuICAgICAgc2lnbkluRmFpbHVyZTogc2lnbkluRmFpbHVyZUNhbGxiYWNrLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbmZpZ3VyYXRpb25TdHJpbmcoY29uZmlndXJhdGlvbjogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpOiBzdHJpbmcge1xuICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmNhbGxiYWNrcztcblxuICAgIGlmICghY29uZmlndXJhdGlvbi5hdXRvVXBncmFkZUFub255bW91c1VzZXJzKSB7XG4gICAgICBkZWxldGUgY29uZmlndXJhdGlvbi5hdXRvVXBncmFkZUFub255bW91c1VzZXJzO1xuICAgIH1cblxuICAgIGxldCBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBKU09OLnN0cmluZ2lmeShjb25maWd1cmF0aW9uLCBudWxsLCAyKTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJhY2NvdW50Y2hvb3Nlci5jb21cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuQUNDT1VOVF9DSE9PU0VSX0NPTScpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJnb29nbGV5b2xvXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcIm5vbmVcIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORScpO1xuXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJnb29nbGUuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZmFjZWJvb2suY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJ0d2l0dGVyLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJnaXRodWIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGFzc3dvcmRcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBob25lXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG5cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJnb29nbGUuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJmYWNlYm9vay5jb21cIicsICdmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1widHdpdHRlci5jb21cIicsICdmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJnaXRodWIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicGFzc3dvcmRcIicsICdmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicGhvbmVcIicsICdmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG5cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgvXCIoW2EtekEtWjAtOV0qKVwiOiAoLiopL2csICckMTogJDInKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgvXCIvZywgJ1xcJycpO1xuICAgIC8qIHRzbGludDplbmFibGUgKi9cbiAgICByZXR1cm4gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50fSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGhDb25maWcsIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGZpcmViYXNlVWlBdXRoQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGaXJlYmFzZVVJTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWcnLCB1c2VWYWx1ZTogZmlyZWJhc2VVaUF1dGhDb25maWd9LFxuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiB7fX1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckZlYXR1cmUoZmlyZWJhc2VVSUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcgfCBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnLCB1c2VWYWx1ZTogZmlyZWJhc2VVSUF1dGhDb25maWd9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpcmViYXNldWlFbi5hdXRoIiwiZmlyZWJhc2V1aUVzLmF1dGgiLCJJbmplY3RhYmxlIiwiQW5ndWxhckZpcmVBdXRoIiwiZmlyZWJhc2UiLCJmaXJlYmFzZU9yaWdpbmFsIiwiZmlyZWJhc2V1aU9yaWdpbmFsIiwiZmlyZWJhc2UuYXV0aCIsIkV2ZW50RW1pdHRlciIsInRzbGliXzEuX192YWx1ZXMiLCJDb21wb25lbnQiLCJJbmplY3QiLCJOZ1pvbmUiLCJPdXRwdXQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFZRSx5Q0FBWSxlQUFnQzs7WUFFMUMsSUFBSSxDQUFDLG9CQUFNLE1BQU0sSUFBRSxvQkFBb0IsRUFBRTtnQkFDdkMsb0JBQU0sTUFBTSxJQUFFLG9CQUFvQixHQUFHLElBQUlBLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hGLG9CQUFNLE1BQU0sSUFBRSxvQkFBb0IsR0FBRyxJQUFJQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pGO1lBQ0QsSUFBSSxDQUFDLG9CQUFvQixzQkFBRyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEVBQTRCLENBQUM7WUFDM0YsSUFBSSxDQUFDLG9CQUFvQixzQkFBRyxvQkFBTSxNQUFNLElBQUUsb0JBQW9CLEVBQTRCLENBQUM7U0FDNUY7O29CQWZGQyxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFOT0Msa0JBQWU7Ozs7OENBRHZCO0tBS0E7O0lDTEE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQUUsSUFBSSxN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