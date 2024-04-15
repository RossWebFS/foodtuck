import { cva } from "class-variance-authority";

const listItemVariants = cva("", {
  variants: {
    listItemVariant: {
      default: "",
      inline: "",
    },
    gap: {
      sm: ""
    }
  },
});

export const List = () => {
  return <li></li>;
};

//           <ul className="flex gap-x-2 z-10">{[footerIcons]}</ul>
//          <ul className="flex items-center">{[navLinks]}</ul>
//            <ul className="bg-black absolute -left-2 flex flex-col">
//            <ul className="mb-8">

//Header list
{
  /* <ul className="flex items-center">{[navLinks]}</ul> */
}

{
  /* <li className="mx-3">
        <NavLink to={r.path} key={index} className={isActiveStyle}>
          {r.routeName}
        </NavLink>
      </li> */
}

//   <li className="bg-black flex items-center mx-2 pr-3 border border-orange-400 rounded-full">
//           <Input
//             styles="text-gray-100 border-none focus:outline-none"
//             type="text"
//             placeholder="Search..."
//             value={searchValue}
//             onChange={onSearchInputChange}
//           />
//           <Icon>
//             <RiSearchLine size={20} />
//           </Icon>
//         </li>
//         <li className="pt-1.5">
//           <Icon styles="mx-2">
//             <AiOutlineUser size={20} />
//           </Icon>
//         </li>
//         <li className="pt-1.5">
//           <Icon styles="mx-2">
//             <PiTote size={20} />
//           </Icon>
//         </li>

// Home
{
  /* <ul className="bg-black absolute -left-2">
              <li>
                <Icon styles="my-3">
                  <BiLogoFacebook size={20} />
                </Icon>
              </li>
              <li>
                <Icon styles="my-3">
                  <AiOutlineTwitter size={20} />
                </Icon>
              </li>
              <li>
                <Icon styles="my-3">
                  <BiLogoPinterestAlt size={20} />
                </Icon>
              </li>
            </ul> */
}

{/* <ul className="mb-8">
              <li className="flex my-2">
                <BsCheck size={25} />
                <p className="pl-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="flex my-2">
                <BsCheck size={25} />
                <p className="pl-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi.
                </p>
              </li>
              <li className="flex my-2">
                <BsCheck size={25} />
                <p className="pl-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
            </ul> */}

//Footer list
//<ul></ul>

{
  /* <li className="my-5">
        <Link variant="colored" key={l.path} path={l.path}>
          {l.routeName}
        </Link>
      </li> */
}

{
  /* <ul className="flex gap-x-2 z-10">{[footerIcons]}</ul> */
}

{
  /* <li>
      <Icon key={index} styles="text-gray-600 bg-gray-100 p-1.5">
        {i}
      </Icon>
    </li> */
}
