import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DeliveryService{

constructor(public http:Http){}


getcities(citySearch){

let headers = new Headers();
headers.append('Accept','application/json');
headers.append('Content-Type','application/json');
headers.append( 'Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT',);
headers.append('Access-Control-Allow-Origin', '*');
headers.append("Access-Control-Allow-Headers", "http://localhost:8100/, X-Requested-With, Content-Type, Accept");


console.log("citysearch-> "+citySearch)
return this.http.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+citySearch+"&types=(cities)&key=AIzaSyAgYqfD6K7lf4XqQd5yBaxeDDGtXQn5YZo",{headers:headers})
         .map((res:Response)=>{
            return res.json();
         })
}


}