import React from 'react'

import Layout from '../../component/Layout';
import { Jumbotron } from 'react-bootstrap';


/**
* @author
* @function Home
**/

 const Home = (props) => {
  return(
    <div>

    <Layout>
    <Jumbotron style={{ margin: '5rem' }} className="text-center">
    
        <h1 className="text-center" >Welcome to User </h1>
        <p >With this dashboard retailers will be able to track where their revenue comes from as well as what their customer profile is from their geographic location to their online behavior

          Combine your E-commerce platform data with your Google Analytics, social media and marketing applications' data to learn what drives your sales and business. Get more information on how your customers respond to your campaigns and what triggers orders.</p>
      </Jumbotron>
    </Layout>
    </div>
   )

 }

 export default Home