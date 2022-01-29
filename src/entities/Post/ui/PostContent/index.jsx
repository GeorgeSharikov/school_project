import styles from './styles.module.css'

export const PostContent = ({title, prewords, image}) => {
    return (
        <div>
            <div className={styles.title}>
                Фильм HBO и CNN о Навальном получил две награды на фестивале
            </div>
            <div className={styles.prewords}>
                <p>В номинации Festival Favorite Award и приз зрительских симпатий.</p>
            </div>
            <figure className={styles.figure}>
                <div className={styles.mediaContent}>
                    <img src={'https://leonardo.osnova.io/26a94a61-e9b9-50b3-a811-833a9fcd69ee/-/preview/1500/-/format/webp/'}/>
                </div>
            </figure>
        </div>
    )
}