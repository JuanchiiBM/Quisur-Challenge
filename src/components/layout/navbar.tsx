import { ThemeSwitch } from '../theme-switch'
import { Button } from '@heroui/button'
import { Icon } from '@iconify/react'
import Notifications from './notifications'
import React from 'react'

const Navbar = ({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <section className={`h-16 fixed w-full ${collapsed ? 'ml-0' : 'ml-60 pr-64'} z-10 transition-all bg-background-100 bg-opacity-50 backdrop-blur-md border-b-1 border-default-100 flex items-center px-4 justify-between`}>
            <Button
                isIconOnly
                className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                startContent={<Icon icon="line-md:menu" width="22" height="22" />}
                onPress={() => setCollapsed((prev) => prev = !prev)} />
            <div className='flex gap-4'>
                <Notifications />
                <ThemeSwitch />
            </div>
        </section>
    )
}

export default Navbar
