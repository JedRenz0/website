import "./Background.css";

export default function Background() {
  return (
    <div className="bg-animation" aria-hidden="true">
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
      <div className="bg-orb bg-orb--3" />
      <div className="bg-orb bg-orb--4" />
    </div>
  );
}
