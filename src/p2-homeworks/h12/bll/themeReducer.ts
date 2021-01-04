export type InitType = {
    color: string
}

type changeThemeCType = {
    type: "COLOR"
    color: string
}

const initState: InitType = {
    color: 'dark'
};

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "COLOR": {
            return {
                ...state,
                color: action.color
            };
        }
        default: return state;
    }
};

export const changeThemeC = (color: string): changeThemeCType => ({type: "COLOR", color} as const); // fix any