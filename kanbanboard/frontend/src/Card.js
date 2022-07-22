import React, {useState} from 'react';
import TaskList from './TaskList'
import styles from './assets/scss/Card.scss';

function Card({title, description, tasks}) {
    const [show_detail, setShowSetdetail] = useState(true);
    const onChangeagreeProvInput = e => {
        setShowSetdetail(!show_detail)  
    }
    return (
        <div className={styles.Card}>
          <div className={styles.Card__Title} 
          onClick= {onChangeagreeProvInput}>
          {title}</div>
          {show_detail ?
          <div className='Card__Details'>
            {description} 
            <TaskList tasks={tasks}/>
          </div> : null
            }
        </div>
    );
}

export default Card;