import React from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";

// layout for page

import Admin from "layouts/Admin.js";
import CardTable from "components/Cards/CardTable";

export default function Dashboard({ tableDataDiscord, tableDataSlack }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <CardTable tableData={tableDataDiscord} tablePlatform="Discord" />
        </div>
        <div className="w-full px-4">
          <CardTable tableData={tableDataSlack} tablePlatform="Slack" />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  // get user data from auth, query DB with proper user_id / discord_id / slack_id

  const { data: discordData } = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URI}/paymentsFromUser`,
    {
      id: "Mav#8994",
    }
  );

  const { data: slackData } = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URI}/paymentsFromUser`,
    {
      id: "anomchakravorty3008",
    }
  );

  // const data = null;

  // in case of server failure, just fking display fake data

  if (!discordData) {
    const dummyData = [
      {
        _id: "61caebb836705c81de328b16",
        payment_id: "plink_IcCkB1M8JlTn2g",
        from: "Mav#8994",
        to: "code#7816",
        amount: 444,
        currency: "INR",
        payment_status: "created",
        reference_id: "YGSAF",
        platform: "slack",
        payment_link: "https://rzp.io/i/Btc8jj5IsI",
        __v: 0,
        created_at: "2021-12-30T17:51:46.051Z",
      },
      {
        _id: "61caebb836705c81de38735",
        payment_id: "plink_IcCkB1M8JlJnTf",
        from: "Mav#8994",
        to: "code#7816",
        amount: 499,
        currency: "INR",
        payment_status: "paid",
        reference_id: "YGSAF",
        platform: "discord",
        payment_link: "https://rzp.io/i/Btc8jj5IsI",
        __v: 0,
        created_at: "2021-12-30T17:51:46.051Z",
      },
    ];

    // split table into two based on platform
    const discordTableDummy = dummyData.filter(
      (row) => row?.platform === "discord"
    );
    const slackTableDummy = dummyData.filter(
      (row) => row?.platform === "slack"
    );

    return {
      props: {
        tableDataDiscord: discordTableDummy,
        tableDataSlack: slackTableDummy,
      },
    };
  }

  // const discordTable = data.filter((row) => row?.platform === "discord");
  // const slackTable = data.filter((row) => row?.platform === "slack");

  return {
    props: {
      tableDataDiscord: discordData,
      tableDataSlack: slackData,
    },
  };
}

Dashboard.layout = Admin;
