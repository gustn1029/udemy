import React from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from '../../interface/interface';


const menuList: MenuList[] = [
    {path: '/', title: 'All'},
    {path: '/new-meetup', title: 'Add New Meetup'},
    {path: '/favorite', title: 'My Favorite'}
];

const MainNavigation:React.FC = () => {
    return (
        <header className='w-full px-24 bg-rose-900 py-8 flex justify-between items-center'>
            <section className='text-2xl font-bold text-gray-50'>React Meetups</section>
            <nav>
                <ul className='flex items-baseline'>
                    {
                        menuList.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <Link to={item.path}
                                        className='text-gray-300 text-lg font-semibold ml-12 hover:text-gray-50'
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;