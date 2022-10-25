import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="taskCard">
      <h1>Mi primer Tarea</h1>
      <span className={ready ? "bg-red" : "bg-blue"}>
        {ready ? "tarea realizada" : "tarea pendiente"}
      </span>
    </div>
  );
}
