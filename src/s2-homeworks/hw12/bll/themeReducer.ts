const initState = {
    themeId: 1,
}
export type InitStateType = {
    themeId: number
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeId): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}


type ChangeThemeId = {
    id: number
    type: 'SET_THEME_ID'
}
export const changeThemeId = (id: number): ChangeThemeId => ({type: 'SET_THEME_ID', id}) // fix any
