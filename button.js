export const Button = ({ children, className, ...props }) => (
  <button className={`bg-blue-600 text-white p-2 rounded-xl ${className}`} {...props}>
    {children}
  </button>
);