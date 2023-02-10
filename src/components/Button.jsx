const DEFAULT_BUTTON_STYLES = {
  padding: "6px 12px",
  fontSize: "inherit",
  borderRadius: "6px",
  cursor: "pointer",
};

export default function Button({ name, handler, children }) {
  return (
    <button style={DEFAULT_BUTTON_STYLES} className={name} onClick={handler}>
      {children}
    </button>
  );
}
