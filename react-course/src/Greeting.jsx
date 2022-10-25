export function Greeting({title, name = "user"}) {
  console.log(title, name)
  return <h1>Hola Gom como esta? {title}, dice name = {name}</h1>;
}

export function UserCard(props) {
  console.log(props)
  return (
    <div class="usercard">
      <h1>{props.name}</h1>
      <p>{props.married?"married":"single"}</p>
      <ul>
        <li>{props.address.city}</li>
        <li>{props.address.street}</li>
      </ul>
    </div>
  );
}
