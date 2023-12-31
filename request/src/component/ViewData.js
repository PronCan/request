import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
//npm i date-fns -> 언어 설치
import { ko } from 'date-fns/esm/locale'
import 'react-datepicker/dist/react-datepicker.css';
import '../css/common.scss'

import '../css/ViewData.scss'

const ViewData = ({data, date}) => {
    // Page.js 에서 넘겨받은 data
    const _data = data
    const dateStr = date  // '2013-12-20' // string type
    const info5 = _data.info5;
    const info6 = [..._data.info6];
    const option = ['선택1', '선택2', '선택3']

    const [selectedDate, setSelectedDate] = useState(null)
    const [radioState, setRadioState] = useState([])
    const [checkboxState, setCheckboxState] = useState([])

    const [formData, setFormData] = useState({
        info2: _data.info2,
        info4: _data.info4,
        date: date,
        info5: _data.info5,
        info6: _data.info6
    })

    useEffect(() => {
        setSelectedDate(convertDate(dateStr))
        setRadioState(info5)
        setCheckboxState(info6)
        // console.log(info6)
        // console.log('checkboxState', checkboxState)
    }, [])

    const handleInputChange = (e) => {
        // console.log(e.target);
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const handleSelectDate = (e) => {
        setSelectedDate(e)
        let resDate = convertDateStr(e)
        setFormData({...formData, date: resDate})
    }

    const handleRadioBtn = (e) => {
        // console.log(e.target.value);
        const {name, value} = e.target
        setRadioState(value)
        setFormData({...formData, [name]: value})
    }

    const handleCheckBtn = (e) => {
        // console.log('handleCheckBtn', e.target);
        setCheckboxState((prevState) => {
            if(prevState.includes(e.target.value)) {
                return prevState.filter((item) => item !== e.target.value)
            } else {
                return [...prevState, e.target.value]
            }
        })
        // if(checkboxState.includes(e.target.value)) {
        //     setCheckboxState(checkboxState.filter((item) => item !== e.target.value))
        // } else {
        //     setCheckboxState([...checkboxState, e.target.value])
        // }
        setFormData((prevFormData) => ({
            ...prevFormData,
            info6: checkboxState
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'https://api-jobtest.json2bot.chat/test'

        const data = {
            info2: formData.info2,
            info4: formData.info4,
            date: formData.date,
            info5: formData.info5,
            // info6: formData.info6
            info6: checkboxState
        }
        // console.log('submit: ', data);
        // console.log(checkboxState)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('완료', data)
        })
        .catch(err => {
            console.error('실패', err)
        })
    }

    function getInfoData(str) {
        // console.log(typeof(str))
        if(typeof(str) == undefined || str == null) {
            return;
        }
        return str.slice(7)
    }

    function convertDate(dateStr) {
        if(typeof(dateStr) == undefined || dateStr==null) {
            return;
        }
        const [year, month, day] = dateStr.split('-').map(Number)
        return new Date(year, month-1, day)
    }

    function convertDateStr(date) {
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, '0')
        let day = String(date.getDate()).padStart(2, '0')
        return year + '-' + month + '-' + day
    }

    return (
        <div>
            <h1>타이틀</h1>
            <div className='info_warp'>
                <form onSubmit={handleSubmit} method='post'>
                <ul>
                    <li>정보1</li>
                    <li>{getInfoData(_data.info1)}</li>
                </ul>
                <ul>
                    <li>정보2</li>
                    <li><input type='text' id='info2' defaultValue={getInfoData(_data.info2) || ''} onChange={handleInputChange}/></li>
                </ul>
                <ul>
                    <li>정보3</li>
                    <li>{getInfoData(_data.info3)}</li>
                </ul>
                <ul>
                    <li>정보4</li>
                    <li><input type='text' id='info4' defaultValue={getInfoData(_data.info4) || ''} onChange={handleInputChange}/></li>
                </ul>
                <ul>
                    <li>날짜</li>
                    <li>
                        <DatePicker
                            locale={ko}
                            dateFormat='yyyy.MM.dd'
                            shouldCloseOnSelect
                            selected={selectedDate}
                            onChange={
                                (date) => {handleSelectDate(date)
                            }
                            }
                            
                        />
                    </li>
                </ul>
                <ul>
                    <li>정보5</li>
                    <li>
                        <div className='input-radio input-radio-list'>
                            <label>
                                <input type='radio' name='info5' value={'선택1'} checked={radioState === '선택1'} onChange={handleRadioBtn}/>
                                선택1
                            </label>
                            <label>
                                <input type='radio' name='info5' value={'선택2'} checked={radioState === '선택2'} onChange={handleRadioBtn}/>
                                선택2
                            </label>
                            <label>
                                <input type='radio' name='info5' value={'선택3'} checked={radioState === '선택3'} onChange={handleRadioBtn}/>
                                선택3
                            </label>
                        </div>
                        {
                            (radioState === '선택3')? <p className='caution-red'>* 선택시 텍스트가 표시됩니다</p> : ''
                        }
                    </li>
                </ul>
                <ul>
                    <li>정보6</li>
                    <li>
                        <div className='input-checkbox-list'>
                            {
                                option.map((arr, index) => (
                                    <label key={index}>
                                        <input type='checkbox'  name='info6' value={arr} checked={checkboxState.includes(arr)?arr:''} onChange={handleCheckBtn}/>
                                        {arr}
                                    </label>
                                ))
                            }
                        </div>
                    </li>
                </ul>
                <div className='hr_line'></div>
                <input type='submit' value={'저장'}/>
            </form>
            </div>
        </div>
    )
}

export default ViewData