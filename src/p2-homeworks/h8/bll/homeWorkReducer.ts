export type InitialStateType = {
    _id: number
    name: string
    age: number
}

export type ActionType = SortActionType | CheckActionType

export type SortActionType = {
    type: "sort"
    payload: "up" | "down"
}

export type CheckActionType = {
    type: "check"
    payload: number
}

export const homeWorkReducer = (state: InitialStateType[], action: ActionType): any => {
    switch (action.type) {
        case "sort": {
            let newState: InitialStateType[] = [];
            if (action.payload === 'up') {
				newState = [...state].sort((a, b) => {
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return 1
					}
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return -1
					}
					return 0
				})
			}
			if (action.payload === 'down') {
				newState = [...state].sort((a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return 1
					}
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return -1
					}
					return 0
				})
			}
			return newState
        }
        case "check": {
            let newState: InitialStateType[] = [...state].filter(f => f.age >= action.payload)
            return newState;
        }
        default: return state
    }
};

export const SortStateAC = (payload: 'up' | 'down'): SortActionType => {
	return { type: 'sort', payload: payload }
}

export const CheckStateAC = (payload: number): CheckActionType => {
	return { type: 'check', payload: payload }
}