import ButtonWithArrow from "./ButtonWithArrow";

export default function HeadingPost({ page }) {
  return (
    <div className="flex px-6 lg:px-20 pt-7 lg:pt-0 w-full justify-between">
      <ButtonWithArrow title="Go back" />
      <span className="text-xl text-slate-900 uppercase font-medium">
        {page}
      </span>
    </div>
  );
}
