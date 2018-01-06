import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryLocationPage } from '../hometab/deliveryLocation/deliveryLocation';


@Component({
    selector:'ub-tab-home',
    templateUrl:'./hometab.html'
})

export class Hometab{
    
constructor(public navCtrl:NavController){

}

    changeLocation(){
        this.navCtrl.push(DeliveryLocationPage);
      }
    
      doInfinite($event){
        console.log($event);
        setTimeout(() => {
            $event.complete();
        }, 2000);
    
      }


}