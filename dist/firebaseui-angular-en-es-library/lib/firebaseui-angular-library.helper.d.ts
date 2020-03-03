import * as firebaseOriginal from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import * as firebaseuiOriginal from 'firebaseui-en-es/dist/npm__es';
export declare const firebase: typeof firebaseOriginal;
export declare const firebaseui: any;
/**
 * @deprecated Please use native configuration of firebaseui (firebaseui.auth.Config)
 */
export declare class FirebaseUIAuthConfig {
    providers: Array<AuthProvider | AuthProviderWithCustomConfig>;
    method?: AuthMethods;
    signInSuccessUrl?: string;
    tos?: string;
    privacyPolicyUrl?: string;
    credentialHelper?: CredentialHelper;
    autoUpgradeAnonymousUsers?: boolean;
    /**
     * Will be default in the future
     */
    disableSignInSuccessCallback?: boolean;
}
export declare type NativeFirebaseUIAuthConfig = firebaseuiOriginal.auth.Config;
export declare class FirebaseUISignInSuccessWithAuthResult {
    authResult: UserCredential;
    redirectUrl: string;
}
export declare class FirebaseUISignInFailure {
    code: string;
    credential: firebaseOriginal.auth.AuthCredential;
}
/**
 * @deprecated Use {@link FirebaseUISignInSuccessWithAuthResult}
 */
export declare class FirebaseUISignInSuccess {
    currentUser: firebaseOriginal.User;
    credential: firebaseOriginal.auth.AuthCredential;
    redirectUrl: string;
}
export declare enum CredentialHelper {
    AccountChooser = 0,
    OneTap = 1,
    None = 2
}
export declare enum AuthProvider {
    Google = 0,
    Facebook = 1,
    Twitter = 2,
    Github = 3,
    Password = 4,
    Phone = 5
}
export interface AuthProviderWithCustomConfig {
    provider: AuthProvider;
    customConfig: Object;
}
export declare enum AuthMethods {
    Popup = 0,
    Redirect = 1
}
