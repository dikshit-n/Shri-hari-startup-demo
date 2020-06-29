import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './models.css'
import Model from './model/model'
import Spinner from '../UI/Spinner/Spinner'
import Header from '../Header/Header'

const Models = props => {

    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://picsum.photos/v2/list?page=2&limit=14`)
        .then(res => { 
            setDetails([...res.data])
            setLoading(false)
            console.log(res.data)
        })
        .catch(err => {
            setLoading(false)
            console.log(err)})
    }, [])

    const Detail = (id) => {
        let data
        details.map(el => {
            if(el.id === id){
                data = el
            }
            return null
        })
        props.history.push({
            pathname: `/` + id,
            state: {data: data}
        })
    }
    
    // console.log(props.history.push)

    let output = <Spinner />

    if(!loading){
        output = (
            <div className="Models">
                {details.map(model => <Model onClick={Detail} key={model.id} id={model.id} name={model.author} url={model.download_url} />)}
            </div>
        )
    }
    return (
        <React.Fragment>
            <Header Heading="Our Modals" />
            {output}
        </React.Fragment>
    )
}

export default Models