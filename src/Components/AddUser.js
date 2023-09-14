import { useState } from "react"
import styles from "./AddUser.module.css"

const AddUser = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: ""
  })

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
      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUser
