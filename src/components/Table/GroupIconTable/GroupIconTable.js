import React from 'react';
import {AiOutlineFileAdd, AiOutlineForm, AiOutlineLine, AiOutlinePlus} from "react-icons/ai";
import '../Table.scss'

const GroupIconTable = ({setIsWrapper, applications, setCreateApplication,selectApplication,setEditingApplication}) => {
    return (
        <div className='table__collapse'>
              <span
                  onClick={() => setIsWrapper('wrapper__table_collapse')}
              ><AiOutlineLine size='20px'/></span>
            <span
                onClick={() => setIsWrapper('wrapper__table')}
            ><AiOutlinePlus size='20px'/></span>
            <span
                style={applications.length ? {}: {display:'none'}}
            ><AiOutlineFileAdd

                onClick={() => setCreateApplication(true)}
                size='20px' color='orange'
                style={{marginLeft: '20px'}}
            />
                </span>
            <span style={selectApplication ? {} : {display: 'none'}}
            ><AiOutlineForm size='20px' color='green'
                            onClick={() => setEditingApplication(true)}
                            style={{marginLeft: '20px'}}/></span>
        </div>
    );
};

export default GroupIconTable;