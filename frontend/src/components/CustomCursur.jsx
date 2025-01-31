import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const mouseX = e.clientX; // Use clientX for better performance
        const mouseY = e.clientY; // Use clientY for better performance

        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
          cursorRef.current.style.left = `${mouseX}px`;
          cursorRef.current.style.top = `${mouseY}px`;
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1"; // Show cursor when mouse enters the website
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0"; // Hide cursor when mouse leaves the website
      }
    };

    // Hide the default cursor
    document.body.style.cursor = "none";

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Restore the default cursor on cleanup
      document.body.style.cursor = "default";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed", // Use fixed positioning for better performance
        width: "32px",
        height: "32px",
        backgroundImage: "url('/pngtree-vector-airplane-icon-png-image_1025191-removebg-preview.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 9999,
        pointerEvents: "none", // Prevent cursor from interacting with elements
        transform: "translate(-50%, -50%)", // Center the image on the cursor
        transition: "opacity 0.2s ease-out", // Smooth transition for visibility
        opacity: 0, // Initially hidden
      }}
    />
  );
};

export default CustomCursor;