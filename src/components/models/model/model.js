import React from 'react'

import './model.css'

const Model = props => (
    <div onClick={() => props.onClick(props.id)}>
        <div className="Model" style={{backgroundImage: `url('` + props.url + `')`}}>
        </div>
        <div className="name"><p>{props.name}</p></div>
    </div>
)

export default Model