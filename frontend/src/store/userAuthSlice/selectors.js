export const getIsUserAuth = (state) => state.userAuth.isAuth
export const getIsLoginError = (state) => state.userAuth.errorLoginMessage
export const getUserPersonalId = (state) => state.userAuth.userId
export const getIsLoginModalOpen = (state) => state.userAuth.isLoginModalOpen