import { ThemeSwitch } from '../theme-switch'

const Navbar = () => {
  return (
    <section className='h-20 bg-background-100 border-b-1 border-default-100 flex items-center px-4 justify-end'>
      <ThemeSwitch />
    </section>
  )
}

export default Navbar
