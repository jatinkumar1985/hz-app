
import React from 'react'
import LazyMedia from '@/component/global/LazyMedia';

export default function Custom404() {
    return (
        <>
            <div className="max-w-4xl mx-auto py-8 px-6 lg:px-0">
                <div className='space-y-4 grid grid-cols-1 lg:grid-cols-4'>
                    <div className="w-56 lg:w-96 h-auto mx-auto lg:col-span-2">
                        {/* <LottieAnimation src={Error} play loop /> */}
                        <LazyMedia
                            type="image"
                            alt="404 - Page Not Found"
                            width={500}
                            height={500}
                            className="w-42 lg:w-96 h-auto"
                            src="/404.svg"
                        />
                    </div>
                    <div className="lg:col-span-2 flex items-center">
                        <div className='text-center lg:text-left'>
                            {/* <div className="text-8xl font-black">404</div> */}
                            {/* <div className="text-3xl lg:text-5xl mb-2 font-bold">Page Not Found</div> */}
                            <p className='mb-3'>Oops! The page your looking doesn&apos;t exist or has your moved</p>
                            {/* <GlobalLink href={`${process.env.NEXT_PUBLIC_MODE_BASE_URL}`} className="text-white hover:text-white bg-gray-600 hover:bg-red-600 focus:ring-1 focus:outline-none focus:ring-gray-300 rounded-full text-sm px-4 py-2.5 text-center">Back To Home</GlobalLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}