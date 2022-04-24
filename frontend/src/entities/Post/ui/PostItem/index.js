import { NavLink } from "react-router-dom"
import { AddToBookMarks } from "../../../../features/addToBookmarks"
import { Like } from "../../../../features/likes"
import { PostContent } from "../PostContent"
import { PostHeader } from "../PostHeader"
import styles from './ui.module.css'

export const PostItem = ({post}) => {
    const {title, prewords, image, author, sub, subImage, date, likesCount} = post
    return(
        <div className={styles.post}>
            <PostHeader  author={author} sub={sub} subImage={subImage} date={date}/>
            <NavLink to={'/news/id'}>
                <PostContent image={image} title={title} prewords={prewords}/>
            </NavLink>
            <div className={styles.footer}>
                {/*<div className={styles.footerItem}>*/}
                {/*    <CommentsIconLink commentsAmount={commentsAmount}/>*/}
                {/*</div>*/}
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