import styles from './styles.module.css'
import { PostItem } from "../../entities/Post/ui/PostItem";

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
        
        <div className={styles.wrapper}>
            <PostItem post={obj}/>
            <PostItem post={obj}/>
            <PostItem post={obj}/>
            <PostItem post={obj}/>
        </div>
    )
}