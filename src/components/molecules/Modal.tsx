import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:32594 ("Modal Overlay")
 * Raw values, no semantic tokens:
 *   scrim:  backdrop-blur-[4px] · bg rgba(25,28,29,0.6) · p-[16px]
 *   panel:  bg #ffffff · rounded-[20px] · w-[328px] · shadow 0px 0px 5px 0px rgba(0,0,0,0.1)
 *   title:  Inter SemiBold 20px #616161, centered
 *   cross:  ~24px, #616161, top-right
 * Figma is a single static frame — no close behavior (Esc / backdrop / scroll-lock)
 * and no cross glyph (Figma SVG asset) are in the file, so they are skipped here.
 */

export type ModalProps = {
  open: boolean;
  title?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export function Modal({ open, title, className, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-[16px]"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(25,28,29,0.6)] backdrop-blur-[4px]" />
      <div
        className={cn(
          "relative w-[328px] rounded-[20px] bg-white p-[16px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
          className,
        )}
      >
        {title != null && (
          <div className="mb-[12px] flex items-center justify-center">
            <h2 className="font-['Inter',sans-serif] text-[20px] font-semibold text-[#616161]">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
