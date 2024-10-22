import React, { useEffect, useState } from 'react'
import { ProSidebar } from 'react-pro-sidebar'
import { FaBars } from 'react-icons/fa'
import { Content, Footer, Header } from '../components';
import { useMediaQuery } from 'react-responsive';
import sidebarBg from "../../../img/VIP-IBERO-020.jpg";
export const Sidebar = ({ toggled, setToggled}) => {

    const usingImage = true;

    const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });
    const [collapsed, setCollapsed] = useState(false);    
  
    const handleToggleSidebar = (value) => {
    setToggled(value);
    };

    useEffect(() => {
     if(isMobileOrTablet) setCollapsed(isMobileOrTablet)
      else setCollapsed(isMobileOrTablet)
    }, [isMobileOrTablet])
    
  return (
    <div>
    <ProSidebar
      image={usingImage ? sidebarBg : false}    
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="xs"
      onToggle={handleToggleSidebar}
    >  
  
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
            <Content/>
        <Footer />
    </ProSidebar>    
      
    </div>
  )
}
