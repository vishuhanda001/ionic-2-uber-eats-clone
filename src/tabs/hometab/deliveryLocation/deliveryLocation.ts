import { Component } from '@angular/core';
import { NavController,ModalController,ViewController } from 'ionic-angular';
import { DeliveryService } from '../../../services/locationservice';
import { DeliveryInstructionModal } from './deliveryInstructionModal/deliveryInstructionModal';


@Component({
  selector: 'ub-deliverylocation',
  templateUrl: 'deliveryLocation.html'
})
export class DeliveryLocationPage {

delivertodoor:boolean = true;
searchresults=[];
  constructor(public navCtrl: NavController,
              public locationService:DeliveryService,
              public adddeliveryInstructionModal:ModalController,
              public viewctrl:ViewController) {
    

  }

  onInput(evt){
    this.locationService.getcities(evt.target.value).subscribe((cities)=>{
        this.searchresults = cities.predictions;
    })
  }

  selectItem(selectedItem){
    
    selectedItem.description;
    this.searchresults = [];
  }

  pickUpOutside(){
    this.delivertodoor = false;
  }

  deliverToDoor(){
    this.delivertodoor = true;
  }

  adddeliveryInstructions(){

      let deliveryinstructionmodal = this.adddeliveryInstructionModal.create(DeliveryInstructionModal);

    deliveryinstructionmodal.onDidDismiss((data)=>{
      console.log(data);
    })

      deliveryinstructionmodal.present();

  }


  }


