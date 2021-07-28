import React, {useState}from 'react'


function Dropdown(props) {
    const [value, setValue] = useState("")

    return (
        <div>
            <select value={value} onChange={e => setValue(e.target.value)}>
                {props.options.map((item, index) => <option key={index} value={item.value}>{item.name}</option>) }
            </select>

            <p>{value}</p>
        </div>
    )

    }
export default Dropdown
