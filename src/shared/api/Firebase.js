import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from 'shared/config/firebaseConfig';

class Firebase {
  constructor() {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }
}

export default Firebase;
