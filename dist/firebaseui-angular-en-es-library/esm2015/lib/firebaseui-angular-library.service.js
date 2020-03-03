/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
export class FirebaseuiAngularLibraryService {
    /**
     * @param {?} angularFireAuth
     */
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    /**
     * @param {?} language
     * @return {?}
     */
    getInstance(language) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // return the existing UI instance if it's in the correct language
            if (this.currentLanguage === language) {
                return this.firebaseUiInstance;
            }
            // delete the current UI instance if one already exists
            this.currentLanguage = language;
            if (((/** @type {?} */ (window))).firebaseUiInstance) {
                yield ((/** @type {?} */ (((/** @type {?} */ (window))).firebaseUiInstance))).delete();
            }
            if (language === 'en') {
                ((/** @type {?} */ (window))).firebaseUiInstance = new (yield import('firebaseui-en-es/dist/npm__en')).auth.AuthUI(this.angularFireAuth.auth);
            }
            else {
                ((/** @type {?} */ (window))).firebaseUiInstance = new (yield import('firebaseui-en-es/dist/npm__es')).auth.AuthUI(this.angularFireAuth.auth);
            }
            this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
            return this.firebaseUiInstance;
        });
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
/** @nocollapse */ FirebaseuiAngularLibraryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FirebaseuiAngularLibraryService_Factory() { return new FirebaseuiAngularLibraryService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: FirebaseuiAngularLibraryService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.firebaseUiInstance;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.currentLanguage;
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.angularFireAuth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci1lbi1lcy8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7OztBQU9uRCxNQUFNLE9BQU8sK0JBQStCOzs7O0lBSzFDLFlBQXFCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFJLENBQUM7Ozs7O0lBRXBELFdBQVcsQ0FBRSxRQUFxQjs7WUFDdEMsa0VBQWtFO1lBQ2xFLElBQUssSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLEVBQUc7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQ2hDO1lBQ0QsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLElBQUssQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixFQUFHO2dCQUN0QyxNQUFNLENBQUMsbUJBQUEsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixFQUE0QixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDL0U7WUFDRCxJQUFLLFFBQVEsS0FBSyxJQUFJLEVBQUc7Z0JBQ3ZCLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUUsTUFBTSxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsQ0FBQzthQUNuSTtpQkFBTTtnQkFDTCxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFFLE1BQU0sTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLENBQUM7YUFDbkk7WUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7S0FBQTs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5PLGVBQWU7Ozs7O0lBU3JCLDZEQUFvRDs7SUFDcEQsMERBQW9DOztJQUV2QiwwREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNldWlFcyBmcm9tICdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcyc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZXVpRW4gZnJvbSAnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlTZXJ2aWNlIHtcbiAgLy8gcHVibGljIGZpcmViYXNlVWlJbnN0YW5jZTogZmlyZWJhc2V1aUVuLmF1dGguQXV0aFVJIHwgZmlyZWJhc2V1aUVzLmF1dGguQXV0aFVJO1xuICBwdWJsaWMgZmlyZWJhc2VVaUluc3RhbmNlOiBmaXJlYmFzZXVpRXMuYXV0aC5BdXRoVUk7XG4gIHB1YmxpYyBjdXJyZW50TGFuZ3VhZ2U6ICdlbicgfCAnZXMnO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFuZ3VsYXJGaXJlQXV0aDogQW5ndWxhckZpcmVBdXRoICkge31cblxuICBhc3luYyBnZXRJbnN0YW5jZSggbGFuZ3VhZ2U6ICdlbicgfCAnZXMnICkge1xuICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgVUkgaW5zdGFuY2UgaWYgaXQncyBpbiB0aGUgY29ycmVjdCBsYW5ndWFnZVxuICAgIGlmICggdGhpcy5jdXJyZW50TGFuZ3VhZ2UgPT09IGxhbmd1YWdlICkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZWJhc2VVaUluc3RhbmNlO1xuICAgIH1cbiAgICAvLyBkZWxldGUgdGhlIGN1cnJlbnQgVUkgaW5zdGFuY2UgaWYgb25lIGFscmVhZHkgZXhpc3RzXG4gICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICBpZiAoICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlICkge1xuICAgICAgYXdhaXQgKCg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlIGFzIGZpcmViYXNldWlFcy5hdXRoLkF1dGhVSSkuZGVsZXRlKCk7XG4gICAgfVxuICAgIGlmICggbGFuZ3VhZ2UgPT09ICdlbicgKSB7XG4gICAgICAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlJbnN0YW5jZSA9IG5ldyAoIGF3YWl0IGltcG9ydCgnZmlyZWJhc2V1aS1lbi1lcy9kaXN0L25wbV9fZW4nKSApLmF1dGguQXV0aFVJKCB0aGlzLmFuZ3VsYXJGaXJlQXV0aC5hdXRoICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlID0gbmV3ICggYXdhaXQgaW1wb3J0KCdmaXJlYmFzZXVpLWVuLWVzL2Rpc3QvbnBtX19lcycpICkuYXV0aC5BdXRoVUkoIHRoaXMuYW5ndWxhckZpcmVBdXRoLmF1dGggKTtcbiAgICB9XG4gICAgdGhpcy5maXJlYmFzZVVpSW5zdGFuY2UgPSAoPGFueT53aW5kb3cpLmZpcmViYXNlVWlJbnN0YW5jZTtcbiAgICByZXR1cm4gdGhpcy5maXJlYmFzZVVpSW5zdGFuY2U7XG4gIH1cbn1cbiJdfQ==