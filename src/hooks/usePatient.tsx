import { useContext } from "react";
import { PatientContext } from "../contexts/PatientContext";

export  function usePatient() {

    const context = useContext(PatientContext);
    return context;
    
}
