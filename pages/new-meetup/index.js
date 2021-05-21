import NewMeetupForm from "../../components/meetups/NewMeetupForm";

//our-domain/new-meetup
function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
