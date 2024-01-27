const Item = (props) => (
  <li
    onClick={() => props.changeStatus(props.id)}
    className={props.active ? "enabled" : "disabled"}
  >
    {props.name}
  </li>
);
