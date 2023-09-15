const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      class={className}
    >
      <path
        fill="currentColor"
        d="M13.5 3C7.701 3 3 7.701 3 13.5S7.701 24 13.5 24c2.45 0 4.703-.839 6.489-2.244l6.878 6.878a1.25 1.25 0 1 0 1.768-1.768l-6.879-6.878A10.455 10.455 0 0 0 24 13.5C24 7.701 19.299 3 13.5 3Zm-8 10.5a8 8 0 1 1 16 0a8 8 0 0 1-16 0Z"
      />
    </svg>
  );
};

export default SearchIcon;
