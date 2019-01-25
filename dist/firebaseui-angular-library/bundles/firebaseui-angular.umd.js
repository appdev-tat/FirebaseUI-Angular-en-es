(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/fire/auth'), require('firebaseui-en-es/dist/npm__es'), require('firebase/app'), require('firebase/auth'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('firebaseui-angular', ['exports', '@angular/core', '@angular/fire/auth', 'firebaseui-en-es/dist/npm__es', 'firebase/app', 'firebase/auth', '@angular/common'], factory) :
    (factory((global['firebaseui-angular'] = {}),global.ng.core,global.ng.fire.auth,global.firebaseui,global.firebase,null,global.ng.common));
}(this, (function (exports,i0,i1,firebaseui,firebase,auth,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FirebaseuiAngularLibraryService = /** @class */ (function () {
        function FirebaseuiAngularLibraryService(angularFireAuth) {
            // store the firebaseui instance on the window object to prevent double initialization
            if (!(( /** @type {?} */(window))).firebaseUiInstance) {
                (( /** @type {?} */(window))).firebaseUiInstance = new firebaseui.auth.AuthUI(angularFireAuth.auth);
            }
            this.firebaseUiInstance = ( /** @type {?} */((( /** @type {?} */(window))).firebaseUiInstance));
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
    var firebaseui$1 = firebaseui;
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
                        credentialHelper = firebaseui.auth.CredentialHelper.NONE;
                        break;
                    case CredentialHelper.OneTap:
                        credentialHelper = firebaseui.auth.CredentialHelper.GOOGLE_YOLO;
                        break;
                    case CredentialHelper.AccountChooser:
                    default:
                        credentialHelper = firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM;
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
                var firebaseUiInstance = this.firebaseUIService.firebaseUiInstance;
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
                        selector: 'firebase-ui-es',
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
            signInFailureCallback: [{ type: i0.Output, args: ['signInFailure',] }]
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
    exports.firebaseui = firebaseui$1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyL2xpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXIudHMiLCJuZzovL2ZpcmViYXNldWktYW5ndWxhci9saWIvZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LnRzIiwibmc6Ly9maXJlYmFzZXVpLWFuZ3VsYXIvbGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlIHtcbiAgcHVibGljIGZpcmViYXNlVWlJbnN0YW5jZTogZmlyZWJhc2V1aS5hdXRoLkF1dGhVSTtcblxuICBjb25zdHJ1Y3Rvcihhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCkge1xuICAgIC8vIHN0b3JlIHRoZSBmaXJlYmFzZXVpIGluc3RhbmNlIG9uIHRoZSB3aW5kb3cgb2JqZWN0IHRvIHByZXZlbnQgZG91YmxlIGluaXRpYWxpemF0aW9uXG4gICAgaWYgKCEoPGFueT53aW5kb3cpLmZpcmViYXNlVWlJbnN0YW5jZSkge1xuICAgICAgKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShhbmd1bGFyRmlyZUF1dGguYXV0aCk7XG4gICAgfVxuICAgIHRoaXMuZmlyZWJhc2VVaUluc3RhbmNlID0gKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgYXMgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKlxuICogQ3JlYXRlZCBieSBSYXBoYWVsIEplbm5pXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgUmFwaGFlbCBKZW5uaVxuICovXG5cbmltcG9ydCAqIGFzIGZpcmViYXNlT3JpZ2luYWwgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpT3JpZ2luYWwgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuXG5leHBvcnQgY29uc3QgZmlyZWJhc2UgPSBmaXJlYmFzZU9yaWdpbmFsO1xuZXhwb3J0IGNvbnN0IGZpcmViYXNldWkgPSBmaXJlYmFzZXVpT3JpZ2luYWw7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBuYXRpdmUgY29uZmlndXJhdGlvbiBvZiBmaXJlYmFzZXVpIChmaXJlYmFzZXVpLmF1dGguQ29uZmlnKVxuICovXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICBwcm92aWRlcnM6IEFycmF5PEF1dGhQcm92aWRlciB8IEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWc+O1xuICBtZXRob2Q/OiBBdXRoTWV0aG9kcztcbiAgc2lnbkluU3VjY2Vzc1VybD86IHN0cmluZztcbiAgdG9zPzogc3RyaW5nO1xuICBwcml2YWN5UG9saWN5VXJsPzogc3RyaW5nO1xuICBjcmVkZW50aWFsSGVscGVyPzogQ3JlZGVudGlhbEhlbHBlcjtcbiAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdpbGwgYmUgZGVmYXVsdCBpbiB0aGUgZnV0dXJlXG4gICAqL1xuICBkaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgPSBmaXJlYmFzZXVpT3JpZ2luYWwuYXV0aC5Db25maWc7XG5cblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQge1xuICBhdXRoUmVzdWx0OiBVc2VyQ3JlZGVudGlhbDtcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlTaWduSW5GYWlsdXJlIHtcbiAgY29kZTogc3RyaW5nO1xuICBjcmVkZW50aWFsOiBmaXJlYmFzZU9yaWdpbmFsLmF1dGguQXV0aENyZWRlbnRpYWw7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0fVxuICovXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3Mge1xuICBjdXJyZW50VXNlcjogZmlyZWJhc2VPcmlnaW5hbC5Vc2VyO1xuICBjcmVkZW50aWFsOiBmaXJlYmFzZU9yaWdpbmFsLmF1dGguQXV0aENyZWRlbnRpYWw7XG4gIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGVudW0gQ3JlZGVudGlhbEhlbHBlciB7XG4gIEFjY291bnRDaG9vc2VyLCBPbmVUYXAsIE5vbmVcbn1cblxuZXhwb3J0IGVudW0gQXV0aFByb3ZpZGVyIHtcbiAgR29vZ2xlLCBGYWNlYm9vaywgVHdpdHRlciwgR2l0aHViLCBQYXNzd29yZCwgUGhvbmVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnIHtcbiAgcHJvdmlkZXI6IEF1dGhQcm92aWRlcjtcbiAgY3VzdG9tQ29uZmlnOiBPYmplY3Q7XG59XG5cbmV4cG9ydCBlbnVtIEF1dGhNZXRob2RzIHtcbiAgUG9wdXAsIFJlZGlyZWN0XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEF1dGhNZXRob2RzLFxuICBBdXRoUHJvdmlkZXIsXG4gIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcsXG4gIENyZWRlbnRpYWxIZWxwZXIsXG4gIEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSxcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3MsXG4gIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnLFxufSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlcic7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJztcbi8vIG5vaW5zcGVjdGlvbiBFUzZVbnVzZWRJbXBvcnRzXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlfSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LnNlcnZpY2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCBHb29nbGVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcjtcbmltcG9ydCBGYWNlYm9va0F1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXI7XG5pbXBvcnQgVHdpdHRlckF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlcjtcbmltcG9ydCBHaXRodWJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcjtcbmltcG9ydCBFbWFpbEF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXI7XG5pbXBvcnQgUGhvbmVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlBob25lQXV0aFByb3ZpZGVyO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmlyZWJhc2UtdWktZXMnLFxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCI+PC9kaXY+J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTVBVVEVEX0NBTExCQUNLUyA9ICdDT01QVVRFRF9DQUxMQkFDS1MnO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0XG4gICAqL1xuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzJykgc2lnbkluU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3M+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgQE91dHB1dCgnc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Jykgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICBAT3V0cHV0KCdzaWduSW5GYWlsdXJlJykgc2lnbkluRmFpbHVyZUNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RmlyZWJhc2VVSVNpZ25JbkZhaWx1cmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIHN0YXRpYyBnZXRBdXRoUHJvdmlkZXIocHJvdmlkZXI6IEF1dGhQcm92aWRlcik6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwcm92aWRlcikge1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR29vZ2xlOlxuICAgICAgICByZXR1cm4gR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuRmFjZWJvb2s6XG4gICAgICAgIHJldHVybiBGYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlR3aXR0ZXI6XG4gICAgICAgIHJldHVybiBUd2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuR2l0aHViOlxuICAgICAgICByZXR1cm4gR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGFzc3dvcmQ6XG4gICAgICAgIHJldHVybiBFbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICAgIGNhc2UgQXV0aFByb3ZpZGVyLlBob25lOlxuICAgICAgICByZXR1cm4gUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCxcbiAgICAgICAgICAgICAgQEluamVjdCgnZmlyZWJhc2VVSUF1dGhDb25maWcnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnLFxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmU6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VVSVNlcnZpY2U6IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2UpIHtcbiAgfVxuXG4gIGdldCBmaXJlYmFzZVVpQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnLFxuICAgICAgLi4udGhpcy5fZmlyZWJhc2VVaUNvbmZpZ19GZWF0dXJlXG4gICAgfSBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh2YWx1ZTogVXNlcikgPT4ge1xuICAgICAgaWYgKCh2YWx1ZSAmJiB2YWx1ZS5pc0Fub255bW91cykgfHwgIXZhbHVlKSB7XG4gICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFwiRmlyZWJhc2VVSUF1dGhDb25maWdcIiBpc24ndCBzdXBwb3J0ZWQgc2luY2UgdmVyc2lvbiAzLjMuMCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXFxuUGxlYXNlIHVzZSB0aGUgbmF0aXZlIGNvbmZpZ3VyYXRpb24gb2YgZmlyZWJhc2V1aSBcImZpcmViYXNldWkuYXV0aC5Db25maWdcImApO1xuICAgICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbiBjb3B5IHlvdXIgY29udmVydGVkIGNvbmZpZ3VyYXRpb246XFxuJywgdGhpcy5nZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCkpKTtcblxuICAgICAgICAgIGlmICgodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKS5wcm92aWRlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLnNpZ25Jbk9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlVUlQb3B1cCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIG11c3QgYmUgYXQgbGVhc3Qgb25lIEF1dGhQcm92aWRlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICghIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VUlBdXRoQ29uZmlnKCk6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHtcbiAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xuICAgICAgaWYgKCEodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MpIHtcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VVaUNvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSA9IHRydWU7XG4gICAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSB0aGlzLmdldENhbGxiYWNrcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dGhDb25maWc6IEZpcmViYXNlVUlBdXRoQ29uZmlnID0gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZyk7XG5cbiAgICBjb25zdCBhdXRoUHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW107XG4gICAgZm9yIChsZXQgcHJvdmlkZXIgb2YgYXV0aENvbmZpZy5wcm92aWRlcnMpIHtcbiAgICAgIGlmICghIShwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKS5jdXN0b21Db25maWcpIHtcbiAgICAgICAgcHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgcHJvdmlkZXJXaXRoQ29uZmlnID0gcHJvdmlkZXIuY3VzdG9tQ29uZmlnO1xuICAgICAgICBwcm92aWRlcldpdGhDb25maWdbJ3Byb3ZpZGVyJ10gPSBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyKTtcblxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2gocHJvdmlkZXJXaXRoQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvc1VSTCA9IGF1dGhDb25maWcudG9zID8gYXV0aENvbmZpZy50b3MgOiAnJztcbiAgICBjb25zdCBwcml2YWN5UG9saWN5VXJsID0gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsID8gYXV0aENvbmZpZy5wcml2YWN5UG9saWN5VXJsIDogJyc7XG5cbiAgICBsZXQgYXV0aE1ldGhvZCA9ICdwb3B1cCc7XG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLm1ldGhvZCkge1xuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5SZWRpcmVjdDpcbiAgICAgICAgYXV0aE1ldGhvZCA9ICdyZWRpcmVjdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5Qb3B1cDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBjcmVkZW50aWFsSGVscGVyO1xuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5jcmVkZW50aWFsSGVscGVyKSB7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuTm9uZTpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLk9uZVRhcDpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkdPT0dMRV9ZT0xPO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5BY2NvdW50Q2hvb3NlcjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBhdXRvVXBncmFkZUFub255bW91c1VzZXJzID0gYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzID09IG51bGwgPyBmYWxzZSA6IGF1dGhDb25maWcuYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcblxuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NDYWxsYmFjayA9IChjdXJyZW50VXNlcjogZmlyZWJhc2UuVXNlciwgY3JlZGVudGlhbDogZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgICAgY3JlZGVudGlhbCxcbiAgICAgICAgICByZWRpcmVjdFVybFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxsYmFja3M6IGFueSA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0Q2FsbGJhY2tzKCksXG4gICAgICBzaWduSW5TdWNjZXNzOiBudWxsXG4gICAgfTtcblxuICAgIGlmICghYXV0aENvbmZpZy5kaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tGaXJlYmFzZVVpQW5ndWxhcl0gc2lnbkluU3VjY2VzcyBjYWxsYmFjayBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCBjYWxsYmFjayBpbnN0ZWFkLlxcbicgK1xuICAgICAgICAnVG8gcmVtb3ZlIHRoaXMgd2FybmluZyBzZXQgZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjayBvbiB0aGUgRmlyZWJhc2VVaUNvbmZpZyBPYmplY3QuJyk7XG4gICAgICBjYWxsYmFja3Muc2lnbkluU3VjY2VzcyA9IHNpZ25JblN1Y2Nlc3NDYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVDb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IHtcbiAgICAgIGNhbGxiYWNrczogY2FsbGJhY2tzLFxuICAgICAgc2lnbkluRmxvdzogYXV0aE1ldGhvZCxcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IGF1dGhQcm92aWRlcnMsXG4gICAgICB0b3NVcmw6IHRvc1VSTCxcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHByaXZhY3lQb2xpY3lVcmwsXG4gICAgICBjcmVkZW50aWFsSGVscGVyOiBjcmVkZW50aWFsSGVscGVyLFxuICAgICAgYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VyczogYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vyc1xuICAgIH07XG4gICAgaWYgKCEhYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsKSB7XG4gICAgICBuYXRpdmVDb25maWd1cmF0aW9uLnNpZ25JblN1Y2Nlc3NVcmwgPSBhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXJlYmFzZVVJUG9wdXAoKSB7XG4gICAgY29uc3QgZmlyZWJhc2VVaUluc3RhbmNlID0gdGhpcy5maXJlYmFzZVVJU2VydmljZS5maXJlYmFzZVVpSW5zdGFuY2U7XG4gICAgY29uc3QgdWlBdXRoQ29uZmlnID0gdGhpcy5nZXRVSUF1dGhDb25maWcoKTtcblxuICAgIC8vIENoZWNrIGlmIGNhbGxiYWNrcyBnb3QgY29tcHV0ZWQgdG8gcmVzZXQgdGhlbSBhZ2FpbiBhZnRlciBwcm92aWRpbmcgdGhlIHRvIGZpcmViYXNldWkuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciBhbGxvd2luZyB1cGRhdGluZyB0aGUgZmlyZWJhc2V1aSBjb25maWcgZHVyaW5nIHJ1bnRpbWUuXG4gICAgbGV0IHJlc2V0Q2FsbGJhY2tzID0gZmFsc2U7XG4gICAgaWYgKHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXSkge1xuICAgICAgcmVzZXRDYWxsYmFja3MgPSB0cnVlO1xuICAgICAgZGVsZXRlIHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXTtcbiAgICB9XG5cbiAgICAvLyBzaG93IHRoZSBmaXJlYmFzZXVpXG4gICAgZmlyZWJhc2VVaUluc3RhbmNlLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHVpQXV0aENvbmZpZyk7XG5cbiAgICBpZiAocmVzZXRDYWxsYmFja3MpIHtcbiAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FsbGJhY2tzKCk6IGFueSB7XG4gICAgY29uc3Qgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0ID0gKGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsLCByZWRpcmVjdFVybCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBhdXRoUmVzdWx0LFxuICAgICAgICAgIHJlZGlyZWN0VXJsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVpQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfTtcblxuICAgIGNvbnN0IHNpZ25JbkZhaWx1cmVDYWxsYmFjayA9IChlcnJvcjogZmlyZWJhc2V1aS5hdXRoLkF1dGhVSUVycm9yKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JbkZhaWx1cmVDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgIGNyZWRlbnRpYWw6IGVycm9yLmNyZWRlbnRpYWxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0OiBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQsXG4gICAgICBzaWduSW5GYWlsdXJlOiBzaWduSW5GYWlsdXJlQ2FsbGJhY2ssXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyhjb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk6IHN0cmluZyB7XG4gICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzO1xuXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMpIHtcbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM7XG4gICAgfVxuXG4gICAgbGV0IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24sIG51bGwsIDIpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImFjY291bnRjaG9vc2VyLmNvbVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImdvb2dsZXlvbG9cIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE8nKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwibm9uZVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FJyk7XG5cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdvb2dsZS5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJmYWNlYm9vay5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInR3aXR0ZXIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImdpdGh1Yi5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwYXNzd29yZFwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGhvbmVcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdvb2dsZS5jb21cIicsICdmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImZhY2Vib29rLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJ0d2l0dGVyLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImdpdGh1Yi5jb21cIicsICdmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwYXNzd29yZFwiJywgJ2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwaG9uZVwiJywgJ2ZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIihbYS16QS1aMC05XSopXCI6ICguKikvZywgJyQxOiAkMicpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIi9nLCAnXFwnJyk7XG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgIHJldHVybiBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnR9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aENvbmZpZywgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWd9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZmlyZWJhc2VVaUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZycsIHVzZVZhbHVlOiBmaXJlYmFzZVVpQXV0aENvbmZpZ30sXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IHt9fVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yRmVhdHVyZShmaXJlYmFzZVVJQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB8IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiBmaXJlYmFzZVVJQXV0aENvbmZpZ31cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyZWJhc2V1aS5hdXRoIiwiSW5qZWN0YWJsZSIsIkFuZ3VsYXJGaXJlQXV0aCIsImZpcmViYXNlIiwiZmlyZWJhc2VPcmlnaW5hbCIsImZpcmViYXNldWkiLCJmaXJlYmFzZXVpT3JpZ2luYWwiLCJmaXJlYmFzZS5hdXRoIiwiRXZlbnRFbWl0dGVyIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkNvbXBvbmVudCIsIkluamVj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