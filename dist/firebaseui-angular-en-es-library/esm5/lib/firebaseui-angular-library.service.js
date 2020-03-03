/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
var FirebaseuiAngularLibraryService = /** @class */ (function () {
    function FirebaseuiAngularLibraryService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    /**
     * @param {?} language
     * @return {?}
     */
    FirebaseuiAngularLibraryService.prototype.getInstance = /**
     * @param {?} language
     * @return {?}
     */
    function (language) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // return the existing UI instance if it's in the correct language
                        if (this.currentLanguage === language) {
                            return [2 /*return*/, this.firebaseUiInstance];
                        }
                        // delete the current UI instance if one already exists
                        this.currentLanguage = language;
                        if (!((/** @type {?} */ (window))).firebaseUiInstance) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiInstance))).delete()];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        if (!(language === 'en')) return [3 /*break*/, 4];
                        _a = ((/** @type {?} */ (window)));
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__en')];
                    case 3:
                        _a.firebaseUiInstance = new (_c.sent()).auth.AuthUI(this.angularFireAuth.auth);
                        return [3 /*break*/, 6];
                    case 4:
                        _b = ((/** @type {?} */ (window)));
                        return [4 /*yield*/, import('firebaseui-en-es/dist/npm__es')];
                    case 5:
                        _b.firebaseUiInstance = new (_c.sent()).auth.AuthUI(this.angularFireAuth.auth);
                        _c.label = 6;
                    case 6:
                        this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
                        return [2 /*return*/, this.firebaseUiInstance];
                }
            });
        });
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
    /** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
    return FirebaseuiAngularLibraryService;
}());
export { FirebaseuiAngularLibraryService };
if (false) {
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.firebaseUiInstance;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.currentLanguage;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.angularFireAuth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci1lbi1lcy8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7OztBQUluRDtJQVFFLHlDQUFxQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDOzs7OztJQUVwRCxxREFBVzs7OztJQUFqQixVQUFtQixRQUFxQjs7Ozs7O3dCQUN0QyxrRUFBa0U7d0JBQ2xFLElBQUssSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLEVBQUc7NEJBQ3ZDLHNCQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBQzt5QkFDaEM7d0JBQ0QsdURBQXVEO3dCQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQzs2QkFDM0IsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixFQUFoQyx3QkFBZ0M7d0JBQ25DLHFCQUFNLENBQUMsbUJBQUEsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixFQUE0QixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE3RSxTQUE2RSxDQUFDOzs7NkJBRTNFLENBQUEsUUFBUSxLQUFLLElBQUksQ0FBQSxFQUFqQix3QkFBaUI7d0JBQ3BCLEtBQUEsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFBO3dCQUE0QixxQkFBTSxNQUFNLENBQUMsK0JBQStCLENBQUMsRUFBQTs7d0JBQXRGLEdBQWMsa0JBQWtCLEdBQUcsSUFBSSxDQUFFLFNBQTZDLENBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLENBQUM7Ozt3QkFFbEksS0FBQSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUE7d0JBQTRCLHFCQUFNLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxFQUFBOzt3QkFBdEYsR0FBYyxrQkFBa0IsR0FBRyxJQUFJLENBQUUsU0FBNkMsQ0FBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsQ0FBQzs7O3dCQUVwSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO3dCQUMzRCxzQkFBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUM7Ozs7S0FDaEM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5PLGVBQWU7OzswQ0FEdkI7Q0FpQ0MsQUE1QkQsSUE0QkM7U0F6QlksK0JBQStCOzs7SUFFMUMsNkRBQW9EOztJQUNwRCwwREFBb0M7O0lBRXZCLDBEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aUVzIGZyb20gJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWlFbiBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpcmViYXNldWlBbmd1bGFyTGlicmFyeVNlcnZpY2Uge1xuICAvLyBwdWJsaWMgZmlyZWJhc2VVaUluc3RhbmNlOiBmaXJlYmFzZXVpRW4uYXV0aC5BdXRoVUkgfCBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUk7XG4gIHB1YmxpYyBmaXJlYmFzZVVpSW5zdGFuY2U6IGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSTtcbiAgcHVibGljIGN1cnJlbnRMYW5ndWFnZTogJ2VuJyB8ICdlcyc7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgYW5ndWxhckZpcmVBdXRoOiBBbmd1bGFyRmlyZUF1dGggKSB7fVxuXG4gIGFzeW5jIGdldEluc3RhbmNlKCBsYW5ndWFnZTogJ2VuJyB8ICdlcycgKSB7XG4gICAgLy8gcmV0dXJuIHRoZSBleGlzdGluZyBVSSBpbnN0YW5jZSBpZiBpdCdzIGluIHRoZSBjb3JyZWN0IGxhbmd1YWdlXG4gICAgaWYgKCB0aGlzLmN1cnJlbnRMYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVpSW5zdGFuY2U7XG4gICAgfVxuICAgIC8vIGRlbGV0ZSB0aGUgY3VycmVudCBVSSBpbnN0YW5jZSBpZiBvbmUgYWxyZWFkeSBleGlzdHNcbiAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIGlmICggKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgKSB7XG4gICAgICBhd2FpdCAoKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgYXMgZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJKS5kZWxldGUoKTtcbiAgICB9XG4gICAgaWYgKCBsYW5ndWFnZSA9PT0gJ2VuJyApIHtcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlID0gbmV3ICggYXdhaXQgaW1wb3J0KCdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lbicpICkuYXV0aC5BdXRoVUkoIHRoaXMuYW5ndWxhckZpcmVBdXRoLmF1dGggKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgPSBuZXcgKCBhd2FpdCBpbXBvcnQoJ2ZpcmViYXNldWktZW4tZXMvZGlzdC9ucG1fX2VzJykgKS5hdXRoLkF1dGhVSSggdGhpcy5hbmd1bGFyRmlyZUF1dGguYXV0aCApO1xuICAgIH1cbiAgICB0aGlzLmZpcmViYXNlVWlJbnN0YW5jZSA9ICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlO1xuICAgIHJldHVybiB0aGlzLmZpcmViYXNlVWlJbnN0YW5jZTtcbiAgfVxufVxuIl19