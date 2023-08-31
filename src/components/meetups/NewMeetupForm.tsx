import React, { FormEventHandler } from 'react';
import { useRef } from 'react';
import { Card } from '../../ui/styles';
import { ControlWrap, ActionWrap } from '../../ui/form_style';
import { MeetupFormData, OnAddMeetup } from '../../interface/interface';

const NewMeetupForm:React.FC<OnAddMeetup> = (props) => {
    const titleInputRef = useRef<HTMLInputElement | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const addressInputRef = useRef<HTMLInputElement | null>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);

    const submitHandler: FormEventHandler<HTMLFormElement> = (event): void => {
        event.preventDefault();

        const enteredTitle:string = titleInputRef.current!.value;
        const enteredImage:string = imageInputRef.current!.value;
        const enteredAddress:string = addressInputRef.current!.value;
        const enteredDescription:string = descriptionInputRef.current!.value;

        const meetupData:MeetupFormData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        return props.addMeetup(meetupData);
    }

    return (
        <Card>
            <form className='p-4' onSubmit={submitHandler}>
                <ControlWrap>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id='title' ref={titleInputRef} />
                </ControlWrap>
                <ControlWrap>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id='image' ref={imageInputRef} />
                </ControlWrap>
                <ControlWrap>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id='address' ref={addressInputRef} />
                </ControlWrap>
                <ControlWrap>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea required id='description' rows={5} ref={descriptionInputRef} />
                </ControlWrap>
                <ActionWrap>
                    <button>Add Meetup</button>
                </ActionWrap>
            </form>
        </Card>
    );
}

export default NewMeetupForm;