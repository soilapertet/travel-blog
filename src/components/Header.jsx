import globeLogo from '../assets/images/earth.png'

function Header() {
  return (
    <>
      <header className='bg-shamrockGreen p-2 m-0 w-full flex flex-row gap-5 justify-center items-center'>
        <img src={globeLogo} className='w-12' alt="Image of a globe icon" />
        <h1 className='text-palePurple text-2xl'>Travel Blog</h1>
      </header>
    </>
  )
}

export default Header;
