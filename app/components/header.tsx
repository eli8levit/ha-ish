import { NavLink } from "@remix-run/react";

const linkDefaultClassName =
  "flex items-center gap-x-0.5 p-1.5 font-serif text-lg font-medium text-black transition-all hover:text-green-800";

export const Header = () => {
  return (
    <div className="sticky top-0 z-20 md:-mb-20">
      <header className="flex w-full flex-row flex-row-reverse flex-wrap-reverse items-center justify-end gap-x-4 py-2 px-4 backdrop-blur-sm">
        <nav className="flex gap-x-4 md:mt-3 md:mr-5 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${linkDefaultClassName} rounded-sm bg-greenSecondary !text-white hover:text-white`
                : linkDefaultClassName
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="1 12 12 2.83 23 12"></polyline>
              <polyline points="19.33 9.25 19.33 21.17 14.75 21.17 14.75 13.83 9.25 13.83 9.25 21.17 4.67 21.17 4.67 9.25"></polyline>
            </svg>
            <span className="opacity-90">בית</span>
          </NavLink>
          <NavLink to="/#blog" className={linkDefaultClassName}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7.23,20.59l-4.78,1,1-4.78L17.89,2.29A2.69,2.69,0,0,1,19.8,1.5h0a2.7,2.7,0,0,1,2.7,2.7h0a2.69,2.69,0,0,1-.79,1.91Z"></path>
              <line x1="0.55" y1="22.5" x2="23.45" y2="22.5"></line>
              <line x1="19.64" y1="8.18" x2="15.82" y2="4.36"></line>
            </svg>
            <span className="opacity-90">כתיבה</span>
          </NavLink>
        </nav>
        <svg
          viewBox="0 0 312 767"
          width="40px"
          fill="none"
          className="absolute left-3 top-0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M312 103H131L.5 449.5 312 767V103Z" fill="black" />
          <path
            d="M259.19 304.96c-2.48 0-4.34-1.033-5.58-3.1l-68.2-97.03c-3.307 2.48-5.683 5.683-7.13 9.61-1.24 3.72-1.86 9.093-1.86 16.12v33.17h20.15c1.86 0 3.41.62 4.65 1.86 1.24 1.24 1.86 2.79 1.86 4.65v23.25c0 1.86-.62 3.41-1.86 4.65-1.24 1.24-2.79 1.86-4.65 1.86h-44.02c-3.72 0-6.923-1.24-9.61-3.72-2.48-2.687-3.72-5.89-3.72-9.61V231.8c0-12.813 1.757-23.457 5.27-31.93 3.513-8.473 9.403-16.017 17.67-22.63l2.48-2.17-24.49-35.03c-.827-1.033-1.24-2.273-1.24-3.72 0-2.273 1.033-4.133 3.1-5.58l19.53-13.95c1.033-.827 2.273-1.24 3.72-1.24 2.273 0 4.133 1.033 5.58 3.1l59.52 84.94c7.027-.62 12.813-3.1 17.36-7.44 4.753-4.547 7.13-10.127 7.13-16.74v-24.8h-20.46c-1.86 0-3.41-.62-4.65-1.86-1.24-1.24-1.86-2.79-1.86-4.65v-23.25c0-1.86.62-3.41 1.86-4.65 1.24-1.24 2.79-1.86 4.65-1.86h44.33c3.72 0 6.82 1.343 9.3 4.03 2.687 2.48 4.03 5.58 4.03 9.3v46.19c0 13.227-3.617 24.697-10.85 34.41-7.233 9.713-17.257 16.637-30.07 20.77l33.17 47.43c.827 1.033 1.24 2.273 1.24 3.72 0 2.273-1.033 4.133-3.1 5.58l-19.53 13.95c-1.033.827-2.273 1.24-3.72 1.24Z"
            fill="url(#a)"
          />
          <path
            d="M210.6 566.4c-3.2 0-5.6-1.333-7.2-4l-88-125.2c-4.267 3.2-7.333 7.333-9.2 12.4-1.6 4.8-2.4 11.733-2.4 20.8v42.8h26c2.4 0 4.4.8 6 2.4 1.6 1.6 2.4 3.6 2.4 6v30c0 2.4-.8 4.4-2.4 6-1.6 1.6-3.6 2.4-6 2.4H73c-4.8 0-8.933-1.6-12.4-4.8-3.2-3.467-4.8-7.6-4.8-12.4V472c0-16.533 2.267-30.267 6.8-41.2 4.533-10.933 12.133-20.667 22.8-29.2l3.2-2.8L57 353.6c-1.067-1.333-1.6-2.933-1.6-4.8 0-2.933 1.333-5.333 4-7.2l25.2-18c1.333-1.067 2.933-1.6 4.8-1.6 2.933 0 5.333 1.333 7.2 4l76.8 109.6c9.067-.8 16.533-4 22.4-9.6 6.133-5.867 9.2-13.067 9.2-21.6v-32h-26.4c-2.4 0-4.4-.8-6-2.4-1.6-1.6-2.4-3.6-2.4-6v-30c0-2.4.8-4.4 2.4-6 1.6-1.6 3.6-2.4 6-2.4h57.2c4.8 0 8.8 1.733 12 5.2 3.467 3.2 5.2 7.2 5.2 12v59.6c0 17.067-4.667 31.867-14 44.4-9.333 12.533-22.267 21.467-38.8 26.8l42.8 61.2c1.067 1.333 1.6 2.933 1.6 4.8 0 2.933-1.333 5.333-4 7.2l-25.2 18c-1.333 1.067-2.933 1.6-4.8 1.6Z"
            fill="url(#b)"
          />
          <defs>
            <linearGradient
              id="a"
              x1="214.5"
              y1="0"
              x2="215"
              y2="310"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".613" stopColor="#44FFBC" />
              <stop offset="1" stopColor="#22C2AF" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="153"
              y1="317"
              x2="153"
              y2="615.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".441" stopColor="#00E075" />
              <stop offset="1" stopColor="#01542C" />
            </linearGradient>
          </defs>
        </svg>
      </header>
    </div>
  );
};
