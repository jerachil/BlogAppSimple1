
import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FeaturedPostCard } from "../components"
import { getFeaturedPosts } from '../services';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const FeaturedPosts = () => {
  const [featuredPosts, setfeaturedPosts] = useState([])
    
  useEffect(() => {
    getFeaturedPosts()
     .then(res => setfeaturedPosts(res))
     
  }, [])
  console.log(featuredPosts)
  return (

    <Carousel responsive={responsive}>
      {featuredPosts.map((post) => 
      <FeaturedPostCard key={post.id} post={post} />
      )}
      
        
    </Carousel>

  )
}

export default FeaturedPosts




