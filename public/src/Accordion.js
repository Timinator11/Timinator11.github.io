// Import React and Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function InfoAccordian() {
  return (
    <Accordion defaultActiveKey={['0']}>
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is a Wildfire?</Accordion.Header>
        <Accordion.Body color="blue">
        <p> A wildfire is any unplanned or unwanted natural or human-caused free burning fire, 
          which is resistant to being put out. Wildfires can range in size from relatively small 
          to millions of acers. There are tens of thousands of wildfires in the USA every year. 
          There are three main types of wildfires: ground, surface, and crown.  <br></br><br></br>

        Ground fires, also known as subsurface fires, are fires that are below the surface terrain. 
        Common fuels for these types of fires are peat and dead vegetation. Ground fires have been 
        known to smolder through the winter and reignite in the spring. They are the slowest moving 
        fire but are difficult to put out.  <br></br><br></br>

        Surface fires are the most common and easiest to extinguish. They occur within the surface 
        shrubbery and grasses. They burn detritus, or organic waste like twigs and dead branches. 
        Surface fires can be helpful in clearing out areas for new growth to occur.  <br></br><br></br>

        Crown fires are named because they burn in the canopy of trees. They are the most dangerous 
        and most destructive type of wildfire. They burn hot and spread rapidly. Crown fires are 
        exacerbated by wind and access to plenty of oxygen. Crown fires are the fires largely responsible 
        for the most property damage and loss of human life.</p>
        <Image src="extreme drought.jpg" alt="picture of a very low water level river" className="dataPic"/>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>People and Wildfires</Accordion.Header>
        <Accordion.Body color="blue">
        <p> In the Midwest, humans have been creating fire for many years. Native Americans in the region 
          have a history of burning grasslands for agriculture, directing game migration, ease of travel, 
          improving grazing, and even for warfare. <br></br><br></br>

          In the past few decades, wildfires have increased in intensity and quantity. Since 1985, the total
           cost of fire suppression has risen from $239,943,000 to $3,549,000,000 in 2022. With 7.5 million 
           acres burnt in total in 2022. Wildfires have always been a natural occurrence, but as of late, 
           they have become more destructive. Climate change has led to more extreme droughts and dry weather 
           in areas already prone to fire. This has caused fires now to burn to longer on average as they have 
           more fuel. Expansion of cities and population has put people closer to the fire. Whereas 100 years 
           ago only a few people would lose their house to a fire, their now exists more danger as more people
           and property are at risk.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Types of Wildfires</Accordion.Header>
        <Accordion.Body color="blue">
        <p> Wildfires have been a common occurrence across the world. Many plants have adapted to rely on fire to 
          spread their seeds. The Burnu of Land Management (BLM) defines plants into 5 categories based on their 
          adaptations to fire.  <br></br><br></br>

          Resisters are plants that can survive low-intensity fires with little damage. Think big, tall trees with 
          thick bark. Their leaves are also hard to burn. Some examples include the sugar pine and the Douglas-fir.   
          <br></br><br></br>

          Sprouters are plants that resprout from their roots or other part after a fire. Many shrubs, oaks, and 
          aspens fall into this category. <br></br><br></br>

          Seeders are plants that spread their seeds after a fire. They take advantage of the lack of competition. 
          Some examples are the lodgepole pine and buckbrush 
          <br></br><br></br>

          Invaders are like seeders but did not initially live in the area affected by the fire. Weeds like star 
          thistle and scotch broom are examples.  
          <br></br><br></br>

          Avoiders are just plants that don’t grow in fire prone environments.  
          <br></br><br></br>

          Regular surface fires keep forests and prairies healthy. They help manage overgrowth and give nutrients to
          the soil. Controlled surface fires are performed regularly now by the BLM and subsidiary land management 
          organizations. The important distinction is that these fires are small and contained. Many small, contained 
          fires can actually help clear fuel that could eventually start larger, dangerous wildfires.</p>
          <Image src="fire types.jpg" width="60%" alt="type of wildfires graphic" className="dataPic"/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Wildfire Causes</Accordion.Header>
        <Accordion.Body color="blue">
        <p> In order to start a fire, dry fuel, oxygen, and a spark is needed for a fire to burn. Fires can
          either be started by natual or man-made causes.

          Lightning is the most common natural cause of wildfire ignition. Human related fires are the
          most common cause of fire in North America. These fires can be caused from a variety of sources, including 
          campfires, equipment failure, debris burning, cigarettes, and intentional acts of arson.
          Nearly 85% of wildfires in North America are human caused. <br></br><br></br>

          Due to climate change, drought and extreme heat are increasly common in states such as California.
          These conditions over long periods of time create the perfect conditions for a spark to turn into an uncontrolled
          fire. Recent trends show a large increase of forest fires across the US. One way to help combat these
          statistics is through better land management practices. Forest thinning an controlled burns can reduce the
          amount of flammable material on the forest floor and can thus decrease the chances of forest fires. </p>
          <Image src="fire causes.png" width="60%" alt="pie chart of fire causes" className="dataPic"/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Wildfire Prevention</Accordion.Header>
        <Accordion.Body>
        <p>Ten ways you can prevent wildfires include:<br></br>
        1. Check weather and drought conditions.<br></br>
        2. Build your campfire in an open location and far from flammables.<br></br>
        3. Douse your campfire until it's cold<br></br>
        4. Keep vehicles off dry grass.<br></br>
        5. Regularly maintain your equipment and vehicle.<br></br>
        6. Practive vehicle saftey.<br></br>
        7. Check your tires, bearings, and axels on your trailer.<br></br>
        8. Keep sparks away from dry vegetation.<br></br>
        9. Check conditions and regulations before you use fireworks or consider safe alternatives.<br></br>
        10. Cautiously burn debris and never when it's windy or restricted.</p>
        <Image src="smokey bear.jpg" width="60%" alt="Smokey the bear cartoon" className="dataPic"/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Wildfire Statistics</Accordion.Header>
        <Accordion.Body>
        Wildfires have been on the rise since 1983, with several recent years seeing over 10 million acres burned. <br></br>
        <Image src="Wildfires1983-2021.png" width="60%" alt="Wildfire graph from 1983-2021" className="dataPic"/>
        
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

