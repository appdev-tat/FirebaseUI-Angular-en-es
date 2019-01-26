/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
     * @param {?} library
     * @return {?}
     */
    init(library) {
        // store the firebaseui instance on the window object to prevent double initialization
        if (!((/** @type {?} */ (window))).firebaseUiInstance) {
            ((/** @type {?} */ (window))).firebaseUiInstance = new library.auth.AuthUI(this.angularFireAuth.auth);
        }
        this.firebaseUiInstance = ((/** @type {?} */ (window))).firebaseUiInstance;
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
    /** @type {?} */
    FirebaseuiAngularLibraryService.prototype.angularFireAuth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpcmViYXNldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBS25ELE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFHMUMsWUFBcUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUksQ0FBQzs7Ozs7SUFFMUQsSUFBSSxDQUFFLE9BQVk7UUFDaEIsc0ZBQXNGO1FBQ3RGLElBQUssQ0FBQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsa0JBQWtCLEVBQUc7WUFDdkMsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUUsQ0FBQztTQUN6RjtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDN0QsQ0FBQzs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSk8sZUFBZTs7Ozs7SUFNckIsNkRBQStCOztJQUVsQiwwREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5U2VydmljZSB7XHJcbiAgcHVibGljIGZpcmViYXNlVWlJbnN0YW5jZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhbmd1bGFyRmlyZUF1dGg6IEFuZ3VsYXJGaXJlQXV0aCApIHt9XHJcbiAgICBcclxuICBpbml0KCBsaWJyYXJ5OiBhbnkgKSB7XHJcbiAgICAvLyBzdG9yZSB0aGUgZmlyZWJhc2V1aSBpbnN0YW5jZSBvbiB0aGUgd2luZG93IG9iamVjdCB0byBwcmV2ZW50IGRvdWJsZSBpbml0aWFsaXphdGlvblxyXG4gICAgaWYgKCAhKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2UgKSB7XHJcbiAgICAgICg8YW55PndpbmRvdykuZmlyZWJhc2VVaUluc3RhbmNlID0gbmV3IGxpYnJhcnkuYXV0aC5BdXRoVUkoIHRoaXMuYW5ndWxhckZpcmVBdXRoLmF1dGggKTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlyZWJhc2VVaUluc3RhbmNlID0gKDxhbnk+d2luZG93KS5maXJlYmFzZVVpSW5zdGFuY2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==