export type LoadingType = {
    type: 'LOADING'
    loading: boolean
}

export type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading: false
};

export const loadingReducer = (state = initState, action: LoadingType) => {
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.loading};
        }
        default: return state;
    }
};

export const loadingAC = (loading: boolean): LoadingType => {
    return {
        type: 'LOADING',
        loading
    } as const
};