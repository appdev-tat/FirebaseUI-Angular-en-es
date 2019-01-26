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
var FirebaseuiAngularLibraryService = /** @class */ (function () {
    function FirebaseuiAngularLibraryService(angularFireAuth) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiEnInstance) {
            ((/** @type {?} */ (window))).firebaseUiEnInstance = new firebaseuiEn.auth.AuthUI(angularFireAuth.auth);
            ((/** @type {?} */ (window))).firebaseUiEsInstance = new firebaseuiEs.auth.AuthUI(angularFireAuth.auth);
        }
        this.firebaseUiEnInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEnInstance));
        this.firebaseUiEsInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEsInstance));
    }
    FirebaseuiAngularLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FirebaseuiAngularLibraryService.ctorParameters = function () { return [
        { type: AngularFireAuth }
    ]; };
    /** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(i0.inject(i1.AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
    return FirebaseuiAngularLibraryService;
}());
export { FirebaseuiAngularLibraryService };
if (false) {
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.firebaseUiEnInstance;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.firebaseUiEsInstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEtBQUssWUFBWSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sS0FBSyxZQUFZLE1BQU0sK0JBQStCLENBQUM7OztBQUU5RDtJQU9FLHlDQUFZLGVBQWdDO1FBQzFDLHNGQUFzRjtRQUN0RixJQUFJLENBQUMsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLG9CQUFvQixFQUFFO1lBQ3ZDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RixDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQUEsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLG9CQUFvQixFQUE0QixDQUFDO1FBQzNGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBQSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLEVBQTRCLENBQUM7SUFDN0YsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOTyxlQUFlOzs7MENBRHZCO0NBcUJDLEFBaEJELElBZ0JDO1NBYlksK0JBQStCOzs7SUFDMUMsK0RBQXNEOztJQUN0RCwrREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWlFcyBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRW4gZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlIHtcbiAgcHVibGljIGZpcmViYXNlVWlFbkluc3RhbmNlOiBmaXJlYmFzZXVpRW4uYXV0aC5BdXRoVUk7XG4gIHB1YmxpYyBmaXJlYmFzZVVpRXNJbnN0YW5jZTogZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJO1xuXG4gIGNvbnN0cnVjdG9yKGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoKSB7XG4gICAgLy8gc3RvcmUgdGhlIGZpcmViYXNldWkgaW5zdGFuY2Ugb24gdGhlIHdpbmRvdyBvYmplY3QgdG8gcHJldmVudCBkb3VibGUgaW5pdGlhbGl6YXRpb25cbiAgICBpZiAoISg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVuSW5zdGFuY2UpIHtcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVuSW5zdGFuY2UgPSBuZXcgZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJKGFuZ3VsYXJGaXJlQXV0aC5hdXRoKTtcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVzSW5zdGFuY2UgPSBuZXcgZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJKGFuZ3VsYXJGaXJlQXV0aC5hdXRoKTtcbiAgICB9XG4gICAgdGhpcy5maXJlYmFzZVVpRW5JbnN0YW5jZSA9ICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVuSW5zdGFuY2UgYXMgZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJO1xuICAgIHRoaXMuZmlyZWJhc2VVaUVzSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlIGFzIGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSTtcbiAgfVxufVxuIl19