import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import '../../App.css'
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from '@mui/material';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
    <Button className='countryDrop' onClick={()=> setIsOpenModal(true)}>
        <div className='info d-flex flex-column'>
            <span className='label'>Your Location</span>
            <span className='name'>India</span>
        </div>
        <span className='ml-auto'>
            <FaAngleDown />
        </span>
    </Button>

    <Dialog open={isOpenModal} onClose={()=>setIsOpenModal(false)} className='locationModal'
      slots={{
          transition: Transition,
        }}
      >
      <h4 className='mb-0'>Choose your Delivery Location</h4>
      <p>Enter your address and we will specify the offer for your area.</p>
      <Button className='close_' onClick={()=> setIsOpenModal(false)}><MdClose/></Button>

      <div className='headerSearch w-100'>
                <input type='text' placeholder='Search your area'/>
                <Button><IoIosSearch/></Button>   
       </div>

       <ul className='countryList mt-3'>
        <li><Button onClick={()=> setIsOpenModal(false)}>India</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Pakistan</Button></li>
         <li><Button onClick={()=> setIsOpenModal(false)}>India</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Pakistan</Button></li>
         <li><Button onClick={()=> setIsOpenModal(false)}>India</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Pakistan</Button></li>
         <li><Button onClick={()=> setIsOpenModal(false)}>India</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Pakistan</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>India</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Pakistan</Button></li>
         <li><Button onClick={()=> setIsOpenModal(false)}>India</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Sri Lanka</Button></li>
        <li><Button onClick={()=> setIsOpenModal(false)}>Pakistan</Button></li>
       </ul>

    </Dialog>
    </>
  )
}

export default CountryDropdown