import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import { ArticleEditor } from ".."
import { PortalHoc } from "../../../shared/helpers/PortalHoc"
import { modalEditorStyles } from "./ui/ui"

export const ArticleEditorModal = ({isVisible, hadnleClose}) => {
    return (
        <PortalHoc elementPlace={document.body}>
            <Modal
                 open={isVisible}
                 onClose={hadnleClose}
                 >
                     <Box sx={modalEditorStyles}> 
                        <ArticleEditor/>
                     </Box>  
            </Modal>  
        </PortalHoc> 
    )
}