import { useIsWithinBreakpoints } from "@elastic/eui";

export const useIsXs = () => useIsWithinBreakpoints(["xs", "xs"], true);
export const useAboveXs = () => useIsWithinBreakpoints(["xs", "xl"], true);
export const useIsS = () => useIsWithinBreakpoints(["s", "s"], true);
export const useBelowS = () => useIsWithinBreakpoints(["xs", "s"], true);
export const useAboveS = () => useIsWithinBreakpoints(["s", "xl"], true);
export const useIsM = () => useIsWithinBreakpoints(["m", "m"], true);
export const useBelowM = () => useIsWithinBreakpoints(["xs", "m"], true);
export const useAboveM = () => useIsWithinBreakpoints(["m", "xl"], true);
export const useIsL = () => useIsWithinBreakpoints(["l", "l"], true);
export const useBelowL = () => useIsWithinBreakpoints(["xs", "l"], true);
export const useAboveL = () => useIsWithinBreakpoints(["l", "xl"], true);
export const useIsXl = () => useIsWithinBreakpoints(["xl", "xl"], true);
export const useBelowXl = () => useIsWithinBreakpoints(["xs", "xl"], true);
