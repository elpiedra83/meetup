import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg",
    address: "Some address 1, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "Some address 2, 12345 Some City",
    description: "This is the second meetup!",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://memberpress.com/wp-content/uploads/2019/10/Member-Meetup@2x-1024x683.png",
    address: "Some address 3, 12345 Some City",
    description: "This is the third meetup!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export function getStaticP