/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui-en-es/dist/npm__es';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
export class FirebaseuiAngularLibraryService {
    /**
     * @param {?} angularFireAuth
     */
    constructor(angularFireAuth) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiEsInstance) {
            ((/** @type {?} */ (window))).firebaseUiEsInstance = new firebaseui.auth.AuthUI(angularFireAuth.auth);
        }
        this.firebaseUiInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEsInstance));
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
    FirebaseuiAngularLibraryService.prototype.firebaseUiInstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEtBQUssVUFBVSxNQUFNLCtCQUErQixDQUFDOzs7QUFLNUQsTUFBTSxPQUFPLCtCQUErQjs7OztJQUcxQyxZQUFZLGVBQWdDO1FBQzFDLHNGQUFzRjtRQUN0RixJQUFJLENBQUMsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLG9CQUFvQixFQUFFO1lBQ3ZDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2RjtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxtQkFBQSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLEVBQTBCLENBQUM7SUFDekYsQ0FBQzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTE8sZUFBZTs7Ozs7SUFPckIsNkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSB7XG4gIHB1YmxpYyBmaXJlYmFzZVVpSW5zdGFuY2U6IGZpcmViYXNldWkuYXV0aC5BdXRoVUk7XG5cbiAgY29uc3RydWN0b3IoYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGgpIHtcbiAgICAvLyBzdG9yZSB0aGUgZmlyZWJhc2V1aSBpbnN0YW5jZSBvbiB0aGUgd2luZG93IG9iamVjdCB0byBwcmV2ZW50IGRvdWJsZSBpbml0aWFsaXphdGlvblxuICAgIGlmICghKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRXNJbnN0YW5jZSkge1xuICAgICAgKDxhbnk+d2luZG93KS5maXJlYmFzZVVpRXNJbnN0YW5jZSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGFuZ3VsYXJGaXJlQXV0aC5hdXRoKTtcbiAgICB9XG4gICAgdGhpcy5maXJlYmFzZVVpSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlIGFzIGZpcmViYXNldWkuYXV0aC5BdXRoVUk7XG4gIH1cbn1cbiJdfQ==