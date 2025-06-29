import React from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import SearchBox from './SearchBox';
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
    <div className="headerWrapper">
        <div className='top-strip bg-blue'>
            <div className='container'>
                <p className='mb-0 mt-0 text-center'>Due to the <b>COVID 19</b>  epidemic, orders may be processed with a slight delay</p>
            </div>
        </div> 
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='logoWrapper d-flex align-items-center col-sm-2'>
                        <Link to={'/'}><img src={Logo} alt='logo'/></Link>
                    </div>

                    <div className='col-sm-10 d-flex align-items-center part2'>
                        <CountryDropdown/>

                        <SearchBox/>

                        <div className='part3 d-flex align-items-center ml-auto'>
                            <Button className='circle mr-3'><FaRegUser /></Button>
                            <div className='ml-auto cartTab d-flex align-items-center'>
                                <span className='price'>$3.29</span>
                                <div className='position-relative ml-2'>
                                    <Button className='circle'><BsHandbag /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Navigation/>
       
    </div>
    </>
  )
}

export default Header