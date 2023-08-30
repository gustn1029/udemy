import React from 'react';
import { MeetupArray } from '../../interface/interface';
import MeetupsItem from './MeetupsItem';

const MeetupList:React.FC<MeetupArray> = ({items}) => {
    return (
        <ul>
            {
                items.map(item => (
                    <MeetupsItem 
                        id={item.id} key={item.id}
                        title={item.title}
                        address={item.address}
                        description={item.description}
                        image={item.image}
                    />
                ))
            }
        </ul>
    )
}  

export default MeetupList;