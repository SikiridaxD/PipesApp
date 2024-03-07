import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logint-page',
  templateUrl: './logint-page.component.html',
  styles: [
  ]
})
export class LogintPageComponent {

  constructor (
    private authService: AuthService,
    private router: Router,
    ){}

  onLogin(): void{
    this.authService.login('Algo@otracosa.com','123456')
    .subscribe( user => {
      this.router.navigate(['/']);
    })
  }

}
