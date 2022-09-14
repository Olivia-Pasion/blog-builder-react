import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Blog Title');
  const [subtitle, setSubtitle] = useState('Blog Subtitle');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle}/>
      <Editor title={title} setTitle={setTitle} setSubtitle={setSubtitle} />
    </main>
  );
}
