const Button = ({text,link,styling}) => {
  return (
    <div>
      <a href={link}>
      <button className={styling}>
        {text}
      </button>
      </a>
    </div>
  );
};

export default Button;
