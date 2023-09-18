import {useState} from 'react';
import UsersList from './Components/UsersList';
import AddUser from './Components/AddUser';
import ErrorModal from './Components/UI/ErrorModal';

function App() {
const [users, addUser] = useState([])
const [isModalShowing, setIsModalShowing] = useState(false)

  const addUserHandler = (input) => {
    addUser((prevUsers) => {
      return [input, ...prevUsers]
    })
  }

  const showModalHandler = () => {
    setIsModalShowing(true)
  }

  const hideModalHandler = () => {
    setIsModalShowing(false)
  }

  return (
    <div>
      <AddUser onShowModal={showModalHandler} onAddUser={addUserHandler}/>
      <UsersList users={users} />
      {isModalShowing && <ErrorModal onCloseModal={hideModalHandler}/>}
    </div>
  );
}

export default App;
