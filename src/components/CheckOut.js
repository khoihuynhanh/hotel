// import hooks from react
import { useState } from 'react'

// datepicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'

// icons
import { BsCalendar } from 'react-icons/bs'

function CheckOut() {
    const [endDate, setEndDate] = useState(false)

    return (
        <div className='relative flex items-center h-full justify-end'>
            <div className='absolute z-10 pr-8'>
                <div>
                    <BsCalendar className='text-accent text-base' />
                </div>
            </div>

            <DatePicker 
                className='w-full h-full' 
                selected={endDate} 
                placeholderText='Check out' 
                onChange={(date) => setEndDate(date)}
            />
        </div>
    );
}

export default CheckOut;