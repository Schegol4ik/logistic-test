import React from 'react';
import './EditingApplication.scss'
import {AiOutlineCheck, AiOutlineClose, AiOutlineDelete} from "react-icons/ai";
import ListenPoints from "../ListenPoints/ListenPoints";

const EditingApplication = ({isAlert,loadingProduct,setLoadingProduct,setIsLoadingInpt,
                                upLoadingProduct,setUpLoadingProduct, setIsUpLoadingInpt,
                                reEditingApplication,setEditingApplication,isLoadingInpt,
                                isUpLoadingInpt,filterPointsLoadingProduct,
                                filterPointsUpLoadingProduct,deleteApplication
                            }) => {
    return (
        <div className='wrapper__editing'>
            <div className='editing__application_content' >

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

                <AiOutlineCheck className='icon__check' onClick={() => reEditingApplication()}/>
                <AiOutlineClose className='icon__close' onClick={() => {
                    setEditingApplication(false)
                    setUpLoadingProduct('')
                    setLoadingProduct('')
                }
                }/>
                <AiOutlineDelete className='icon_delete'
                onClick={() => deleteApplication()}
                />
                {isLoadingInpt || isUpLoadingInpt
                    ? <ListenPoints filterPointsLoadingProduct={filterPointsLoadingProduct}
                                    filterPointsUpLoadingProduct={filterPointsUpLoadingProduct}
                                    isLoadingInpt={isLoadingInpt} isUpLoadingInpt={isUpLoadingInpt}
                                    setLoadingProduct={setLoadingProduct} setUpLoadingProduct={setUpLoadingProduct}
                    />
                    : <div style={{display:'none'}}></div>
                }

            </div>
        </div>
    );
};

export default EditingApplication;