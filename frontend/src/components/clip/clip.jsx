const Chip = ({ bgCol, textCol, text }) => {
  return (
    <div
      style={{
        backgroundColor: bgCol,
        color: textCol,
      }}
      className="text-[11px] px-3 pb-0.5 rounded-full w-fit"
    >
      {text}
    </div>
  );
};

export default Chip;
