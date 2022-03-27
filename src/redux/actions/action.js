export const ADD_APPLICATION = 'ADD_APPLICATION'
export const EDITING_APPLICATION = "EDITING_APPLICATION"
export const DELETE_APPLICATION = 'DELETE_APPLICATION'

export const addApplicationAction = (newApplication) => {
    return {
        type: ADD_APPLICATION,
        payload: newApplication
    }
}

export const editingApplicationAction = (reApplication) => {
    return {
        type: EDITING_APPLICATION,
        payload: reApplication
    }
}

export const deleteApplicationAction = (idApplication) => {
    return {
        type: DELETE_APPLICATION,
        payload: idApplication
    }
}