export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="stat-card">
      <div className="icon">
        {icon}
      </div>

      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}