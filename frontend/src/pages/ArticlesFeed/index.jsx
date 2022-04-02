import {PostHeader} from "../../entities/Post/ui/PostHeader";
import {PostContent} from "../../entities/Post/ui/PostContent";
import styles from './styles.module.css'
// import {CommentsIconLink} from "../../features/goToComments";
import {AddToBookMarks} from "../../features/addToBookmarks";
import {NavLink} from "react-router-dom";
import {Like} from "../../features/likes";


const PostItem = ({post}) => {
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
// https://leonardo.osnova.io/b5430f91-7c06-5bfb-a7f7-86ff5edc9b4c/-/preview/1100/-/format/webp/ 'https://leonardo.osnova.io/26a94a61-e9b9-50b3-a811-833a9fcd69ee/-/preview/1500/-/format/webp/'
export const ArticlesFeed = () => {
    const obj = {
        title: 'Фильм HBO и CNN о Навальном получил две награды на фестивале',
        prewords: 'В номинации Festival Favorite Award и приз зрительских симпатий. В номинации Festival Favorite Award и приз зрительских симпатийaaaaaaaaaaaaaaaa. В номинации Festival Favorite Award и приз зрительских симпатий.',
        image: 'https://leonardo.osnova.io/b5430f91-7c06-5bfb-a7f7-86ff5edc9b4c/-/preview/1100/-/format/webp/',
        author: 'Pupkin Zalupkin',
        sub: 'Dvach',
        subImage: 'https://leonardo.osnova.io/2810b9bb-071f-8a49-2290-2f92ca6797cd/-/scale_crop/64x64/',
        date: 'Today',
        likesCount: 50
    }
    return (
        <div>
            <PostItem post={obj}/>
            <PostItem post={obj}/>
            <PostItem post={obj}/>
            <PostItem post={obj}/>
        </div>
    )
}