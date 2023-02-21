"use client"
import React, { useState } from "react";
import MobileView from "./MobileViewTopBar";
import WebViewTopBar from "./WebViewTopBar";

const TopBar = () => {

  return (
    <>
      <div>
        <nav className="bg-black">
          <WebViewTopBar />
          <MobileView />
        </nav>
      </div>
    </>
  );
};


export default TopBar;
