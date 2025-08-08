"use client"
import { DetailsCheckout } from "./DetailsCheckout"
import { ResumeCheckout } from "./ResumeCheckout"

export const Checkout = () => {
    return (
        <div className="flex justify-center items-start min-h-screen mb-72 px-4 sm:px-0 py-10">
            <div className="flex flex-col sm:flex-row w-full max-w-[1500px] gap-4 sm:gap-6">
                <div className="w-full sm:w-2/3">
                    <DetailsCheckout />
                </div>
                <div className="w-full sm:w-1/3">
                    <ResumeCheckout />
                </div>

            </div>

        </div>
    )
}
