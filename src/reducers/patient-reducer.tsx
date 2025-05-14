import type { Patient } from "../types/types"

export type PatientActions =
    { type: "add-patient", payload: { patient: Patient } } |
    { type: "clear-list" } |
    { type: "delete-patient", payload: { id: Patient["id"] } } |
    { type: "get-id-edit", payload: { id: Patient["id"] } } |
    { type: "edit-patient", payload: { patient: Patient } }


export type InitialStateProps = {
    patients: Patient[]
    idEdit: Patient["id"]
}

function initialPatients() {
    const patients = localStorage.getItem("patients");
    return patients ? JSON.parse(patients) : []
}

export const initialState: InitialStateProps = {
    patients: initialPatients(),
    idEdit: ""
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

    if (action.type == "get-id-edit") {

        window.scrollTo({ top: 0, behavior: 'smooth' });

        return {
            ...state,
            idEdit: action.payload.id
        }
    }

    if (action.type == "edit-patient") {
        return {
            ...state,
            patients: state.patients.map(function (patient) {
                if (patient.id == state.idEdit) {
                    return action.payload.patient
                } else {
                    return patient
                }
            }),
            idEdit: ""
        }
    }

    return state;
}