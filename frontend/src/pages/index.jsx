import {Routes, Route} from "react-router-dom";
import {SideBar} from "../widgets/Sidebar";
import styles from './main.module.css'
import {useSelector} from "react-redux";
import {sideBarSelectors} from "../features/sidebarToggle/model/slice.js";
import {ArticlesFeed} from "./ArticlesFeed";
import { Profile } from "./Profile";
import { ProfileArticleFeed } from "../features/profileArticleFeed";
import { ProfileDraftsFeed } from "../features/profileDraftsFeed";

export const Routing = () => {
    const isSidebarActive = useSelector(sideBarSelectors.getSidebarIsActive)
    return (
        <div className={styles.main}>
            {isSidebarActive && <SideBar/>}
            <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<ArticlesFeed />}/>         
                        <Route path={'/profile/:id'} element={<Profile/>}>
                            <Route path="" element={<ProfileArticleFeed />} />
                            <Route path="drafts" element={<ProfileDraftsFeed />} />
                        </Route>
                    </Routes>
            </div>
            <div style={{width: '145px'}}></div>
        </div>
    )
}   