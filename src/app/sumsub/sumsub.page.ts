import { Component, OnInit } from '@angular/core';
// import SNSMobileSDK from '@sumsub/cordova-idensic-mobile-sdk-plugin';


@Component({
  selector: 'app-sumsub',
  templateUrl: './sumsub.page.html',
  styleUrls: ['./sumsub.page.scss'],
})
export class SumsubPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const sumSub = new SNSMobileSDK;
    const maybeThis = SNSMobileSDK;
    const anotherOne = snsMobileSDK;
    const lastTry = new snsMobileSDK;

    let accessToken = 'your_access_token';

    let snsMobileSDK = SNSMobileSDK.init(accessToken, () => {
      // this is a token expiration handler. It will be called if the provided token is invalid or got expired
      // call your backend to fetch a new access token (this is just an example)
      return new Promise((resolve, reject) => {
        resolve('new_access_token')
      })
    })
      .withHandlers({ // Optional callbacks you can use to get notified of the corresponding events
        onStatusChanged: (event) => {
          console.log("onStatusChanged: [" + event.prevStatus + "] => [" + event.newStatus + "]");
        }
      })
      .withDebug(true)
      .withLocale('en') // Optional, for cases when you need to override the system locale
      .build();
  }

}
