import React from "react";
import { MeetupData } from "../interface/interface";
import MeetupList from "../components/meetups/MeetupList";
import { Title } from "../ui/styles";

const DUMMY_DATA: MeetupData[] = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage: React.FC = () => {
  return (
    <section>
      <Title>All Meetups</Title>
        {
          <MeetupList items={DUMMY_DATA} />
        }
    </section>
  );
};

export default AllMeetupsPage;
