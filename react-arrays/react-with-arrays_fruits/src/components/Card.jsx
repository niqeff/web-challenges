import "./Card.css";

export default function Card({ name, color }) {
  const classData = `card card--${color}`;
  console.log(classData);
  return <p className={classData}>{name}</p>;
}
