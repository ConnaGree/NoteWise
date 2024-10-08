import { CgNotes } from 'react-icons/cg'
import { GoHeart } from 'react-icons/go'
import { HiOutlineTrash } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'

export const sideBarContent = [
    {
        icon: <CgNotes />,
        label: 'All notes',
        route: '/'
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
]

export const filterTags = ['All', 'Today', 'This week', 'This month', 'Older']