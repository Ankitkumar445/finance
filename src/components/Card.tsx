export default function Card({ title, value }: any) {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <p>{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}