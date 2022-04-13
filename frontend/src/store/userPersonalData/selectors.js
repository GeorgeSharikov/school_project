export const getPeronalData = (state, isOwn = true) => {
    console.log('here')
    if(isOwn){
        return state.personalData.personalData
    }
    return state.personalData.otherAccountData
}