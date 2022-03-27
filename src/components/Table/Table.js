import React, {useState} from 'react';
import './Table.scss'
import {AiOutlineArrowLeft, AiOutlineFileAdd} from "react-icons/ai";
import GroupIconTable from "./GroupIconTable/GroupIconTable";
import TableContent from "./TableContent/TableContent";

const Table = ({applications, setCreateApplication, setSelectApplication,selectApplication,setEditingApplication}) => {

    const [isWrapper, setIsWrapper] = useState('wrapper__table')

    return (
        <div className={`${isWrapper}`}>
            <GroupIconTable applications={applications} selectApplication={selectApplication}
                            setCreateApplication={setCreateApplication} setIsWrapper={setIsWrapper}
                            setEditingApplication={setEditingApplication}
            />

            {applications.length
                ? <TableContent applications={applications} setSelectApplication={setSelectApplication}/>
                : <div className="table__none_content"
                       onClick={() => setCreateApplication(true)}
                >
                    <AiOutlineFileAdd
                        color='orange'
                        size='50px'
                        style={{cursor: 'pointer'}}
                    />
                    <AiOutlineArrowLeft size='30px' color='orangered'/>
                    <h3>Добавить заявку</h3>
                </div>
            }
        </div>
    );
};

export default Table;