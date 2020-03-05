import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionQuery } from 'src/app/pages/components/login/state';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'eb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() environment: any;
  @Input() showLogo = false;

  account: any;
  profileImageUrl: string;

  constructor(private changeDetectionRef: ChangeDetectorRef,private sessionQuery : SessionQuery,private loginService: LoginService) {

  }

  ngOnInit() {
   console.log(this.sessionQuery.loggedInUser$) 
    // this.account = this.authService.getUser();
    // if (this.account) {
    //   this.http.get('https://graph.microsoft.com/v1.0/me/photo/$value', { responseType: 'blob' }).subscribe(image => {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => {
    //       this.profileImageUrl = <string>reader.result;
    //       this.changeDetectionRef.markForCheck();
    //     }, false);

    //     if (image) {
    //         reader.readAsDataURL(image);
    //     }
    //   });
    // }
  }

  logout() {
    if (confirm('Are you sure to log out?')) {
      this.loginService.logout();
    }
  }
}
