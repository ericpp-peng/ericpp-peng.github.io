import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { UseCase } from "../data/profile";

export default function ProductUseCase({
  productImage,
  productTitle,
  useCase,
}: {
  productImage: string;
  productTitle: string;
  useCase: UseCase;
}) {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const [preview, setPreview] = useState<{
    left: number;
    top: number;
    width: number;
  } | null>(null);

  function showPreview(trigger: HTMLButtonElement) {
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      dialogRef.current?.open
    )
      return;
    const rect = trigger.getBoundingClientRect();
    const width = Math.min(340, window.innerWidth - 32);
    const height = Math.min(280, window.innerHeight - 32);
    const left = Math.max(
      16,
      Math.min(
        rect.left + rect.width / 2 - width / 2,
        window.innerWidth - width - 16,
      ),
    );
    const preferredTop =
      window.innerHeight - rect.bottom >= height + 12
        ? rect.bottom + 10
        : rect.top - height - 10;
    const top = Math.max(
      16,
      Math.min(preferredTop, window.innerHeight - height - 16),
    );
    setPreview({ left, top, width });
  }

  function restoreScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  function open() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setPreview(null);
    dialog.showModal();
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  function close() {
    dialogRef.current?.close();
    restoreScroll();
  }

  useEffect(() => {
    if (!preview) return;
    const hide = () => setPreview(null);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide();
    };
    window.addEventListener("scroll", hide, true);
    window.addEventListener("resize", hide);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("resize", hide);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [preview]);

  useEffect(
    () => () => {
      if (previousOverflow.current !== null)
        document.body.style.overflow = previousOverflow.current;
    },
    [],
  );

  return (
    <>
      <button
        className="use-case-trigger"
        type="button"
        aria-label={`View ${productTitle} use case`}
        aria-haspopup="dialog"
        aria-describedby={preview ? `${id}-preview` : undefined}
        onMouseEnter={(event) => showPreview(event.currentTarget)}
        onMouseLeave={() => setPreview(null)}
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible"))
            showPreview(event.currentTarget);
        }}
        onBlur={() => setPreview(null)}
        onClick={open}
      >
        <Image
          className="entry-product"
          src={productImage}
          alt=""
          width={38}
          height={38}
        />
      </button>
      {preview &&
        createPortal(
          <div
            className="use-case-preview"
            id={`${id}-preview`}
            role="tooltip"
            style={preview}
          >
            <Image
              className="use-case-preview-image"
              src={useCase.image}
              alt={useCase.alt}
              width={useCase.width}
              height={useCase.height}
            />
            <strong>{useCase.title}</strong>
            <p>Click to enlarge</p>
          </div>,
          document.body,
        )}
      <dialog
        ref={dialogRef}
        className="use-case-modal"
        aria-labelledby={`${id}-title`}
        onCancel={close}
        onClose={() => {
          restoreScroll();
          setPreview(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="use-case-viewer">
          <button
            type="button"
            className="use-case-close"
            aria-label="Close use case"
            onClick={close}
          >
            ×
          </button>
          <h3 id={`${id}-title`}>{useCase.title}</h3>
          <Image
            className="use-case-full-image"
            src={useCase.image}
            alt={useCase.alt}
            width={useCase.width}
            height={useCase.height}
          />
          <div className="use-case-links">
            <a href={useCase.image} target="_blank" rel="noopener noreferrer">
              Open full-size image ↗
            </a>
            {useCase.source && (
              <a
                href={useCase.source.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: {useCase.source.label}
              </a>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
