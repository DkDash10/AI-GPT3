import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">

      <Feature title="What is GPT-3" text="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta consectetur accusantium animi quis alias voluptatum inventore veritatis numquam maiores, vitae repellat accusamus optio dolorum, commodi ducimus aspernatur rem. Minima libero quos eligendi quod."  />
      </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
      <p>Explore The Library

      </p>
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, autem dignissimos nam exercitationem aliquam sit eos at reiciendis maiores reprehenderit, repellendus perspiciatis, asperiores omnis doloremque accusantium rem. Tempore!" />
    <Feature title="Knowledgebase" text="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi sunt delectus maiores veniam magnam maxime, sit fuga cum dolorum assumenda quis aut voluptates qui accusantium nisi ipsum, nobis rem repellat rerum sint neque." />
    <Feature title="Education" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae corrupti eos doloremque ipsum facilis consequuntur tempora odit assumenda quas quaerat amet quibusdam pariatur, officiis atque, repellat voluptatum. Soluta, veniam." />

    </div>
    </div>
  )
}

export default WhatGPT3;