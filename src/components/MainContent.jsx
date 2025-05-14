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
      </div>
  </>
  )
}

export default MainContent