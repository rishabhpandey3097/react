import Button from "./button";
import colorArray from "../constants/color";

// eslint-disable-next-line react/prop-types
const Toolbar = ({ handleColorEvent }) => {
  const handleEvent = (e) => {
    handleColorEvent(e);
  };

  return (
    <>
      <div className="fixed flex w-full flex-wrap justify-center bottom-12 inset-x-0p-3 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-md">
          {colorArray.map((color, index) => (
            <Button
              key={index}
              btnText={color?.toUpperCase()}
              bgColor={color}
              getColor={handleEvent}
            />
          ))}
          {/* <Button btnText="Red" bgColor="red" getColor={handleEvent} />
          <Button btnText="Green" bgColor="green" getColor={handleEvent} />
          <Button btnText="Blue" bgColor="blue" getColor={handleEvent} />
          <Button btnText="Olive" bgColor="olive" getColor={handleEvent} />
          <Button btnText="Grey" bgColor="grey" getColor={handleEvent} />
          <Button btnText="Yellow" bgColor="yellow" getColor={handleEvent} />
          <Button btnText="Pink" bgColor="pink" getColor={handleEvent} />
          <Button btnText="Purple" bgColor="purple" getColor={handleEvent} />
          <Button
            btnText="Lavender"
            bgColor="lavender"
            getColor={handleEvent}
          />
          <Button btnText="White" bgColor="orange" getColor={handleEvent} />
          <Button btnText="Black" bgColor="black" getColor={handleEvent} /> */}
        </div>
      </div>
    </>
  );
};

export default Toolbar;
