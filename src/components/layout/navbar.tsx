import { ThemeSwitch } from '../theme-switch'

const Navbar = () => {
  return (
    <section className='h-16 fixed w-full bg-background-100 bg-opacity-50 backdrop-blur-md border-b-1 border-default-100 flex items-center px-4 justify-end'>
      <ThemeSwitch />
    </section>
  )
}

export default Navbar
