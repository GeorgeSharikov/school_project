import styles from './styles.module.css'
import "./styles.css"

export const PostContent = ({title, titleParagraph, secondTitleBlock}) => {
    const setHtml = (html) => {
        return {__html: html}
    }
    return (
        <div className={'content'}>
            <div className={styles.title}>
                {title}
            </div>
            <div dangerouslySetInnerHTML={setHtml(titleParagraph)}/>
            <div dangerouslySetInnerHTML={setHtml(secondTitleBlock)}/>
            {/*<div className={styles.title}>*/}
            {/*    {title}*/}
            {/*</div>*/}
            {/*<div className={styles.prewords}>*/}
            {/*    <p>{prewords}</p>*/}
            {/*</div>*/}
            {/*<div className={styles.mediaContainer}>*/}
            {/*    <div className={styles.mediaContent}>*/}
            {/*        <img src={image} alt={'content art'}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}