import { inject } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return (user(auth) as Observable<User>).pipe(
    map((user) => {
      if (user) {
        return true;
      }
      router.navigate(['/login']);
      return false;
    })
  );
};
