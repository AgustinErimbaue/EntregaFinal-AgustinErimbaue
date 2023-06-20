import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDDd-F9JdN7F2we1Od56m-fg-RJon9v_c",
  authDomain: "react-coder-3c1f8.firebaseapp.com",
  projectId: "react-coder-3c1f8",
  storageBucket: "react-coder-3c1f8.appspot.com",
  messagingSenderId: "205098956277",
  appId: "1:205098956277:web:441cd16770df9ec4d85cbc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  const productsCollectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollectionRef);
  const dataDocs = productsSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return dataDocs;
}

export async function getItemData(itemId) {
  const docRef = doc(db, "products", itemId);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getCategoryData(category) {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", category));
  const productsSnapshot = await getDocs(q);
  const dataDocs = productsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return dataDocs;
}


export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "orders");
  const response = await addDoc(ordersCollectionRef, data);
  return response.id;
}
