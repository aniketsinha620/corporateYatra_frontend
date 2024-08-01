import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import "./Home.css"

const Hero = () => {
    return (
        <div>


            <div className='w-full' >
                <img
                    src='./insideP.jpg'

                    alt="Students"
                    className='object-cover w-full h-[650px]'
                    loading='lazy'
                />

            </div>
            <div className='mainHero1 w-full opacity-10 text-grey-500 '>

                <div className='bg-gray-300/5 rounded-full w-[90%] '>
                    <TypeAnimation
                        sequence={[

                            'Streamline Your Ride Booking Experience with Our Tracking Website.',
                            1000,
                            'We provide Service to Industries.',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block', color: 'grey' }}
                        repeat={Infinity}
                    />

                </div>

            </div>


        </div>
    )
}

export default Hero
