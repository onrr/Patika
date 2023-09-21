import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchParagraph } from '../redux/textSlice'

function Output() {

    const { paragraph, paras, modal, status } = useSelector((state) => state.paragraphs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchParagraph({ paras, modal }))
    }, [dispatch, paras, modal])


    return (
        <div>
            {status === 'failed' && <div>Error!</div>}
            {status === 'loading' && <div>Loading..</div>}
            <div className='paragraph'>
                {paragraph}
            </div>
        </div>
    )
}

export default Output