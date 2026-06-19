import "./Divider.css";

export default function Divider({ image }) {
  return (
    <div
      className="divider"
      style={{ backgroundImage: `url(${image})` }}
      role="presentation"
    >
      <div className="divider-overlay" />
    </div>
  );
}
