const DescItem = ({ children }) => (
  <p className="text-sm leading-relaxed text-neutral-500/90 dark:text-neutral-400 flex gap-2">
    <span className="text-neutral-500">•</span>
    <span>{children}</span>
  </p>
);

export default DescItem;
