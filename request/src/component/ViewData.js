import React, { useState } from 'react'
import '../css/ViewData.scss'

const ViewData = () => {
    const [radioState, setRadioState] = useState([])

    const handleRadioBtn = (e) => {
        console.log(e.target.value);
        setRadioState(e.target.value)
    }
  return (
    <div>
        <h1>타이틀</h1>
        <div className='info_warp'>
            <ul>
                <li>정보1</li>
                <li>정보 내용</li>
            </ul>
            <ul>
                <li>정보2</li>
                <li>정보 내용</li>
            </ul>
            <ul>
                <li>정보3</li>
                <li>정보 내용</li>
            </ul>
            <ul>
                <li>정보4</li>
                <li>정보 내용</li>
            </ul>
            <ul>
                <li>날짜</li>
                <li>정보 내용</li>
            </ul>
            <ul>
                <li>정보5</li>
                <li>
                    <input type='radio' name='info5' value={1} checked={radioState == 1} onChange={(handleRadioBtn)}/>
                    <label>선택1</label>
                    <input type='radio' name='info5' value={2} checked={radioState == 2} onChange={handleRadioBtn}/>
                    <label>선택2</label>
                    <input type='radio' name='info5' value={3} checked={radioState == 3} onChange={handleRadioBtn}/>
                    <label>선택3</label>
                </li>
            </ul>
            <ul>
                <li>정보6</li>
                <li>정보 내용</li>
            </ul>
        </div>
    </div>
  )
}

export default ViewData