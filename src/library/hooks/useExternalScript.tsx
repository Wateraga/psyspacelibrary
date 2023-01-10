import { useEffect } from "react";

// useExternalScript prop types
const useExternalScript = (scriptUrl: string) => {
  useEffect(() => {
    const head = document.querySelector("head")!;
    const script = document.createElement("script");

    script.setAttribute("src", scriptUrl);
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, [scriptUrl]);
};

export default useExternalScript;
