import { GoogleAuthProvider } from '@angular/fire/auth';
import { Directive, HostListener, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Directive({
  selector: '[appGoogleSignin]',
  standalone: true,
})
export class GoogleSigninDirective {
  afAuth = inject(AngularFireAuth);

  @HostListener('click') onClick() {
    this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }
}
