import React from 'react';

const SideDrawer = (props) => {
    const content  = 
        <div>
            <aside className='side-drawer'>
                {props.children}
            </aside> 
        </div>

    // eslint-disable-next-line no-undef
    return ReactDOM.createPortal(content , document.getElementById('drawer-hook'));
};

export default SideDrawer;