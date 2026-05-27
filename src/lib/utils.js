import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const isIframe = window.self !== window.top;
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
export const isDesktop = !isMobile;
export const isMac = /Macintosh|Mac OS X/i.test(navigator.userAgent);
export const isWindows = /Windows/i.test(navigator.userAgent);
