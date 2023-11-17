// Import React and Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function InfoAccordian() {
  return (
    <Accordion defaultActiveKey={['0']}>
      <Accordion.Item eventKey="0">
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

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Wildfire Prevention</Accordion.Header>
        <Accordion.Body>
        <p>According to the US Department of the Interior, 10 ways you can prevent wildfires include:<br></br>
        1. Check weather and drought conditions.<br></br>
        2. Build your campfire in an open location and far from flammables.<br></br>
        3. Douse your campfire until it's cold<br></br>
        4. Keep vehicles off dry grass.<br></br>
        5. Regularly maintain your equipment and vehicle.<br></br>
        6. Practive vehicle saftey.<br></br>
        7. Check your tires, bearings, and axels on your trailer.<br></br>
        8. Keep sparks away from dry vegetation.<br></br>
        9. Check conditions and regulations before you use fireworks or consider safe alternatives.<br></br>
        10. Cautiously burn debris and never when it's windy or restricted.<br></br>
        See thier site https://www.doi.gov/blog/10-tips-prevent-wildfires for more information</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Wildfire Statistics</Accordion.Header>
        <Accordion.Body>
        Wildfires have been on the rise since 1983, with several recent years seeing over 10 million acres burned. <br></br>
        <Image fluid src="Wildfires1983-2021.png" width="60%" alt="Wildfire graph from 1983-2021" class="center"/>;
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
