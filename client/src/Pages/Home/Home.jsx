import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
import './Home.scss'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import axios from 'axios'


const Home = () => {
  const [posts, setPosts]= useState([])
  const location= useLocation()
  const {search} = location
  useEffect(()=> {
    const fetchPosts= async ()=> {
      const res= await axios.get("/api/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])
  return (
    <>
        <Header/>
        <div className="home">
            <Posts posts= {posts}/>
            <Sidebar/>
        </div>
    </>
  )
}

export default Home