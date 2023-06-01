// import components
import Adults from '../components/Adults'
import Kids from '../components/Kids'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import { RoomContext } from '../context/RoomContext'
import { useContext } from 'react'


function BookForm() {
    const { handleClick } = useContext(RoomContext)

    return (
        <form className="h-[300px] w-full lg:h-[70px]">
            <div className='flex flex-col w-full h-full lg:flex-row'>
                <div className='flex-1 border-r'>
                    <CheckIn />
                </div>

                <div className='flex-1 border-r'>
                    <CheckOut />
                </div>

                <div className='flex-1 border-r'>
                    <Adults />
                </div>

                <div className='flex-1 border-r'>
                    <Kids />
                </div>

                <button type='submit'
                    className='btn btn-primary'
                    onClick={(e) => handleClick(e)}
                >
                    Check now
                </button>
            </div>
        </form>
    );
}

export default BookForm;