import { useState } from "react"

import Button from "./UI/Button"

import styles from "./AddUser.module.css"

const initialInput = {
  username: "",
  age: ""
}

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(initialInput)

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddUser(userInput)
    setUserInput(initialInput)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.input}>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={userInput.username}
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
            id="username"
          />
        </p>
        <p>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={userInput.age}
            onChange={(event) => 
              inputChangeHandler("age", event.target.value)
            }
            id="age"
          />
        </p>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  )
}

export default AddUser
