import styles from './Character.module.css';
import { use, useState } from 'react';

function Character(props) {
    const [name, setName] = useState(props.name);
    const [type, setType] = useState(props.type);
    const [level, setLevel] = useState(0);

    const levelUp = () => {
        setLevel(level + 1);
    }

    return (
        <div className={styles.card}>
            <p>Name: {name}</p>
            <p>Type: {type}</p>
            <p>Level: {level}</p>
            <button onClick={levelUp}>Level Up</button>
        </div>
    )
}

export default Character;