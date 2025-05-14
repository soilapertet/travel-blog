import marker from '../assets/images/marker.png'
function MainContent() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <article className='w-[60%] p-5 m-5 rounded-md flex flex-row justify-between bg-beige'>
          <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Image of Mount Fuji" className='w-[25%] h-auto rounded-md'/>
          <div className='p-5'>
            <div className='flex flex-row items-center gap-10'>
              <div className='flex flex-row items-center'>
                <img src={marker} alt="Image of location marker" className='w-7 rounded-lg'/>
                <p className='text-md text-smokyBlack'>JAPAN</p>
              </div>
              <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className='text-smokyBlack underline'>
                View on Google Maps
              </a>
            </div>
            <div className='text-left text-smokyBlack mt-5'>
              <h2 className='text-3xl font-bold mb-2'>Mount Fuji</h2>
              <h3 className='text-md font-bold'>12 Jan, 2021 - 24 Jan, 2021</h3>
              <p>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the 
                single most popular tourist site in Japan, for both Japanese and foreign tourists.
              </p>
            </div>
          </div>
        </article>   
      </div>
  </>
  )
}

export default MainContent