import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faLocationArrow, faHome } from '@fortawesome/free-solid-svg-icons';

function Header(){
    const [SidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!SidebarOpen);
    };
    return(
        <>
            <header>
                <h2><FontAwesomeIcon 
                    icon={(SidebarOpen) ? faX : faBars} 
                    onClick={toggleSidebar} 
                    style={{ cursor: 'pointer' }} // Adds the missing pointer visual
                    className="icon"
                /></h2>
            </header>
            <Sidebar isOpen={SidebarOpen}/>
        </>
        
    );
}
export default Header