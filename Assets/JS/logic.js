var firebaseConfig = {
    apiKey: "AIzaSyDrUFeb_nzyjslKGVf9kVZi4KqMe8dESMc",
    authDomain: "employeeproject-2f684.firebaseapp.com",
    databaseURL: "https://employeeproject-2f684.firebaseio.com",
    projectId: "employeeproject-2f684",
    storageBucket: "",
    messagingSenderId: "462428901839",
    appId: "1:462428901839:web:6af83df56fdcd443"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let trainData = firebase.database();

  $("#add-train").on("click", function(event) {
    event.preventDefault();
  // create variables to get user input
  let Name  = $("#name-input").val().trim();

  let trainOne = $("trainOne-input").val().trim();
  let frequency = $("frequency-input").val().trim();
  let location = $("location-input").val().trim(); 
  
      let newTrain = {
        name: Name,
        firstTrain: trainOne,
        location: location,
        frequency: frequency

      };


  });

  $("#table > tbody").append(
    $("<td>").text(tName),
    $("<td>").text(tlocation),
    $("<td>").text(tFrequency),
   

  )

  //  connect to firebase

  