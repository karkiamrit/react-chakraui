import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';

const Header = () => {
  return (
    <>
        <Button><BiMenuAltLeft/></Button>
    
    </>
  )
}

export default Header
