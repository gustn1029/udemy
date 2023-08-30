import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { Title } from '../ui/styles';

const NewMeetupPage:React.FC = () => {
    return (
        <section>
            <Title>Add New Meetup</Title>
            <NewMeetupForm />
        </section>
    )
}

export default NewMeetupPage;