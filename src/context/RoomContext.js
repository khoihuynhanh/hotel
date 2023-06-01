// import hooks from react
import { createContext, useEffect, useState } from 'react'

// import data
import { roomData } from '../data'

// create context
export const RoomContext = createContext()

function RoomProvider({ children }) {
    const [rooms, setRooms] = useState(roomData)
    const [adults, setAdults] = useState('1 Adult')
    const [kids, setKids] = useState('0 Kid')
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTotal((+adults[0] + +kids[0]))
    })

    const handleClick = (e) => {
        e.preventDefault()
        setLoading(true)

        // filter rooms based on total
        const newRooms = roomData.filter(room => {
            return total <= room.maxPerson
        })
        setTimeout(() => {
            setRooms(newRooms)
            setLoading(false)
        }, 2000)
        setRooms(newRooms)
    }

    return (
        <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}>
            {children}
        </RoomContext.Provider>
    );
}

export default RoomProvider;