import React from 'react';

const SideDrawer = (props) => {
    return (
        <div>
            <aside className='side-drawer'>
                {props.children}
            </aside>
        </div>
    );
};

export default SideDrawer;