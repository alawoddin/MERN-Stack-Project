import React from 'react';

const MainHeader = (props) => {
    return (
        <div>
            <header className='main-header'>
                {props.children}
            </header>
        </div>
    );
};

export default MainHeader;