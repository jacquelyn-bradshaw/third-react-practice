import Button from "./UI/Button"

import styles from "./ErrorModal.module.css"

const ErrorModal = () => {
  const closeModalHandler = () => {
    
  }

  return <div>
    <header className={styles.header}>
      <h2>Invalid input</h2>
    </header>
    <main>
      <p className={styles.content}>Text</p>
      <div className={styles.actions}>
        <Button onClick={closeModalHandler}>Okay</Button>
      </div>
    </main>
  </div>
}

export default ErrorModal
