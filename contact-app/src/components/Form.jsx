import { useEffect, useState } from 'react'

const initialFormValues = { 'fullName': '', 'phoneNumber': '' }

const Form = ({contact, setContact}) => {

    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmitFunc = (e) => {
        e.preventDefault()

        if (form.fullName === '' || form.phoneNumber === '') return false

        setContact([...contact, form])
    }

    useEffect( () => {
        setForm(initialFormValues)
    }, [contact] )

    return (
        <form id='Form' onSubmit={onSubmitFunc} >
            <div>
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" id="fullName" placeholder='full name' onChange={onChangeInput} value={form.fullName} />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input type="tel" id="phoneNumber" placeholder='phone number' onChange={onChangeInput} value={form.phoneNumber} />
            </div>
            <div>
                <button>Add</button>
            </div>

        </form>
    )
}

export default Form