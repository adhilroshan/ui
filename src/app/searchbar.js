"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

const SearchBar = ({ setLoading, setHtml, setComponent }) => {
    const parseResponseData = (responseData) => {
        // Regular expressions to match HTML, CSS, and JavaScript code blocks
        const htmlRegex = /```html\n([\s\S]+?)\n```/;
        const cssRegex = /```css\n([\s\S]+?)\n```/;
        const jsRegex = /```javascript\n([\s\S]+?)\n```/;

        // Extract HTML, CSS, and JavaScript code from the response
        const htmlMatch = responseData.response.match(htmlRegex);
        const cssMatch = responseData.response.match(cssRegex);
        const jsMatch = responseData.response.match(jsRegex);

        // Output the extracted code
        const htmlCode = htmlMatch ? htmlMatch[1] : '';
        const cssCode = cssMatch ? cssMatch[1] : '';
        const jsCode = jsMatch ? jsMatch[1] : '';

        console.log("HTML Code:\n", htmlCode);
        console.log("CSS Code:\n", cssCode);
        console.log("JavaScript Code:\n", jsCode);

        return { htmlCode, cssCode, jsCode }
    }


    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = async data => {
        console.log(data.search);
        setLoading(true)
        try {
            const response = await fetch('http://localhost:8000/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: data.search
                })
            });

            const responseData = await response.json();
            console.log(responseData);
            const { htmlCode, cssCode, jsCode } = parseResponseData(responseData);

            console.log("HTML Code:\n", htmlCode);
            console.log("CSS Code:\n", cssCode);
            console.log("JavaScript Code:\n", jsCode);
            setComponent({
                html: htmlCode,
                css: cssCode,
                js: jsCode
            })

            const renderHtml = `${htmlCode}<style>${cssCode}</style><script>${jsCode}</script>`
            setHtml(renderHtml);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    // rest of your component
    return (
        // <div class='max-w-xl mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-center w-full  h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full  w-12 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            <input
                className="peer h-full w-full text-wrap overflow-scroll outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                {...register('search', { required: true })}
                placeholder="Search something.." />
            <button className='px-4 cursor-pointer' type="submit">
                <svg height="80px" width="80px" className='w-6 h-6 fill-gray-300 hover:fill-gray-500 transition-all duration-300' viewBox="0 0 330 330">
                    <g id="XMLID_2_">
                        <path id="XMLID_4_" d="M145.606,74.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l69.393,69.392
		l-69.393,69.395c-5.858,5.858-5.858,15.355,0,21.213C127.322,258.536,131.161,260,135,260s7.678-1.464,10.606-4.394l80-80.002
		c2.814-2.813,4.394-6.628,4.394-10.607c0-3.979-1.58-7.794-4.394-10.607L145.606,74.393z"/>
                        <path id="XMLID_5_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
		c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
                    </g>
                </svg>
            </button>

        </form>
        // </div>
    )
}

export default SearchBar