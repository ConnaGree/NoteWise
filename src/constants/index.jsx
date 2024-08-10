import { CgNotes } from 'react-icons/cg'
import { GoHeart } from 'react-icons/go'
import { HiOutlineTrash } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'

export const sideBarContent = [
    {
        icon: <CgNotes />,
        label: 'All notes',
        route: '/AllNotes'
    },
    {
        icon: <GoHeart />,
        label: 'Favorites',
        route: '/Favorites'
    },
    {
        icon: <HiOutlineTrash />,
        label: 'Trash',
        route: '/Trash'
    },
    {
        icon: <IoSettingsOutline />,
        label: 'Settings',
        route: '/Settings'
    },
]

export const filterTags = ['All', 'Todays', 'This week', 'This month', 'older']