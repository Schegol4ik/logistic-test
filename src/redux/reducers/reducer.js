import {ADD_APPLICATION, DELETE_APPLICATION, EDITING_APPLICATION} from "../actions/action";

const initialState = {
    applications: [],
    points: [
        {
            id: 1,
            nameCity: 'Москва',
            title: 'Машиностроительный завод',
            lat: 55.77196049112693,
            lon: 37.570987946394915

        },
        {
            id: 2,
            nameCity: 'Санкт-Петербург',
            title: 'Обуховский завод',
            lat: 59.86175713753961,
            lon: 30.47775989526867,
        },
        {
            id: 3,
            nameCity: 'Воронеж',
            title: 'Воронежский завод промышленного литья',
            lat: 51.68808205687902,
            lon: 39.165670239569636,
        },
        {
            id: 4,
            nameCity: 'Бобруйск',
            title: 'Белшина',
            lat: 53.18799763749941,
            lon: 29.19021700810857
        },
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_APPLICATION: {
            return {...state, applications: [...state.applications, action.payload]}
        }
        case EDITING_APPLICATION: {
            return {
                ...state,
                applications: state.applications.map(item => {
                    if(item.numberApplication === action.payload.numberApplication){
                        item.loading = action.payload.loading
                        item.upLoading = action.payload.upLoading
                    }
                    return item
                })

            }
        }
        case DELETE_APPLICATION: {
            return {
                ...state,
                applications: state.applications.filter(item => item.id !== action.payload)
            }
        }
        default:
            return state

    }
}