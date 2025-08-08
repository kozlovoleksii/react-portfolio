import React, { useEffect } from "react";
import "./Modal.css";

export default function Modal({
  isOpen,
  onClose,
  autoCloseMs = 0, 
  children,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);


    let t;
    if (autoCloseMs > 0) t = setTimeout(onClose, autoCloseMs);


    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, autoCloseMs]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} aria-hidden="true">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className="modal-close" onClick={onClose} autoFocus>
          Закрити
        </button>
      </div>
    </div>
  );
}
