/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Inject, NgZone, Output, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthMethods, AuthProvider, CredentialHelper, } from './firebaseui-angular-library.helper';
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
export class FirebaseuiAngularLibraryComponent {
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
        this.firebaseUIService.firebaseUiInstance.start('#firebaseui-auth-container', uiAuthConfig);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBcUIsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUNMLFdBQVcsRUFDWCxZQUFZLEVBRVosZ0JBQWdCLEdBTWpCLE1BQU0scUNBQXFDLENBQUM7O0FBRTdDLE9BQU8sS0FBSyxRQUFRLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JGLE9BQU8sZUFBZSxDQUFDO0FBQ3ZCLElBQU8sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztBQUM3RCxJQUFPLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7QUFDakUsSUFBTyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0FBQy9ELElBQU8sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztBQUM3RCxJQUFPLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFDM0QsSUFBTyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBUzNELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7O0lBa0M1QyxZQUFvQixlQUFnQyxFQUNBLGlCQUFvRSxFQUM3RCx5QkFBNEUsRUFDbkgs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LGVBQWU7NENBbUVSLE1BQU0sU0FBQyxzQkFBc0I7NENBQzdCLE1BQU0sU0FBQyw2QkFBNkI7WUFyRVYsTUFBTTtZQWlCdkMsK0JBQStCOzs7b0NBc0JwQyxNQUFNLFNBQUMsZUFBZTtrREFFdEIsTUFBTSxTQUFDLDZCQUE2QjtvQ0FDcEMsTUFBTSxTQUFDLGVBQWU7dUJBRXRCLEtBQUs7Ozs7SUFWTixxREFBa0U7Ozs7O0lBS2xFLGtFQUEyRzs7SUFFM0csZ0ZBQXFKOztJQUNySixrRUFBMkc7O0lBRTNHLHFEQUEwQjs7SUFFMUIseURBQW1DOztJQUVuQyw4REFBK0I7O0lBbUJuQiw0REFBd0M7O0lBQ3hDLDhEQUE0Rzs7SUFDNUcsc0VBQTJIOztJQUMzSCxtREFBc0I7O0lBQ3RCLDhEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQXV0aE1ldGhvZHMsXHJcbiAgQXV0aFByb3ZpZGVyLFxyXG4gIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcsXHJcbiAgQ3JlZGVudGlhbEhlbHBlcixcclxuICBGaXJlYmFzZVVJQXV0aENvbmZpZyxcclxuICBGaXJlYmFzZVVJU2lnbkluRmFpbHVyZSxcclxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyxcclxuICBGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0LFxyXG4gIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnLFxyXG59IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcclxuLy8gbm9pbnNwZWN0aW9uIEVTNlVudXNlZEltcG9ydHNcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQge0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2V9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCBHb29nbGVBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcjtcclxuaW1wb3J0IEZhY2Vib29rQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcjtcclxuaW1wb3J0IFR3aXR0ZXJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXI7XHJcbmltcG9ydCBHaXRodWJBdXRoUHJvdmlkZXIgPSBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcjtcclxuaW1wb3J0IEVtYWlsQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlcjtcclxuaW1wb3J0IFBob25lQXV0aFByb3ZpZGVyID0gZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlcjtcclxuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcclxuXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaXJlYmFzZS11aScsXHJcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiPjwvZGl2PidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBDT01QVVRFRF9DQUxMQkFDS1MgPSAnQ09NUFVURURfQ0FMTEJBQ0tTJztcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3NpZ25JblN1Y2Nlc3MnKSBzaWduSW5TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuXHJcbiAgQE91dHB1dCgnc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Jykgc2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluU3VjY2Vzc1dpdGhBdXRoUmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG4gIEBPdXRwdXQoJ3NpZ25JbkZhaWx1cmUnKSBzaWduSW5GYWlsdXJlQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxGaXJlYmFzZVVJU2lnbkluRmFpbHVyZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuICAvLyBsYW5ndWFnZSBtdXN0IGJlIGVpdGhlciAnZW4nIG9yICdlcydcclxuICBASW5wdXQoKSBsYW5ndWFnZTogc3RyaW5nOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgZmlyZWJhc2V1aUxpYnJhcnk6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0QXV0aFByb3ZpZGVyKHByb3ZpZGVyOiBBdXRoUHJvdmlkZXIpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChwcm92aWRlcikge1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Hb29nbGU6XHJcbiAgICAgICAgcmV0dXJuIEdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuRmFjZWJvb2s6XHJcbiAgICAgICAgcmV0dXJuIEZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5Ud2l0dGVyOlxyXG4gICAgICAgIHJldHVybiBUd2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5HaXRodWI6XHJcbiAgICAgICAgcmV0dXJuIEdpdGh1YkF1dGhQcm92aWRlci5QUk9WSURFUl9JRDtcclxuICAgICAgY2FzZSBBdXRoUHJvdmlkZXIuUGFzc3dvcmQ6XHJcbiAgICAgICAgcmV0dXJuIEVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEO1xyXG4gICAgICBjYXNlIEF1dGhQcm92aWRlci5QaG9uZTpcclxuICAgICAgICByZXR1cm4gUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJykgcHJpdmF0ZSBfZmlyZWJhc2VVaUNvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyxcclxuICAgICAgICAgICAgICBASW5qZWN0KCdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnKSBwcml2YXRlIF9maXJlYmFzZVVpQ29uZmlnX0ZlYXR1cmU6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZpcmViYXNlVUlTZXJ2aWNlOiBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgZmlyZWJhc2VVaUNvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWcsXHJcbiAgICAgIC4uLnRoaXMuX2ZpcmViYXNlVWlDb25maWdfRmVhdHVyZVxyXG4gICAgfSBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIFsnZW4nLCdlcyddLmluZGV4T2YodGhpcy5sYW5ndWFnZSkgPT09IC0xICkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCAnTGFuZ3VhZ2UgbXVzdCBiZSBlaXRoZXIgXCJlblwiIG9yIFwiZXNcIicgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maXJlYmFzZXVpTGlicmFyeSA9ICggdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyApID9cclxuICAgICAgICByZXF1aXJlKCAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZW4nICkgOlxyXG4gICAgICAgIHJlcXVpcmUoICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcycgKTtcclxuICAgICAgdGhpcy5maXJlYmFzZVVJU2VydmljZS5pbml0KCB0aGlzLmZpcmViYXNldWlMaWJyYXJ5ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh2YWx1ZTogVXNlcikgPT4ge1xyXG4gICAgICBpZiAoKHZhbHVlICYmIHZhbHVlLmlzQW5vbnltb3VzKSB8fCAhdmFsdWUpIHtcclxuICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBGaXJlYmFzZVVJQXV0aENvbmZpZykucHJvdmlkZXJzKSB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgXCJGaXJlYmFzZVVJQXV0aENvbmZpZ1wiIGlzbid0IHN1cHBvcnRlZCBzaW5jZSB2ZXJzaW9uIDMuMy4wIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cXG5QbGVhc2UgdXNlIHRoZSBuYXRpdmUgY29uZmlndXJhdGlvbiBvZiBmaXJlYmFzZXVpIFwiZmlyZWJhc2V1aS5hdXRoLkNvbmZpZ1wiYCk7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW4gY29weSB5b3VyIGNvbnZlcnRlZCBjb25maWd1cmF0aW9uOlxcbicsIHRoaXMuZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyh0aGlzLmdldFVJQXV0aENvbmZpZygpKSk7XHJcblxyXG4gICAgICAgICAgaWYgKCh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoKHRoaXMuZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuc2lnbkluT3B0aW9ucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVVJUG9wdXAoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgQXV0aFByb3ZpZGVyLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICghIXRoaXMuc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVJQXV0aENvbmZpZygpOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB7XHJcbiAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpLnByb3ZpZGVycykge1xyXG4gICAgICBpZiAoISh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcpLmNhbGxiYWNrcykge1xyXG4gICAgICAgIHRoaXMuX2ZpcmViYXNlVWlDb25maWdbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LkNPTVBVVEVEX0NBTExCQUNLU10gPSB0cnVlO1xyXG4gICAgICAgICh0aGlzLl9maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKS5jYWxsYmFja3MgPSB0aGlzLmdldENhbGxiYWNrcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAodGhpcy5maXJlYmFzZVVpQ29uZmlnIGFzIE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdXRoQ29uZmlnOiBGaXJlYmFzZVVJQXV0aENvbmZpZyA9ICh0aGlzLmZpcmViYXNlVWlDb25maWcgYXMgRmlyZWJhc2VVSUF1dGhDb25maWcpO1xyXG5cclxuICAgIGNvbnN0IGF1dGhQcm92aWRlcnM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIGZvciAobGV0IHByb3ZpZGVyIG9mIGF1dGhDb25maWcucHJvdmlkZXJzKSB7XHJcbiAgICAgIGlmICghIShwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKS5jdXN0b21Db25maWcpIHtcclxuICAgICAgICBwcm92aWRlciA9IChwcm92aWRlciBhcyBBdXRoUHJvdmlkZXJXaXRoQ3VzdG9tQ29uZmlnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXJXaXRoQ29uZmlnID0gcHJvdmlkZXIuY3VzdG9tQ29uZmlnO1xyXG4gICAgICAgIHByb3ZpZGVyV2l0aENvbmZpZ1sncHJvdmlkZXInXSA9IEZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5nZXRBdXRoUHJvdmlkZXIocHJvdmlkZXIucHJvdmlkZXIpO1xyXG5cclxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2gocHJvdmlkZXJXaXRoQ29uZmlnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdXRoUHJvdmlkZXJzLnB1c2goRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50LmdldEF1dGhQcm92aWRlcihwcm92aWRlciBhcyBBdXRoUHJvdmlkZXIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvc1VSTCA9IGF1dGhDb25maWcudG9zID8gYXV0aENvbmZpZy50b3MgOiAnJztcclxuICAgIGNvbnN0IHByaXZhY3lQb2xpY3lVcmwgPSBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgPyBhdXRoQ29uZmlnLnByaXZhY3lQb2xpY3lVcmwgOiAnJztcclxuXHJcbiAgICBsZXQgYXV0aE1ldGhvZCA9ICdwb3B1cCc7XHJcbiAgICBzd2l0Y2ggKGF1dGhDb25maWcubWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgQXV0aE1ldGhvZHMuUmVkaXJlY3Q6XHJcbiAgICAgICAgYXV0aE1ldGhvZCA9ICdyZWRpcmVjdCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgbnVsbDpcclxuICAgICAgY2FzZSBBdXRoTWV0aG9kcy5Qb3B1cDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3JlZGVudGlhbEhlbHBlcjtcclxuICAgIHN3aXRjaCAoYXV0aENvbmZpZy5jcmVkZW50aWFsSGVscGVyKSB7XHJcbiAgICAgIGNhc2UgQ3JlZGVudGlhbEhlbHBlci5Ob25lOlxyXG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5OT05FO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENyZWRlbnRpYWxIZWxwZXIuT25lVGFwOlxyXG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDcmVkZW50aWFsSGVscGVyLkFjY291bnRDaG9vc2VyOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNyZWRlbnRpYWxIZWxwZXIgPSB0aGlzLmZpcmViYXNldWlMaWJyYXJ5LmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPSBhdXRoQ29uZmlnLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMgPT0gbnVsbCA/IGZhbHNlIDogYXV0aENvbmZpZy5hdXRvVXBncmFkZUFub255bW91c1VzZXJzO1xyXG5cclxuICAgIGNvbnN0IHNpZ25JblN1Y2Nlc3NDYWxsYmFjayA9IChjdXJyZW50VXNlcjogZmlyZWJhc2UuVXNlciwgY3JlZGVudGlhbDogZmlyZWJhc2UuYXV0aC5BdXRoQ3JlZGVudGlhbCwgcmVkaXJlY3RVcmw6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lnbkluU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe1xyXG4gICAgICAgICAgY3VycmVudFVzZXIsXHJcbiAgICAgICAgICBjcmVkZW50aWFsLFxyXG4gICAgICAgICAgcmVkaXJlY3RVcmxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiAhIWF1dGhDb25maWcuc2lnbkluU3VjY2Vzc1VybDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FsbGJhY2tzOiBhbnkgPSB7XHJcbiAgICAgIC4uLnRoaXMuZ2V0Q2FsbGJhY2tzKCksXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3M6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFhdXRoQ29uZmlnLmRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbRmlyZWJhc2VVaUFuZ3VsYXJdIHNpZ25JblN1Y2Nlc3MgY2FsbGJhY2sgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgY2FsbGJhY2sgaW5zdGVhZC5cXG4nICtcclxuICAgICAgICAnVG8gcmVtb3ZlIHRoaXMgd2FybmluZyBzZXQgZGlzYWJsZVNpZ25JblN1Y2Nlc3NDYWxsYmFjayBvbiB0aGUgRmlyZWJhc2VVaUNvbmZpZyBPYmplY3QuJyk7XHJcbiAgICAgIGNhbGxiYWNrcy5zaWduSW5TdWNjZXNzID0gc2lnbkluU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5hdGl2ZUNvbmZpZ3VyYXRpb246IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnID0ge1xyXG4gICAgICBjYWxsYmFja3M6IGNhbGxiYWNrcyxcclxuICAgICAgc2lnbkluRmxvdzogYXV0aE1ldGhvZCxcclxuICAgICAgc2lnbkluT3B0aW9uczogYXV0aFByb3ZpZGVycyxcclxuICAgICAgdG9zVXJsOiB0b3NVUkwsXHJcbiAgICAgIHByaXZhY3lQb2xpY3lVcmw6IHByaXZhY3lQb2xpY3lVcmwsXHJcbiAgICAgIGNyZWRlbnRpYWxIZWxwZXI6IGNyZWRlbnRpYWxIZWxwZXIsXHJcbiAgICAgIGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnM6IGF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnNcclxuICAgIH07XHJcbiAgICBpZiAoISFhdXRoQ29uZmlnLnNpZ25JblN1Y2Nlc3NVcmwpIHtcclxuICAgICAgbmF0aXZlQ29uZmlndXJhdGlvbi5zaWduSW5TdWNjZXNzVXJsID0gYXV0aENvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hdGl2ZUNvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpcmViYXNlVUlQb3B1cCgpIHtcclxuICAgIGNvbnN0IHVpQXV0aENvbmZpZyA9IHRoaXMuZ2V0VUlBdXRoQ29uZmlnKCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY2FsbGJhY2tzIGdvdCBjb21wdXRlZCB0byByZXNldCB0aGVtIGFnYWluIGFmdGVyIHByb3ZpZGluZyB0aGUgdG8gZmlyZWJhc2V1aS5cclxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgYWxsb3dpbmcgdXBkYXRpbmcgdGhlIGZpcmViYXNldWkgY29uZmlnIGR1cmluZyBydW50aW1lLlxyXG4gICAgbGV0IHJlc2V0Q2FsbGJhY2tzID0gZmFsc2U7XHJcbiAgICBpZiAodWlBdXRoQ29uZmlnW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudC5DT01QVVRFRF9DQUxMQkFDS1NdKSB7XHJcbiAgICAgIHJlc2V0Q2FsbGJhY2tzID0gdHJ1ZTtcclxuICAgICAgZGVsZXRlIHVpQXV0aENvbmZpZ1tGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnQuQ09NUFVURURfQ0FMTEJBQ0tTXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaG93IHRoZSBmaXJlYmFzZXVpXHJcbiAgICB0aGlzLmZpcmViYXNlVUlTZXJ2aWNlLmZpcmViYXNlVWlJbnN0YW5jZS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB1aUF1dGhDb25maWcpO1xyXG5cclxuICAgIGlmIChyZXNldENhbGxiYWNrcykge1xyXG4gICAgICAodGhpcy5fZmlyZWJhc2VVaUNvbmZpZyBhcyBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZykuY2FsbGJhY2tzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2FsbGJhY2tzKCk6IGFueSB7XHJcbiAgICBjb25zdCBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQgPSAoYXV0aFJlc3VsdDogVXNlckNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHRDYWxsYmFjay5lbWl0KHtcclxuICAgICAgICAgIGF1dGhSZXN1bHQsXHJcbiAgICAgICAgICByZWRpcmVjdFVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VVaUNvbmZpZy5zaWduSW5TdWNjZXNzVXJsO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaWduSW5GYWlsdXJlQ2FsbGJhY2sgPSAoZXJyb3I6IGFueSApID0+IHsgLy8gZXJyb3IgdHlwZSBpcyBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUlFcnJvclxyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lnbkluRmFpbHVyZUNhbGxiYWNrLmVtaXQoe1xyXG4gICAgICAgICAgY29kZTogZXJyb3IuY29kZSxcclxuICAgICAgICAgIGNyZWRlbnRpYWw6IGVycm9yLmNyZWRlbnRpYWxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCxcclxuICAgICAgc2lnbkluRmFpbHVyZTogc2lnbkluRmFpbHVyZUNhbGxiYWNrLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV3Q29uZmlndXJhdGlvblN0cmluZyhjb25maWd1cmF0aW9uOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyk6IHN0cmluZyB7XHJcbiAgICBkZWxldGUgY29uZmlndXJhdGlvbi5jYWxsYmFja3M7XHJcblxyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmF1dG9VcGdyYWRlQW5vbnltb3VzVXNlcnMpIHtcclxuICAgICAgZGVsZXRlIGNvbmZpZ3VyYXRpb24uYXV0b1VwZ3JhZGVBbm9ueW1vdXNVc2VycztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gSlNPTi5zdHJpbmdpZnkoY29uZmlndXJhdGlvbiwgbnVsbCwgMik7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcImFjY291bnRjaG9vc2VyLmNvbVwiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5BQ0NPVU5UX0NIT09TRVJfQ09NJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJjcmVkZW50aWFsSGVscGVyXCI6IFwiZ29vZ2xleW9sb1wiJywgJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBmaXJlYmFzZXVpLmF1dGguQ3JlZGVudGlhbEhlbHBlci5HT09HTEVfWU9MTycpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoJ1wiY3JlZGVudGlhbEhlbHBlclwiOiBcIm5vbmVcIicsICdcImNyZWRlbnRpYWxIZWxwZXJcIjogZmlyZWJhc2V1aS5hdXRoLkNyZWRlbnRpYWxIZWxwZXIuTk9ORScpO1xyXG5cclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ29vZ2xlLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZmFjZWJvb2suY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwcm92aWRlclwiOiBcInR3aXR0ZXIuY29tXCInLCAnXCJwcm92aWRlclwiOiBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwiZ2l0aHViLmNvbVwiJywgJ1wicHJvdmlkZXJcIjogZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGFzc3dvcmRcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInByb3ZpZGVyXCI6IFwicGhvbmVcIicsICdcInByb3ZpZGVyXCI6IGZpcmViYXNlLmF1dGguUGhvbmVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuXHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJnb29nbGUuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcImZhY2Vib29rLmNvbVwiJywgJ2ZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInR3aXR0ZXIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJnaXRodWIuY29tXCInLCAnZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEJyk7XHJcbiAgICBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24gPSBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb24ucmVwbGFjZSgnXCJwYXNzd29yZFwiJywgJ2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQnKTtcclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKCdcInBob25lXCInLCAnZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCcpO1xyXG5cclxuICAgIHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbiA9IHN0cmluZ2lmaWVkQ29uZmlndXJhdGlvbi5yZXBsYWNlKC9cIihbYS16QS1aMC05XSopXCI6ICguKikvZywgJyQxOiAkMicpO1xyXG4gICAgc3RyaW5naWZpZWRDb25maWd1cmF0aW9uID0gc3RyaW5naWZpZWRDb25maWd1cmF0aW9uLnJlcGxhY2UoL1wiL2csICdcXCcnKTtcclxuICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgIHJldHVybiBzdHJpbmdpZmllZENvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==