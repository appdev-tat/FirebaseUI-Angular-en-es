import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebaseuiEs from 'firebaseui-en-es/dist/npm__es';
import * as firebaseuiEn from 'firebaseui-en-es/dist/npm__en';

@Injectable({
  providedIn: 'root'
})
export class FirebaseuiAngularLibraryService {
  public firebaseUiEnInstance: firebaseuiEn.auth.AuthUI;
  public firebaseUiEsInstance: firebaseuiEs.auth.AuthUI;

  constructor(angularFireAuth: AngularFireAuth) {
    // store the firebaseui instance on the window object to prevent double initialization
    if (!(<any>window).firebaseUiEnInstance) {
      (<any>window).firebaseUiEnInstance = new firebaseuiEn.auth.AuthUI(angularFireAuth.auth);
      (<any>window).firebaseUiEsInstance = new firebaseuiEs.auth.AuthUI(angularFireAuth.auth);
    }
    this.firebaseUiEnInstance = (<any>window).firebaseUiEnInstance as firebaseuiEn.auth.AuthUI;
    this.firebaseUiEsInstance = (<any>window).firebaseUiEsInstance as firebaseuiEs.auth.AuthUI;
  }
}
