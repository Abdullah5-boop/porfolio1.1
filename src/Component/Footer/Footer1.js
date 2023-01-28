import React from 'react';
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1-container py-12' data-scroll-section>
            <h1>Contact Info</h1>
            <div className="footer1-inner-container grid grid-cols-1 lg:grid-cols-5 ">
                <div className="box11 flex justify-center items-center text-xl lg:text-4xl ">
                    <a href="https://www.facebook.com/">  Facebook</a>
                </div>
                <div className="box21 row-start-3  lg:row-start-2 text-xl lg:text-4xl flex justify-center items-center">
                    <a href="https://github.com/Abdullah5-boop" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="box31 text-xl row-start-4 lg:row-auto lg:text-4xl flex justify-center items-center"> <a href="https://www.instagram.com/abdullahalmahmood500/" target="_blank" rel="noopener noreferrer">Instagram</a> </div>
                <div className="box41  row-start-2 text-xl lg:text-4xl flex justify-center items-center">
                    <a href="https://www.linkedin.com/in/abdullahalmahmood500/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
                <div className="box51  col-span-3 row-span-2 lg:text-5xl flex justify-center items-center">
                    <h1>abdullahalmahmood500@gmail.com </h1>
                </div>
            </div>
        </div>
    );
};

export default Footer1;