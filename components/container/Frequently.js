import React from 'react'
import Dropdown from './Dropdown'

const Frequently = () => {
  return (
    <div style={{width:'100%',padding:'60px 40px',background:'black',display:'flex',alignItems:'center',justifyContent:'center',color:'white',flexDirection:'column'}}>

    <h1 style={{fontSize:50}}>Frequently Asked Questions</h1>
    <Dropdown title="What is NetFlix" pOne="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
" pTwo="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!" />


    <Dropdown title="How much does NetFlix cost" pOne="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from R49 to R199 a month. No extra costs, no contracts." />

<Dropdown  title="Where can I watch" pOne="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." pTwo="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." />  

    <Dropdown title="How do I cancel" pOne="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />

    <Dropdown title="What can I watch on NetFlix" pOne="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />

    <Dropdown title="Is NetFlix goog for kids?" pOne="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space." pTwo="" />
    </div>
  )
}

export default Frequently