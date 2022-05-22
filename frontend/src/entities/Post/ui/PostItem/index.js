import { NavLink } from "react-router-dom"
import { AddToBookMarks } from "../../../../features/addToBookmarks"
import { Like } from "../../../../features/likes"
import { PostContent } from "../PostContent"
import { PostHeader } from "../PostHeader"
import styles from './ui.module.css'

export const PostItem = ({post}) => {
    const {id:articleId, title, title_paragraph, title_image: secondTitleBlock, like_count: likesCount, userId: authorId, first_name, last_name, createdAt} = post
    const author = `${first_name} ${last_name}`
    return(
        <div className={styles.post}>
            <PostHeader author={author} date={createdAt} authorId={authorId}/>
            <NavLink to={`/articles/${articleId}`}>
                <PostContent title={title} titleParagraph={title_paragraph} secondTitleBlock={secondTitleBlock}/>
            </NavLink>
            <div className={styles.footer}>
                <div className={styles.footerItem}>
                    <AddToBookMarks />
                </div>
                <div>
                    <Like likesCount={likesCount}/>
                </div>
            </div>
        </div>
    )
}