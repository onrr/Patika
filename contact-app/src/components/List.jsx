import { useState } from 'react'

const List = ({ contact }) => {

    const [filterText, setFilterText] = useState('')

    const filtered = contact.filter((item) => {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()))
    })


    return (
        <div id='List'>
            <div>
                <input type="text" value={filterText} placeholder='filter' onChange={(e) => setFilterText(e.target.value)} />
            </div>

            <div>
                <ul>
                    {
                        filtered.map((contact, id) => (
                            <li key={id}>
                                <span>{contact.fullName}</span>
                                <span>{contact.phoneNumber}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <p>Total Contacts: {filtered.length}</p>
        </div>
    )
}

export default List