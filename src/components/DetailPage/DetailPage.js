import React from 'react'

import './DetailPage.css'
import Header from '../Header/Header'

const DetailPage = props => {
    const { data } = props.location.state
    return(
        <div className="DetailPage">
            <Header Heading={data.author} /><br/><br/><br/>
            <p>Go Here to Know more about this author</p><br/>
            <a href={data.url}>{data.url}</a>
        </div>
    )
}

export default DetailPage