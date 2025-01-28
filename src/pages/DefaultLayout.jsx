import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main className="min-h-[90vh]">
                <Outlet />
            </main>
            <FooterComponent />
        </>
    );
}

export default DefaultLayout;
