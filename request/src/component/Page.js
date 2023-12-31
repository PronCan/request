import React, { useEffect, useState } from 'react'
import '../css/page.scss'
import AccordionMenu from './AccordionMenu'
import ViewData from './ViewData'

const Page = () => {

  const url = "https://api-jobtest.json2bot.chat/test"
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        if(!res.ok) { //  400 || 500 (not 200~299)
          alert('500 또는 400 에러가 발생하였습니다.')
        }
        const _data = await res.json()
        setData(_data.data)
        setLoading(false);
      } catch(error) {
        console.log("Err", error)
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  if(loading) {
    return (<div>Loading</div>)
  } else {
    return (
      <div className='page_wrap'>
          <div className='left_wrap'>
              <AccordionMenu />
          </div>
          <div className='right_wrap'>
              <ViewData data={data} date={data.date}/>
          </div>
      </div>
    )
  }
  
}

export default Page