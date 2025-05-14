import marker from '../assets/images/marker.png'

function Blog(props){
  return (
    <article className='w-[60%] p-5 m-5 rounded-md flex flex-row justify-between bg-beige'>
      <img src={props.image} alt={props.alt} className='w-[25%] h-auto rounded-md'/>
      <div className='p-5'>
        <div className='flex flex-row items-center gap-10'>
          <div className='flex flex-row items-center'>
            <img src={marker} alt="Image of location marker" className='w-7 rounded-lg'/>
            <p className='text-md text-smokyBlack uppercase'>{props.country}</p>
          </div>
          <a href={props.googleLink} className='text-smokyBlack underline'>View on Google Maps</a>
        </div>
        <div className='text-left text-smokyBlack mt-5'>
          <h2 className='text-3xl font-bold mb-2'>{props.title}</h2>
          <h3 className='text-md font-bold'>{props.date}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </article>   
  )
}

export default Blog