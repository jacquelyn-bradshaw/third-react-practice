import {useState} from 'react';
import UsersList from './Components/UsersList';
import AddUser from './Components/AddUser';
import Card from './Components/UI/Card';
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
      <Card>
        <AddUser onAddUser={addUserHandler}/>
      </Card>
      <Card>
        <UsersList users={users} />
      </Card>
      <ErrorModal/>
    </div>
  );
}

export default App;
