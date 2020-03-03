(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/fire/auth'), require('firebase/app'), require('firebaseui-en-es/dist/npm__es'), require('firebase/auth'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('firebaseui-angular-en-es', ['exports', '@angular/core', '@angular/fire/auth', 'firebase/app', 'firebaseui-en-es/dist/npm__es', 'firebase/auth', '@angular/common'], factory) :
    (global = global || self, factory(global['firebaseui-angular-en-es'] = {}, global.ng.core, global.ng.fire.auth, global.firebase$1, global.firebaseuiOriginal, null, global.ng.common));
}(this, (function (exports, core, auth, firebase$1, firebaseuiOriginal, auth$1, common) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FirebaseuiAngularLibraryService.ctorParameters = function () { return [
            { type: auth.AngularFireAuth }
        ]; };
        /** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(core.ɵɵinject(auth.AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
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
    var   /**
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
    var   /**
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
    var GoogleAuthProvider = firebase$1.auth.GoogleAuthProvider;
    var FacebookAuthProvider = firebase$1.auth.FacebookAuthProvider;
    var TwitterAuthProvider = firebase$1.auth.TwitterAuthProvider;
    var GithubAuthProvider = firebase$1.auth.GithubAuthProvider;
    var EmailAuthProvider = firebase$1.auth.EmailAuthProvider;
    var PhoneAuthProvider = firebase$1.auth.PhoneAuthProvider;
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
            this.signInSuccessCallback = new core.EventEmitter(); // tslint:disable-line
            // tslint:disable-line
            this.signInSuccessWithAuthResultCallback = new core.EventEmitter(); // tslint:disable-line
            // tslint:disable-line
            this.signInFailureCallback = new core.EventEmitter(); // tslint:disable-line
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
            { type: core.Component, args: [{
                        selector: 'firebase-ui',
                        template: '<div id="firebaseui-auth-container"></div>'
                    }] }
        ];
        /** @nocollapse */
        FirebaseuiAngularLibraryComponent.ctorParameters = function () { return [
            { type: auth.AngularFireAuth },
            { type: undefined, decorators: [{ type: core.Inject, args: ['firebaseUIAuthConfig',] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: ['firebaseUIAuthConfigFeature',] }] },
            { type: core.NgZone },
            { type: FirebaseuiAngularLibraryService }
        ]; };
        FirebaseuiAngularLibraryComponent.propDecorators = {
            signInSuccessCallback: [{ type: core.Output, args: ['signInSuccess',] }],
            signInSuccessWithAuthResultCallback: [{ type: core.Output, args: ['signInSuccessWithAuthResult',] }],
            signInFailureCallback: [{ type: core.Output, args: ['signInFailure',] }],
            language: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [FirebaseuiAngularLibraryComponent],
                        exports: [FirebaseuiAngularLibraryComponent]
                    },] }
        ];
        return FirebaseUIModule;
    }());

    exports.AuthMethods = AuthMethods;
    exports.AuthProvider = AuthProvider;
    exports.CredentialHelper = CredentialHelper;
    exports.FirebaseUIAuthConfig = FirebaseUIAuthConfig;
    exports.FirebaseUIModule = FirebaseUIModule;
    exports.FirebaseUISignInFailure = FirebaseUISignInFailure;
    exports.FirebaseUISignInSuccess = FirebaseUISignInSuccess;
    exports.FirebaseUISignInSuccessWithAuthResult = FirebaseUISignInSuccessWithAuthResult;
    exports.FirebaseuiAngularLibraryComponent = FirebaseuiAngularLibraryComponent;
    exports.FirebaseuiAngularLibraryService = FirebaseuiAngularLibraryService;
    exports.firebase = firebase;
    exports.firebaseui = firebaseui;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=firebaseui-angular-en-es.umd.js.map
