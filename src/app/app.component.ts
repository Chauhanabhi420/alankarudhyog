import { LoginComponent } from './admin/login/login.component';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { HeaderComponent } from './dashboard/header/header.component';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
// import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'au';
  // currentUser: any;
  // LC: any;
  currentUser: any;
  currentUserSubject: any;
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  public modalRef: BsModalRef;

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;

  constructor(
    private idle: Idle,
    private keepalive: Keepalive,
    private router: Router,
    private modalService: BsModalService,
    // private appService: AppService,
    private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // sets an idle timeout of 5 seconds, for testing purposes.
      idle.setIdle(1200);
      // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
      idle.setTimeout(500);
      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);


      idle.onIdleEnd.subscribe(() => {
        idle.clearInterrupts();
        this.idleState = 'No longer idle.'
        console.log(this.idleState);
        this.reset();
      });

      idle.onTimeout.subscribe(() => {
        this.childModal.hide();
        this.idleState = 'Timed out!';
        this.timedOut = true;
        console.log(this.idleState);
        this.router.navigate(['/login']);
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);


      });

      idle.onIdleStart.subscribe(() => {
          this.idleState = 'You\'ve gone idle!'
          console.log(this.idleState);
          this.childModal.show();
      });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.authenticationService.currentUser.subscribe(currentUserSubject => {
      if (currentUserSubject) {
        idle.watch()
        this.timedOut = false;
      } else {
        idle.stop();
      }

    })
    //  this.appService.getUserLoggedIn().subscribe(userLoggedIn => {
    //   if (userLoggedIn) {
    //     idle.watch()
    //     this.timedOut = false;
    //   } else {
    //     idle.stop();
    //   }
    // })

    // this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {
    this.childModal.hide();
    // this.authenticationService.setUserLoggedIn(false);

    this.router.navigate(['/login']);
  }

  ngOnInit(){}
}
