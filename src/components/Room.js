// link
import { Link } from 'react-router-dom'

// icons
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs'

function Room({ room }) {
    const { id, name, price, image, size, maxPerson, description } = room

    return (
        <div className='bg-white shadow-2xl min-h-[500px] group'>
            <div className='overflow-hidden'>
                <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} />
            </div>

            <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
                <div className='flex justify-between w-[80%]'>
                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsArrowsFullscreen className='text-[15px]' />
                        </div>

                        <div className='flex gap-x-1 text-[12px]'>
                            <div>Size</div>
                            <div>{size}m2</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsPeople className='text-[15px]' />
                        </div>

                        <div className='flex gap-x-1 text-[12px]'>
                            <div>Max People</div>
                            <div>{maxPerson}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <Link to={`/room/${id}`}>
                    <h3 className='h3'>{name}</h3>
                </Link>
                <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0, 56)}</p>
            </div>

            <Link to={`/room/${id}`} className='btn btn-secondary max-w-[280px] mx-auto py-2 text-[14px]'>
                Book now from ${price}
            </Link>

        </div>
    );
}

export default Room;