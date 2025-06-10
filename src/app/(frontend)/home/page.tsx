import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="bg-black">
      <div className="container bg-black">
        <video width="100%" height="100%" autoPlay preload="auto" playsInline>
          <source src="/img/0213.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
