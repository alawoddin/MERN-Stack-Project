import React from 'react';
import ReactDOM from 'react-dom';

const SideDrawer = (props) => {
    const content = (
        <div>
            <aside className="side-drawer">
                {props.children}
            </aside>
        </div>
    );

    return ReactDOM.createPortal(
        content,
        document.getElementById('drawer-hook')
    );
};

export default SideDrawer;