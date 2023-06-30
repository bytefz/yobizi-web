export const ItemNavBar = ({
  name = "",
  href = "#",
  isCurrentPage = false,
}) => {
  let className =
    "block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 ";

  if (isCurrentPage) {
    className += "bg-blue-700 md:text-blue-700 md:dark:text-blue-500";
  }

  return (
    <li>
      <a
        href={href}
        className={className}
        aria-current={isCurrentPage ? "page" : "false"}
      >
        {name}
      </a>
    </li>
  );
};
