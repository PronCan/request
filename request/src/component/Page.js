import React, { useEffect, useState } from 'react'
import '../css/page.scss'
import AccordionMenu from './AccordionMenu'
import ViewData from './ViewData'

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
              <AccordionMenu />
          </div>
          <div className='right_wrap'>
              <ViewData data={data}/>
          </div>
      </div>
    )
  }
  
}

export default Page