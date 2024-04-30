import { Link } from "react-router-dom";

export const Pagination = () => {
  const pagination = [
    { content: "1", ref: "/" },
    { content: "2", ref: "/" },
    { content: "3", ref: "/" },
  ];

  const paginationItems = pagination.map((page) => {
    return (
      <li className="border border-gray-200">
        <Link
          className="block px-3 py-1 text-orange-400 transition-all duration-200 hover:bg-orange-400 hover:text-gray-100"
          to={page.ref}
        >
          {page.content}
        </Link>
      </li>
    );
  });

  return (
    <nav className="mt-20" aria-label="Page navigation example">
      <ul className="gap-3 flex justify-center">
        <li className="border border-gray-200">
          <Link
            className="block px-3 py-1 text-orange-400 transition-all duration-200 hover:bg-orange-400 hover:text-gray-100"
            to="/"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {paginationItems}
        <li className="border border-gray-200">
          <Link
            className="block px-3 py-1 text-orange-400 transition-all duration-200 hover:bg-orange-400 hover:text-gray-100"
            to="/"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
