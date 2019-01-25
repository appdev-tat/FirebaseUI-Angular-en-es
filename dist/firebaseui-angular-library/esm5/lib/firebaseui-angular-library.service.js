/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui-en-es/dist/npm__es';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
var FirebaseuiAngularLibraryService = /** @class */ (function () {
    function FirebaseuiAngularLibraryService(angularFireAuth) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiEsInstance) {
            ((/** @type {?} */ (window))).firebaseUiEsInstance = new firebaseui.auth.AuthUI(angularFireAuth.auth);
        }
        this.firebaseUiInstance = (/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiEsInstance));
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
    FirebaseuiAngularLibraryService.prototype.firebaseUiInstance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEtBQUssVUFBVSxNQUFNLCtCQUErQixDQUFDOzs7QUFFNUQ7SUFNRSx5Q0FBWSxlQUFnQztRQUMxQyxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTtZQUN2QyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsbUJBQUEsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLG9CQUFvQixFQUEwQixDQUFDO0lBQ3pGLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTE8sZUFBZTs7OzBDQUR2QjtDQWlCQyxBQWJELElBYUM7U0FWWSwrQkFBK0I7OztJQUMxQyw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWkgZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlIHtcbiAgcHVibGljIGZpcmViYXNlVWlJbnN0YW5jZTogZmlyZWJhc2V1aS5hdXRoLkF1dGhVSTtcblxuICBjb25zdHJ1Y3Rvcihhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCkge1xuICAgIC8vIHN0b3JlIHRoZSBmaXJlYmFzZXVpIGluc3RhbmNlIG9uIHRoZSB3aW5kb3cgb2JqZWN0IHRvIHByZXZlbnQgZG91YmxlIGluaXRpYWxpemF0aW9uXG4gICAgaWYgKCEoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlKSB7XG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlFc0luc3RhbmNlID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoYW5ndWxhckZpcmVBdXRoLmF1dGgpO1xuICAgIH1cbiAgICB0aGlzLmZpcmViYXNlVWlJbnN0YW5jZSA9ICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUVzSW5zdGFuY2UgYXMgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSTtcbiAgfVxufVxuIl19