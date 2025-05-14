import { createContext, useReducer, type ReactNode } from "react"
import { initialState, patientReducer, type InitialStateProps, type PatientActions } from "../reducers/patient-reducer"

export type PatientContextProps = {
    state: InitialStateProps
    dispatch: React.ActionDispatch<[action: PatientActions]>
}

export type PatientProviderProps = {
    children: ReactNode
}

export const PatientContext = createContext<PatientContextProps>(null!)

export const PatientProvider = (({children}: PatientProviderProps) => {

    const [state, dispatch] = useReducer(patientReducer, initialState);

    return (

        <PatientContext.Provider
        value={{state,dispatch}}
        >
            {children}
        </PatientContext.Provider>
    )
})