import React from "react";
import PropTypes from "prop-types";
import { getColorByStatus } from "../../utils/colorStatus";

// components

// how the data's gonna look

// {
//   "_id": "61caebb836705c81de328b16",
//   "payment_id": "plink_IcCkB1M8JlTn2g",
//   "from": "Mav#8994",
//   "to": "code#7816",
//   "amount": 444,
//   "currency": "INR",
//   "payment_status": "created",
//   "reference_id": "YGSAF",
//   "payment_link": "https://rzp.io/i/Btc8jj5IsI",
//   "__v": 0,
//   "created_at": "2021-12-30T17:51:46.051Z"
// },

export default function CardTable({ color, tableData, tablePlatform }) {
  console.log("inside cardTable", tableData);

  return (
    <>
      {tableData.length === 0 ? (
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  There are no {tablePlatform} Payment History
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                  >
                    {tablePlatform} Payment History
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Payment
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      amount
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      Status
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      From
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      To
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data) => {
                    return (
                      <tr key={data.payment_id}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          {/* <img
                      src="/img/bootstrap.jpg"
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                    ></img>{" "} */}
                          <span
                            className={
                              "ml-3 font-bold mt-3 " +
                              +(color === "light"
                                ? "text-blueGray-600"
                                : "text-white")
                            }
                          >
                            {data.payment_id}
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {`₹ ${data.amount} ${data.currency}`}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i
                            className={`fas fa-circle text-${getColorByStatus(
                              data.payment_status
                            )}-500 mr-2`}
                          ></i>{" "}
                          {data.payment_status}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex">
                            <img
                              src={
                                data.from_avatar
                                  ? data.from_avatar
                                  : "/img/team-1-800x800.jpg"
                              }
                              alt={data.to}
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                            />
                            {/* <img
                        src="/img/team-2-800x800.jpg"
                        alt="..."
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                      ></img>
                      <img
                        src="/img/team-3-800x800.jpg"
                        alt="..."
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                      ></img>
                      <img
                        src="/img/team-4-470x470.png"
                        alt="..."
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                      ></img> */}
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <img
                              src={
                                data.to_avatar
                                  ? data.to_avatar
                                  : "/img/team-2-800x800.jpg"
                              }
                              alt={data.from}
                              className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                            ></img>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          {/* <TableDropdown /> */}

                          <a
                            href={data.payment_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            <span className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-teal-200/60 ">
                              LINK
                            </span>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
