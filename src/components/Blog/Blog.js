import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Quiz Today
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Welcome</span>
                        </span>{' '}
                        to the world’s largest quiz community.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">Play a quiz or create your own. Join a virtual or live event. There's a Sporcle for everyone!
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Qus 1: What is the purpose of react router?
                            </p>
                            <p className="text-gray-700">
                                Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                                <br />
                                <br />
                                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Qus 2: How does context api work?
                            </p>
                            <p className="text-gray-700">
                                The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.
                                <br />
                                <br />
                                With the new Context API, several new functions have been added to the mix creating giving us a rich tool to work with. If you’ve previously attempted to use the old (experimental, do not use) Context API, you may have come across some methods. However, let’s look at some code snippets on how we can use the Context API.
                            </p>
                        </div>

                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Qus 3: What is useRef?
                            </p>
                            <p className="text-gray-700">
                                The useRef Hook allows you to persist values between renders.

                                It can be used to store a mutable value that does not cause a re-render when updated.

                                It can be used to access a DOM element directly.
                                <br />
                                <br />
                                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;