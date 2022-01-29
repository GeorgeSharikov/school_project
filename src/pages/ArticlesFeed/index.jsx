import {PostHeader} from "../../entities/Post/ui/PostHeader";
import {PostContent} from "../../entities/Post/ui/PostContent";
import styles from './styles.module.css'

const PostItem = ({post}) => {
    const {title, prewords, image, author, sub, subImage, date} = post
    return(
        <div className={styles.post}>
            <PostHeader  author={author} sub={sub} subImage={subImage} date={date}/>
            <PostContent image={image} title={title} prewords={prewords}/>
        </div>
    )
}

export const ArticlesFeed = () => {
    const obj = {
        title: 'Фильм HBO и CNN о Навальном получил две награды на фестивале',
        prewords: 'В номинации Festival Favorite Award и приз зрительских симпатий.',
        image: 'https://leonardo.osnova.io/26a94a61-e9b9-50b3-a811-833a9fcd69ee/-/preview/1500/-/format/webp/',
        author: 'Pupkin Zalupkin',
        sub: 'Dvach',
        subImage: 'https://leonardo.osnova.io/2810b9bb-071f-8a49-2290-2f92ca6797cd/-/scale_crop/64x64/',
        date: 'Today',
    }
    return (
        <div>
            <PostItem post={obj}/>
        </div>
    )
}