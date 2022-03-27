import React, {useState} from 'react';
import '../Table.scss'
import classnames from 'classnames'

const TableContent = ({applications, setSelectApplication}) => {

    const [currentRow, setCurrentRow] = useState(null)

    return (
        <div className="table__content">
            <table>
                <thead>
                <tr>
                    <th>№ Заявки</th>
                    <th>Погрузка</th>
                    <th>Разгрузка</th>
                </tr>
                </thead>
                <tbody>
                {
                    applications.map((item, index) => <tr key={item.id}
                                                          className={classnames({
                                                              ['active']: index === currentRow
                                                          })}
                                                 onClick={() => setCurrentRow(index)}
                    >
                        <th
                            onClick={() => setSelectApplication(item.numberApplication)}
                        >{index + 1}</th>
                        <th onClick={() => setSelectApplication(item.numberApplication)}
                        >{item.loading.nameCity} - {item.loading.title}</th>
                        <th onClick={() => setSelectApplication(item.numberApplication)}
                        >{item.upLoading.nameCity} - {item.upLoading.title}</th>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default TableContent;