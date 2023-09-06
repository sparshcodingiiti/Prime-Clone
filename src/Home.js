import React from 'react'
import './Home.css'
import Product from './Product'
export default function Home() {
  return (
    <div className='home'>
        <img className= "background_wallpaper" src="./Back_WallPaper.jpg" alt = "amazon-wallpaper "></img>
        <div className='home__container'>
            <div className='home__row'>
                <Product title='Uncommon Sense, Written by J. Robert Oppenheimer' image='./Uncommon Sense.jpg' price = '7604' rating ='4' />
                <Product title='All the Light We Cannot See, Written by ANTHONY DOERR' image='./all-the-light-we-cannot-see-anthony-doerr.jpg' price = '599' rating ='5' />
                <Product title='Doglapan: The Hard Truth about Life and Start-Ups, Written by Ashneer Grover' image='./Doglapan.jpg' price = '305' rating ='4' />
                <Product title="Harry Potter and the Philosopher's Stone, Written by J.K. Rowling" image='./Harry_potter.jpg' price = '499' rating ='4' />
                <Product title='The Night Circus, Written by ERIN MORGENSTERN' image='./Night_circus.jpg' price = '1195' rating ='4' />
            </div>
            <div className='home__row'>
            <Product title='FireBolt: Smart Watch for Men - Smart Watches for Men Women' image='./Smart_watch_Firebolt.jpg' price = '2499' rating ='3' />
            <Product title="Men Nike Shoes - Casual and Sport's Wear" image='./Shoes.jpg' price = '21847' rating ='5' />
            <Product title='Apple Iphone13, 128GB Pink' image='./iphone13.jpg' price = '56999' rating ='4' />
            </div>
            <div className='home__row'>
            <Product title='Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)' image='./TV.jpg' price = '14990' rating ='4' />
            <Product title='Samsung 7 kg Fully-Automatic Top Loading Washing Machine (WA70A4002GS/TL, Imperial Silver, Diamond drum)' image='./WashingMachine.jpg' price = '15790' rating ='4' />
            
            </div>
        </div>
        
    </div>
    
  )
}
