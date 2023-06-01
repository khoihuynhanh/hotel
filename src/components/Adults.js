// import hooks from react
import { useContext } from 'react'

// headless ui menu
import { Menu } from '@headlessui/react'

// icons 
import { BsChevronDown } from 'react-icons/bs'

// room context
import { RoomContext } from '../context/RoomContext';   

const list = [
    { name: '1 Adult' },
    { name: '2 Adults' },
    { name: '3 Adults' },
    { name: '4 Adults' },
]

function Adults() {
    const { adults, setAdults } = useContext(RoomContext)

    return (
        <Menu as='div' className='w-full h-full bg-white relative'>
            <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
                {adults}
                <BsChevronDown className='text-base text-accent-hover' />
            </Menu.Button>

            <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
                {list.map((li, index) => (
                    <Menu.Item 
                        key={index} as='li' 
                        className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer'
                        onClick={() => setAdults(li.name)}
                    >{li.name}</Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
}

export default Adults;