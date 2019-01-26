(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/fire/auth'), require('firebase/app'), require('firebaseui-en-es/dist/npm__es'), require('firebase/auth'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('firebaseui-angular', ['exports', '@angular/core', '@angular/fire/auth', 'firebase/app', 'firebaseui-en-es/dist/npm__es', 'firebase/auth', '@angular/common'], factory) :
    (factory((global['firebaseui-angular'] = {}),global.ng.core,global.ng.fire.auth,global.firebase,global.firebaseuiOriginal,null,global.ng.common));
}(this, (function (exports,i0,i1,firebase,firebaseuiOriginal,auth,common) { 'use strict';

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
                if (!(( /** @type {?} */(window))).firebaseUiInstance) {
                    (( /** @type {?} */(window))).firebaseUiInstance = new library.auth.AuthUI(this.angularFireAuth.auth);
                }
                this.firebaseUiInstance = (( /** @type {?} */(window))).firebaseUiInstance;
            };
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
    var firebaseui = firebaseuiOriginal;
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
            language: [{ type: i0.Input }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXIudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSB7XHJcbiAgcHVibGljIGZpcmViYXNlVWlJbnN0YW5jZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCApIHt9XHJcbiAgICBcclxuICBpbml0KCBsaWJyYXJ5OiBhbnkgKSB7XHJcbiAgICAvLyBzdG9yZSB0aGUgZmlyZWJhc2V1aSBpbnN0YW5jZSBvbiB0aGUgd2luZG93IG9iamVjdCB0byBwcmV2ZW50IGRvdWJsZSBpbml0aWFsaXphdGlvblxyXG4gICAgaWYgKCAhKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgKSB7XHJcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlID0gbmV3IGxpYnJhcnkuYXV0aC5BdXRoVUkoIHRoaXMuYW5ndWxhckZpcmVBdXRoLmF1dGggKTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlyZWJhc2VVaUluc3RhbmNlID0gKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2U7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLypcclxuICogQ3JlYXRlZCBieSBSYXBoYWVsIEplbm5pXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNyBSYXBoYWVsIEplbm5pXHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgZmlyZWJhc2VPcmlnaW5hbCBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgVXNlckNyZWRlbnRpYWwgPSBmaXJlYmFzZS5hdXRoLlVzZXJDcmVkZW50aWFsO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpT3JpZ2luYWwgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmViYXNlID0gZmlyZWJhc2VPcmlnaW5hbDtcclxuZXhwb3J0IGNvbnN0IGZpcmViYXNldWkgPSBmaXJlYmFzZXVpT3JpZ2luYWw7XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBuYXRpdmUgY29uZmlndXJhdGlvbiBvZiBmaXJlYmFzZXVpIChmaXJlYmFzZXVpLmF1dGguQ29uZmlnKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlBdXRoQ29uZmlnIHtcclxuICBwcm92aWRlcnM6IEFycmF5PEF1dGhQcm92aWRlciB8IEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWc+O1xyXG4gIG1ldGhvZD86IEF1dGhNZXRob2RzO1xyXG4gIHNpZ25JblN1Y2Nlc3NVcmw/OiBzdHJpbmc7XHJcbiAgdG9zPzogc3RyaW5nO1xyXG4gIHByaXZhY3lQb2xpY3lVcmw/OiBzdHJpbmc7XHJcbiAgY3JlZGVudGlhbEhlbHBlcj86IENyZWRlbnRpYWxIZWxwZXI7XHJcbiAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vycz86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFdpbGwgYmUgZGVmYXVsdCBpbiB0aGUgZnV0dXJlXHJcbiAgICovXHJcbiAgZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjaz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnID0gZmlyZWJhc2V1aU9yaWdpbmFsLmF1dGguQ29uZmlnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0IHtcclxuICBhdXRoUmVzdWx0OiBVc2VyQ3JlZGVudGlhbDtcclxuICByZWRpcmVjdFVybDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUge1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBjcmVkZW50aWFsOiBmaXJlYmFzZU9yaWdpbmFsLmF1dGguQXV0aENyZWRlbnRpYWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3Mge1xyXG4gIGN1cnJlbnRVc2VyOiBmaXJlYmFzZU9yaWdpbmFsLlVzZXI7XHJcbiAgY3JlZGVudGlhbDogZmlyZWJhc2VPcmlnaW5hbC5hdXRoLkF1dGhDcmVkZW50aWFsO1xyXG4gIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBDcmVkZW50aWFsSGVscGVyIHtcclxuICBBY2NvdW50Q2hvb3NlciwgT25lVGFwLCBOb25lXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhQcm92aWRlciB7XHJcbiAgR29vZ2xlLCBGYWNlYm9vaywgVHdpdHRlciwgR2l0aHViLCBQYXNzd29yZCwgUGhvbmVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnIHtcclxuICBwcm92aWRlcjogQXV0aFByb3ZpZGVyO1xyXG4gIGN1c3RvbUNvbmZpZzogT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoTWV0aG9kcyB7XHJcbiAgUG9wdXAsIFJlZGlyZWN0XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBBdXRoTWV0aG9kcyxcclxuICBBdXRoUHJvdmlkZXIsXHJcbiAgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyxcclxuICBDcmVkZW50aWFsSGVscGVyLFxyXG4gIEZpcmViYXNlVUlBdXRoQ29uZmlnLFxyXG4gIEZpcmViYXNlVUlTaWduSW5GYWlsdXJlLFxyXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzLFxyXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXHJcbiAgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcsXHJcbn0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXInO1xyXG4vLyBub2luc3BlY3Rpb24gRVM2VW51c2VkSW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7RmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZX0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IEdvb2dsZUF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyO1xyXG5pbXBvcnQgRmFjZWJvb2tBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyO1xyXG5pbXBvcnQgVHdpdHRlckF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlcjtcclxuaW1wb3J0IEdpdGh1YkF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyO1xyXG5pbXBvcnQgRW1haWxBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyO1xyXG5pbXBvcnQgUGhvbmVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyO1xyXG5pbXBvcnQgVXNlckNyZWRlbnRpYWwgPSBmaXJlYmFzZS5hdXRoLlVzZXJDcmVkZW50aWFsO1xyXG5cclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZpcmViYXNlLXVpJyxcclxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVEX0NBTExCQUNLUyA9ICdDT01QVVRFRF9DQUxMQkFDS1MnO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBVc2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0XHJcbiAgICovXHJcbiAgQE91dHB1dCgnc2lnbkluU3VjY2VzcycpIHNpZ25JblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5TdWNjZXNzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG5cclxuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQnKSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcbiAgQE91dHB1dCgnc2lnbkluRmFpbHVyZScpIHNpZ25JbkZhaWx1cmVDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5GYWlsdXJlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG4gIC8vIGxhbmd1YWdlIG11c3QgYmUgZWl0aGVyICdlbicgb3IgJ2VzJ1xyXG4gIEBJbnB1dCgpIGxhbmd1YWdlOiBzdHJpbmc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBmaXJlYmFzZXVpTGlicmFyeTogYW55O1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXRBdXRoUHJvdmlkZXIocHJvdmlkZXI6IEF1dGhQcm92aWRlcik6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHByb3ZpZGVyKSB7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkdvb2dsZTpcclxuICAgICAgICByZXR1cm4gR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5GYWNlYm9vazpcclxuICAgICAgICByZXR1cm4gRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlR3aXR0ZXI6XHJcbiAgICAgICAgcmV0dXJuIFR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLkdpdGh1YjpcclxuICAgICAgICByZXR1cm4gR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QYXNzd29yZDpcclxuICAgICAgICByZXR1cm4gRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBob25lOlxyXG4gICAgICAgIHJldHVybiBQaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGgsXHJcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWcnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VVSVNlcnZpY2U6IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGdldCBmaXJlYmFzZVVpQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZyxcclxuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlXHJcbiAgICB9IGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICggWydlbicsJ2VzJ10uaW5kZXhPZih0aGlzLmxhbmd1YWdlKSA9PT0gLTEgKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoICdMYW5ndWFnZSBtdXN0IGJlIGVpdGhlciBcImVuXCIgb3IgXCJlc1wiJyApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpcmViYXNldWlMaWJyYXJ5ID0gKCB0aGlzLmxhbmd1YWdlID09PSAnZW4nICkgP1xyXG4gICAgICAgIHJlcXVpcmUoICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lbicgKSA6XHJcbiAgICAgICAgcmVxdWlyZSggJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJyApO1xyXG4gICAgICB0aGlzLmZpcmViYXNlVUlTZXJ2aWNlLmluaXQoIHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYW5ndWxhckZpcmVBdXRoLmF1dGhTdGF0ZS5zdWJzY3JpYmUoKHZhbHVlOiBVc2VyKSA9PiB7XHJcbiAgICAgIGlmICgodmFsdWUgJiYgdmFsdWUuaXNBbm9ueW1vdXMpIHx8ICF2YWx1ZSkge1xyXG4gICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBcIkZpcmViYXNlVUlBdXRoQ29uZmlnXCIgaXNuJ3Qgc3VwcG9ydGVkIHNpbmNlIHZlcnNpb24gMy4zLjAgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLlxcblBsZWFzZSB1c2UgdGhlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgXCJmaXJlYmFzZXVpLmF1dGguQ29uZmlnXCJgKTtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbiBjb3B5IHlvdXIgY29udmVydGVkIGNvbmZpZ3VyYXRpb246XFxuJywgdGhpcy5nZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCkpKTtcclxuXHJcbiAgICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSBBdXRoUHJvdmlkZXIuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5zaWduSW5PcHRpb25zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSBBdXRoUHJvdmlkZXIuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKCEhdGhpcy5zdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VUlBdXRoQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHtcclxuICAgIGlmICghKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzKSB7XHJcbiAgICAgIGlmICghKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VVaUNvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSA9IHRydWU7XHJcbiAgICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IHRoaXMuZ2V0Q2FsbGJhY2tzKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dGhDb25maWc6IEZpcmViYXNlVUlBdXRoQ29uZmlnID0gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZyk7XHJcblxyXG4gICAgY29uc3QgYXV0aFByb3ZpZGVyczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgZm9yIChsZXQgcHJvdmlkZXIgb2YgYXV0aENvbmZpZy5wcm92aWRlcnMpIHtcclxuICAgICAgaWYgKCEhKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcpLmN1c3RvbUNvbmZpZykge1xyXG4gICAgICAgIHByb3ZpZGVyID0gKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm92aWRlcldpdGhDb25maWcgPSBwcm92aWRlci5jdXN0b21Db25maWc7XHJcbiAgICAgICAgcHJvdmlkZXJXaXRoQ29uZmlnWydwcm92aWRlciddID0gRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LmdldEF1dGhQcm92aWRlcihwcm92aWRlci5wcm92aWRlcik7XHJcblxyXG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChwcm92aWRlcldpdGhDb25maWcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9zVVJMID0gYXV0aENvbmZpZy50b3MgPyBhdXRoQ29uZmlnLnRvcyA6ICcnO1xyXG4gICAgY29uc3QgcHJpdmFjeVBvbGljeVVybCA9IGF1dGhDb25maWcucHJpdmFjeVBvbGljeVVybCA/IGF1dGhDb25maWcucHJpdmFjeVBvbGljeVVybCA6ICcnO1xyXG5cclxuICAgIGxldCBhdXRoTWV0aG9kID0gJ3BvcHVwJztcclxuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5tZXRob2QpIHtcclxuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5SZWRpcmVjdDpcclxuICAgICAgICBhdXRoTWV0aG9kID0gJ3JlZGlyZWN0JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBudWxsOlxyXG4gICAgICBjYXNlIEF1dGhNZXRob2RzLlBvcHVwOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjcmVkZW50aWFsSGVscGVyO1xyXG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLmNyZWRlbnRpYWxIZWxwZXIpIHtcclxuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk5vbmU6XHJcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5PbmVUYXA6XHJcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuQWNjb3VudENob29zZXI6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IHRoaXMuZmlyZWJhc2V1aUxpYnJhcnkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkFDQ09VTlRfQ0hPT1NFUl9DT007XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycyA9IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycyA9PSBudWxsID8gZmFsc2UgOiBhdXRoQ29uZmlnLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XHJcblxyXG4gICAgY29uc3Qgc2lnbkluU3VjY2Vzc0NhbGxiYWNrID0gKGN1cnJlbnRVc2VyOiBmaXJlYmFzZS5Vc2VyLCBjcmVkZW50aWFsOiBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsLCByZWRpcmVjdFVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzQ2FsbGJhY2suZW1pdCh7XHJcbiAgICAgICAgICBjdXJyZW50VXNlcixcclxuICAgICAgICAgIGNyZWRlbnRpYWwsXHJcbiAgICAgICAgICByZWRpcmVjdFVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuICEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFja3M6IGFueSA9IHtcclxuICAgICAgLi4udGhpcy5nZXRDYWxsYmFja3MoKSxcclxuICAgICAgc2lnbkluU3VjY2VzczogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWF1dGhDb25maWcuZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1tGaXJlYmFzZVVpQW5ndWxhcl0gc2lnbkluU3VjY2VzcyBjYWxsYmFjayBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCBjYWxsYmFjayBpbnN0ZWFkLlxcbicgK1xyXG4gICAgICAgICdUbyByZW1vdmUgdGhpcyB3YXJuaW5nIHNldCBkaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrIG9uIHRoZSBGaXJlYmFzZVVpQ29uZmlnIE9iamVjdC4nKTtcclxuICAgICAgY2FsbGJhY2tzLnNpZ25JblN1Y2Nlc3MgPSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmF0aXZlQ29uZmlndXJhdGlvbjogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgPSB7XHJcbiAgICAgIGNhbGxiYWNrczogY2FsbGJhY2tzLFxyXG4gICAgICBzaWduSW5GbG93OiBhdXRoTWV0aG9kLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBhdXRoUHJvdmlkZXJzLFxyXG4gICAgICB0b3NVcmw6IHRvc1VSTCxcclxuICAgICAgcHJpdmFjeVBvbGljeVVybDogcHJpdmFjeVBvbGljeVVybCxcclxuICAgICAgY3JlZGVudGlhbEhlbHBlcjogY3JlZGVudGlhbEhlbHBlcixcclxuICAgICAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VyczogYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vyc1xyXG4gICAgfTtcclxuICAgIGlmICghIWF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybCkge1xyXG4gICAgICBuYXRpdmVDb25maWd1cmF0aW9uLnNpZ25JblN1Y2Nlc3NVcmwgPSBhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmF0aXZlQ29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlyZWJhc2VVSVBvcHVwKCkge1xyXG4gICAgY29uc3QgdWlBdXRoQ29uZmlnID0gdGhpcy5nZXRVSUF1dGhDb25maWcoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBjYWxsYmFja3MgZ290IGNvbXB1dGVkIHRvIHJlc2V0IHRoZW0gYWdhaW4gYWZ0ZXIgcHJvdmlkaW5nIHRoZSB0byBmaXJlYmFzZXVpLlxyXG4gICAgLy8gTmVjZXNzYXJ5IGZvciBhbGxvd2luZyB1cGRhdGluZyB0aGUgZmlyZWJhc2V1aSBjb25maWcgZHVyaW5nIHJ1bnRpbWUuXHJcbiAgICBsZXQgcmVzZXRDYWxsYmFja3MgPSBmYWxzZTtcclxuICAgIGlmICh1aUF1dGhDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10pIHtcclxuICAgICAgcmVzZXRDYWxsYmFja3MgPSB0cnVlO1xyXG4gICAgICBkZWxldGUgdWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNob3cgdGhlIGZpcmViYXNldWlcclxuICAgIHRoaXMuZmlyZWJhc2VVSVNlcnZpY2UuZmlyZWJhc2VVaUluc3RhbmNlLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHVpQXV0aENvbmZpZyk7XHJcblxyXG4gICAgaWYgKHJlc2V0Q2FsbGJhY2tzKSB7XHJcbiAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDYWxsYmFja3MoKTogYW55IHtcclxuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCA9IChhdXRoUmVzdWx0OiBVc2VyQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdENhbGxiYWNrLmVtaXQoe1xyXG4gICAgICAgICAgYXV0aFJlc3VsdCxcclxuICAgICAgICAgIHJlZGlyZWN0VXJsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVpQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNpZ25JbkZhaWx1cmVDYWxsYmFjayA9IChlcnJvcjogYW55ICkgPT4geyAvLyBlcnJvciB0eXBlIGlzIGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSUVycm9yXHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaWduSW5GYWlsdXJlQ2FsbGJhY2suZW1pdCh7XHJcbiAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxyXG4gICAgICAgICAgY3JlZGVudGlhbDogZXJyb3IuY3JlZGVudGlhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdDogc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LFxyXG4gICAgICBzaWduSW5GYWlsdXJlOiBzaWduSW5GYWlsdXJlQ2FsbGJhY2ssXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKGNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTogc3RyaW5nIHtcclxuICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmNhbGxiYWNrcztcclxuXHJcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vycykge1xyXG4gICAgICBkZWxldGUgY29uZmlndXJhdGlvbi5hdXRvVXBncmFkZUFub255bW91c1VzZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBKU09OLnN0cmluZ2lmeShjb25maWd1cmF0aW9uLCBudWxsLCAyKTtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlICovXHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiYWNjb3VudGNob29zZXIuY29tXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkFDQ09VTlRfQ0hPT1NFUl9DT00nKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJnb29nbGV5b2xvXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwibm9uZVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FJyk7XHJcblxyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJnb29nbGUuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJmYWNlYm9vay5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwidHdpdHRlci5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJnaXRodWIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwYXNzd29yZFwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwaG9uZVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG5cclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdvb2dsZS5jb21cIicsICdmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZmFjZWJvb2suY29tXCInLCAnZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1widHdpdHRlci5jb21cIicsICdmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdpdGh1Yi5jb21cIicsICdmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBhc3N3b3JkXCInLCAnZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicGhvbmVcIicsICdmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcblxyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiKFthLXpBLVowLTldKilcIjogKC4qKS9nLCAnJDE6ICQyJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgvXCIvZywgJ1xcJycpO1xyXG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50fSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0ZpcmViYXNlVUlBdXRoQ29uZmlnLCBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZ30gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGZpcmViYXNlVWlBdXRoQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZycsIHVzZVZhbHVlOiBmaXJlYmFzZVVpQXV0aENvbmZpZ30sXHJcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnLCB1c2VWYWx1ZToge319XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yRmVhdHVyZShmaXJlYmFzZVVJQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB8IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IGZpcmViYXNlVUlBdXRoQ29uZmlnfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkFuZ3VsYXJGaXJlQXV0aCIsImZpcmViYXNlIiwiZmlyZWJhc2VPcmlnaW5hbCIsImZpcmViYXNlLmF1dGgiLCJFdmVudEVtaXR0ZXIiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiQ29tcG9uZW50IiwiSW5qZWN0IiwiTmdab25lIiwiT3V0cHV0IiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBU0UseUNBQXFCLGVBQWdDO1lBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtTQUFLOzs7OztRQUUxRCw4Q0FBSTs7OztZQUFKLFVBQU0sT0FBWTs7Z0JBRWhCLElBQUssQ0FBQyxvQkFBTSxNQUFNLElBQUUsa0JBQWtCLEVBQUc7b0JBQ3ZDLG9CQUFNLE1BQU0sSUFBRSxrQkFBa0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLENBQUM7aUJBQ3pGO2dCQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQkFBTSxNQUFNLElBQUUsa0JBQWtCLENBQUM7YUFDNUQ7O29CQWRGQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFKT0Msa0JBQWU7Ozs7OENBRHZCO0tBR0E7O0lDSEE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLEtBQUssSUFBSSxD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