import React, {useEffect, useState} from 'react';
import './ListenPoints.scss'

const ListenPoints = ({filterPointsLoadingProduct, filterPointsUpLoadingProduct,
                          isLoadingInpt, isUpLoadingInpt,
                          setUpLoadingProduct, setLoadingProduct
                      }) => {


    return (
        <div className='wrapper__selected_points'>
            {
                isLoadingInpt && filterPointsLoadingProduct.map(({nameCity, title, id}) =>
                    <span
                        key={id}
                        onClick={() => setLoadingProduct(title)}
                    >{nameCity} - {title}</span>)
           ||
                isUpLoadingInpt && filterPointsUpLoadingProduct.map(({nameCity, title, id}) =>
                    <span
                        key={id}
                        onClick={() => setUpLoadingProduct(title)}
                    >{nameCity} - {title}</span>)
            }
        </div>
    );
};

export default ListenPoints;