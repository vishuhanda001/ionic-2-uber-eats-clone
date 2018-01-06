import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpModule} from '@angular/http';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeliveryLocationPage } from '../tabs/hometab/deliveryLocation/deliveryLocation';
import { DeliveryService } from '../services/locationservice';
import { DeliveryInstructionModal } from '../tabs/hometab/deliveryLocation/deliveryInstructionModal/deliveryInstructionModal';
import {Hometab} from '../tabs/hometab/hometab';

import {Accounttab} from '../tabs/accounttab/accounttab';
import { Deliverwithuber } from '../tabs/accounttab/deliverwithUberPage/deliverwithUberPage';
import { Favourites } from '../tabs/accounttab/favouritesPage/favouritesPage';
import { Freedelivery } from '../tabs/accounttab/freeDeliveryPage/freeDeliveryPage';
import { Help } from '../tabs/accounttab/helpPage/helpPage';
import { Payement } from '../tabs/accounttab/payementPage/payementPage';
import { Promotions } from '../tabs/accounttab/PromotionsPage/PromotionsPage';
import { Settings } from '../tabs/accounttab/settingsPage/settingsPage';

import {Orderstab} from '../tabs/orderstab/orderstab';

import {Searchtab} from '../tabs/searchtab/searchtab';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeliveryLocationPage,
    DeliveryInstructionModal,
    HomePage,
    Hometab,
    Accounttab,
    Orderstab,
    Searchtab,
    Deliverwithuber,
    Favourites,
    Freedelivery,
    Help,
    Payement,
    Promotions,
    Settings


  ],
  imports: [
    BrowserModule,
    HttpModule,
    VirtualScrollModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DeliveryLocationPage,
    DeliveryInstructionModal,
    Hometab,
    Accounttab,
    Orderstab,
    Searchtab,
    Deliverwithuber,
    Favourites,
    Freedelivery,
    Help,
    Payement,
    Promotions,
    Settings

  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeliveryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
