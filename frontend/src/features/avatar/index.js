import styles from './ui.module.css'

export const ProfileAvatar = ({ava}) => {
    ava = 'https://leonardo.osnova.io/f03665e4-d1d1-5847-ae85-7f100a04e29c/-/scale_crop/300x300/-/format/webp/'
    return(
            <div 
            className={styles.headerAvatar}
            style={{backgroundImage: `url(${ava})`}}
            >
            </div>
        
    )
} 