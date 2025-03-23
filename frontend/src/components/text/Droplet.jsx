import React from "react";
import { Link } from "react-router-dom";
import WaterIcon from "../../assets/images/oi.png";
import fetchPosts from "../posting/PollingPosts"

export default function Droplet() {
    return (
        <>
            <div className="inline-flex ml-5 rounded-[5px] items-center px-[10px]">
                <Link to="../../Home">
                    <button className="font-extrabold flex text-[2em] hover:cursor-pointer bg-gradient-to-b text-[#CBD5E1] from-[#CBD5E1] via-[#28AAE1] to-[#2887C3] bg-[length:100%_200%] bg-top bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out hover:bg-bottom"
                    onClick={fetchPosts()}
                    >
                        DR
                        <img
                            src={WaterIcon}
                            alt="water drop icon"
                            className="w-[33px] h-[38px] mt-[2%] mx-0.5"
                        />
                        PLET
                    </button>
                </Link>
            </div>
        </>
    );
}
