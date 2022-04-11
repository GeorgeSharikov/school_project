import {Routes, Route} from "react-router-dom";
import {SideBar} from "../widgets/Sidebar";
import styles from './main.module.css'
import {useSelector} from "react-redux";
import {sideBarSelectors} from "../features/sidebarToggle/model/slice.js";
import {ArticlesFeed} from "./ArticlesFeed";
import {ArticleEditorPage} from "./ArticleEditor";

export const Routing = () => {
    const isSidebarActive = useSelector(sideBarSelectors.getSidebarIsActive)
    return (
        <div className={styles.main}>
            {isSidebarActive && <SideBar/>}
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <Routes>
                        <Route path={'/'} element={<ArticlesFeed />}/>
                        <Route path={'/writing'} element={<ArticleEditorPage />}/>
                    </Routes>
                </div>

            </div>
            <div style={{width: '320px'}}>a</div>
        </div>
    )
}   