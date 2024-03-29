import React from "react";

import { useSession } from "next-auth/react";

// components

export default function CardSettings() {
  const { data } = useSession();

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={data?.user ? data?.user?.name : "admin"}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={
                      data?.user ? data?.user?.email : "admin@mail.com"
                    }
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Invite Bot
            </h6>
            <div className="flex flex-grow flex-col md:flex-row">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=921836573463560202&permissions=8&scope=applications.commands%20bot"
                className="get-started text-blueGray-800 font-bold flex items-center max-w-prose px-4 py-4 rounded outline-none focus:outline-none mr-4 mb-1 bg-blueGray-100 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="block h-5 w-5 mr-2"
                  src="/img/discord-icon.png"
                  alt="Discord"
                />
                <p>Invite to Discord</p>
              </a>
              <a
                href="https://slack.com/oauth/v2/authorize?client_id=2883656288675.2885959981908&scope=app_mentions:read,channels:history,chat:write,commands,im:history,im:read,im:write,channels:read,mpim:history,mpim:read,files:write,users:read,users:write,users:read.email&user_scope="
                target="_blank"
                className="get-started text-blueGray-800 font-bold flex items-center max-w-prose px-4 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-100 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                rel="noreferrer"
              >
                <img
                  className="block h-5 w-5 mr-2"
                  src="/img/slack-icon.png"
                  alt="Discord"
                />
                <p>Invite to Slack</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
