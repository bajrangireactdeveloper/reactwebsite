import React from 'react'
import Slider from '../Slider'
import Cards from '../Cards'

export default function Home() {
  return (
    <>
    <Slider/>

    <div className="container">
        <h3 className="text-center py-3 my-3">Our Services</h3>
        <div className="row">
        <Cards cardTitlename="React" classNameTxt="card-img-top img_techno py-3 m-auto img-fluid" imgpath="/assets/skills/react.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="Node"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid" imgpath="/assets/skills/node.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="HTML"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/html.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />
        </div>
    </div>
    
    </>
  )
}
