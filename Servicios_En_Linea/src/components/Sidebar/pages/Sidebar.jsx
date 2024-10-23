import React, { useEffect, useState } from 'react'
import { ProSidebar } from 'react-pro-sidebar'
import { Content, Footer, Header } from '../components';
import { useMediaQuery } from 'react-responsive';
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
