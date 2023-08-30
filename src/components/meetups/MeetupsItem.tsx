import React from 'react';
import { MeetupData } from '../../interface/interface';
import { Card } from '../../ui/styles';

const MeetupsItem:React.FC<MeetupData> = ({ title, address, image, description }) => {
    return (
        <li className='my-4'>
            <Card>
                <figure className='w-full h-80 overflow-hidden rounded-t-md'>
                    <img className='w-full object-cover' src={image} alt={title} />
                </figure>
                <article className='text-center p-4'>
                    <h3 className='text-xl text-[#2c292b]'>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </article>
                <article className='p-6 text-center'>
                    <button className='text-[#77002e] border-[1px] border-solid border-[#77002e] px-6 py-2 rounded bg-transparent hover:bg-[#ffe2ed] active:bg-[#ffe2ed]'>To favorites</button>
                </article>
            </Card>
        </li>
    );
};

export default MeetupsItem;
