import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Favourites } from './favouritesPage/favouritesPage';
import { Settings } from './settingsPage/settingsPage';
import { Payement } from './payementPage/payementPage';
import { Help } from './helpPage/helpPage';
import { Freedelivery } from './freeDeliveryPage/freeDeliveryPage';
import { Promotions } from './PromotionsPage/PromotionsPage';
import { Deliverwithuber } from './deliverwithUberPage/deliverwithUberPage';

@Component({
    selector: 'ub-tab-account',
    templateUrl: './accounttab.html'
})

export class Accounttab {

    constructor(public navCtrl: NavController) {

    }

    navToFavourites() {
        this.navCtrl.push(Favourites);
    }

    navToPayement() {
        this.navCtrl.push(Payement);
    }
    
    navToHelp() {
        this.navCtrl.push(Help);
        
    }
    navToFreeDelivery(){
        this.navCtrl.push(Freedelivery);
        
    }
    navToFreePromotions(){
        this.navCtrl.push(Promotions);
        
    }
    navToDeliverWithUber(){
        this.navCtrl.push(Deliverwithuber);
        
    }
    navToSettings(){
        this.navCtrl.push(Settings);

    }

}