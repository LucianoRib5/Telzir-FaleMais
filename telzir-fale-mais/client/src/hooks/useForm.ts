import { useState } from "react";

interface Inputs {
    source: string,
    destiny: string,
    minutes: string,
    plan: string
};

const useForm = (initialState: Inputs) =>{
    const [ form, setForm ] = useState<Inputs>(initialState);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    return { form, onChange };
};

export default useForm;