import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../shared/services/storage/storage.service';

const AUTH_ROUTE = '/auth';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authTokenExists?: boolean;

  constructor(private router: Router, private storageService: StorageService) {}

  canActivate(): boolean | UrlTree {
    if (this.authTokenExists == null)
      this.authTokenExists = this.storageService.hasItem(TOKEN_KEY);

    return this.authTokenExists || this.router.createUrlTree([AUTH_ROUTE]);
  }
}
