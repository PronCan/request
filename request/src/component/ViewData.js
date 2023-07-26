import React, { useEffect, useState } from 'react'
import '../css/common.scss'

import '../css/ViewData.scss'

const ViewData = ({data}) => {
    const [radioState, setRadioState] = useState([])

    // Page.js 에서 넘겨받은 data
    const _data = data

    const handleRadioBtn = (e) => {
        // console.log(e.target.value);
        setRadioState(e.target.value)
    }

    function getInfoData(str) {
        // console.log(typeof(str))
        if(typeof(str) == undefined || str == null) {
            return;
        }
        return str.slice(7)
    }

    useEffect(() => {

    })
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
                <li>정보 내용</li>
            </ul>
            <ul>
                <li>정보5</li>
                <li>
                    <div className='input-radio input-radio-list'>
                        <label>
                            <input type='radio' name='info5' value={'선택1'} checked={radioState === '선택1'} onChange={(handleRadioBtn)}/>
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
                    <p className='caution-red'>* 선택시 텍스트가 표시됩니다</p>
                </li>
            </ul>
            <ul>
                <li>정보6</li>
                <li>
                <div className='input-radio input-radio-list'>
                        <label>
                            <input type='checkbox' name='info5' value={'선택1'} checked={radioState === '선택1'} onChange={(handleRadioBtn)}/>
                            선택1
                        </label>
                        <label>
                            <input type='checkbox' name='info5' value={'선택2'} checked={radioState === '선택2'} onChange={handleRadioBtn}/>
                            선택2
                        </label>
                        <label>
                            <input type='checkbox' name='info5' value={'선택3'} checked={radioState === '선택3'} onChange={handleRadioBtn}/>
                            선택3
                        </label>
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