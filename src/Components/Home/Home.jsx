import React from 'react'
    import News from '../Home/News/News';
    import Body from '../Home/Body/Body'
    import Slide1 from '../Home/Slide/Slide1'
    import Qabulxona from '../Home/Qbulxona/Qabulxona';
    import Havolalar from './Havolalar/Havolalar';
const Home = () => {
  return (
    <div>
        <News/>
        <Body/>
        <Slide1/>
        <Qabulxona/>
        <Havolalar />
    </div>
  )
}

export default Home