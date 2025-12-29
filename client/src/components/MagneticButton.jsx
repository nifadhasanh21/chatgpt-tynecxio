import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * MagneticButton
 * - pulls slightly toward cursor
 * - optional shine overlay
 * - accepts any extra props like style, target, rel, etc.
 */
export default function MagneticButton({
  as = "a",
  href,
  className = "",
  children,
  onClick,
  type,
  shine = true,
  style,
  disabled,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 380, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 380, damping: 24, mass: 0.6 });

  function handleMove(e) {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);

    // magnetic strength
    x.set(mx * 0.18);
    y.set(my * 0.18);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Comp = motion[as];

  // Only pass href when it's an anchor
  const linkProps = as === "a" ? { href } : {};

  return (
    <Comp
      ref={ref}
      {...linkProps}
      {...rest}
      onClick={disabled ? undefined : onClick}
      type={as === "button" ? (type || "button") : undefined}
      className={`btn ${shine ? "btnShine" : ""} ${className}`}
      style={{ ...(style || {}), x: sx, y: sy, opacity: disabled ? 0.6 : 1 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={disabled ? undefined : { scale: 0.985 }}
      aria-disabled={disabled ? true : undefined}
      tabIndex={disabled ? -1 : rest.tabIndex}
    >
      <span className="btnInner">{children}</span>
      {shine && <span className="btnShineLayer" aria-hidden="true" />}
    </Comp>
  );
}
