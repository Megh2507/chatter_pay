/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

// import '../styles/index.css';

export default function Index() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                <span className="text-blue-600">Chatterpay </span>
                - Next generation payment bot for chats.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Chatterpay is the only bot that you need to automate all your payments in
                you Discord & Slack communities. It is free to use and it is
                completely safe and secure. Invite our bot to your server and get started!
              </p>
              <div className="mt-12 flex">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=921836573463560202&permissions=8&scope=applications.commands%20bot"
                  target="_blank"
                  className="get-started text-blueGray-800 font-bold flex items-center max-w-prose px-4 py-4 rounded outline-none focus:outline-none mr-4 mb-1 bg-blueGray-100 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <img className="block h-5 w-5 mr-2" src="/img/discord-icon.png" alt="Discord" />
                  <p>Invite to Discord</p>
                </a>
                <a
                  href=" https://slack.com/oauth/v2/authorize?client_id=2883656288675.2885959981908&scope=app_mentions:read,channels:history,chat:write,commands,im:history,im:read,im:write,channels:read,mpim:history,mpim:read,files:write,users:read,users:write,users:read.email&user_scope="
                  target="_blank"
                  className="get-started text-blueGray-800 font-bold flex items-center max-w-prose px-4 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-100 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <img className="block h-5 w-5 mr-2" src="/img/slack-icon.png" alt="Discord" />
                  <p>Invite to Slack</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/circle-scatter-haikei.svg"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-16">
              <div className="relative flex flex-col min-w-0 w-full mb-6 animate-bounce">
                <img
                data-aos="fade-right"
               
                data-aos-offset="500"
                data-aos-duration="500"
                
                  alt="..."
                  src="/img/moneyhand.png"
                  className="w-full align-middle rounded-t-lg "
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-users"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        P2P payments
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Send money to anyone through your chats.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Safer transactions
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Totally secured and backed by
                        Razorpay's payment gateway security.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-chart-bar"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Dashboard
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Comes with a dashboard that helps you to
                        manage your transactions.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-user-shield"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Easy to use
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built with the latest technologies and
                        is easy to use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="flex items-center">
                <img className="block h-10 w-10 mr-2" src="/img/discord-icon.png" alt="Discord" />
                <h3 className="text-3xl mb-2 font-semibold leading-normal">Chatterpay Discord bot</h3>
              </div>

              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
            </div>
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 mt-32" >
              <img
            data-aos="zoom-in"
            data-aos-duration="3000"
                alt="..."
                className="max-w-full rounded-lg shadow-2xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/discord-workflow.png"
              />
            </div>

            {/* <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/component-btn.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/component-profile-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/component-info-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/component-info-2.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/component-menu.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/component-btn-pink.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div> */}
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <img
               data-aos="zoom-in"
               data-aos-duration="3000"
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(11deg) rotateX(-2deg) rotate(-2deg)",
                }}
                src="/img/slack-workflow.png"
              />
            </div>
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="flex items-center">
                <img className="block h-10 w-10 mr-2" src="/img/slack-icon.png" alt="Discord" />
                <h3 className="text-3xl mb-2 font-semibold leading-normal">Chatterpay Slack bot</h3>
              </div>

              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
            </div>
          </div>
          <div className="justify-center text-center flex flex-wrap mt-48">
            <div className="w-full md:w-8/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">Bot Commands</h2>
              <p className="text-2xl leading-relaxed mt-4 mb-4 text-blueGray-500">
                Make payments using only
                <span className="font-bold uppercase text-blue-600"> one </span>
                single command!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-12">
            <div className="w-full lg:w-4/12 px-4">
              <h5 className="text-xl font-semibold pb-4 text-center">
                Discord command
              </h5>
              <Link href="/auth/login">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <img
                  data-aos="fade-up"
                  data-aos-duration="3000"
                    alt="..."
                    className="align-middle border-none max-w-full h-auto rounded-lg"
                    src="/img/discord-command.png"
                  />
                </div>
              </Link>
            </div>


            <div className="w-full lg:w-4/12 px-4">
              <h5 className="text-xl font-semibold pb-4 text-center">
                Slack command
              </h5>
              <Link href="/landing">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <img
                  data-aos="fade-up"
                  data-aos-duration="3000"
                    alt="..."
                    className="align-middle border-none max-w-full h-auto rounded-lg"
                    src="/img/slack-command.png"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-16 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    Chatterpay Dashboard
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Track all your payments made from Discord and Slack in our
                    featured dashboard.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-search-dollar"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Track transactions history
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-chart-line"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            View expenditure insights
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                data-aos="zoom-in"
                  alt="..."
                  className="max-w-full"
                  src="/img/dashboard-mockup.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
