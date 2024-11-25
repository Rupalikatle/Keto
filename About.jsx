import React from 'react'
import './Home.css'

const About = () => {
  return (
    <>
      <div className='container'>
        <h1 className='text-center'>ABOUT US</h1>
        <div className='row'>
          <div className='containt'>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, perferendis a dolor ad reiciendis quia minus
              praesentium reprehenderit exercitationem quibusdam deserunt
              expedita repellendus, doloremque quaerat veniam harum nulla
              commodi assumenda. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <a className='btn'>read-more</a>
          </div>
          <div className='about-img'>
            <img src='https://themewagon.github.io/keto/images/banner1.jpg' alt='#' />
          </div>
        </div>
      </div>

    </>
  )
}

export default About        