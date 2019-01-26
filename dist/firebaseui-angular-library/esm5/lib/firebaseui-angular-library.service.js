/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
var FirebaseuiAngularLibraryService = /** @class */ (function () {
    function FirebaseuiAngularLibraryService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    /**
     * @param {?} library
     * @return {?}
     */
    FirebaseuiAngularLibraryService.prototype.init = /**
     * @param {?} library
     * @return {?}
     */
    function (library) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiInstance) {
            ((/** @type {?} */ (window))).firebaseUiInstance = new library.auth.AuthUI(this.angularFireAuth.auth);
        }
        this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
    };
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
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.angularFireAuth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRW5EO0lBTUUseUNBQXFCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFJLENBQUM7Ozs7O0lBRTFELDhDQUFJOzs7O0lBQUosVUFBTSxPQUFZO1FBQ2hCLHNGQUFzRjtRQUN0RixJQUFLLENBQUMsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixFQUFHO1lBQ3ZDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLENBQUM7U0FDekY7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQzdELENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSk8sZUFBZTs7OzBDQUR2QjtDQWtCQyxBQWZELElBZUM7U0FaWSwrQkFBK0I7OztJQUMxQyw2REFBK0I7O0lBRWxCLDBEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRmlyZUF1dGh9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlIHtcclxuICBwdWJsaWMgZmlyZWJhc2VVaUluc3RhbmNlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoICkge31cclxuICAgIFxyXG4gIGluaXQoIGxpYnJhcnk6IGFueSApIHtcclxuICAgIC8vIHN0b3JlIHRoZSBmaXJlYmFzZXVpIGluc3RhbmNlIG9uIHRoZSB3aW5kb3cgb2JqZWN0IHRvIHByZXZlbnQgZG91YmxlIGluaXRpYWxpemF0aW9uXHJcbiAgICBpZiAoICEoPGFueT53aW5kb3cpLmZpcmViYXNlVWlJbnN0YW5jZSApIHtcclxuICAgICAgKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgPSBuZXcgbGlicmFyeS5hdXRoLkF1dGhVSSggdGhpcy5hbmd1bGFyRmlyZUF1dGguYXV0aCApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maXJlYmFzZVVpSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlJbnN0YW5jZTtcclxuICB9XHJcbn1cclxuIl19