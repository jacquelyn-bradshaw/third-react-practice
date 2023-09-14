import styles from "./AddUser.module.css"

const AddUser = () => {
  const submitHandler = () => {
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.input}>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
          />
        </p>
        <p>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age"/>
        </p>
      </div>
      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUser
