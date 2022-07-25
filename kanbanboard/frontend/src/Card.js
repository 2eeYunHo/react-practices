import React, {useState} from 'react';
import TaskList from './TaskList'
import styles from './assets/scss/Card.scss';

export default function Card({title, description,status, tasks}) {
    const [show_detail, setShowSetdetail] = useState(true);
    const onChangeagreeProvInput = e => {
        setShowSetdetail(!show_detail)  
    }
    const styleSideColor={
      position: 'absolute',
      zIndex:-1,
      top:0,
      left:0,
      bottom: 0,
      width: 3,
      backgroundColor: status === 'ToDo' ? '#bd8D31' : (status ==='Doing' ? '#3a7e28' : '#222')
    }
    return (
        <div className={styles.Card}>
          <div style={styleSideColor}/>
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
