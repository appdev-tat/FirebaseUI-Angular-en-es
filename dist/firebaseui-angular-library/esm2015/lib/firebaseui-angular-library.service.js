/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
import * as firebaseuiEn from 'firebaseui-en-es/dist/npm__en';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
export class FirebaseuiAngularLibraryService {
    /**
     * @param {?} angularFireAuth
     */
    constructor(angularFireAuth) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiEnInstance) {
            ((/** @type {?} */ (window))).firebaseUiEnInstance = new firebaseuiEn.auth.AuthUI(angularFireAuth.auth);
            ((/** @type {?} */ (window))).firebaseUiEsInstance = new firebaseuiEs.auth.AuthUI(angularFireAuth.auth);
        }
        this.firebaseUiEnInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEnInstance));
        this.firebaseUiEsInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEsInstance));
    }
}
FirebaseuiAngularLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FirebaseuiAngularLibraryService.ctorParameters = () => [
    { type: AngularFireAuth }
];
/** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(i0.inject(i1.AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.firebaseUiEnInstance;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.firebaseUiEsInstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEtBQUssWUFBWSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sS0FBSyxZQUFZLE1BQU0sK0JBQStCLENBQUM7OztBQUs5RCxNQUFNLE9BQU8sK0JBQStCOzs7O0lBSTFDLFlBQVksZUFBZ0M7UUFDMUMsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLEVBQUU7WUFDdkMsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLG9CQUFvQixHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hGLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RjtRQUNELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBQSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLEVBQTRCLENBQUM7UUFDM0YsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFBLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxvQkFBb0IsRUFBNEIsQ0FBQztJQUM3RixDQUFDOzs7WUFmRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOTyxlQUFlOzs7OztJQVFyQiwrREFBc0Q7O0lBQ3RELCtEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVzIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWlFbiBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2Uge1xuICBwdWJsaWMgZmlyZWJhc2VVaUVuSW5zdGFuY2U6IGZpcmViYXNldWlFbi5hdXRoLkF1dGhVSTtcbiAgcHVibGljIGZpcmViYXNlVWlFc0luc3RhbmNlOiBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUk7XG5cbiAgY29uc3RydWN0b3IoYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGgpIHtcbiAgICAvLyBzdG9yZSB0aGUgZmlyZWJhc2V1aSBpbnN0YW5jZSBvbiB0aGUgd2luZG93IG9iamVjdCB0byBwcmV2ZW50IGRvdWJsZSBpbml0aWFsaXphdGlvblxuICAgIGlmICghKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRW5JbnN0YW5jZSkge1xuICAgICAgKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRW5JbnN0YW5jZSA9IG5ldyBmaXJlYmFzZXVpRW4uYXV0aC5BdXRoVUkoYW5ndWxhckZpcmVBdXRoLmF1dGgpO1xuICAgICAgKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRXNJbnN0YW5jZSA9IG5ldyBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUkoYW5ndWxhckZpcmVBdXRoLmF1dGgpO1xuICAgIH1cbiAgICB0aGlzLmZpcmViYXNlVWlFbkluc3RhbmNlID0gKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRW5JbnN0YW5jZSBhcyBmaXJlYmFzZXVpRW4uYXV0aC5BdXRoVUk7XG4gICAgdGhpcy5maXJlYmFzZVVpRXNJbnN0YW5jZSA9ICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVzSW5zdGFuY2UgYXMgZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJO1xuICB9XG59XG4iXX0=