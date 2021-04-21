

import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useLocation } from 'react-router-dom'

const Header = ({ title, onClickAdd })=>{

    const location = useLocation()
    const currentPath = location.pathname;
    const isShowBtn = currentPath === "/"

    return (
        <header className="header">
            <h1>{title}</h1>
            {isShowBtn && <Button text="Add" color="steelblue" onClick={onClickAdd} />}
        </header>
    );
};

Header.prototype = {
    title : PropTypes.string,
};


export default Header;