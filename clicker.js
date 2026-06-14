  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";

  import{
    getFirestore,
    doc,
    onSnapshot,
    setDoc,
    increment
  } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDpu9MjDqc1QeFxuNxKZ2hGsb5m7iURzI8",
    authDomain: "portfolio-counter-ad9a0.firebaseapp.com",
    projectId: "portfolio-counter-ad9a0",
    storageBucket: "portfolio-counter-ad9a0.firebasestorage.app",
    messagingSenderId: "1019369676344",
    appId: "1:1019369676344:web:c9f3561ad1183ece3f50cd",
    measurementId: "G-27K77R1NQH"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getFirestore(app);

  const counterref = doc(database, "counters", "globalcounter");

  const counterDisplay = document.getElementById("clickdisplay");

  const clickbutton = document.getElementById("clickerbutton");

  onSnapshot(counterref, (docSnap) =>{
    if (docSnap.exists()){
        counterDisplay.innerText = docSnap.data().count;
    }
    else{
        counterDisplay.innerText = 0;
    }
  });

clickbutton.addEventListener("click", async () => {
    try {
        await setDoc(counterref, {
            count: increment(1)
        }, {merge: true });

        console.log("clicked");
    } catch(error){
        console.error("Error updating counter:", error);
    }
  });