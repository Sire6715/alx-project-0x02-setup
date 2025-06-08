import React from 'react'
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div>
        <h1>Hello About</h1>
        <div className='flex justify-between w-full'>
          <Button shape='rounded-sm' size='small'/>
          <Button shape='rounded-md' size='medium'/>
          <Button shape='rounded-full' size='large'/>
        </div>
    </div>
  )
}

export default About;
