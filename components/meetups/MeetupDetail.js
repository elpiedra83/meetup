import classes from "./MeetupDetails.module.css";

function MeetupDetail(props) {
  return (
    <setion className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </setion>
  );
}

export default MeetupDetail;
