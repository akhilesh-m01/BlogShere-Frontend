import React from 'react'
import AboutImg from "../../assets/about.jpeg"

const About = () => {
  return (
    <div className='bg-white text-primary container mx-auto mt-8 p-8'>
       <h2 className='md:text-4xl text-3xl font-medium md:leading-tight pt-8 mb-12 md:px-24'>
        About Us
       </h2>
       <div className='md:px-24'>
       <img src={AboutImg} alt=""  className='rounded-full w-52 shadow-md hover:shadow-xl'/>
       <p className='mt-5 text-center md:w-72 text-sm'>Akhilesh</p>
       </div>

       <div className='mt-10 md:px-24 space-y-8'>
            <p>Welcome to Blogsphere! We are a community-driven platform dedicated to sharing diverse voices and perspectives. Our mission is to create a space where writers can express their thoughts, and readers can discover engaging content across various topics.</p>

            <p>At Blogsphere, we celebrate the art of storytelling. Our contributors come from all walks of life, each bringing their unique experiences and insights. From personal anecdotes to informative articles, our platform showcases the richness of human experience.</p>

            <p>We believe in the power of connection through words. Whether you’re looking for inspiration, knowledge, or simply a good read, you’ll find it here. Our goal is to foster a community where everyone’s voice is heard and valued.</p>

            <p>Join us in exploring the endless possibilities of expression and discovery. Dive into our articles, share your thoughts, and be part of the **Blogsphere** family!</p>
        </div>

    </div>
  )
}

export default About