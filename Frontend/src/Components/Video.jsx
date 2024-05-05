import React from "react";

function Video() {
    return (
        <div className="m-20">
            <div
                className="relative"
                style={{ paddingBottom: "56.25%", paddingTop: 0, height: 0 }}
            >
                <iframe
                    src="https://player.vimeo.com/video/941918129?autoplay=1&loop=1&controls=0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    className="absolute inset-0 w-full h-full rounded-lg"
                ></iframe>
            </div>
        </div>
    );
}

export default Video;
