import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';
import {Card} from '../../components/molecule';
import './index.css';
import { GETDATA } from "../../config/Redux";

const Index = () => {
    const StateGlobal = useSelector(state => state.ProductReducer); 
    const dispatch = useDispatch(); 
    useEffect(() => { 
        Axios.get(`https://my-json-server.typicode.com/megasuartika/fe-assignment/db`)
        .then(response => {
            dispatch({type:GETDATA,value: response.data.shoes})
        })
        .catch(err => console.log(err))
    },[dispatch])
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12">
                    <h3 className="mb-0 font-weight-bold text-center">NEW RELEASE</h3>
                    </div>
                </div>
                <div className="row">
                {
                    StateGlobal.products.map((items,index) => (
                        <Card key={index} data={items} id={index} />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default Index;