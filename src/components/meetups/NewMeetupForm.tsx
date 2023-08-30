import React from 'react';
import { Card } from '../../ui/styles';
import { ControlWrap, ActionWrap } from '../../ui/form_style';

const NewMeetupForm:React.FC = () => {
    return (
        <Card>
            <form className='p-4'>
                <ControlWrap>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id='title' />
                </ControlWrap>
                <ControlWrap>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id='image' />
                </ControlWrap>
                <ControlWrap>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id='address' />
                </ControlWrap>
                <ControlWrap>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea required id='description' rows={5} />
                </ControlWrap>
                <ActionWrap>
                    <button>Add Meetup</button>
                </ActionWrap>
            </form>
        </Card>
    );
}

export default NewMeetupForm;