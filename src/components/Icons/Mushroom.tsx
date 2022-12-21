import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    // style={{
    //   enableBackground: "new 0 0 512 512",
    // }}
    xmlSpace="preserve"
    width="6em"
    height="6em"
    ref={ref}
    {...props}
  >
    <path
      style={{
        fill: "#d80027",
      }}
      d="M478.609 166.957v-66.783h-33.392V66.783h-33.391V33.391h-66.783V0H166.957v33.391h-66.783v33.392H66.783v33.391H33.391v66.783H0v111.304h33.391v33.391h122.434v166.957h33.392V512h133.566v-33.391h33.39V311.652h122.436v-33.391H512V166.957z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M222.609 155.826h-33.392v-33.391h-55.652v33.391h-33.391v55.652h33.391v33.392h55.652v-33.392h33.392zM378.435 33.391h-33.392V0H256v33.391h-33.391v89.044H256v33.391h89.043v-33.391h33.392z"
    />
    <path
      style={{
        fill: "#fff5cc",
      }}
      d="M356.173 278.261H155.825v200.348h33.392V512h133.566v-33.391h33.39z"
    />
    <path d="M66.783 66.783h33.391v33.391H66.783zM166.957 33.391h178.086v33.392h66.783V33.391h-66.783V0H166.957v33.391h-66.783v33.392h66.783z" />
    <path d="M356.173 278.261H33.391V166.957h33.392v-66.783H33.391v66.783H0v111.304h33.391v33.391h122.434v166.957h33.392V311.652h133.566v166.957H189.217V512h133.566v-33.391h33.39V311.652h122.436v-33.391z" />
    <path d="M478.609 166.957v-66.783h-33.392v66.783h33.392v111.304H512V166.957z" />
    <path d="M411.826 66.783h33.391v33.391h-33.391z" />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const MushroomSvg = memo(ForwardRef);
export default MushroomSvg;
