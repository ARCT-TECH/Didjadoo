import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import didjatest from "../../../assets/images/didjatest.png";
import kangaroo from "../../../assets/images/kangaroo.png"




const items = [
  {
    src: (didjatest),
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    class: 'pic1'
  },
  {
    src: (didjatest),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: (kangaroo),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];


  const UncontrolledExample = () =>  <UncontrolledCarousel items={items} /> 
   
  



export default UncontrolledExample;