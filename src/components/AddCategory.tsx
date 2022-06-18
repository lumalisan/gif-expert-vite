import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = (props: any) => {
    const [inputValue, setinputValue] = useState('')

    // Cambia el valor del useState
    const handleInputChange = (e: any) => {
        setinputValue(e.target.value)
    }

    // Gestionamos a la hora de introducir los datos
    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            props.setCategories((prevValues: any) => [inputValue, ...prevValues])
            setinputValue('')
        }

    }

    return (
        <div className='w-fit mx-auto py-10 md:w-1/2 md:py-20'>
            <form onSubmit={handleSubmit}>
                <div className='relative'>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        type="search"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Search for some awesome GIFs..."
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

            </form>
        </div>
    )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}