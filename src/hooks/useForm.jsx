import { useState } from "react"

export const useForm = ( initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = (name = '') => {
        if(name !== '') {
            setValues({
                ...values,
                [name]: ''
            })
        } else {
            setValues(initialState)
        }
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name] : target.value
        })
    }

    return [ values, handleInputChange, reset ]
}