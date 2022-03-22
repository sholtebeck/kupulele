import { useState, useEffect } from "react";
//import { AuthContext } from "./AuthProvider";
import "./App.css";
import { db, auth, provider } from "./firebase-config";
import { signInWithPopup, signOut } from 'firebase/auth';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query, orderBy, limit
} from "firebase/firestore";

function getSex(s) {
  return s==='F' ? "Female" : s==='M' ? "Male" : "Undefined";
}
function getDate() {
  const today=new Date();
  return today.toISOString().split('T')[0]
}
function getUser(u) {
  return u.split(' ')[0];
}


function App() {
  const [newName, setNewName] = useState("");
  const [newSex, setNewSex] = useState("");
  const [newDate, setNewDate] = useState(getDate());
  const [butterflies, setButterflies] = useState([]);
  const [user, setUser] = useState("");

  const userSignIn = async () => {

    console.log("sign in");
  
    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(getUser(result.user.auth.currentUser.displayName));
    }).catch((error) => {
      console.log(error);
    });
  
  }

  const userSignOut = () => {
    
    signOut(auth).then(() => {
      console.log(user,"Sign out")
      setUser("")
    }).catch((error) => {
    });
  }


  const createButterfly = async () => {
  //  console.log("adding "+newName)
    const butterfliesCollectionRef = collection(db, "butterflies");
    const newButterfly = { name: newName, date: newDate, sex: newSex }
    const docRef = await addDoc(butterfliesCollectionRef, newButterfly );
    newButterfly.id=docRef.id;
    setButterflies([newButterfly,...butterflies])
    setNewName("")
    setNewSex("")
    setNewDate(getDate())
  };


  const deleteButterfly = async (id) => {
//    console.log("deleting " + id)
    const butterflyDoc = doc(db, "butterflies", id);
    setButterflies(butterflies.filter(butterfly => butterfly.id !== id))
    await deleteDoc(butterflyDoc);
  };

  useEffect(() => {
    const getButterflies = async () => {
      const butterfliesCollectionRef = collection(db, "butterflies");
      const butterfliesQuery = query(butterfliesCollectionRef, orderBy("date","desc"), limit(60));
      const data = await getDocs(butterfliesQuery);
      setButterflies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getButterflies();
  }, []);

  return (
    <div className="App">

{user ? (
      <button onClick={userSignOut}>Sign {user} Out</button>
      ) : (
      <button onClick={userSignIn}>Sign In</button>
      )};

      <table>
      <thead>
      <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Date</th>
          <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <input
        placeholder="Name..."  value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />          </td>
      <td>
      <select name="sex"  value={newSex}
      onChange={(event) => { setNewSex(event.target.value) }}>
    <option value="F">Female</option>
    <option value="M">Male</option>
    <option value="">Undefined</option>
    </select>
      </td>
      <td>
      <input  type="date"
        value={newDate}
        onChange={(event) => {
          setNewDate(event.target.value);
        }}
      />
      </td>
      <td>
      <button onClick={createButterfly} disabled={!newName||!user}>Insert</button>
      </td>
        </tr>
      {butterflies.map((butterfly) => {
        return (
           <tr key={butterfly.id}>
          <td>{butterfly.name}</td>
          <td>{getSex(butterfly.sex)}</td>
          <td>{butterfly.date}</td>
          <td><button  disabled={!butterfly.id}
              onClick={() => {
                deleteButterfly(butterfly.id);
              }}
            >
              Delete
            </button>
            </td>
          </tr>
        );
      })}
 </tbody>
</table>
    </div>
  );
}

export default App;
