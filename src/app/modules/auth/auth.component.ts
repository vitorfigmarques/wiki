import { StorageService } from './../shared/services/storage/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.useTokenParam();
  }

  useTokenParam() {
    const token = this.activatedRoute.snapshot.queryParamMap.get('token');

    if (token) {
      this.storageService.setItem(TOKEN_KEY, token);
      this.router.navigate(['/home']);
    }
  }
}
