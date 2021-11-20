import { useState } from "react";

import "./App.css";

//Components
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const users = [];
function App() {
    const [addedUsers, setAddedUsers] = useState(users);
    const addUser = (name, age) => {
        setAddedUsers((prevUsers) => {
            return [
                { id: Math.random().toString(), name: name, age: +age },
                ...prevUsers,
            ];
        });
    };
    return (
        <div className="App">
            <AddUser onAddUser={addUser} />
            <UsersList users={addedUsers} />
        </div>
    );
}

export default App;
