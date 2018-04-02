import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyBBT9qKoyHwCbX1L81Uxqa_cVP-iRxy7GM',
      authDomain: 'jta-instagran-clone-27514.firebaseapp.com',
      databaseURL: 'https://jta-instagran-clone-27514.firebaseio.com',
      projectId: 'jta-instagran-clone-27514',
      storageBucket: 'jta-instagran-clone-27514.appspot.com',
      messagingSenderId: '548524937789'
    };

    firebase.initializeApp(config);
  }
}
