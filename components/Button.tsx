interface ButtonProps {
  backgroundColor: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, text }) => {
  return (
    <button
      className='rounded-xl text-[#fefdfe] p-3 flex justify-center items-center uppercase'
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
};

export default Button;
