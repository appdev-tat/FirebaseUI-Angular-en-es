import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseuiAngularLibraryService {
  public firebaseUiInstance: any;

  constructor( private angularFireAuth: AngularFireAuth ) {}
    
  init( library: any ) {
    // store the firebaseui instance on the window object to prevent double initialization
    if ( !(<any>window).firebaseUiInstance ) {
      (<any>window).firebaseUiInstance = new library.auth.AuthUI( this.angularFireAuth.auth );
    }
    this.firebaseUiInstance = (<any>window).firebaseUiInstance;
  }
}
