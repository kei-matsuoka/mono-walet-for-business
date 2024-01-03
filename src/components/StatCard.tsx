export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row w-fit dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col justify-between py-4 px-6 leading-normal">
        <h5 className="mb-1 font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-left font-semibold text-3xl text-gray-700 dark:text-gray-400">
          {value}
        </p>
      </div>
    </div>
  );
}
