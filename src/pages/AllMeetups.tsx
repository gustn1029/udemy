import React from "react";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { Title } from "../ui/styles";
import { MeetupData } from "../interface/interface";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadedMeetups, setLoadedMeetups] = useState<Array<MeetupData>>([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch(
      "https://react-getting-started-b3375-default-rtdb.firebaseio.com/meetups.json"
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
      console.log(loadedMeetups);
    });
  }, []);

  if(isLoading) {
    return (
      <section className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="animate-bounce text-2xl uppercase font-bold">Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <Title>All Meetups</Title>
      {<MeetupList items={loadedMeetups} />}
    </section>
  );
};

export default AllMeetupsPage;
