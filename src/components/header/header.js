import React from 'react'
import { Link } from 'react-router-dom'
import headerIcon from '../../assest/network.png'
import { useSelector } from 'react-redux'

function Header() {
    const {...state} = useSelector(state=>state);
    return (
        <div>
            <header>
                <nav className="flex items-center justify-between flex-wrap bg-cream p-6 aspect-auto sticky top-0">
                    <div className="flex items-center flex-shrink-0 text-black mr-6">
                        <img className='w-12 h11 rounded-full' src={headerIcon} alt=''/>
                     <Link to={'/'}><span className="font-semibold text-xl tracking-tight">Joy network</span></Link> 
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-start">
                        <div className="text-sm lg:flex-grow">
                            <Link to="/explore" className="block mt-4 lg:inline-block lg:mt-0 text-large hover:text-blue mr-4 text-[16px] font-semibold">
                               posts
                            </Link>
                            <Link to="#profile" className="block mt-4 lg:inline-block lg:mt-0 text-large hover:text-blue mr-4 text-[16px] font-semibold">
                               profile
                            </Link>
                        </div>
        
                        <div className='flex lg:flex-grow lg:justify-end lg:justify-items-end'>
                            <Link to={`/auth/login`} className="items-center md:justify-center md:justify-items-center inline-block text-sm px-4 py-2 leading-none border text-white border-white hover:border-transparent  hover:bg-black hover:text-white mt-2 lg:mt-0 rounded-full">                              
                                <h5 className='text-black hover:text-white text-[16px] font-semibold'>{state?.settings?.currentUser? `${state?.settings?.currentUser?.firstName[0]}${state?.settings?.currentUser?.lastName[0]}`: `creater`}</h5>       
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
