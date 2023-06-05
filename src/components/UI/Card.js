import "./Card.css";
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
//children is a reserved name in react
//classNames are stored on the prop object too

export default Card;
