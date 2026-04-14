export default function ButtonCustom({ isActive, label, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl border px-3 font-inter cursor-pointer transition-all duration-200
        ${
          isActive
            ? "bg-[#2a2a2a] text-white border-slate-100"
            : "bg-transparent text-slate-600 border-slate-600 hover:bg-gray-100"
        }
      `}
    >
      {label}
    </button>
  );
}
