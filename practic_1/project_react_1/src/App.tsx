import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import React from 'react'
import './App.css'
import { TaskList } from './component_app/component'
import { Greeting} from './component_app/component'
import { ActionButton } from './component_app/component'
import { ProfileCard } from './component_app/component'
import { ImageGallery } from './component_app/component'

function App() {

  return (
    <>
    <Greeting />
    <TaskList />
    <ActionButton />
    <ProfileCard />
    <ImageGallery />
    </>
)
}

export default App
