// eslint-disable-next-line react/prop-types
const Button = ({ btnText, bgColor, getColor }) => {
  const updateBgColor = () => {
    getColor(bgColor);
  };
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
      onClick={updateBgColor}
    >
      {btnText}
    </button>
  );
};

export default Button;
