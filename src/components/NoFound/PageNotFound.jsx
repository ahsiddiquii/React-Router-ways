import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h1 className="text-balance text-7xl text- font-semibold text-orange-700">404</h1>
                    <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-orange-700 sm:text-7xl">
                        Page not found!
                    </h1>
                    <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/"
                            className="rounded-md bg-orange-700  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none"
                        >
                            Go back home
                        </Link>
                        <Link to="/contact" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
