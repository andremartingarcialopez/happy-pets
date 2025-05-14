import type { Patient } from "../types/types"

export type PatientActions =
    { type: "add-patient", payload: { patient: Patient } } |
    { type: "clear-list" } |
    { type: "delete-patient", payload: {id: Patient["id"]} } 


export type InitialStateProps = {
    patients: Patient[]
}

function initialPatients() {
    const patients = localStorage.getItem("patients");
    return patients ? JSON.parse(patients) : []
}

export const initialState: InitialStateProps = {
    patients: initialPatients()
}

export function patientReducer(state: InitialStateProps = initialState, action: PatientActions) {
    
    if (action.type == "add-patient") {
        return {
            ...state,
            patients: [...state.patients, action.payload.patient]
        }
    }

    if (action.type == "clear-list") {
        return {
            ...state,
            patients: []
        }
    }

    if (action.type == "delete-patient") {
        return {
            ...state,
            patients: state.patients.filter(patient => patient.id !== action.payload.id)
        }
    }

    return state;
}