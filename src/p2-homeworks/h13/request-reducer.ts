let initState = 'No message...';

type initStateType = string

type setMessageActionType = ReturnType<typeof setMessageAC>

export const requestReducer = (state = initState, action: setMessageActionType): initStateType => {
    switch(action.type) {
        case "SET-MESSAGE":
            let copyState = state
            copyState = action.message
            return copyState
        default:
            return state;
    }
}

export const setMessageAC = (message: string) => ({type: 'SET-MESSAGE', message} as const)