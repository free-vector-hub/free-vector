// Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// உங்களது Firebase Config விபரங்கள்
const firebaseConfig = {
  apiKey: "AIzaSyBJkEg71gt7vD3F0qE0nkKeuZPdrQbpxWY",
  authDomain: "vectorhub-2026.firebaseapp.com",
  projectId: "vectorhub-2026",
  storageBucket: "vectorhub-2026.firebasestorage.app",
  messagingSenderId: "329737899852",
  appId: "1:329737899852:web:3192550ac89f5ad10289e9",
  measurementId: "G-B85DF27V4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const designsRef = ref(db, 'designs');

window.globalDesigns = [];

// Realtime Database listener (தரவுகளை உடனுக்குடன் புதுப்பிக்க)
export function listenToDesigns(callback) {
  onValue(designsRef, (snapshot) => {
    const data = snapshot.val();
    const list = [];
    if (data) {
      Object.keys(data).forEach(key => {
        list.push({ firebaseId: key, ...data[key] });
      });
    }
    window.globalDesigns = list.reverse(); // புதியது மேலே வர
    if (callback) callback(window.globalDesigns);
  });
}

// Add new design to Firebase
export function addDesignToFirebase(designData, onSuccess) {
  const newRef = push(designsRef);
  set(newRef, { ...designData, id: Date.now() })
    .then(() => { if (onSuccess) onSuccess(); })
    .catch(err => alert("Error adding design: " + err.message));
}

// Delete design from Firebase
export function deleteDesignFromFirebase(firebaseId, onSuccess) {
  const itemRef = ref(db, `designs/${firebaseId}`);
  remove(itemRef)
    .then(() => { if (onSuccess) onSuccess(); })
    .catch(err => alert("Error deleting design: " + err.message));
}
