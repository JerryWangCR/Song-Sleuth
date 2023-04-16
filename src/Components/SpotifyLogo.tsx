import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgComponent() {
  const svgMarkup = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_69_660)">
  <circle cx="14.5" cy="15.5" r="12.5" fill="black"/>
  <path d="M14.9857 0.0494232C6.7345 0.0494232 0.0452881 6.73845 0.0452881 14.9896C0.0452881 23.2411 6.7345 29.9296 14.9857 29.9296C23.2377 29.9296 29.9262 23.2411 29.9262 14.9896C29.9262 6.73899 23.2379 0.0494232 14.9857 0.0494232ZM21.8372 21.5975C21.5696 22.0363 20.9951 22.1755 20.5563 21.9061C17.0484 19.7634 12.6325 19.2782 7.43189 20.4664C6.93074 20.5805 6.4312 20.2665 6.31702 19.7652C6.20231 19.2639 6.51505 18.7644 7.01745 18.6502C12.7086 17.3499 17.5904 17.9098 21.5286 20.3165C21.9675 20.5859 22.1066 21.1586 21.8372 21.5975ZM23.6659 17.5294C23.3287 18.0775 22.6115 18.2505 22.0638 17.9134C18.0478 15.4449 11.9261 14.73 7.17605 16.1719C6.56001 16.358 5.90936 16.0108 5.72239 15.3958C5.53685 14.7798 5.88421 14.1304 6.49918 13.9431C11.9251 12.2967 18.6705 13.0942 23.2823 15.9282C23.83 16.2654 24.0031 16.9824 23.6659 17.5294ZM23.8229 13.2933C19.0077 10.4333 11.0632 10.1703 6.46581 11.5656C5.72756 11.7895 4.94685 11.3728 4.72313 10.6345C4.49941 9.89591 4.91581 9.11573 5.65459 8.89129C10.9321 7.28919 19.7052 7.59873 25.2491 10.8898C25.9145 11.2839 26.1322 12.1415 25.7379 12.8047C25.3454 13.4687 24.4848 13.6876 23.8229 13.2933Z" fill="#57B65F"/>
  </g>
  <defs>
  <clipPath id="clip0_69_660">
  <rect width="30" height="30" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
  
  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}