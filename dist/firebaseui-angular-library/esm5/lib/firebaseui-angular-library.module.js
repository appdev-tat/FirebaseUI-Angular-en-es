/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FirebaseuiAngularLibraryComponent } from './firebaseui-angular-library.component';
import { CommonModule } from '@angular/common';
var FirebaseUIModule = /** @class */ (function () {
    function FirebaseUIModule() {
    }
    /**
     * @param {?} firebaseUiAuthConfig
     * @return {?}
     */
    FirebaseUIModule.forRoot = /**
     * @param {?} firebaseUiAuthConfig
     * @return {?}
     */
    function (firebaseUiAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfig', useValue: firebaseUiAuthConfig },
                { provide: 'firebaseUIAuthConfigFeature', useValue: {} }
            ]
        };
    };
    /**
     * @param {?} firebaseUIAuthConfig
     * @return {?}
     */
    FirebaseUIModule.forFeature = /**
     * @param {?} firebaseUIAuthConfig
     * @return {?}
     */
    function (firebaseUIAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfigFeature', useValue: firebaseUIAuthConfig }
            ]
        };
    };
    FirebaseUIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [FirebaseuiAngularLibraryComponent],
                    exports: [FirebaseuiAngularLibraryComponent]
                },] }
    ];
    return FirebaseUIModule;
}());
export { FirebaseUIModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzdDO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7SUFsQlEsd0JBQU87Ozs7SUFBZCxVQUFlLG9CQUF1RTtRQUNwRixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO2dCQUNqRSxFQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDO2FBQ3ZEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sMkJBQVU7Ozs7SUFBakIsVUFBa0Isb0JBQTZFO1FBQzdGLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7YUFDekU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQzdDOztJQW9CRCx1QkFBQztDQUFBLEFBMUJELElBMEJDO1NBbkJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudH0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aENvbmZpZywgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWd9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChmaXJlYmFzZVVpQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWcnLCB1c2VWYWx1ZTogZmlyZWJhc2VVaUF1dGhDb25maWd9LFxyXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IHt9fVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvckZlYXR1cmUoZmlyZWJhc2VVSUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcgfCBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGaXJlYmFzZVVJTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiBmaXJlYmFzZVVJQXV0aENvbmZpZ31cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19