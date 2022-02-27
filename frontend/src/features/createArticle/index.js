import styles from './ui/styles.module.css'
import EditorJS from "@editorjs/editorjs";
import {settings} from "../../constants/editorJsSetteng.js";
import {useEffect, useRef} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ArticleEditor = (props) => {
    const editor = new EditorJS(settings)
    const inputRef = useRef()

    const save = async () => {
        try{
            const data = await editor.save()
            const title = document.getElementById('titleArea').value
            console.log({data, title})
        }catch (e) {
            console.log('Saving failed: ', e)
        }
    }

    useEffect(() => {
        inputRef.current.focus()
        document.getElementById("editorjs").childNodes[0].remove()
    }, [])

    return (
        <div className={styles.editorContainer}>
            <div className={`${styles.Ieditor} ${styles.editorAuthors}`}>
                <div className={styles.authorSelect}>
                    <span className={styles.selectImg}>
                        <img src={'https://leonardo.osnova.io/aa291fee-0c9a-4803-c179-af2bda5cb297/'} alt={'sub'}/>
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
                    <textarea rows="1"
                              id={'titleArea'}
                              ref={inputRef}
                              placeholder="Заголовок"
                              maxLength="120"
                              className={styles.inputTitle}
                              style={{height: 47, overflowY: 'hidden'}}
                              key={1}/>
                </div>
                <div id={'editorjs'} className={`${styles.editorJS}`}/>
            </div>
            <div className={`${styles.Ieditor} ${styles.editorBottom}`}>
                <div className={styles.bottomContent}>
                    <button onClick={save} className={styles.publishButton}>
                        <span className={styles.buttonLabel}>Опубликовать</span>
                    </button>
                </div>
            </div>
        </div>

    );
}
