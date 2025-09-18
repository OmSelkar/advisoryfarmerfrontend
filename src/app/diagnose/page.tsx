export default function DiagnosePage() {
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
              My Crops
            </span>
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              Marketplace
            </span>
            <span className="text-[#1C120D] text-sm font-normal leading-[21px]">
              Community
            </span>
          </div>
          <div className="flex items-start gap-8">
            <div className="flex h-10 max-w-[480px] px-2.5 justify-center items-center gap-2 rounded-xl bg-[#F5EBE5]">
              <div className="flex flex-col items-center flex-1">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              className="w-10 h-10 rounded-full object-cover"
              src="https://api.builder.io/api/v1/image/assets/TEMP/b1239d538d4e2dd53efd8c2d8fbcfaa9122fded4?width=80"
              alt="Profile"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex px-40 py-5 justify-center items-start flex-1">
        <div className="flex h-[695px] max-w-[960px] flex-col items-start flex-1">
          {/* Title Section */}
          <div className="flex p-4 justify-between items-start self-stretch flex-wrap gap-3">
            <div className="flex min-w-[288px] flex-col items-start">
              <h1 className="text-[#1C120D] font-bold text-[32px] leading-10 self-stretch">
                Diagnose Plant Health
              </h1>
            </div>
          </div>

          {/* Upload Section */}
          <div className="flex px-4 py-6 flex-col items-start self-stretch">
            <div className="flex flex-col items-center gap-6 self-stretch">
              {/* Plant Illustration */}
              <img
                className="h-[203px] max-w-[360px] self-stretch rounded-xl object-cover"
                src="https://api.builder.io/api/v1/image/assets/TEMP/f1da92722eb84e674c7dcf6c7cc2ac491301c001?width=720"
                alt="Plant health illustration"
              />

              {/* Upload Instructions */}
              <div className="flex max-w-[480px] flex-col items-center gap-2">
                <div className="flex h-[23px] max-w-[480px] flex-col items-center">
                  <h2 className="text-[#1C120D] text-center font-bold text-lg leading-[23px] self-stretch">
                    Upload a Photo
                  </h2>
                </div>
                <div className="flex max-w-[480px] flex-col items-center">
                  <p className="text-[#1C120D] text-center font-normal text-sm leading-[21px] self-stretch">
                    Take a clear photo of the affected plant area to get a diagnosis.
                  </p>
                </div>
              </div>

              {/* Upload Button */}
              <div className="flex h-10 min-w-[84px] max-w-[480px] px-4 justify-center items-center rounded-xl bg-[#F5EBE5]">
                <div className="flex flex-col items-center">
                  <span className="text-[#1C120D] text-center font-bold text-sm leading-[21px] line-clamp-1 overflow-hidden text-ellipsis">
                    Upload Photo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="flex px-4 py-3 justify-end items-start self-stretch">
            <div className="flex h-12 min-w-[84px] max-w-[480px] px-5 justify-center items-center rounded-xl bg-[#F05C05]">
              <div className="flex flex-col items-center">
                <span className="text-[#FCFAF7] text-center font-bold text-base leading-6 line-clamp-1 overflow-hidden text-ellipsis">
                  Submit
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
