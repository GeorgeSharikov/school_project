import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './ui/styles.module.css'
import {useRef, useState} from "react";
import {useOnClickOutside} from "../../shared/hooks/useClickOutside.jsx";

export const PostActions = ({showEditAction, showDelAction}) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef();
    useOnClickOutside(ref, () => setIsOpen(false))

    return (
        <div>
            <MoreVertIcon className={styles.actions} onClick={() => setIsOpen(true)}/>
            {isOpen && <div className={styles.actionsContainer} ref={ref}>
                    <div className={styles.actionContent}>
                        {showDelAction && <div className={styles.actionItem}>Удалить</div>}
                        {showEditAction && <div className={styles.actionItem}>Редакитровать</div>}
                    </div>
            </div>}
        </div>

    );
}
