export default function MostPopular({ queu, writer, title }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 items-start">
        <span className="text-slate-900 font-semibold text-2xl">{queu}</span>
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-2xl">{writer}</p>
          <div className="flex gap-2 items-center">
            <span className="font-bold text-base text-slate-900">Text</span>
            <p className="text-base text-slate-600">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
