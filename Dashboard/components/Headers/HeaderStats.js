import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DISCORD PAYMENTS"
                  statTitle="6"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fab fa-discord"
                  statIconColor="bg-indigo-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SLACK PAYMENTS"
                  statTitle="5"
                  statArrow="UP"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIconName="fab fa-slack"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="WHATSAPP PAYMENTS"
                  statTitle="Coming soon..."
                  statArrow=""
                  statPercent=".."
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fab fa-whatsapp"
                  statIconColor="bg-emerald-400"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TELEGRAM"
                  statTitle="Coming soon..."
                  statArrow=""
                  statPercent=".."
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fab fa-telegram-plane"
                  statIconColor="bg-lightBlue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
