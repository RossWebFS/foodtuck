export const Pagination = () => {
  const pagination = [
    { content: "1", ref: "/" },
    { content: "2", ref: "/" },
    { content: "3", ref: "/" },
  ];

  const paginationItems = pagination.map((page) => {
    return (
      <li className="border border-gray-200">
        <a
          className="block px-3 py-1 text-orange-400 transition-all duration-200 hover:bg-orange-400 hover:text-gray-100"
          href={page.ref}
        >
          {page.content}
        </a>
      </li>
    );
  });

  return (
    <nav className="mt-20" aria-label="Page navigation example">
      <ul className="gap-3 flex justify-center">
        <li className="border border-gray-200">
          <a
            className="block px-3 py-1 text-orange-400 transition-all duration-200 hover:bg-orange-400 hover:text-gray-100"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {paginationItems}
        <li className="border border-gray-200">
          <a
            className="block px-3 py-1 text-orange-400 transition-all duration-200 hover:bg-orange-400 hover:text-gray-100"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
