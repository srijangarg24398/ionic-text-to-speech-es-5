import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  text:string;
  status:string="not reading";

  constructor(public navCtrl: NavController,private tts: TextToSpeech) {

  }

  speakText(){
	this.tts.speak(this.text)
  	.then(() => {
  		console.log("Successfully spoke "+this.text);
  		status="Reading mode on";
  	})
  	.catch((reason: any) => console.log(reason));
  }

}
