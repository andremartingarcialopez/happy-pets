import type { Patient } from "../types/types"

export type PatientActions =
    { type: "add-patient", payload: { patient: Patient } }


export type InitialStateProps = {
    patients: Patient[]
}

export const initialState: InitialStateProps = {
    patients: []
}

export function patientReducer(state: InitialStateProps = initialState, action: PatientActions) {
    
    if (action.type == "add-patient") {
        return {
            ...state,
            patients: [...state.patients, action.payload.patient]
        }
    }

    return state;
}