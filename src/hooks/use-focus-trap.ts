import { useEffect, type RefObject } from "react";

/**
 * Focus trap for non-Radix overlays (mobile menu, custom popovers).
 *
 * - When `active` becomes true: moves focus to the first focusable element inside `containerRef`
 *   and cycles Tab / Shift+Tab inside the container.
 * - When `active` becomes false: returns focus to `returnFocusRef` (typically the trigger).
 *
 * Radix primitives (Dialog, DropdownMenu, Popover) already implement this — do not double-wrap them.
 */
export function useFocusTrap<T extends HTMLElement>(
  active: boolean,
  containerRef: RefObject<T | null>,
  returnFocusRef?: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused = (document.activeElement as HTMLElement | null) ?? null;

    const getFocusable = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
        ),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);

    // Move focus into the container.
    const first = getFocusable()[0];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      const current = document.activeElement as HTMLElement | null;

      if (e.shiftKey && current === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && current === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // Clean exit: restore focus to the trigger (or the previously focused element).
      const target = returnFocusRef?.current ?? previouslyFocused;
      // Defer one frame so it doesn't fight the closing animation.
      requestAnimationFrame(() => target?.focus?.());
    };
  }, [active, containerRef, returnFocusRef]);
}
