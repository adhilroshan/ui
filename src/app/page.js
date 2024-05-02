"use client"

// import Image from "next/image";
import SearchBar from "./searchbar";
import { useState } from "react";
import { Platypi } from 'next/font/google'
import LoaderSimple from "./LoaderSimple";

const platypi = Platypi({
  subsets: ['latin'],
});
export default function Home() {
  const DownloadManager = () => {

  }

  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState(""); 
  const [component, setComponent] = useState({
    html: "",
    css: "",
    js: ""
  })
  console.log(component)
  return (
    <>
      <main className="bg-gradient-to-r  from-blue-200/80 to-orange-200/80 w-screen min-h-screen max-h-max h-screen  py-10 ">
        <div className="w-full h-full max-w-5xl mx-auto flex grow gap-9 flex-col justify-center items-center ">
          {/* <div className={`${platypi.className} drop-shadow-lg  py-12 text-center w-full bg-gradient-to-r from-red-400/60 to-orange-400/60  rounded-2xl font-bold text-8xl `}>
            UI Forge
          </div> */}
          {
            loading ? (
              <div className={`${platypi.className} relative drop-shadow-lg flex items-center justify-center  h-4/6 text-center w-full bg-gradient-to-tr from-blue-400/60 to-orange-300/60  rounded-2xl font-bold text-9xl `}>
                <LoaderSimple />
              </div>
            ) :
              html ? <div className="drop-shadow-lg  text-center w-full bg-blue-100   rounded-2xl" dangerouslySetInnerHTML={{
                __html: html
              }
              } /> : <div className={`${platypi.className} relative drop-shadow-lg flex py-10 items-center justify-center  h-4/6 text-center w-full bg-gradient-to-tr from-blue-400/60 to-orange-300/60  rounded-2xl font-bold text-9xl `}>
                <div className="mix-blend-exclusion text-black"> UI Forge</div>
              </div>
          }
          <div className=" flex w-full gap-3">

            <SearchBar setLoading={setLoading} setHtml={setHtml} setComponent={setComponent} />
            {
              html ? <button onClick={() => DownloadManager()} className="px-4 py-2 rounded-lg bg-orange-100 text-black/80 flex justify-center items-center font-medium"><svg width="80px" height="80px" className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM11.1086 15.5387C10.8539 15.8653 10.9121 16.3366 11.2387 16.5914C11.5653 16.8461 12.0366 16.7879 12.2914 16.4613L11.1086 15.5387ZM16.1914 11.4613C16.4461 11.1347 16.3879 10.6634 16.0613 10.4086C15.7347 10.1539 15.2634 10.2121 15.0086 10.5387L16.1914 11.4613ZM11.1086 16.4613C11.3634 16.7879 11.8347 16.8461 12.1613 16.5914C12.4879 16.3366 12.5461 15.8653 12.2914 15.5387L11.1086 16.4613ZM8.39138 10.5387C8.13662 10.2121 7.66533 10.1539 7.33873 10.4086C7.01212 10.6634 6.95387 11.1347 7.20862 11.4613L8.39138 10.5387ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM12.2914 16.4613L16.1914 11.4613L15.0086 10.5387L11.1086 15.5387L12.2914 16.4613ZM12.2914 15.5387L8.39138 10.5387L7.20862 11.4613L11.1086 16.4613L12.2914 15.5387ZM12.45 16V5H10.95V16H12.45Z" fill="#000000" />
              </svg></button> : ""
            }

          </div>
        </div>
      </main>
    </>
  );
}

// // Regular expressions to match HTML, CSS, and JavaScript code blocks
// const htmlRegex = /```html\n([\s\S]+?)\n```/;
// const cssRegex = /```css\n([\s\S]+?)\n```/;
// const jsRegex = /```javascript\n([\s\S]+?)\n```/;

// // Extract HTML, CSS, and JavaScript code from the response
// const htmlMatch = api_response.response.match(htmlRegex);
// const cssMatch = api_response.response.match(cssRegex);
// const jsMatch = api_response.response.match(jsRegex);

// // Output the extracted code
// const htmlCode = htmlMatch ? htmlMatch[1] : '';
// const cssCode = cssMatch ? cssMatch[1] : '';
// const jsCode = jsMatch ? jsMatch[1] : '';

// console.log("HTML Code:\n", htmlCode);
// console.log("CSS Code:\n", cssCode);
// console.log("JavaScript Code:\n", jsCode);

