import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';



@Component({
    selector:"ub-deliveryinstruction",
    templateUrl:'./deliveryInstructionModal.html'
})

export class DeliveryInstructionModal{

deliveryInstruction:string;
constructor(public viewCtrl:ViewController){

}

closeModal(){
    this.viewCtrl.dismiss(this.deliveryInstruction);
}


}

