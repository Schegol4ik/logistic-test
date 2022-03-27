import React from 'react';
import './CreateApplication.scss'
import ListenPoints from "../ListenPoints/ListenPoints";
import ApplicationContent from "./ApplicationContent/ApplicationContent";

const CreateApplication = ({
                               setLoadingProduct, setUpLoadingProduct, loadingProduct,
                               upLoadingProduct, filterPointsLoadingProduct,
                               setCreateApplication, filterPointsUpLoadingProduct,
                               setIsLoadingInpt, setIsUpLoadingInpt,
                               isLoadingInpt, isUpLoadingInpt,
                               isAlert, addApplication
                           }) => {

    return (
        <div className='wrapper__create_application'>
            <div className='create__application_content'>
                <ApplicationContent setCreateApplication={setCreateApplication}
                                    setUpLoadingProduct={setUpLoadingProduct}
                                    setLoadingProduct={setLoadingProduct} addApplication={addApplication}
                                    isAlert={isAlert}
                                    loadingProduct={loadingProduct} setIsLoadingInpt={setIsLoadingInpt}
                                    setIsUpLoadingInpt={setIsUpLoadingInpt} upLoadingProduct={upLoadingProduct}
                />
                {isLoadingInpt || isUpLoadingInpt
                    ? <ListenPoints filterPointsLoadingProduct={filterPointsLoadingProduct}
                                    filterPointsUpLoadingProduct={filterPointsUpLoadingProduct}
                                    isLoadingInpt={isLoadingInpt} isUpLoadingInpt={isUpLoadingInpt}
                                    setLoadingProduct={setLoadingProduct} setUpLoadingProduct={setUpLoadingProduct}
                    />
                    : <div style={{display: 'none'}}></div>
                }

            </div>
        </div>
    );
};

export default CreateApplication;