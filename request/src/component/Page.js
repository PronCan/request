import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import '../css/page.scss'

const Page = () => {

  const url = "https://api-jobtest.json2bot.chat/test"
  const [data, setData] = useState([])
  const [menu1, setMenu1] = useState(true);
  const [menu2, setMenu2] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const _data = await res.json()
        setData(_data.data)
      } catch(error) {
        console.log("Err", error)
      }
    }
    fetchData();
  }, [])

  if(!data) {
    return <div>Wait</div>
  } else {
    return (
      <div className='page_wrap'>
          <div className='left_wrap'>
              {console.log(data)}
              <ul onClick={() => {
                setMenu1(!menu1)
              }}>
                <Menu items={["소제목", "소제목"]}></Menu>
              </ul>
              <ul onClick={() => {
                setMenu2(!menu2)
              }}>
                <li>대분류</li>
                <li>소분류</li>
                <li>소분류</li>
              </ul>
          </div>
          <div className='right_wrap'>
          
          </div>
      </div>
    )
  }
  
}

export default Page