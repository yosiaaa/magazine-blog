import ButtonWithArrow from "./ButtonWithArrow";

export default function Pagination({ page, totalPages, onNext, onPrev }) {
  return (
    <div className="flex justify-between items-center mt-6">
      {/* Prev */}
      <div className={`${page === 1 ? "hidden" : "flex"}`} onClick={onPrev}>
        <ButtonWithArrow title="Previous" />
      </div>

      {/* Page Info */}
      <span className="sr-only text-sm font-medium">
        Page {page} of {totalPages}
      </span>

      {/* Next */}
      <div
        className={`${page === totalPages ? "hidden" : "flex"}`}
        onClick={onNext}
      >
        <ButtonWithArrow title="Next" />
      </div>
    </div>
  );
}
