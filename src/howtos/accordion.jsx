import * as React from 'react';

import './accordion.css';
import Reference from '../comm/reference.jsx';


const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-titlebar" onClick={() => setIsActive(!isActive)}>
        {title}
        <span className='accordion-icon'>{isActive ? '-': '+'}</span>
      </button>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default function Accordion(){
  const items = [
    {
      title: 'Section A',
      content: `I AM A CAT. As yet I have no name. Teachers have it easy.
        If you are born a human, it’s best to become a teacher.
        For if it’s possible to sleep this much and still to be a teacher,
        why, even a cat could teach.`,
    },
    {
      title: 'Section B',
      content: `Living as I do with human beings, the more that I observe them,
        the more I am forced to conclude that they are selfish.
        For surely even human beings will not flourish forever.
        I think it best to wait in patience for the Day of the Cats.`,
    },
    {
      title: 'Section C',
      content: `I prefer the cozy life, and it’s certainly easier to sleep than
        to hunt for titbits. No one has yet named me but, since it’s no use crying
        for the moon, I have resolved to remain for the rest of my life a nameless
        cat in the house of this teacher.`,
    },
  ];

  return (
    <div className='accordion'>
      <AccordionItem title={items[0].title} content={items[0].content} />
      <AccordionItem title={items[1].title} content={items[1].content} />
      <AccordionItem title={items[2].title} content={items[2].content} />
      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Accordion'
        url='https://www.w3schools.com/howto/howto_js_accordion.asp'
      />

    </div>
  )
}

/*
        <div className="accordion-title">{title}</div>

<div className="accordion-item">
  <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
    <div>{title}</div>
    <div>{isActive ? '-' : '+'}</div>
  </div>
  {isActive && <div className="accordion-content">{content}</div>}
</div>
*/
