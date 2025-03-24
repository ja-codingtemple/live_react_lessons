import styles from './Character.module.css';

function Character() {
    return (
        <div className={styles.card}>
            <h1>Character Component</h1>
            <p>You've rendered the Character component. Congratulations!</p>
        </div>
    )
}

export default Character;