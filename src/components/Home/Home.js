import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Blog Title');
  const [subtitle, setSubtitle] = useState('Blog Subtitle');
  const [font, setFont] = useState("Architect's Daughter");
  const [align, setAlign] = useState('');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview 
        title={title} 
        subtitle={subtitle} 
        font={font} 
        align={align}
      />
      <Editor 
        title={title} 
        setTitle={setTitle} 
        subtitle={subtitle}
        setSubtitle={setSubtitle} 
        font={font} 
        setFont={setFont} 
        align={align}
        setAlign={setAlign}
      />
    </main>
  );
}
