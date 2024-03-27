import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth mx-auto mt-[100px] md:mt-[150px]">
            {children}
        </main>
    );
};

export default Layout;
