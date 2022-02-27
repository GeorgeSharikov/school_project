import styles from './styles.module.css'

export const PostContent = ({title, prewords, image}) => {
    return (
        <div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.prewords}>
                <p>{prewords}</p>
            </div>
            <div className={styles.mediaContainer}>
                <div className={styles.mediaContent}>
                    <img src={image} alt={'content art'}/>
                </div>
            </div>
        </div>
    )
}