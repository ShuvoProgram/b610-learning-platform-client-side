import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import LoadContext from '../../context/LoadContext';

const Main = () => {
    return (
        <div>
            <LoadContext>
                <Header/>
                <Outlet />
                <Footer></Footer>
            </LoadContext>
        </div>
    );
};

export default Main;