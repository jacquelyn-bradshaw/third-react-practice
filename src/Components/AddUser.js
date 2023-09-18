import { useState } from "react"

import Button from "./UI/Button"
import Card from "./UI/Card"

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
    if (userInput.username.trim().length === 0 || userInput.age.trim().length === 0 || +userInput.age < 1) {
      props.onShowModal()
      return
    }
    props.onAddUser(userInput)
    setUserInput(initialInput)
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={userInput.username}
          onChange={(event) =>
            inputChangeHandler("username", event.target.value)
          }
          id="username"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          value={userInput.age}
          onChange={(event) => 
            inputChangeHandler("age", event.target.value)
          }
          id="age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
