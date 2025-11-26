const Container = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
