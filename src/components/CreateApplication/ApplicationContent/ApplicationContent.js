import React from 'react';
import '../CreateApplication.scss'
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

const ApplicationContent = ({isAlert,loadingProduct,setLoadingProduct,setIsLoadingInpt,
                                upLoadingProduct, setUpLoadingProduct,setIsUpLoadingInpt,
                                setCreateApplication, addApplication
                            }) => {
    return (
        <div className='application_content__panel'>
            <input type="text"
                   placeholder={isAlert ? 'Одинковые!!' : 'Погрузка'}
                   style={isAlert ?{borderColor: 'red', borderWidth:'2px'} :{}}
                   value={loadingProduct}
                   onChange={(e) => setLoadingProduct(e.target.value)}
                   onFocus={() => setIsLoadingInpt(true)}
                   onBlur={() => setTimeout(() => {
                       setIsLoadingInpt(false)
                   }, 210)}
            />
            <input type="text"
                   placeholder={isAlert ? 'Одинковые!!' : 'Разгрузка'}
                   style={isAlert ?{borderColor: 'red', borderWidth:'2px'} :{}}
                   value={upLoadingProduct}
                   onChange={(e) => setUpLoadingProduct(e.target.value)}
                   onFocus={() => setIsUpLoadingInpt(true)}
                   onBlur={() => setTimeout(() => {
                       setIsUpLoadingInpt(false)
                   }, 210)}
            />

            <AiOutlineCheck className='icon__check' onClick={() => addApplication()}/>
            <AiOutlineClose className='icon__close' onClick={() => {
                setCreateApplication(false)
                setUpLoadingProduct('')
                setLoadingProduct('')
            }
            }/>
        </div>
    );
};

export default ApplicationContent;