import { useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

import { signOut, useSession } from "next-auth/react";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();

  // const { data } = session;

  const { data, status } = useSession();

  console.log({ data, status });

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <>
        {status === "loading" && <h3>loading...</h3>}

        {status === "unauthenticated" && <h3>Not authenticated</h3>}
        <a
          className="text-blueGray-500 block"
          href="#pablo"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <div className="items-center flex">
            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
              <img
                alt="..."
                className="w-full rounded-full align-middle border-none shadow-lg"
                src={data?.user?.image}
              />
            </span>
          </div>
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
          }
        >
          <a
            href="#soumava"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            Logout
          </a>
        </div>
      </>
    </>
  );
};

export default UserDropdown;
