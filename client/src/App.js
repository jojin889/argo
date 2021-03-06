import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();
  const [name, setName] = useState("");
  const [loadUsers, setLoadUsers] = useState(true);

  useEffect(() => {
    if (loadUsers) {
      console.log("f------", process.env)
      
      axios.get(`${process.env.REACT_APP_API_URL}/getUsers`).then((response) => {
        console.log("response.data", response.data);
        setUsers(response.data);
      });
      setLoadUsers(false);
    }
  }, []);

  const handleNewUser = (e) => {
    axios.post(`${process.env.REACT_APP_API_URL}/createUser`, {
      name: name,
    });
  };

  return (
    <div className="App">
      <h1>
        <img
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
        />
        Les Argonautes <br/>
        <span>https://github.com/jojin889/argo</span>

      </h1>
      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={handleNewUser}>
          <label htmlFor="name">Nom de l&apos;Argonaute</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Charalampos"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Envoyer</button>
          
        </form>

        <h2>Membres de l'équipage :</h2>
        <section className="member-list">
          {users ? (
            users.map((user) => {
              return <div className="member-item" key={user._id}>{user.name}</div>;
            })
          ) : (
            <div className="member-item">Loading...</div>
          )}
        </section>
      </main>
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
