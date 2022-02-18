import styles from './ui/styles.module.css'
import EditorJS from "@editorjs/editorjs";
import {settings} from "../../constants/editorJsSetteng.js";
import {useEffect, useRef} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ArticleEditor = (props) => {
    const editor = new EditorJS(settings)
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div className={styles.editorContainer}>
            <div className={`${styles.Ieditor} ${styles.editorAuthors}`}>
                <div className={styles.authorSelect}>
                    <span className={styles.selectImg}>
                        <img src={'https://leonardo.osnova.io/aa291fee-0c9a-4803-c179-af2bda5cb297/'}/>
                    </span>
                    <span className={styles.authorName}>
                        Мой блог
                    </span>
                    <span className={styles.expandIcon}>
                        <ExpandMoreIcon style={{width: 20, height: 20}}/>
                    </span>
                </div>
            </div>
            <div className={styles.editorContent}>
                <div className={styles.Ieditor}>
                    <textarea rows="1" ref={inputRef} placeholder="Заголовок" maxLength="120" className={styles.inputTitle} style={{height: 47, overflowY: 'hidden'}}/>
                </div>
                <div id={'editorjs'} className={`${styles.editorJS}`}/>
            </div>
            <div>a</div>
        </div>

    );
}
