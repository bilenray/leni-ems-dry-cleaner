import * as React from 'react';
import '../styles/headlines.css'
import womenBgRemoved from '../images/headlines-bg.png'
// import OCTime from './OCTime';
export interface  HeadlinesProps {
}

export default function Headlines (props: HeadlinesProps) {
  const [underline, setUnderline] = React.useState(false)

  React.useEffect(()=>{
    if (window.innerWidth<600){
      // console.log(window.innerWidth)
      setUnderline(true);
    } else{
      setUnderline(false);
    }
  },[])
  
  return (
    <div className='headlines'>
      <div className='headlines-text'>
        <span className={underline?'stroke-text underline-text-mobile':'stroke-text underline-text'}> Laundry</span>
        <span> and dry Cleaning...</span>
        <br/><br/>
        <span  className={underline?'stroke-text underline-text-mobile':'stroke-text underline-text'}> Customer</span>
        <span> Oriented Service </span>
      </div>
      <div className='image-container'>
        <div className="image-frame">
          <img src={womenBgRemoved} alt="picture" className='headlines-image' />
        </div>
      </div>
    </div>
  );
}
