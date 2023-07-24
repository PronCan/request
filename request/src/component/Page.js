import React, { useEffect, useState } from 'react'

import '../css/page.scss'

const Page = () => {

  const url = "https://api-jobtest.json2bot.chat/test"
  const [data, setData] = useState([])
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
          </div>
          <div className='right_wrap'>
          https://velog.io/@runprogrmm/React%EB%A1%9C-%EB%93%9C%EB%A1%AD%EB%8B%A4%EC%9A%B4-%EB%A9%94%EB%89%B4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
          </div>
      </div>
    )
  }
  
}

export default Page