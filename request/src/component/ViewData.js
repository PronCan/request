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
    console.log(info6)
    const option = ['선택1', '선택2', '선택3']

    const [selectedDate, setSelectedDate] = useState(null)
    const [radioState, setRadioState] = useState([])
    const [checkboxState, setCheckboxState] = useState([])

    useEffect(() => {
        setSelectedDate(convertDate(dateStr))
        setRadioState(info5)
        setCheckboxState(info6)
    }, [])

    const handleSelectDate = (e) => {
        // console.log(e);
        setSelectedDate(e)
    }

    const handleRadioBtn = (e) => {
        // console.log(e.target.value);
        setRadioState(e.target.value)
    }

    const handleCheckBtn = (e) => {
        console.log('handleCheckBtn', e.target.value);
        if(checkboxState.includes(e.target.value)) {
            setCheckboxState(checkboxState.filter((item) => item !== e.target.value))
        } else {
            setCheckboxState([...checkboxState, e.target.value])
        }
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

    if(!dateStr) return (<div>loading</div>)
    return (
        <div>
            <h1>타이틀</h1>
            <div className='info_warp'>
                <form action='' method='post'>
                <ul>
                    <li>정보1</li>
                    <li>{getInfoData(_data.info1)}</li>
                </ul>
                <ul>
                    <li>정보2</li>
                    <li><input type='text' defaultValue={getInfoData(_data.info2) || ''}/></li>
                </ul>
                <ul>
                    <li>정보3</li>
                    <li>{getInfoData(_data.info3)}</li>
                </ul>
                <ul>
                    <li>정보4</li>
                    <li><input type='text' defaultValue={getInfoData(_data.info4) || ''}/></li>
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
                                <label>
                                    <input type='checkbox' name='info6' value={'선택1'} checked={0} onChange={() => handleCheckBtn}/>
                                    선택1
                                </label>
                                <label>
                                    <input type='checkbox' name='info6' value={'선택2'} checked={1} onChange={() => handleCheckBtn}/>
                                    선택2
                                </label>
                            {
                                option.map((arr) => {
                                    <p>{arr}</p>
                                })
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