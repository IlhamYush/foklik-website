"use client";

import React, {useEffect, useRef} from "react";

import Scrollbar from "smooth-scrollbar";

export default function ScrollWrapper(props) {
    const scrollRef= useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        const options = {
            damping: 0.08,
        };

        const scrollbar = Scrollbar.init(scrollRef.current, options);

        return () => {
            scrollbar.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} style={{ height: "100vh", overflow: "hidden" }}>
            {props.children}
        </div>
    );
}