import { siteConfig } from '@/config/site'
import SidebarItem from './sidebarItem';
import { useId } from 'react';

const Sidebar = () => {
    return (
        <section className='w-60 z-10 h-full bg-background-100 border-r-1 border-default-100 fixed'>
            <h1 className='h-20 w-full justify-center font-semibold text-3xl flex items-center'>Qisur</h1>
            <aside className='px-4 gap-4 flex flex-col py-4'>
                {siteConfig.navItems.map((navItem) => (
                    <SidebarItem key={useId()} navItem={navItem} />
                ))}
            </aside>
        </section>
    )
}

export default Sidebar
