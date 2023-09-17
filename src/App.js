import {useState} from 'react';
import UsersList from './Components/UsersList';
import AddUser from './Components/AddUser';
import ErrorModal from './Components/ErrorModal';

function App() {
const [users, addUser] = useState([])

  const addUserHandler = (input) => {
    addUser((prevUsers) => {
      return [input, ...prevUsers]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users} />
      <ErrorModal/>
    </div>
  );
}

export default App;
