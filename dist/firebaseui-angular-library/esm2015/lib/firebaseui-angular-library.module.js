/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FirebaseuiAngularLibraryComponent } from './firebaseui-angular-library.component';
import { CommonModule } from '@angular/common';
export class FirebaseUIModule {
    /**
     * @param {?} firebaseUiAuthConfig
     * @return {?}
     */
    static forRoot(firebaseUiAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfig', useValue: firebaseUiAuthConfig },
                { provide: 'firebaseUIAuthConfigFeature', useValue: {} }
            ]
        };
    }
    /**
     * @param {?} firebaseUIAuthConfig
     * @return {?}
     */
    static forFeature(firebaseUIAuthConfig) {
        return {
            ngModule: FirebaseUIModule,
            providers: [
                { provide: 'firebaseUIAuthConfigFeature', useValue: firebaseUIAuthConfig }
            ]
        };
    }
}
FirebaseUIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [FirebaseuiAngularLibraryComponent],
                exports: [FirebaseuiAngularLibraryComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBVTdDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXVFO1FBQ3BGLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7Z0JBQ2pFLEVBQUMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUM7YUFDdkQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLG9CQUE2RTtRQUM3RixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO2FBQ3pFO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXpCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlyZWJhc2V1aUFuZ3VsYXJMaWJyYXJ5Q29tcG9uZW50fSBmcm9tICcuL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0ZpcmViYXNlVUlBdXRoQ29uZmlnLCBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZ30gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGZpcmViYXNlVWlBdXRoQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZycsIHVzZVZhbHVlOiBmaXJlYmFzZVVpQXV0aENvbmZpZ30sXHJcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnLCB1c2VWYWx1ZToge319XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yRmVhdHVyZShmaXJlYmFzZVVJQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyB8IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZpcmViYXNlVUlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IGZpcmViYXNlVUlBdXRoQ29uZmlnfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=