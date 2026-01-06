import React from 'react'
import ImgContainer from './ImgContainer'
import Form from './Form'
export default function Contact() {
    return (
        <section className="w-full bg-white pt-4 pb-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center flex justify-center">


                    {/* LEFT COLUMN */}
                    <ImgContainer />

                    {/* RIGHT COLUMN */}
                    <Form />



                </div>
            </div>
        </section>
    )
}
