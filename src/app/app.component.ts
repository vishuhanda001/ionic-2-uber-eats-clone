import { Component } from '@angular/core';
import { Platform,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {OneSignal} from '@ionic-native/onesignal';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      private oneSignal:OneSignal,
    private alertCtrl:AlertController,
  private localNotifications:LocalNotifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
  
      window["plugins"].OneSignal
        .startInit("95de8eb6-e2aa-4e2d-a7bc-b08209479d56", "370512421267")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });

    //localnotifications
    this.localNotifications.schedule({
      text:"thanks for installing this app",
      led: 'FF0000',
    })


  }
}

