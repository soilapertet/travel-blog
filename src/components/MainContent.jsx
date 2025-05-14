import Blog from './Blog'
import travelBlogs from '../api/data' // import the travel blogs data from the api folder

function MainContent() {
  return (
    <>
      <div className='flex flex-col items-center pb-20'>
        {/* Returns an array of Blog JSX elements which will then be displayed on the page */}
        {/* 
          Loop through the travelBlogs array and for each blog, we will create a Blog JSX element 
          using the blog data. A new array with the Blog JSX elements will be returned and rendered by React
          Note the use of {} to allow us to use JavaScript (enter the world of JS) to render the resulting array
        */}
        {travelBlogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              // image is going to be an object of key-value pairs
              image={blog.img}
              title={blog.title}
              country={blog.country}
              googleMapsLink={blog.googleMapsLink}
              dates={blog.dates}
              text={blog.text}
            />
          )
        })}
        {/* <Blog
          image="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="Image of Mount Fuji"
          country="Japan"
          mapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          title="Mount Fuji"
          date="12 Jan, 2021 - 24 Jan, 2021"
          text="
            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the 
            single most popular tourist site in Japan, for both Japanese and foreign tourists.
          "
        /> */}
      </div>
  </>
  )
}

export default MainContent