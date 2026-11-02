import { useParams } from "react-router-dom";

export default function WeekDetail() {
  const { weekId } = useParams();
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-heading text-4xl font-bold text-navy">
        Week {weekId}
      </h1>
    </section>
  );
}