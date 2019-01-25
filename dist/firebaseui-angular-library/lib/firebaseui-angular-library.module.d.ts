import { ModuleWithProviders } from '@angular/core';
import { FirebaseUIAuthConfig, NativeFirebaseUIAuthConfig } from './firebaseui-angular-library.helper';
export declare class FirebaseUIModule {
    static forRoot(firebaseUiAuthConfig: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig): ModuleWithProviders;
    static forFeature(firebaseUIAuthConfig: NativeFirebaseUIAuthConfig | FirebaseUIAuthConfig | any): ModuleWithProviders;
}
