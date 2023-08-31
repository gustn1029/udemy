import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { Title } from "../ui/styles";
import { MeetupFormData } from "../interface/interface";

const NewMeetupPage: React.FC = () => {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData: MeetupFormData) {
    fetch(
      "https://react-getting-started-b3375-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <Title>Add New Meetup</Title>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
