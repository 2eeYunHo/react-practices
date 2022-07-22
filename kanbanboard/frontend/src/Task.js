import React, { useState } from 'react';
import styles from './assets/css/Task.css';

function Task({name, done}) {
    const [check, setCheck] = useState(done);
    
    const onChangeagreeProvInput = e => {
        setCheck(!check)  
    }

    return (
            <li className={styles.Task}>
                  <input type='checkbox' checked={check} onClick={onChangeagreeProvInput} />
                    {name}
                  <a href='#' className='TaskList__Task__remove'></a>
            </li>
    );
}

export default Task;