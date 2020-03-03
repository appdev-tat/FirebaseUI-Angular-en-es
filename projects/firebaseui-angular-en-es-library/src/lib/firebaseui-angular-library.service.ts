import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
import * as firebaseuiEn from 'firebaseui-en-es/dist/npm__en';

@Injectable({
  providedIn: 'root'
})
export class FirebaseuiAngularLibraryService {
  // public firebaseUiInstance: firebaseuiEn.auth.AuthUI | firebaseuiEs.auth.AuthUI;
  public firebaseUiInstance: firebaseuiEs.auth.AuthUI;
  public currentLanguage: 'en' | 'es';

  constructor( private angularFireAuth: AngularFireAuth ) {}

  async getInstance( language: 'en' | 'es' ) {
    // return the existing UI instance if it's in the correct language
    if ( this.currentLanguage === language ) {
      return this.firebaseUiInstance;
    }
    // delete the current UI instance if one already exists
    this.currentLanguage = language;
    if ( (<any>window).firebaseUiInstance ) {
      await ((<any>window).firebaseUiInstance as firebaseuiEs.auth.AuthUI).delete();
    }
    if ( language === 'en' ) {
      (<any>window).firebaseUiInstance = new ( await import('firebaseui-en-es/dist/npm__en') ).auth.AuthUI( this.angularFireAuth.auth );
    } else {
      (<any>window).firebaseUiInstance = new ( await import('firebaseui-en-es/dist/npm__es') ).auth.AuthUI( this.angularFireAuth.auth );
    }
    this.firebaseUiInstance = (<any>window).firebaseUiInstance;
    return this.firebaseUiInstance;
  }
}
