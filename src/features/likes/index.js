import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './ui/style.module.css'

export const Like = ({likesCount}) => {

    return (
        <div className={styles.container}>
            <div className={`${styles.arrow}`}>
                <ExpandLessIcon className={styles.icon}/>
            </div>
            {/*{likesCount}*/}
            <div className={`${styles.likeCounts} ${likesCount > 0 ? styles.likesGreen : styles.likesRed}`}>
                22
            </div>
            <div className={`${styles.arrow}`}>
                <ExpandMoreIcon className={styles.icon}/>
            </div>
        </div>
    );
}
