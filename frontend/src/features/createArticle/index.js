import styles from './ui/styles.module.css'
import EditorJS from "@editorjs/editorjs";
import {settings} from "../../constants/editorJsSetteng.js";
import {useEffect, useRef} from "react";
import Textarea from 'react-expanding-textarea'
import { SmallAvatar } from '../../shared/assets/avatar/smallAvatar';
import {setActiveBlocks} from "../../shared/helpers/showInFeedEditorBlockTune/showInFeedEditorBlockTune.js";
import {ArticleApi} from "../../shared/api/api.js";

export const ArticleEditor = ({close}) => {
    const editor = new EditorJS(settings)
    const inputRef = useRef()
    const editorRef = useRef()

    const save = async () => {
        try{
            const data = await editor.save()
            const title = document.getElementById('titleArea').value
            setActiveBlocks([])
            const article = {data, title}
            console.log(article)
            await ArticleApi.createArticle({article, isModerated: false, isDraft: false})
            close()
        }catch (e) {
            console.log('Saving failed: ', e)
        }
    }

    const onTitleChange = (event) => {
        if(event.keyCode === 13){
            event.preventDefault()
            editor.focus()
        }
    }

    useEffect(() => {
        inputRef.current.focus()
        setTimeout(() => {
            if(editorRef.current.children[0]) {
                editorRef.current.removeChild(editorRef.current.children[0])
            }
        }, 0)
        return () => {
            setActiveBlocks([])
            editor.destroy()
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className={styles.editorContainer}>
            <div className={`${styles.Ieditor} ${styles.editorBottom}`}>
                <div className={styles.bottomContent}>
                    <button onClick={save} className={styles.publishButton}>
                        <span className={styles.buttonLabel}>Опубликовать</span>
                    </button>
                </div>
            </div>
            <div className={`${styles.Ieditor} ${styles.editorAuthors}`}>
                <div className={styles.authorSelect}>
                    <span className={styles.selectImg}>
                        <SmallAvatar />
                    </span>
                    <span className={styles.authorName}>
                        Мой блог
                    </span>
                </div>
            </div>
            <div className={styles.editorContent}>
                <div className={styles.Ieditor}>
                    <Textarea rows="1"
                                onKeyDown={onTitleChange}
                                id={'titleArea'}
                                ref={inputRef}
                                placeholder="Заголовок"
                                maxLength="120"
                                className={styles.inputTitle}
                                style={{minHeight: 47, overflowY: 'hidden'}}
                                
                              />
                </div>
                <div ref={editorRef} id={'editorjs'} className={`${styles.editorJS}`}/>
            </div>
        </div>

    );
}
