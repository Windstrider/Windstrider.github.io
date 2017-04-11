function() {
// Initialize Firebase

    
  //Get elemetns
  const preObject = document.getElementById('object');
  
  //Create references
  cosnt dbRefObject = firebase.database().ref().child('object');
  
  //Sync object changes
  dbRef.Object.on('value', snap => {
	  preObject.innerText= JSON.stringify(snap.val(),null,3);
  
}());
