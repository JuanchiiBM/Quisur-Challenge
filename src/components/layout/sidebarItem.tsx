import { Button, Link } from '@heroui/react'
import { SiteConfig } from '@/config/site'
import { Icon } from '@iconify/react'

const SidebarItem = ({ navItem }: { navItem: SiteConfig['navItems'][number] }) => {
    return (
        <Button className='text-left bg-background-200 hover:bg-background-300 justify-start text-md'
        as={Link}
        href={navItem.href}
        startContent={
            <Icon icon={navItem.icon} width="22" height="22" />
        }
        >
            {navItem.label}
        </Button>
    )
}

export default SidebarItem
