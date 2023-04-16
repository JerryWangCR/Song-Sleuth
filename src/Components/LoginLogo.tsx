import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgComponent() {
  const svgMarkup = `<svg width="250" height="150" viewBox="0 0 2691 1621" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="588.495" cy="610.495" r="588.495" fill="#0A1935"/>
  <rect x="809.832" y="1138.63" width="210.715" height="584.927" transform="rotate(-34.5326 809.832 1138.63)" fill="#0A1935"/>
  <circle cx="595.005" cy="611.797" r="475.223" fill="#146C94"/>
  <ellipse cx="410.345" cy="402.179" rx="247.969" ry="160.257" transform="rotate(-43.0935 410.345 402.179)" fill="#0A1935"/>
  <ellipse cx="447.758" cy="454.57" rx="317.032" ry="160.257" transform="rotate(-43.0935 447.758 454.57)" fill="#146C94"/>
  <path d="M560.841 590.904C558.613 570.061 549.226 553.832 532.679 542.217C516.291 530.602 494.97 524.794 468.717 524.794C450.261 524.794 434.429 527.579 421.223 533.148C408.018 538.716 397.914 546.274 390.913 555.82C383.913 565.367 380.333 576.266 380.174 588.517C380.174 598.7 382.481 607.531 387.095 615.009C391.868 622.487 398.312 628.851 406.426 634.102C414.541 639.193 423.531 643.489 433.395 646.989C443.26 650.49 453.204 653.433 463.228 655.82L509.051 667.276C527.508 671.572 545.248 677.379 562.273 684.698C579.457 692.017 594.811 701.245 608.335 712.383C622.018 723.521 632.837 736.965 640.793 752.717C648.748 768.469 652.726 786.925 652.726 808.087C652.726 836.726 645.407 861.945 630.769 883.743C616.131 905.381 594.97 922.326 567.285 934.578C539.759 946.67 506.426 952.716 467.285 952.716C429.258 952.716 396.244 946.829 368.24 935.055C340.397 923.281 318.599 906.097 302.847 883.504C287.254 860.91 278.822 833.385 277.549 800.927H364.661C365.933 817.951 371.184 832.112 380.412 843.409C389.641 854.705 401.653 863.138 416.45 868.707C431.406 874.276 448.113 877.06 466.569 877.06C485.821 877.06 502.687 874.196 517.166 868.468C531.804 862.581 543.259 854.467 551.533 844.125C559.807 833.623 564.023 821.372 564.182 807.371C564.023 794.642 560.284 784.141 552.965 775.867C545.646 767.434 535.384 760.434 522.178 754.865C509.131 749.137 493.856 744.045 476.354 739.59L420.746 725.271C380.492 714.929 348.67 699.257 325.281 678.254C302.051 657.093 290.437 629.01 290.437 594.006C290.437 565.208 298.233 539.989 313.825 518.351C329.577 496.712 350.977 479.926 378.026 467.993C405.074 455.901 435.702 449.854 469.911 449.854C504.596 449.854 534.986 455.901 561.08 467.993C587.332 479.926 607.937 496.553 622.893 517.873C637.849 539.035 645.566 563.378 646.043 590.904H560.841Z" fill="#19A7CE"/>
  <path d="M842.548 373.586C840.321 352.743 830.933 336.514 814.386 324.899C797.998 313.284 776.677 307.477 750.425 307.477C731.968 307.477 716.137 310.261 702.931 315.83C689.725 321.399 679.621 328.957 672.621 338.503C665.62 348.05 662.04 358.949 661.881 371.2C661.881 381.383 664.188 390.213 668.802 397.691C673.575 405.169 680.019 411.534 688.134 416.784C696.248 421.876 705.238 426.172 715.103 429.672C724.967 433.172 734.912 436.116 744.935 438.503L790.758 449.958C809.215 454.254 826.956 460.062 843.98 467.381C861.164 474.7 876.518 483.928 890.042 495.066C903.725 506.203 914.545 519.648 922.5 535.4C930.455 551.151 934.433 569.608 934.433 590.769C934.433 619.409 927.114 644.627 912.476 666.425C897.838 688.064 876.677 705.009 848.992 717.26C821.466 729.352 788.133 735.399 748.993 735.399C710.966 735.399 677.951 729.512 649.948 717.738C622.104 705.964 600.306 688.78 584.554 666.186C568.962 643.593 560.529 616.067 559.256 583.609H646.368C647.641 600.634 652.891 614.795 662.12 626.091C671.348 637.388 683.36 645.821 698.158 651.389C713.114 656.958 729.82 659.743 748.277 659.743C767.529 659.743 784.394 656.879 798.873 651.151C813.511 645.264 824.967 637.149 833.24 626.807C841.514 616.306 845.73 604.055 845.889 590.053C845.73 577.325 841.991 566.823 834.672 558.55C827.353 550.117 817.091 543.116 803.885 537.547C790.838 531.82 775.564 526.728 758.062 522.273L702.453 507.953C662.199 497.611 630.377 481.939 606.989 460.937C583.759 439.775 572.144 411.693 572.144 376.689C572.144 347.89 579.94 322.672 595.533 301.033C611.284 279.394 632.684 262.608 659.733 250.675C686.781 238.583 717.41 232.537 751.618 232.537C786.303 232.537 816.693 238.583 842.787 250.675C869.04 262.608 889.644 279.235 904.6 300.556C919.557 321.717 927.273 346.061 927.751 373.586H842.548Z" fill="#19A7CE"/>
  <path d="M1274.3 610.364V974H1210.03V610.364H1274.3ZM1461.14 979.327C1433.79 979.327 1410.18 973.645 1390.29 962.281C1370.52 950.799 1355.31 934.582 1344.66 913.631C1334 892.561 1328.68 867.762 1328.68 839.234C1328.68 811.18 1334 786.559 1344.66 765.371C1355.43 744.064 1370.46 727.492 1389.76 715.655C1409.05 703.699 1431.72 697.722 1457.76 697.722C1474.57 697.722 1490.43 700.444 1505.35 705.889C1520.38 711.216 1533.64 719.502 1545.12 730.747C1556.72 741.992 1565.83 756.315 1572.46 773.716C1579.09 790.998 1582.41 811.595 1582.41 835.506V855.214H1358.86V811.891H1520.79C1520.68 799.58 1518.01 788.631 1512.8 779.043C1507.6 769.336 1500.32 761.701 1490.96 756.138C1481.73 750.574 1470.96 747.793 1458.65 747.793C1445.51 747.793 1433.97 750.989 1424.03 757.381C1414.08 763.654 1406.33 771.94 1400.77 782.239C1395.32 792.419 1392.54 803.605 1392.42 815.797V853.616C1392.42 869.478 1395.32 883.091 1401.12 894.455C1406.92 905.7 1415.03 914.341 1425.45 920.378C1435.86 926.296 1448.06 929.256 1462.02 929.256C1471.37 929.256 1479.84 927.954 1487.41 925.349C1494.99 922.627 1501.56 918.661 1507.12 913.453C1512.69 908.245 1516.89 901.794 1519.73 894.099L1579.74 900.847C1575.96 916.708 1568.73 930.558 1558.08 942.395C1547.55 954.114 1534.05 963.228 1517.6 969.739C1501.14 976.131 1482.32 979.327 1461.14 979.327ZM1810.61 859.298V701.273H1874.89V974H1812.56V925.527H1809.72C1803.57 940.797 1793.45 953.285 1779.36 962.991C1765.39 972.698 1748.17 977.551 1727.69 977.551C1709.82 977.551 1694.02 973.586 1680.28 965.655C1666.67 957.606 1656.02 945.946 1648.32 930.676C1640.63 915.288 1636.78 896.704 1636.78 874.923V701.273H1701.06V864.98C1701.06 882.262 1705.79 895.993 1715.26 906.173C1724.73 916.353 1737.16 921.443 1752.55 921.443C1762.02 921.443 1771.19 919.135 1780.07 914.518C1788.95 909.902 1796.23 903.036 1801.91 893.922C1807.71 884.689 1810.61 873.148 1810.61 859.298ZM2077.17 701.273V750.989H1920.39V701.273H2077.17ZM1959.09 635.932H2023.37V891.969C2023.37 900.61 2024.67 907.239 2027.28 911.855C2030 916.353 2033.55 919.431 2037.93 921.088C2042.31 922.745 2047.16 923.574 2052.49 923.574C2056.51 923.574 2060.18 923.278 2063.5 922.686C2066.93 922.094 2069.53 921.562 2071.31 921.088L2082.14 971.337C2078.71 972.52 2073.8 973.822 2067.4 975.243C2061.13 976.663 2053.44 977.492 2044.32 977.729C2028.22 978.202 2013.72 975.776 2000.82 970.449C1987.92 965.004 1977.68 956.599 1970.1 945.236C1962.64 933.872 1958.98 919.668 1959.09 902.622V635.932ZM2201.06 814.199V974H2136.78V610.364H2199.64V747.615H2202.83C2209.23 732.227 2219.11 720.094 2232.49 711.216C2245.98 702.22 2263.14 697.722 2283.98 697.722C2302.92 697.722 2319.43 701.687 2333.52 709.618C2347.6 717.549 2358.49 729.149 2366.19 744.419C2374 759.689 2377.91 778.332 2377.91 800.349V974H2313.63V810.293C2313.63 791.945 2308.9 777.681 2299.43 767.501C2290.07 757.203 2276.93 752.054 2260.01 752.054C2248.64 752.054 2238.46 754.54 2229.47 759.511C2220.59 764.365 2213.61 771.408 2208.52 780.641C2203.54 789.874 2201.06 801.06 2201.06 814.199Z" fill="#19A7CE"/>
  <path d="M1328.99 489.327C1302.36 489.327 1279.27 483.467 1259.74 471.749C1240.21 460.03 1225.06 443.635 1214.29 422.565C1203.63 401.495 1198.31 376.874 1198.31 348.702C1198.31 320.529 1203.63 295.849 1214.29 274.661C1225.06 253.472 1240.21 237.018 1259.74 225.3C1279.27 213.581 1302.36 207.722 1328.99 207.722C1355.62 207.722 1378.7 213.581 1398.24 225.3C1417.77 237.018 1432.86 253.472 1443.51 274.661C1454.28 295.849 1459.67 320.529 1459.67 348.702C1459.67 376.874 1454.28 401.495 1443.51 422.565C1432.86 443.635 1417.77 460.03 1398.24 471.749C1378.7 483.467 1355.62 489.327 1328.99 489.327ZM1329.34 437.835C1343.79 437.835 1355.86 433.87 1365.57 425.939C1375.27 417.89 1382.49 407.118 1387.23 393.624C1392.08 380.129 1394.51 365.096 1394.51 348.524C1394.51 331.834 1392.08 316.741 1387.23 303.247C1382.49 289.634 1375.27 278.804 1365.57 270.754C1355.86 262.705 1343.79 258.68 1329.34 258.68C1314.55 258.68 1302.24 262.705 1292.41 270.754C1282.71 278.804 1275.43 289.634 1270.57 303.247C1265.84 316.741 1263.47 331.834 1263.47 348.524C1263.47 365.096 1265.84 380.129 1270.57 393.624C1275.43 407.118 1282.71 417.89 1292.41 425.939C1302.24 433.87 1314.55 437.835 1329.34 437.835ZM1578.5 324.199V484H1514.22V211.273H1575.66V257.615H1578.86C1585.13 242.345 1595.13 230.212 1608.86 221.216C1622.71 212.22 1639.82 207.722 1660.18 207.722C1679 207.722 1695.39 211.746 1709.36 219.795C1723.45 227.845 1734.34 239.504 1742.03 254.774C1749.84 270.044 1753.69 288.569 1753.57 310.349V484H1689.3V320.293C1689.3 302.063 1684.56 287.8 1675.09 277.501C1665.74 267.203 1652.78 262.054 1636.21 262.054C1624.96 262.054 1614.96 264.54 1606.2 269.511C1597.56 274.365 1590.75 281.408 1585.78 290.641C1580.93 299.874 1578.5 311.06 1578.5 324.199ZM1937.52 591.955C1914.44 591.955 1894.61 588.818 1878.04 582.544C1861.47 576.389 1848.15 568.103 1838.09 557.686C1828.03 547.269 1821.04 535.728 1817.14 523.062L1875.02 509.036C1877.62 514.362 1881.41 519.63 1886.38 524.838C1891.36 530.165 1898.04 534.545 1906.45 537.977C1914.97 541.528 1925.68 543.304 1938.59 543.304C1956.81 543.304 1971.91 538.865 1983.86 529.987C1995.82 521.228 2001.8 506.786 2001.8 486.663V434.994H1998.6C1995.29 441.623 1990.43 448.429 1984.04 455.413C1977.77 462.397 1969.42 468.257 1959 472.991C1948.71 477.726 1935.74 480.094 1920.12 480.094C1899.17 480.094 1880.17 475.181 1863.12 465.357C1846.2 455.413 1832.7 440.617 1822.64 420.967C1812.7 401.199 1807.73 376.46 1807.73 346.749C1807.73 316.801 1812.7 291.528 1822.64 270.932C1832.7 250.217 1846.26 234.533 1863.3 223.879C1880.35 213.107 1899.35 207.722 1920.3 207.722C1936.28 207.722 1949.42 210.444 1959.71 215.889C1970.13 221.216 1978.42 227.667 1984.57 235.243C1990.73 242.7 1995.4 249.743 1998.6 256.372H2002.15V211.273H2065.54V488.439C2065.54 511.758 2059.98 531.053 2048.85 546.322C2037.72 561.592 2022.51 573.015 2003.22 580.591C1983.92 588.167 1962.02 591.955 1937.52 591.955ZM1938.05 429.668C1951.67 429.668 1963.27 426.353 1972.85 419.724C1982.44 413.096 1989.72 403.567 1994.69 391.138C1999.67 378.709 2002.15 363.794 2002.15 346.393C2002.15 329.23 1999.67 314.196 1994.69 301.294C1989.84 288.392 1982.62 278.389 1973.03 271.287C1963.56 264.066 1951.9 260.456 1938.05 260.456C1923.73 260.456 1911.77 264.185 1902.19 271.642C1892.6 279.099 1885.38 289.339 1880.52 302.359C1875.67 315.262 1873.24 329.94 1873.24 346.393C1873.24 363.084 1875.67 377.703 1880.52 390.25C1885.5 402.679 1892.78 412.385 1902.36 419.369C1912.07 426.235 1923.97 429.668 1938.05 429.668Z" fill="#19A7CE"/>
  </svg>
  
  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;

  return <SvgImage />;
}