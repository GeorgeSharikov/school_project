import styles from './styles.module.css'
import {ShowArticles} from "../../features/showArticles/index.js";

export const ArticlesFeed = () => {
    return (
        <div className={styles.wrapper}>
            <ShowArticles />
        </div>
    )
}