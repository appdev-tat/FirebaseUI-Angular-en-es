/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Inject, NgZone, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthMethods, AuthProvider, CredentialHelper, } from './firebaseui-angular-library.helper';
import * as firebaseui from 'firebaseui-en-es/dist/npm__es';
// noinspection ES6UnusedImports
import * as firebase from 'firebase/app';
import { FirebaseuiAngularLibraryService } from './firebaseui-angular-library.service';
import 'firebase/auth';
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
            return (/** @type {?} */ (tslib_1.__assign({}, this._firebaseUiConfig, this._firebaseUiConfig_Feature)));
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
            for (var _b = tslib_1.__values(authConfig.providers), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        var callbacks = tslib_1.__assign({}, this.getCallbacks(), { signInSuccess: null });
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
        signInFailureCallback: [{ type: Output, args: ['signInFailure',] }]
    };
    return FirebaseuiAngularLibraryComponent;
}());
export { FirebaseuiAngularLibraryComponent };
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
    FirebaseuiAngularLibraryComponent.prototype.subscription;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUNMLFdBQVcsRUFDWCxZQUFZLEVBRVosZ0JBQWdCLEdBTWpCLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxLQUFLLFVBQVUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFNUQsT0FBTyxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFFekMsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckYsT0FBTyxlQUFlLENBQUM7QUFDdkIsSUFBTyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzdELElBQU8sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztBQUNqRSxJQUFPLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDL0QsSUFBTyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzdELElBQU8saUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRCxJQUFPLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFHM0Q7SUFrQ0UsMkNBQW9CLGVBQWdDLEVBQ0EsaUJBQW9FLEVBQzdELHlCQUE0RSxF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bUM7O0lBbUJ2Qiw0REFBd0M7O0lBQ3hDLDhEQUE0Rzs7SUFDNUcsc0VBQTJIOztJQUMzSCxtREFBc0I7O0lBQ3RCLDhEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQXV0aE1ldGhvZHMsXG4gIEF1dGhQcm92aWRlcixcbiAgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZyxcbiAgQ3JlZGVudGlhbEhlbHBlcixcbiAgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gIEZpcmViYXNlVUlTaWduSW5GYWlsdXJlLFxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyxcbiAgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcbiAgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcsXG59IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuLy8gbm9pbnNwZWN0aW9uIEVTNlVudXNlZEltcG9ydHNcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQge0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2V9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IEdvb2dsZUF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyO1xuaW1wb3J0IEZhY2Vib29rQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcjtcbmltcG9ydCBUd2l0dGVyQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyO1xuaW1wb3J0IEdpdGh1YkF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyO1xuaW1wb3J0IEVtYWlsQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlcjtcbmltcG9ydCBQaG9uZUF1dGhQcm92aWRlciA9IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXI7XG5pbXBvcnQgVXNlckNyZWRlbnRpYWwgPSBmaXJlYmFzZS5hdXRoLlVzZXJDcmVkZW50aWFsO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaXJlYmFzZS11aScsXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cImZpcmViYXNldWktYXV0aC1jb250YWluZXJcIj48L2Rpdj4nXG59KVxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09NUFVURURfQ0FMTEJBQ0tTID0gJ0NPTVBVVEVEX0NBTExCQUNLUyc7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRcbiAgICovXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3MnKSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBAT3V0cHV0KCdzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQnKSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjazogRXZlbnRFbWl0dGVyPEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIEBPdXRwdXQoJ3NpZ25JbkZhaWx1cmUnKSBzaWduSW5GYWlsdXJlQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluRmFpbHVyZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgc3RhdGljIGdldEF1dGhQcm92aWRlcihwcm92aWRlcjogQXV0aFByb3ZpZGVyKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHByb3ZpZGVyKSB7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Hb29nbGU6XG4gICAgICAgIHJldHVybiBHb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5GYWNlYm9vazpcbiAgICAgICAgcmV0dXJuIEZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuVHdpdHRlcjpcbiAgICAgICAgcmV0dXJuIFR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5HaXRodWI6XG4gICAgICAgIHJldHVybiBHaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QYXNzd29yZDpcbiAgICAgICAgcmV0dXJuIEVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGhvbmU6XG4gICAgICAgIHJldHVybiBQaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoLFxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZycpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScpIHByaXZhdGUgX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVVJU2VydmljZTogRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSkge1xuICB9XG5cbiAgZ2V0IGZpcmViYXNlVWlDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWcsXG4gICAgICAuLi50aGlzLl9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmVcbiAgICB9IGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWc7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYW5ndWxhckZpcmVBdXRoLmF1dGhTdGF0ZS5zdWJzY3JpYmUoKHZhbHVlOiBVc2VyKSA9PiB7XG4gICAgICBpZiAoKHZhbHVlICYmIHZhbHVlLmlzQW5vbnltb3VzKSB8fCAhdmFsdWUpIHtcbiAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIGNvbnNvbGUud2FybihgXCJGaXJlYmFzZVVJQXV0aENvbmZpZ1wiIGlzbid0IHN1cHBvcnRlZCBzaW5jZSB2ZXJzaW9uIDMuMy4wIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cXG5QbGVhc2UgdXNlIHRoZSBuYXRpdmUgY29uZmlndXJhdGlvbiBvZiBmaXJlYmFzZXVpIFwiZmlyZWJhc2V1aS5hdXRoLkNvbmZpZ1wiYCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgY2FuIGNvcHkgeW91ciBjb252ZXJ0ZWQgY29uZmlndXJhdGlvbjpcXG4nLCB0aGlzLmdldE5ld0NvbmZpZ3VyYXRpb25TdHJpbmcodGhpcy5nZXRVSUF1dGhDb25maWcoKSkpO1xuXG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuc2lnbkluT3B0aW9ucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VVSVBvcHVwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKCEhdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVSUF1dGhDb25maWcoKTogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcge1xuICAgIGlmICghKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzKSB7XG4gICAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcykge1xuICAgICAgICB0aGlzLl9maXJlYmFzZVVpQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdID0gdHJ1ZTtcbiAgICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IHRoaXMuZ2V0Q2FsbGJhY2tzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgYXV0aENvbmZpZzogRmlyZWJhc2VVSUF1dGhDb25maWcgPSAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIEZpcmViYXNlVUlBdXRoQ29uZmlnKTtcblxuICAgIGNvbnN0IGF1dGhQcm92aWRlcnM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBmb3IgKGxldCBwcm92aWRlciBvZiBhdXRoQ29uZmlnLnByb3ZpZGVycykge1xuICAgICAgaWYgKCEhKHByb3ZpZGVyIGFzIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcpLmN1c3RvbUNvbmZpZykge1xuICAgICAgICBwcm92aWRlciA9IChwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKTtcblxuICAgICAgICBjb25zdCBwcm92aWRlcldpdGhDb25maWcgPSBwcm92aWRlci5jdXN0b21Db25maWc7XG4gICAgICAgIHByb3ZpZGVyV2l0aENvbmZpZ1sncHJvdmlkZXInXSA9IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIucHJvdmlkZXIpO1xuXG4gICAgICAgIGF1dGhQcm92aWRlcnMucHVzaChwcm92aWRlcldpdGhDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXV0aFByb3ZpZGVycy5wdXNoKEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9zVVJMID0gYXV0aENvbmZpZy50b3MgPyBhdXRoQ29uZmlnLnRvcyA6ICcnO1xuICAgIGNvbnN0IHByaXZhY3lQb2xpY3lVcmwgPSBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgPyBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgOiAnJztcblxuICAgIGxldCBhdXRoTWV0aG9kID0gJ3BvcHVwJztcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcubWV0aG9kKSB7XG4gICAgICBjYXNlIEF1dGhNZXRob2RzLlJlZGlyZWN0OlxuICAgICAgICBhdXRoTWV0aG9kID0gJ3JlZGlyZWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG51bGw6XG4gICAgICBjYXNlIEF1dGhNZXRob2RzLlBvcHVwOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IGNyZWRlbnRpYWxIZWxwZXI7XG4gICAgc3dpdGNoIChhdXRoQ29uZmlnLmNyZWRlbnRpYWxIZWxwZXIpIHtcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5Ob25lOlxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuT25lVGFwOlxuICAgICAgICBjcmVkZW50aWFsSGVscGVyID0gZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuR09PR0xFX1lPTE87XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLkFjY291bnRDaG9vc2VyOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY3JlZGVudGlhbEhlbHBlciA9IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkFDQ09VTlRfQ0hPT1NFUl9DT007XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPSBhdXRoQ29uZmlnLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPT0gbnVsbCA/IGZhbHNlIDogYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzO1xuXG4gICAgY29uc3Qgc2lnbkluU3VjY2Vzc0NhbGxiYWNrID0gKGN1cnJlbnRVc2VyOiBmaXJlYmFzZS5Vc2VyLCBjcmVkZW50aWFsOiBmaXJlYmFzZS5hdXRoLkF1dGhDcmVkZW50aWFsLCByZWRpcmVjdFVybDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NDYWxsYmFjay5lbWl0KHtcbiAgICAgICAgICBjdXJyZW50VXNlcixcbiAgICAgICAgICBjcmVkZW50aWFsLFxuICAgICAgICAgIHJlZGlyZWN0VXJsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGxiYWNrczogYW55ID0ge1xuICAgICAgLi4udGhpcy5nZXRDYWxsYmFja3MoKSxcbiAgICAgIHNpZ25JblN1Y2Nlc3M6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKCFhdXRoQ29uZmlnLmRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgIGNvbnNvbGUud2FybignW0ZpcmViYXNlVWlBbmd1bGFyXSBzaWduSW5TdWNjZXNzIGNhbGxiYWNrIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0IGNhbGxiYWNrIGluc3RlYWQuXFxuJyArXG4gICAgICAgICdUbyByZW1vdmUgdGhpcyB3YXJuaW5nIHNldCBkaXNhYmxlU2lnbkluU3VjY2Vzc0NhbGxiYWNrIG9uIHRoZSBGaXJlYmFzZVVpQ29uZmlnIE9iamVjdC4nKTtcbiAgICAgIGNhbGxiYWNrcy5zaWduSW5TdWNjZXNzID0gc2lnbkluU3VjY2Vzc0NhbGxiYWNrO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdGl2ZUNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnID0ge1xuICAgICAgY2FsbGJhY2tzOiBjYWxsYmFja3MsXG4gICAgICBzaWduSW5GbG93OiBhdXRoTWV0aG9kLFxuICAgICAgc2lnbkluT3B0aW9uczogYXV0aFByb3ZpZGVycyxcbiAgICAgIHRvc1VybDogdG9zVVJMLFxuICAgICAgcHJpdmFjeVBvbGljeVVybDogcHJpdmFjeVBvbGljeVVybCxcbiAgICAgIGNyZWRlbnRpYWxIZWxwZXI6IGNyZWRlbnRpYWxIZWxwZXIsXG4gICAgICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzOiBhdXRvVXBncmFkZUFub255bW91c1VzZXJzXG4gICAgfTtcbiAgICBpZiAoISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmwpIHtcbiAgICAgIG5hdGl2ZUNvbmZpZ3VyYXRpb24uc2lnbkluU3VjY2Vzc1VybCA9IGF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZUNvbmZpZ3VyYXRpb247XG4gIH1cblxuICBwcml2YXRlIGZpcmViYXNlVUlQb3B1cCgpIHtcbiAgICBjb25zdCBmaXJlYmFzZVVpSW5zdGFuY2UgPSB0aGlzLmZpcmViYXNlVUlTZXJ2aWNlLmZpcmViYXNlVWlJbnN0YW5jZTtcbiAgICBjb25zdCB1aUF1dGhDb25maWcgPSB0aGlzLmdldFVJQXV0aENvbmZpZygpO1xuXG4gICAgLy8gQ2hlY2sgaWYgY2FsbGJhY2tzIGdvdCBjb21wdXRlZCB0byByZXNldCB0aGVtIGFnYWluIGFmdGVyIHByb3ZpZGluZyB0aGUgdG8gZmlyZWJhc2V1aS5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIGFsbG93aW5nIHVwZGF0aW5nIHRoZSBmaXJlYmFzZXVpIGNvbmZpZyBkdXJpbmcgcnVudGltZS5cbiAgICBsZXQgcmVzZXRDYWxsYmFja3MgPSBmYWxzZTtcbiAgICBpZiAodWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdKSB7XG4gICAgICByZXNldENhbGxiYWNrcyA9IHRydWU7XG4gICAgICBkZWxldGUgdWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdO1xuICAgIH1cblxuICAgIC8vIHNob3cgdGhlIGZpcmViYXNldWlcbiAgICBmaXJlYmFzZVVpSW5zdGFuY2Uuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlBdXRoQ29uZmlnKTtcblxuICAgIGlmIChyZXNldENhbGxiYWNrcykge1xuICAgICAgKHRoaXMuX2ZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYWxsYmFja3MoKTogYW55IHtcbiAgICBjb25zdCBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgPSAoYXV0aFJlc3VsdDogVXNlckNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdENhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGF1dGhSZXN1bHQsXG4gICAgICAgICAgcmVkaXJlY3RVcmxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmZpcmViYXNlVWlDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2lnbkluRmFpbHVyZUNhbGxiYWNrID0gKGVycm9yOiBmaXJlYmFzZXVpLmF1dGguQXV0aFVJRXJyb3IpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lnbkluRmFpbHVyZUNhbGxiYWNrLmVtaXQoe1xuICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXG4gICAgICAgICAgY3JlZGVudGlhbDogZXJyb3IuY3JlZGVudGlhbFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcbiAgICAgIHNpZ25JbkZhaWx1cmU6IHNpZ25JbkZhaWx1cmVDYWxsYmFjayxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdDb25maWd1cmF0aW9uU3RyaW5nKGNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTogc3RyaW5nIHtcbiAgICBkZWxldGUgY29uZmlndXJhdGlvbi5jYWxsYmFja3M7XG5cbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2Vycykge1xuICAgICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcbiAgICB9XG5cbiAgICBsZXQgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlndXJhdGlvbiwgbnVsbCwgMik7XG4gICAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiYWNjb3VudGNob29zZXIuY29tXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLkFDQ09VTlRfQ0hPT1NFUl9DT00nKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiZ29vZ2xleW9sb1wiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTycpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImNyZWRlbnRpYWxIZWxwZXJcIjogXCJub25lXCInLCAnXCJjcmVkZW50aWFsSGVscGVyXCI6IGZpcmViYXNldWkuYXV0aC5DcmVkZW50aWFsSGVscGVyLk5PTkUnKTtcblxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ29vZ2xlLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcImZhY2Vib29rLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwidHdpdHRlci5jb21cIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ2l0aHViLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInBhc3N3b3JkXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wicHJvdmlkZXJcIjogXCJwaG9uZVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ29vZ2xlLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZmFjZWJvb2suY29tXCInLCAnZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInR3aXR0ZXIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiZ2l0aHViLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguVHdpdHRlckF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBhc3N3b3JkXCInLCAnZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBob25lXCInLCAnZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xuXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiKFthLXpBLVowLTldKilcIjogKC4qKS9nLCAnJDE6ICQyJyk7XG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiL2csICdcXCcnKTtcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgcmV0dXJuIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbjtcbiAgfVxufVxuIl19