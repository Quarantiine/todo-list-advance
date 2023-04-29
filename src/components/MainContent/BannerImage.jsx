import Image from "next/image";
import React from "react";

export default function BannerImage({ user }) {
	return (
		<>
			<div className="w-full min-h-[230px] relative">
				<TextContent user={user} />
				<Image
					className="object-cover object-center"
					src={"/images/default-banner-img.jpeg"}
					alt="banner-image"
					fill
					sizes="true"
					priority="true"
				/>
				<div
					className={`bg-gradient-to-l from-transparent ${
						!user.themeColor ? "via-[rgba(255,255,255,0.5)] to-gray-100" : "via-[rgba(0,0,0,0.5)] to-[#111]"
					} absolute top-0 left-0 transition-colors duration-300 w-full h-full`}
				></div>
				{<Fallback user={user} />}
			</div>
		</>
	);
}

const TextContent = ({ user }) => {
	return (
		<>
			<div className="absolute flex justify-center items-center z-10 w-full h-full">
				<div className="w-full md:w-[80%] h-full flex flex-col justify-center items-center md:items-start gap-2">
					<h1 className={`${user.themeColor ? "text-white" : "text-[#333]"} text-5xl sm:text-7xl font-medium`}>
						Welcome,
					</h1>
					<p className={`${user.themeColor ? "text-white" : "text-[#333]"} text-xl sm:text-3xl font-thin`}>
						{user.username || "USERNAME"}
					</p>
				</div>
			</div>
		</>
	);
};

const Fallback = ({ user }) => {
	return (
		<>
			<div
				className={`transition-colors duration-300 w-full min-h-[230px] ${
					user.themeColor ? "bg-[#333]" : "bg-gray-300"
				}`}
			></div>
		</>
	);
};
