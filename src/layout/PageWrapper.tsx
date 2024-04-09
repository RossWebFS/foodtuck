import React from "react";

type PageWrapperProps = {
    children: React.ReactNode;
}

export const PageWrapper = ({children}: PageWrapperProps) => {
    return (
        <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
            {children}
        </div>
    )
}