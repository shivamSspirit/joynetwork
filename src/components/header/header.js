import React from 'react'
import { Link } from 'react-router-dom'
import headerIcon from '../../assest/network.png'
import { useSelector } from 'react-redux'

function Header() {
    const {...state} = useSelector(state=>state);
    return (
        <div>
            <header>
                <nav className="flex items-center justify-between flex-wrap bg-pink p-6 aspect-auto sticky top-0">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <img className='w-12 h11 rounded-full' src={headerIcon} alt=''/>
                     <Link to={'/'}><span className="font-semibold text-xl tracking-tight">Joy network</span></Link> 
                    </div>
                    {/* <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div> */}
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-start">
                        <div className="text-sm lg:flex-grow">
                            <Link to="/post" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-large hover:text-white mr-4">
                               posts
                            </Link>
                            <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-large hover:text-white mr-4">
                               profile
                            </Link>
                        </div>
        
                        <div className='flex lg:flex-grow lg:justify-end lg:justify-items-end'>
                            <div href="#" className="items-center md:justify-center md:justify-items-center inline-block text-sm px-4 py-2 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-2 lg:mt-0 rounded-full">                              
                                <h5 className='text-black'>{state?.settings?.currentUser? `${state?.settings?.currentUser?.firstName[0]}${state?.settings?.currentUser?.lastName[0]}`: `creater`}</h5>       
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
