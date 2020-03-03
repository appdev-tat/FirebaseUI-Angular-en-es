/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/*
 * Created by Raphael Jenni
 * Copyright (c) 2017 Raphael Jenni
 */
import * as firebaseOriginal from 'firebase/app';
import * as firebaseuiOriginal from 'firebaseui-en-es/dist/npm__es';
/** @type {?} */
export var firebase = firebaseOriginal;
/** @type {?} */
export var firebaseui = firebaseuiOriginal;
/**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
var /**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
FirebaseUIAuthConfig = /** @class */ (function () {
    function FirebaseUIAuthConfig() {
    }
    return FirebaseUIAuthConfig;
}());
/**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
export { FirebaseUIAuthConfig };
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
export { FirebaseUISignInSuccessWithAuthResult };
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
export { FirebaseUISignInFailure };
if (false) {
    /** @type {?} */
    FirebaseUISignInFailure.prototype.code;
    /** @type {?} */
    FirebaseUISignInFailure.prototype.credential;
}
/**
 * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
 */
var /**
 * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
 */
FirebaseUISignInSuccess = /** @class */ (function () {
    function FirebaseUISignInSuccess() {
    }
    return FirebaseUISignInSuccess;
}());
/**
 * @deprecated Use {\@link FirebaseUISignInSuccessWithAuthResult}
 */
export { FirebaseUISignInSuccess };
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
export { CredentialHelper };
CredentialHelper[CredentialHelper.AccountChooser] = 'AccountChooser';
CredentialHelper[CredentialHelper.OneTap] = 'OneTap';
CredentialHelper[CredentialHelper.None] = 'None';
/** @enum {number} */
var AuthProvider = {
    Google: 0, Facebook: 1, Twitter: 2, Github: 3, Password: 4, Phone: 5,
};
export { AuthProvider };
AuthProvider[AuthProvider.Google] = 'Google';
AuthProvider[AuthProvider.Facebook] = 'Facebook';
AuthProvider[AuthProvider.Twitter] = 'Twitter';
AuthProvider[AuthProvider.Github] = 'Github';
AuthProvider[AuthProvider.Password] = 'Password';
AuthProvider[AuthProvider.Phone] = 'Phone';
/**
 * @record
 */
export function AuthProviderWithCustomConfig() { }
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
export { AuthMethods };
AuthMethods[AuthMethods.Popup] = 'Popup';
AuthMethods[AuthMethods.Redirect] = 'Redirect';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLWVuLWVzLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxjQUFjLENBQUM7QUFFakQsT0FBTyxLQUFLLGtCQUFrQixNQUFNLCtCQUErQixDQUFDOztBQUVwRSxNQUFNLEtBQU8sUUFBUSxHQUFHLGdCQUFnQjs7QUFDeEMsTUFBTSxLQUFPLFVBQVUsR0FBRyxrQkFBa0I7Ozs7QUFLNUM7Ozs7SUFBQTtJQWFBLENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFiRCxJQWFDOzs7Ozs7O0lBWkMseUNBQThEOztJQUM5RCxzQ0FBcUI7O0lBQ3JCLGdEQUEwQjs7SUFDMUIsbUNBQWE7O0lBQ2IsZ0RBQTBCOztJQUMxQixnREFBb0M7O0lBQ3BDLHlEQUFvQzs7Ozs7SUFLcEMsNERBQXVDOztBQU16QztJQUFBO0lBR0EsQ0FBQztJQUFELDRDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQywyREFBMkI7O0lBQzNCLDREQUFvQjs7QUFHdEI7SUFBQTtJQUdBLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsdUNBQWE7O0lBQ2IsNkNBQWlEOzs7OztBQU1uRDs7OztJQUFBO0lBSUEsQ0FBQztJQUFELDhCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyw4Q0FBbUM7O0lBQ25DLDZDQUFpRDs7SUFDakQsOENBQW9COzs7O0lBS3BCLGlCQUFjLEVBQUUsU0FBTSxFQUFFLE9BQUk7Ozs7Ozs7O0lBSTVCLFNBQU0sRUFBRSxXQUFRLEVBQUUsVUFBTyxFQUFFLFNBQU0sRUFBRSxXQUFRLEVBQUUsUUFBSzs7Ozs7Ozs7Ozs7O0FBR3BELGtEQUdDOzs7SUFGQyxnREFBdUI7O0lBQ3ZCLG9EQUFxQjs7OztJQUlyQixRQUFLLEVBQUUsV0FBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDcmVhdGVkIGJ5IFJhcGhhZWwgSmVubmlcbiAqIENvcHlyaWdodCAoYykgMjAxNyBSYXBoYWVsIEplbm5pXG4gKi9cblxuaW1wb3J0ICogYXMgZmlyZWJhc2VPcmlnaW5hbCBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IFVzZXJDcmVkZW50aWFsID0gZmlyZWJhc2UuYXV0aC5Vc2VyQ3JlZGVudGlhbDtcbmltcG9ydCAqIGFzIGZpcmViYXNldWlPcmlnaW5hbCBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XG5cbmV4cG9ydCBjb25zdCBmaXJlYmFzZSA9IGZpcmViYXNlT3JpZ2luYWw7XG5leHBvcnQgY29uc3QgZmlyZWJhc2V1aSA9IGZpcmViYXNldWlPcmlnaW5hbDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIG5hdGl2ZSBjb25maWd1cmF0aW9uIG9mIGZpcmViYXNldWkgKGZpcmViYXNldWkuYXV0aC5Db25maWcpXG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJQXV0aENvbmZpZyB7XG4gIHByb3ZpZGVyczogQXJyYXk8QXV0aFByb3ZpZGVyIHwgQXV0aFByb3ZpZGVyV2l0aEN1c3RvbUNvbmZpZz47XG4gIG1ldGhvZD86IEF1dGhNZXRob2RzO1xuICBzaWduSW5TdWNjZXNzVXJsPzogc3RyaW5nO1xuICB0b3M/OiBzdHJpbmc7XG4gIHByaXZhY3lQb2xpY3lVcmw/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxIZWxwZXI/OiBDcmVkZW50aWFsSGVscGVyO1xuICBhdXRvVXBncmFkZUFub255bW91c1VzZXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2lsbCBiZSBkZWZhdWx0IGluIHRoZSBmdXR1cmVcbiAgICovXG4gIGRpc2FibGVTaWduSW5TdWNjZXNzQ2FsbGJhY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyA9IGZpcmViYXNldWlPcmlnaW5hbC5hdXRoLkNvbmZpZztcblxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdCB7XG4gIGF1dGhSZXN1bHQ6IFVzZXJDcmVkZW50aWFsO1xuICByZWRpcmVjdFVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSVNpZ25JbkZhaWx1cmUge1xuICBjb2RlOiBzdHJpbmc7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIEZpcmViYXNlVUlTaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHR9XG4gKi9cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJU2lnbkluU3VjY2VzcyB7XG4gIGN1cnJlbnRVc2VyOiBmaXJlYmFzZU9yaWdpbmFsLlVzZXI7XG4gIGNyZWRlbnRpYWw6IGZpcmViYXNlT3JpZ2luYWwuYXV0aC5BdXRoQ3JlZGVudGlhbDtcbiAgcmVkaXJlY3RVcmw6IHN0cmluZztcbn1cblxuXG5leHBvcnQgZW51bSBDcmVkZW50aWFsSGVscGVyIHtcbiAgQWNjb3VudENob29zZXIsIE9uZVRhcCwgTm9uZVxufVxuXG5leHBvcnQgZW51bSBBdXRoUHJvdmlkZXIge1xuICBHb29nbGUsIEZhY2Vib29rLCBUd2l0dGVyLCBHaXRodWIsIFBhc3N3b3JkLCBQaG9uZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlcldpdGhDdXN0b21Db25maWcge1xuICBwcm92aWRlcjogQXV0aFByb3ZpZGVyO1xuICBjdXN0b21Db25maWc6IE9iamVjdDtcbn1cblxuZXhwb3J0IGVudW0gQXV0aE1ldGhvZHMge1xuICBQb3B1cCwgUmVkaXJlY3Rcbn1cbiJdfQ==