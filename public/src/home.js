import React from "react";
import HomepageCarousel from './carousel';


const Home = () => {

    return(
        <>
  

        <div class="bodyDiv"><p>
        
        <br></br>
        <h2>About the Project</h2>

        <br></br>
        This project seeks to present educational resources related to historical wildfires 
        in the United States, combining informational text with an interactive map. After
        smoke particulates were blown across the midwestern United States during the summer of 2023, 
        our team was inspired to create this site. We hope that by showing the devastating 
        impact wildfires can have on the environment, that we can inspire change in the lives 
        of people across the world. <br></br><br></br>
        
        Using the free and open source software QGIS, we were able to build an interactive
        map which takes advantage of data layers from the US Drought Monitor, WorldClim.org,
        and the NASA Earth Observations webpages. This interactive map makes this data more
        accessible and allows for viewing mutiple layers at the same time.  
        
        <br></br>
        </p>
        
        <HomepageCarousel/>
        <br></br>
        </div>

        </>
    )

}

export default Home;