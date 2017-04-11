(function() {
// Initialize Firebase
 const config = {
	apiKey: "AIzaSyClwsYJMweZRPRq6uqIO5-Me0Q3Fr-Fxjg",
	authDomain: "database-29555.firebaseapp.com",
	databaseURL: "https://database-29555.firebaseio.com",
	projectId: "database-29555",
	storageBucket: "database-29555.appspot.com",
	messagingSenderId: "1087442343696"
	};
firebase.initializeApp(config);
    
  //Get elemetns
  const preObject = document.getElementById('object');
  
  //Create references
  cosnt dbRefObject = firebase.database().ref().child('object');
  
  //Sync object changes
  dbRef.Object.on('value', snap => {
	  preObject.innerText= JSON.stringify(snap.val(),null,3);
  
}());
