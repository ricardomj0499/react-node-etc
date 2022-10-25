import { IoAccessibilityOutline, IoAccessibility } from "react-icons/io5";

export function Posts() {
  return (
    <button onClick={fetchJson}>
      <IoAccessibilityOutline />
      bringDataApi
      <IoAccessibility />
    </button>
  );
}

function fetchJson() {
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res
      .json()
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  );
}
