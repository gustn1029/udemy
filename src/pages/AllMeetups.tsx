import React from "react";
import { DummyData } from "../interface/interface";
const DUMMY_DATA: DummyData[] = [
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
      <h1>All Meetups</h1>
      <ul></ul>
      {DUMMY_DATA.map((meetup) => {
        return <li key={meetup.id}>
            <h2>{meetup.title}</h2>
        </li>;
      })}
    </section>
  );
};

export default AllMeetupsPage;
