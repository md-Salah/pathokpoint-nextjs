const Drawer = ({
  isOpen,
  setIsOpen,
  right = false,
  children,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  right?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={`drawer cursor-default ${right ? "drawer-end" : ""}`}>
      <input
        id="drawer-1"
        type="checkbox"
        checked={isOpen}
        className="drawer-toggle"
        readOnly
      />
      <div className="drawer-side z-[31]">
        <label
          htmlFor="drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsOpen(false)}
        ></label>
        <div className="w-4/5 max-w-96 min-h-screen bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
