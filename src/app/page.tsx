export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#FCFAF7] font-lexend">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-3 border-b border-[#E5E8EB] bg-white">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start">
            <div className="w-4 h-4 relative">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.333333 13.146C0.333333 13.146 3.69873 11.0248 7 12.7231C10.6888 14.6208 13.6667 13.0693 13.6667 13.0693V1.33711C13.6667 1.33711 10.6893 2.8859 7.00103 0.98971C3.69903 -0.707909 0.333333 1.42365 0.333333 1.42365V13.146Z"
                  fill="#1C120D"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-[#1C120D] font-bold text-lg leading-[23px]">
            AgriAssist
          </h1>
        </div>

        <div className="flex justify-end items-start gap-8 flex-1">
          <div className="flex items-center gap-9">
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              English
            </span>
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              Profile
            </span>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex h-10 max-w-[480px] px-2.5 justify-center items-center gap-2 rounded-xl bg-[#F5EBE5]">
              <div className="flex flex-col items-center flex-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0.875C4.51269 0.875 0.875 4.51269 0.875 9C0.875 13.4873 4.51269 17.125 9 17.125C13.4873 17.125 17.125 13.4873 17.125 9C17.1203 4.51465 13.4853 0.879737 9 0.875ZM15.875 9C15.8757 9.88201 15.7059 10.7558 15.375 11.5734L11.8828 9.42578C11.7343 9.33416 11.5682 9.2748 11.3953 9.25156L9.6125 9.01094C9.11023 8.94545 8.61764 9.18743 8.3625 9.625H7.68125L7.38437 9.01094C7.21805 8.66443 6.90078 8.41436 6.525 8.33359L5.9 8.19844L6.51094 7.125H7.81641C8.02765 7.12459 8.23537 7.07084 8.42031 6.96875L9.37734 6.44063C9.46142 6.39376 9.54003 6.33768 9.61172 6.27344L11.7141 4.37187C12.1483 3.98276 12.2541 3.34437 11.9688 2.83594L11.9406 2.78516C14.3417 3.92369 15.8731 6.34263 15.875 9ZM10.1961 2.22969L10.875 3.44531L8.77266 5.34688L7.81641 5.875H6.51094C6.0637 5.87434 5.65018 6.11268 5.42656 6.5L4.74453 7.68984L3.95156 5.57734L4.80625 3.55625C6.33597 2.37428 8.29315 1.89208 10.1969 2.22813L10.1961 2.22969ZM2.125 9C2.12396 7.97814 2.35194 6.96904 2.79219 6.04688L3.67812 8.41172C3.82815 8.80959 4.17015 9.10391 4.58594 9.19297L6.26016 9.55313L6.55781 10.1719C6.76854 10.6012 7.20459 10.8737 7.68281 10.875H7.79844L7.23359 12.143C7.03017 12.5993 7.11804 13.133 7.45703 13.5L7.46797 13.5109L9 15.0891L8.84844 15.8703C5.11458 15.7834 2.1312 12.7349 2.125 9ZM10.1391 15.7797L10.2273 15.3258C10.3009 14.9347 10.185 14.532 9.91484 14.2398C9.91101 14.2364 9.90735 14.2327 9.90391 14.2289L8.375 12.6516L9.44531 10.25L11.2281 10.4906L14.8 12.6875C13.7535 14.331 12.0601 15.4544 10.1391 15.7797Z"
                    fill="#1C120D"
                  />
                </svg>
              </div>
            </div>
            <div className="flex h-10 max-w-[480px] px-2.5 justify-center items-center gap-2 rounded-xl bg-[#F5EBE5]">
              <div className="flex flex-col items-center flex-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0.875C4.51269 0.875 0.875 4.51269 0.875 9C0.875 13.4873 4.51269 17.125 9 17.125C13.4873 17.125 17.125 13.4873 17.125 9C17.1203 4.51465 13.4853 0.879737 9 0.875ZM4.7875 14.4297C5.70634 12.9927 7.29433 12.1232 9 12.1232C10.7057 12.1232 12.2937 12.9927 13.2125 14.4297C10.7347 16.3567 7.26527 16.3567 4.7875 14.4297ZM6.5 8.375C6.5 6.99429 7.61929 5.875 9 5.875C10.3807 5.875 11.5 6.99429 11.5 8.375C11.5 9.75571 10.3807 10.875 9 10.875C7.61929 10.875 6.5 9.75571 6.5 8.375ZM14.1375 13.5633C13.4404 12.5532 12.4603 11.7717 11.3203 11.3172C12.5755 10.3285 13.0665 8.65313 12.5433 7.1434C12.0201 5.63366 10.5978 4.62123 9 4.62123C7.40219 4.62123 5.97987 5.63366 5.45671 7.1434C4.93355 8.65313 5.42447 10.3285 6.67969 11.3172C5.5397 11.7717 4.55956 12.5532 3.8625 13.5633C1.40872 10.8039 1.57293 6.59901 4.23444 4.03942C6.89594 1.47983 11.1041 1.47983 13.7656 4.03942C16.4271 6.59901 16.5913 10.8039 14.1375 13.5633Z"
                    fill="#1C120D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex px-40 py-5 justify-center items-start flex-1">
        <div className="flex h-[613px] max-w-[960px] flex-col items-start flex-1">
          {/* Welcome Section */}
          <div className="flex px-4 py-5 pb-3 flex-col items-center w-full">
            <h2 className="text-[#1C120D] text-center font-bold text-[28px] leading-[35px] w-full">
              Welcome, Farmer Ethan!
            </h2>
          </div>

          <div className="flex px-4 py-1 pb-3 flex-col items-center w-full">
            <p className="text-[#1C120D] text-center font-normal text-base leading-6 w-full">
              Explore our services to enhance your farming experience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="flex p-4 flex-col items-start gap-3 w-full">
            <div className="flex items-start gap-3 flex-1 w-full">
              {/* Plant Health */}
              <div className="flex w-44 pb-3 flex-col items-start gap-3 flex-1">
                <img
                  className="h-44 w-full rounded-xl object-cover"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/41055db4fb418a3fd182130caf8a763118e9f98f?width=352"
                  alt=""
                />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[#1C120D] font-normal text-base leading-6 w-full">
                    Plant Health
                  </span>
                </div>
              </div>

              {/* Weather */}
              <div className="flex w-44 pb-3 flex-col items-start gap-3 flex-1">
                <img
                  className="h-44 w-full rounded-xl object-cover"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8d1a6d76d43a0a48a16929163f25ec8b3e93a01b?width=352"
                  alt=""
                />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[#1C120D] font-normal text-base leading-6 w-full">
                    Weather
                  </span>
                </div>
              </div>

              {/* Market Prices */}
              <div className="flex w-44 pb-3 flex-col items-start gap-3 flex-1">
                <img
                  className="h-44 w-full rounded-xl object-cover"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/60dec6687a1f3949f63325994a228b3450b5caa7?width=352"
                  alt=""
                />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[#1C120D] font-normal text-base leading-6 w-full">
                    Market Prices
                  </span>
                </div>
              </div>

              {/* Crop Advice */}
              <div className="flex w-44 pb-3 flex-col items-start gap-3 flex-1">
                <img
                  className="h-44 w-full rounded-xl object-cover"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/862f05e0b93182b7c3f052e7bc9631963d53f46e?width=352"
                  alt=""
                />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[#1C120D] font-normal text-base leading-6 w-full">
                    Crop Advice
                  </span>
                </div>
              </div>

              {/* AI Assistant */}
              <div className="flex w-44 pb-3 flex-col items-start gap-3 flex-1">
                <img
                  className="h-44 w-full rounded-xl object-cover"
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9b90378f58bbc379ff8a518e8f03a6963cd1b379?width=352"
                  alt=""
                />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[#1C120D] font-normal text-base leading-6 w-full">
                    AI Assistant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="flex justify-center items-start w-full">
        <div className="flex max-w-[960px] flex-col items-start flex-1">
          <div className="flex pb-3 flex-col items-start flex-1 w-full">
            <div className="flex px-4 justify-between items-start w-full border-b border-[#E8D9CF]">
              {/* Home Tab */}
              <div className="flex px-0 py-2.5 pb-1.5 flex-col justify-center items-center gap-1 flex-1 border-b-[3px] border-[#E5E8EB]">
                <div className="flex flex-col items-start">
                  <div className="w-6 flex-1 relative">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 absolute"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 8.83281V17.5C18 18.3284 17.3284 19 16.5 19H12.75C11.9216 19 11.25 18.3284 11.25 17.5V13.75C11.25 13.3358 10.9142 13 10.5 13H7.5C7.08579 13 6.75 13.3358 6.75 13.75V17.5C6.75 18.3284 6.07843 19 5.25 19H1.5C0.671573 19 0 18.3284 0 17.5V8.83281C-6.38962e-05 8.41309 0.17573 8.01254 0.484688 7.72844L7.98469 0.652188L7.995 0.641875C8.56719 0.121501 9.44124 0.121501 10.0134 0.641875C10.0166 0.645543 10.0201 0.648989 10.0238 0.652188L17.5238 7.72844C17.8296 8.01402 18.0022 8.41437 18 8.83281Z"
                        fill="#1C120D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#1C120D] font-bold text-sm leading-[21px] w-full">
                    Home
                  </span>
                </div>
              </div>

              {/* History Tab */}
              <div className="flex px-0 py-2.5 pb-1.5 flex-col justify-center items-center gap-1 flex-1 border-b-[3px] border-[#E5E8EB]">
                <div className="flex flex-col items-start">
                  <div className="w-6 flex-1 relative">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 absolute"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.75 4.5V8.57531L14.1362 10.6069C14.4914 10.8202 14.6064 11.2811 14.3931 11.6362C14.1798 11.9914 13.7189 12.1064 13.3638 11.8931L9.61375 9.64312C9.38799 9.50749 9.24992 9.26337 9.25 9V4.5C9.25 4.08579 9.58579 3.75 10 3.75C10.4142 3.75 10.75 4.08579 10.75 4.5ZM10 0C7.61024 -0.0059526 5.3174 0.944332 3.6325 2.63906C2.95094 3.32906 2.34531 3.99281 1.75 4.6875V3C1.75 2.58579 1.41421 2.25 1 2.25C0.585786 2.25 0.25 2.58579 0.25 3V6.75C0.25 7.16421 0.585786 7.5 1 7.5H4.75C5.16421 7.5 5.5 7.16421 5.5 6.75C5.5 6.33579 5.16421 6 4.75 6H2.59375C3.26406 5.21062 3.93156 4.46719 4.69281 3.69656C7.6018 0.787593 12.3111 0.764893 15.248 3.64568C18.1849 6.52648 18.253 11.2354 15.4007 14.1999C12.5484 17.1644 7.84035 17.278 4.84844 14.4544C4.6535 14.2702 4.3751 14.2039 4.1181 14.2806C3.8611 14.3574 3.66454 14.5653 3.60247 14.8263C3.54041 15.0872 3.62225 15.3614 3.81719 15.5456C6.75577 18.3187 11.1822 18.7935 14.6422 16.7069C18.1021 14.6202 19.7473 10.4835 18.6656 6.59055C17.5839 2.69759 14.0404 0.00262976 10 0Z"
                        fill="#9E6647"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#9E6647] font-bold text-sm leading-[21px] w-full">
                    History
                  </span>
                </div>
              </div>

              {/* Support Tab */}
              <div className="flex px-0 py-2.5 pb-1.5 flex-col justify-center items-center gap-1 flex-1 border-b-[3px] border-[#E5E8EB]">
                <div className="flex flex-col items-start">
                  <div className="w-6 flex-1 relative">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 absolute"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.125 14.875C11.125 15.4963 10.6213 16 10 16C9.37868 16 8.875 15.4963 8.875 14.875C8.875 14.2537 9.37868 13.75 10 13.75C10.6213 13.75 11.125 14.2537 11.125 14.875ZM10 4.75C7.93188 4.75 6.25 6.26406 6.25 8.125V8.5C6.25 8.91421 6.58579 9.25 7 9.25C7.41421 9.25 7.75 8.91421 7.75 8.5V8.125C7.75 7.09375 8.75969 6.25 10 6.25C11.2403 6.25 12.25 7.09375 12.25 8.125C12.25 9.15625 11.2403 10 10 10C9.58579 10 9.25 10.3358 9.25 10.75V11.5C9.25 11.9142 9.58579 12.25 10 12.25C10.4142 12.25 10.75 11.9142 10.75 11.5V11.4325C12.46 11.1184 13.75 9.75438 13.75 8.125C13.75 6.26406 12.0681 4.75 10 4.75ZM19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3824 0.255684 19.7443 4.61758 19.75 10ZM18.25 10C18.25 5.44365 14.5563 1.75 10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 14.5563 5.44365 18.25 10 18.25C14.5542 18.2448 18.2448 14.5542 18.25 10Z"
                        fill="#9E6647"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#9E6647] font-bold text-sm leading-[21px] w-full">
                    Support
                  </span>
                </div>
              </div>

              {/* Feedback Tab */}
              <div className="flex px-0 py-2.5 pb-1.5 flex-col justify-center items-center gap-1 flex-1 border-b-[3px] border-[#E5E8EB]">
                <div className="flex flex-col items-start">
                  <div className="w-6 flex-1 relative">
                    <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 absolute"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5 9.25C20.4974 6.76579 18.4842 4.75258 16 4.75H12.2688C11.9959 4.73406 7.24187 4.39937 2.71469 0.6025C2.26836 0.227648 1.64529 0.145289 1.11689 0.391299C0.588491 0.637309 0.250443 1.16714 0.25 1.75V16.75C0.250079 17.333 0.58799 17.8632 1.11646 18.1094C1.64494 18.3557 2.26823 18.2734 2.71469 17.8984C6.25562 14.9284 9.93344 14.0772 11.5 13.8391V16.8128C11.4994 17.3148 11.7499 17.7839 12.1675 18.0625L13.1987 18.7497C13.6032 19.0196 14.1134 19.0768 14.5676 18.903C15.0217 18.7292 15.3635 18.346 15.4844 17.875L16.5878 13.7163C18.8269 13.4183 20.4995 11.5088 20.5 9.25ZM1.75 16.7434V1.75C5.76344 5.11656 9.87156 5.96875 11.5 6.17875V12.3175C9.87344 12.5312 5.76625 13.3816 1.75 16.7434ZM14.0312 17.4934V17.5037L13 16.8166V13.75H15.025L14.0312 17.4934ZM16 12.25H13V6.25H16C17.6569 6.25 19 7.59315 19 9.25C19 10.9069 17.6569 12.25 16 12.25Z"
                        fill="#9E6647"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[#9E6647] font-bold text-sm leading-[21px] w-full">
                    Feedback
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
