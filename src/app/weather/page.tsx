export default function WeatherPage() {
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
              Home
            </span>
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              Weather
            </span>
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              Market
            </span>
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              Community
            </span>
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              Profile
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex h-10 max-w-[480px] px-2.5 justify-center items-center gap-2 rounded-xl bg-[#F5EBE5]">
              <div className="flex flex-col items-center flex-1">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3281 12.7453C14.8945 11.9984 14.25 9.88516 14.25 7.125C14.25 3.67322 11.4518 0.875 8 0.875C4.54822 0.875 1.75 3.67322 1.75 7.125C1.75 9.88594 1.10469 11.9984 0.671094 12.7453C0.445722 13.1318 0.444082 13.6092 0.666796 13.9973C0.889509 14.3853 1.30261 14.6247 1.75 14.625H4.93828C5.23556 16.0796 6.51529 17.1243 8 17.1243C9.48471 17.1243 10.7644 16.0796 11.0617 14.625H14.25C14.6972 14.6244 15.1101 14.3849 15.3326 13.9969C15.5551 13.609 15.5534 13.1317 15.3281 12.7453ZM8 15.875C7.20562 15.8748 6.49761 15.3739 6.23281 14.625H9.76719C9.50239 15.3739 8.79438 15.8748 8 15.875ZM1.75 13.375C2.35156 12.3406 3 9.94375 3 7.125C3 4.36358 5.23858 2.125 8 2.125C10.7614 2.125 13 4.36358 13 7.125C13 9.94141 13.6469 12.3383 14.25 13.375H1.75Z"
                    fill="#1C120D"
                  />
                </svg>
              </div>
            </div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://api.builder.io/api/v1/image/assets/TEMP/da1d9000cefb1b709c3d4488cc130fcd506f2bc6?width=80"
              alt="Profile"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex px-40 py-5 justify-center items-start flex-1">
        <div className="flex max-w-[960px] flex-col items-start flex-1">
          {/* Today's Weather Section */}
          <div className="flex px-4 py-5 pb-3 flex-col items-start w-full">
            <h2 className="text-[#1C120D] font-bold text-[28px] leading-[35px] w-full">
              Today's Weather
            </h2>
          </div>

          {/* Location Input */}
          <div className="flex max-w-[480px] px-4 py-3 items-end gap-4 flex-wrap">
            <div className="flex min-w-[160px] flex-col items-start flex-1">
              <div className="flex h-14 px-4 items-center w-full rounded-xl bg-[#F5EBE5]">
                <span className="text-[#9E6647] text-base font-normal leading-6">
                  Enter your location
                </span>
              </div>
            </div>
          </div>

          {/* Current Conditions Section */}
          <div className="flex px-4 py-5 pb-3 flex-col items-start w-full">
            <h3 className="text-[#1C120D] font-bold text-[22px] leading-7 w-full">
              Current Conditions
            </h3>
          </div>

          {/* Current Conditions Cards */}
          <div className="flex px-4 py-4 items-start gap-4 w-full flex-wrap">
            {/* Temperature Card */}
            <div className="flex min-w-[158px] px-6 py-6 flex-col items-start gap-2 flex-1 rounded-xl bg-[#F5EBE5]">
              <div className="flex flex-col items-start w-full">
                <span className="text-[#1C120D] text-base font-normal leading-6 w-full">
                  Temperature
                </span>
              </div>
              <div className="flex flex-col items-start w-full">
                <span className="text-[#1C120D] text-2xl font-bold leading-[30px] w-full">
                  25°C
                </span>
              </div>
            </div>

            {/* Humidity Card */}
            <div className="flex min-w-[158px] px-6 py-6 flex-col items-start gap-2 flex-1 rounded-xl bg-[#F5EBE5]">
              <div className="flex flex-col items-start w-full">
                <span className="text-[#1C120D] text-base font-normal leading-6 w-full">
                  Humidity
                </span>
              </div>
              <div className="flex flex-col items-start w-full">
                <span className="text-[#1C120D] text-2xl font-bold leading-[30px] w-full">
                  60%
                </span>
              </div>
            </div>

            {/* Wind Speed Card */}
            <div className="flex min-w-[158px] px-6 py-6 flex-col items-start gap-2 flex-1 rounded-xl bg-[#F5EBE5]">
              <div className="flex flex-col items-start w-full">
                <span className="text-[#1C120D] text-base font-normal leading-6 w-full">
                  Wind Speed
                </span>
              </div>
              <div className="flex flex-col items-start w-full">
                <span className="text-[#1C120D] text-2xl font-bold leading-[30px] w-full">
                  15 km/h
                </span>
              </div>
            </div>
          </div>

          {/* Forecast Section */}
          <div className="flex px-4 py-5 pb-3 flex-col items-start w-full">
            <h3 className="text-[#1C120D] font-bold text-[22px] leading-7 w-full">
              Forecast
            </h3>
          </div>

          {/* Forecast Table */}
          <div className="flex px-4 py-3 flex-col items-start w-full">
            <div className="flex items-start w-full rounded-xl border border-[#E8D9CF] bg-[#FCFAF7]">
              <div className="flex flex-col items-start flex-1">
                {/* Table Header */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-start flex-1 w-full bg-[#FCFAF7]">
                    <div className="flex w-72 px-4 py-3 flex-col items-start w-full">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Day
                      </span>
                    </div>
                    <div className="flex w-[99px] px-4 py-3 flex-col items-start w-full">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Condition
                      </span>
                    </div>
                    <div className="flex w-[270px] px-4 py-3 flex-col items-start w-full">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        High
                      </span>
                    </div>
                    <div className="flex w-[270px] px-4 py-3 flex-col items-start w-full">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Low
                      </span>
                    </div>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="flex flex-col items-start w-full">
                  {/* Monday */}
                  <div className="flex h-[72px] items-start w-full border-t border-[#E5E8EB]">
                    <div className="flex w-72 h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Monday
                      </span>
                    </div>
                    <div className="flex w-[99px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://api.builder.io/api/v1/image/assets/TEMP/a27d14cdace3a72dc724f56a5dd1d920947879c8?width=80"
                        alt="Weather condition"
                      />
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        28°C
                      </span>
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        20°C
                      </span>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="flex h-[72px] items-start w-full border-t border-[#E5E8EB]">
                    <div className="flex w-72 h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Tuesday
                      </span>
                    </div>
                    <div className="flex w-[99px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://api.builder.io/api/v1/image/assets/TEMP/3b40259ed28e85afdceae26e7cb45de38ed46e8c?width=80"
                        alt="Weather condition"
                      />
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        27°C
                      </span>
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        21°C
                      </span>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="flex h-[72px] items-start w-full border-t border-[#E5E8EB]">
                    <div className="flex w-72 h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Wednesday
                      </span>
                    </div>
                    <div className="flex w-[99px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://api.builder.io/api/v1/image/assets/TEMP/cd29c5e1b745311f0578f3fa00be979545150d68?width=80"
                        alt="Weather condition"
                      />
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        25°C
                      </span>
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        20°C
                      </span>
                    </div>
                  </div>

                  {/* Thursday */}
                  <div className="flex h-[72px] items-start w-full border-t border-[#E5E8EB]">
                    <div className="flex w-72 h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Thursday
                      </span>
                    </div>
                    <div className="flex w-[99px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://api.builder.io/api/v1/image/assets/TEMP/e85c0acfca919b9fca2b5c7d0b07c8f6b0a04823?width=80"
                        alt="Weather condition"
                      />
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        29°C
                      </span>
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        22°C
                      </span>
                    </div>
                  </div>

                  {/* Friday */}
                  <div className="flex h-[72px] items-start w-full border-t border-[#E5E8EB]">
                    <div className="flex w-72 h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#1C120D] text-sm font-normal leading-[21px] w-full">
                        Friday
                      </span>
                    </div>
                    <div className="flex w-[99px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://api.builder.io/api/v1/image/assets/TEMP/29a974650c708f7aebd8366ca8e8594edfe39585?width=80"
                        alt="Weather condition"
                      />
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        28°C
                      </span>
                    </div>
                    <div className="flex w-[270px] h-[72px] px-4 py-2 flex-col justify-center items-center">
                      <span className="text-[#9E6647] text-sm font-normal leading-[21px] w-full">
                        21°C
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
