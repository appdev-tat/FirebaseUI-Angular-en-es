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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2V1aS1hbmd1bGFyLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlyZWJhc2V1aS1hbmd1bGFyLWVuLWVzLyIsInNvdXJjZXMiOlsibGliL2ZpcmViYXNldWktYW5ndWxhci1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBVTdDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXVFO1FBQ3BGLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7Z0JBQ2pFLEVBQUMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUM7YUFDdkQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLG9CQUE2RTtRQUM3RixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO2FBQ3pFO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXpCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudH0gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0ZpcmViYXNlVUlBdXRoQ29uZmlnLCBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZ30gZnJvbSAnLi9maXJlYmFzZXVpLWFuZ3VsYXItbGlicmFyeS5oZWxwZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZpcmViYXNldWlBbmd1bGFyTGlicmFyeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGaXJlYmFzZXVpQW5ndWxhckxpYnJhcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVUlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChmaXJlYmFzZVVpQXV0aENvbmZpZzogTmF0aXZlRmlyZWJhc2VVSUF1dGhDb25maWcgfCBGaXJlYmFzZVVJQXV0aENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmlyZWJhc2VVSU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ2ZpcmViYXNlVUlBdXRoQ29uZmlnJywgdXNlVmFsdWU6IGZpcmViYXNlVWlBdXRoQ29uZmlnfSxcbiAgICAgICAge3Byb3ZpZGU6ICdmaXJlYmFzZVVJQXV0aENvbmZpZ0ZlYXR1cmUnLCB1c2VWYWx1ZToge319XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JGZWF0dXJlKGZpcmViYXNlVUlBdXRoQ29uZmlnOiBOYXRpdmVGaXJlYmFzZVVJQXV0aENvbmZpZyB8IEZpcmViYXNlVUlBdXRoQ29uZmlnIHwgYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGaXJlYmFzZVVJTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnZmlyZWJhc2VVSUF1dGhDb25maWdGZWF0dXJlJywgdXNlVmFsdWU6IGZpcmViYXNlVUlBdXRoQ29uZmlnfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==