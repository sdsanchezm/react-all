import { useState } from "react";

function useForm(initialData1) {

    const [data1, setData1] = useState(initialData1);

    return [
        data1,
        event => {
            setData1({
                ...data1,
                [event.target.name]: event.target.value
            });
        }
    ]

};

export default useForm;