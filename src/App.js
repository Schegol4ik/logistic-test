import React, {useEffect, useMemo, useState} from 'react';
import './App.scss'
import Map from "./components/Map/Map";
import {useDispatch, useSelector} from "react-redux";
import Table from "./components/Table/Table";
import CreateApplication from "./components/CreateApplication/CreateApplication";
import {addApplicationAction, deleteApplicationAction, editingApplicationAction} from "./redux/actions/action";
import EditingApplication from "./components/EditingApplication/EditingApplication";

const App = () => {

    const state = useSelector(state => state.reducer)
    const dispatch = useDispatch()


    const [start, setStart] = useState(null)// Начальная точка
    const [end, setEnd] = useState(null)// Конечная точка
    const [createApplication, setCreateApplication] = useState(false)//Модальное окно с созданием точки
    const [loadingProduct, setLoadingProduct] = useState('')//Значение инпута откуда
    const [upLoadingProduct, setUpLoadingProduct] = useState('')//Значение инпута куда
    const [isLoadingInpt, setIsLoadingInpt] = useState(false)//Фокусировка на инпуте
    const [isUpLoadingInpt, setIsUpLoadingInpt] = useState(false)//Фокусировка на инпуте
    const [isAlert, setIsAlert] = useState(false) //Предупреждение
    const [selectApplication, setSelectApplication] = useState(null)//Выбранная заявка
    const [editingApplication, setEditingApplication] = useState(false)//Изменение удаление заявки


    const filterPointsLoadingProduct = useMemo(() => {
        return state.points.filter(({nameCity, title}) => nameCity.toLowerCase().includes(loadingProduct.toLowerCase())
            || title.toLowerCase().includes(loadingProduct.toLowerCase()))
    }, [loadingProduct]) //Поиск по сущ точкам

    const filterPointsUpLoadingProduct = useMemo(() => {
        return state.points.filter(({nameCity, title}) => nameCity.toLowerCase().includes(upLoadingProduct.toLowerCase())
            || title.toLowerCase().includes(upLoadingProduct.toLowerCase()))
    }, [upLoadingProduct]) //Поиск по сущ точкам

    const findApplication = useMemo(() => {
        return state.applications.find(item => item.numberApplication === selectApplication)
    }, [selectApplication])//Находим конкретную заявку


    const addApplication = () => {
        if (loadingProduct === upLoadingProduct) {
            setLoadingProduct('')
            setUpLoadingProduct('')
            setIsAlert(true)
        } else {
            const findLoad = state.points.find(({title}) => title === loadingProduct)
            const findUpLoad = state.points.find(({title}) => title === upLoadingProduct)
            if (findLoad && findUpLoad) {
                const newApplication = {
                    id: state.applications.length + 1,
                    numberApplication: state.applications.length + 1,
                    loading: {
                        lat: findLoad.lat,
                        lon: findLoad.lon,
                        nameCity: findLoad.nameCity,
                        title: findLoad.title
                    },
                    upLoading: {
                        lat: findUpLoad.lat,
                        lon: findUpLoad.lon,
                        nameCity: findUpLoad.nameCity,
                        title: findUpLoad.title
                    }
                }
                dispatch(addApplicationAction(newApplication))
                setLoadingProduct('')
                setUpLoadingProduct('')
                setCreateApplication(false)
            }
        }
    } //Добавляем заявку
    const deleteApplication = () => {
        dispatch(deleteApplicationAction(findApplication.id))
        setStart(null)
        setEnd(null)
        setSelectApplication(null)
        setEditingApplication(false)
    }//Удаляем заявку
    const reEditingApplication = () => {
        if (loadingProduct === upLoadingProduct) {
            setLoadingProduct('')
            setUpLoadingProduct('')
            setIsAlert(true)
        } else {
            const findLoad = state.points.find(({title}) => title === loadingProduct)
            const findUpLoad = state.points.find(({title}) => title === upLoadingProduct)
            if (findLoad && findUpLoad) {
                const reApplication = {
                    id: state.applications.length + 1,
                    numberApplication: findApplication.id,
                    loading: {
                        lat: findLoad.lat,
                        lon: findLoad.lon,
                        nameCity: findLoad.nameCity,
                        title: findLoad.title
                    },
                    upLoading: {
                        lat: findUpLoad.lat,
                        lon: findUpLoad.lon,
                        nameCity: findUpLoad.nameCity,
                        title: findUpLoad.title
                    }
                }
                dispatch(editingApplicationAction(reApplication))
                setLoadingProduct('')
                setUpLoadingProduct('')
                setStart(null)
                setEnd(null)
                setEditingApplication(false)
            }
        }
    }//Изменяем заявку


    useEffect(() => {
        if (selectApplication) {
            let find = state.applications.find(item => item.numberApplication === selectApplication)
            setStart(null)
            setEnd(null)
            setEnd([find.upLoading.lat, find.upLoading.lon])
            setTimeout(() => {
                setStart([find.loading.lat, find.loading.lon])
            }, 1000)

        } else if (!selectApplication) {
            setEnd(null)
            setStart(null)
        }
        return setStart(null) && setEnd(null)


    }, [selectApplication, state])//Меняем маршрут

    useEffect(() => {
        if (selectApplication) {
            setLoadingProduct(findApplication.loading.title)
            setUpLoadingProduct(findApplication.upLoading.title)
        } else {
            setLoadingProduct('')
            setUpLoadingProduct('')
        }
    }, [selectApplication])

    return (
        <div className='wrapper'>
            <Table setCreateApplication={setCreateApplication} applications={state.applications}
                   setLoadingGoods={setLoadingProduct} setUpLoadingGoods={setUpLoadingProduct}
                   setSelectApplication={setSelectApplication} selectApplication={selectApplication}
                   setEditingApplication={setEditingApplication}
            />
            <Map start={start} end={end}/>
            {createApplication && <CreateApplication loadingProduct={loadingProduct} upLoadingProduct={upLoadingProduct}
                                                     setLoadingProduct={setLoadingProduct}
                                                     setUpLoadingProduct={setUpLoadingProduct}
                                                     setCreateApplication={setCreateApplication}
                                                     filterPointsLoadingProduct={filterPointsLoadingProduct}
                                                     filterPointsUpLoadingProduct={filterPointsUpLoadingProduct}
                                                     setIsLoadingInpt={setIsLoadingInpt}
                                                     setIsUpLoadingInpt={setIsUpLoadingInpt}
                                                     isLoadingInpt={isLoadingInpt} isUpLoadingInpt={isUpLoadingInpt}
                                                     isAlert={isAlert} addApplication={addApplication}/>}

            {editingApplication && <EditingApplication upLoadingProduct={upLoadingProduct}
                                                       setIsUpLoadingInpt={setIsUpLoadingInpt}
                                                       setIsLoadingInpt={setIsLoadingInpt}
                                                       loadingProduct={loadingProduct} isAlert={isAlert}
                                                       reEditingApplication={reEditingApplication}
                                                       setLoadingProduct={setLoadingProduct}
                                                       setUpLoadingProduct={setUpLoadingProduct}
                                                       isUpLoadingInpt={isUpLoadingInpt} isLoadingInpt={isLoadingInpt}
                                                       filterPointsUpLoadingProduct={filterPointsUpLoadingProduct}
                                                       filterPointsLoadingProduct={filterPointsLoadingProduct}
                                                       setEditingApplication={setEditingApplication}
                                                       deleteApplication={deleteApplication}
            />}
        </div>
    );
};

export default App;