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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzdDO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7SUFsQlEsd0JBQU87Ozs7SUFBZCxVQUFlLG9CQUF1RTtRQUNwRixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO2dCQUNqRSxFQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDO2FBQ3ZEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sMkJBQVU7Ozs7SUFBakIsVUFBa0Isb0JBQTZFO1FBQzdGLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7YUFDekU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztvQkFDakQsT0FBTyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQzdDOztJQW9CRCx1QkFBQztDQUFBLEFBMUJELElBMEJDO1NBbkJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnR9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aENvbmZpZywgTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWd9IGZyb20gJy4vZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkuaGVscGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVVJTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZmlyZWJhc2VVaUF1dGhDb25maWc6IE5hdGl2ZUZpcmViYXNlVUlBdXRoQ29uZmlnIHwgRmlyZWJhc2VVSUF1dGhDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZycsIHVzZVZhbHVlOiBmaXJlYmFzZVVpQXV0aENvbmZpZ30sXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IHt9fVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yRmVhdHVyZShmaXJlYmFzZVVJQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB8IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnRmVhdHVyZScsIHVzZVZhbHVlOiBmaXJlYmFzZVVJQXV0aENvbmZpZ31cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=