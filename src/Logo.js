import React from 'react'
import './Logo.css'
// TODO: import Baumans font

const Logo = props => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="Mask-1">
          <path className="" id="WCirOuter-1" opacity="0.8" fill="#fff" fillOpacity="0.9" stroke="#fff" strokeWidth="0.0" d="M1418.0,638.2 C1418.0,864.2 1234.5,1047.4 1008.1,1047.4 C781.7,1047.4 598.2,864.2 598.2,638.2 C598.2,412.2 781.7,229.0 1008.1,229.0 C1234.5,229.0 1418.0,412.2 1418.0,638.2 Z"/>
        </mask>
      </defs>
      <path className="grow" id="BlueOrb" stroke="#000" strokeWidth="0.0" d="M 2048 1024 C 2048 1589.552 1589.585 2048 1023.998 2048 C 458.415 2048 0 1589.552 0 1024 C 0 458.448 458.415 0 1023.998 0 C 1589.585 0 2048 458.448 2048 1024 Z" style={{fill: '#00A2FF'}}/>
      <path className="animate" id="BluePath" fill="#8ddeff" stroke="#000" strokeWidth="0.0" d="M1024.0,1385.4 L2048.0,566.0 L2048.0,637.0 L1024.0,2048.0 L1024.0,1385.4 Z"/>
      <path className="animate" id="GreenPath" fill="#179e2c" stroke="#000" strokeWidth="0.0" d="M1024.0,1381.7 L-0.0,566.0 L-0.0,628.5 L1024.0,2048.0 L1024.0,1381.7 Z"/>
      <path className="draw" id="GrPathLLine" fill="none" stroke="#000" strokeWidth="6.5" d="M981.0,1934.0 L11.0,630.1" style={{strokeLinecap: 'round'}}/>
      <path className="draw" id="GrPathCtrLine" fill="none" stroke="#000" strokeWidth="4.0" d="M905.9,1550.0 L175.3,735.3" style={{strokeLinecap: 'round'}}/>
      <path className="draw" id="GrPathRLine" fill="none" stroke="#000" strokeWidth="6.5" d="M970.2,1365.3 L50.3,589.2" style={{strokeLinecap: 'round'}}/>
      <path className="draw" id="BlPathRLine" fill="none" stroke="#000" strokeWidth="6.5" d="M1075.0,1934.0 L2005.9,687.9" style={{strokeLinecap: 'round'}}/>
      <path className="draw" id="BlPathCtrLine" fill="none" stroke="#000" strokeWidth="4.0" d="M1184.1,1489.2 L1863.3,809.5" style={{strokeLinecap: 'round'}}/>
      <path className="draw" id="BlPathLLine" fill="none" stroke="#000" strokeWidth="6.5" d="M1087.1,1372.3 L1994.2,630.1" style={{strokeLinecap: 'round'}}/>
      <path className="draw" id="PathDividerLine" fill="none" stroke="#000" strokeWidth="4.0" d="M1020.0,1417.3 L1015.0,1934.0"/>
      <path className="pop" id="Overarch" fill="#000" stroke="#000" strokeWidth="1.0" d="M 1538.504 183.149 C 1392.581 85.659 1217.533 36.502 1055.308 31.958 C 863.859 26.587 633.643 81.529 472.909 195.542 C 220.923 374.306 107.107 599.337 107.107 599.337 C 107.107 599.337 222.812 362.739 476.885 180.051 C 637.42 64.591 867.04 13.885 1057.396 19.152 C 1221.608 23.696 1405.503 73.783 1552.42 174.887 C 1845.359 376.475 1955 627.323 1955 627.323 C 1955 627.323 1834.524 381.018 1538.504 183.149 Z"/>
      <path className="pop" id="LeftArch" fill="#000" stroke="#000" strokeWidth="1.0" d="M 813.909 1410.205 C 687.597 1344.715 536.074 1311.692 395.65 1308.64 C 229.93 1305.031 30.651 1341.938 -108.484 1418.527 C -326.607 1538.613 -425.128 1689.782 -425.128 1689.782 C -425.128 1689.782 -324.972 1530.843 -105.042 1408.122 C 33.92 1330.559 232.683 1296.501 397.458 1300.037 C 539.602 1303.09 698.782 1336.737 825.954 1404.654 C 1079.527 1540.075 1174.432 1708.588 1174.432 1708.588 C 1174.432 1708.588 1070.148 1543.129 813.909 1410.205 Z" transform="matrix(-0.601818, -0.798634, 0.798634, -0.601818, -599.858089, 2706.011887)"/>
      <path className="pop" id="RightArch" fill="#000" stroke="#000" strokeWidth="1.0" d="M 2125.989 1406.078 C 2000.541 1341.649 1850.055 1309.16 1710.597 1306.157 C 1546.012 1302.607 1348.099 1338.918 1209.918 1414.268 C 993.29 1532.414 895.445 1681.139 895.445 1681.139 C 895.445 1681.139 994.914 1524.769 1213.336 1404.032 C 1351.346 1327.721 1548.746 1294.214 1712.391 1297.694 C 1853.56 1300.697 2011.651 1333.799 2137.95 1400.619 C 2389.785 1533.849 2484.042 1699.636 2484.042 1699.636 C 2484.042 1699.636 2380.471 1536.853 2125.989 1406.078 Z" transform="matrix(-0.573576, 0.819152, -0.819152, -0.573576, 3885.149447, 971.368989)"/>
      <path className="draw" id="Orbit3" fill="#fff" fillOpacity="0.0" strokeWidth="5.0" d="M1266.8,618.3 C1354.1,923.0 1311.6,1202.5 1172.0,1242.5 C1032.3,1282.5 848.4,1067.8 761.1,763.0 C673.9,458.3 716.4,178.8 856.0,138.8 C995.6,98.8 1179.6,313.5 1266.8,618.3 Z" stroke="#000"/>
      <path className="draw" id="Orbit2" fill="#fff" fillOpacity="0.0" strokeWidth="6.5" d="M1517.2,351.0 C1613.8,494.5 1481.8,752.4 1222.5,926.9 C963.1,1101.4 674.6,1126.5 578.0,982.9 C481.4,839.4 613.4,581.6 872.7,407.1 C1132.1,232.6 1420.6,207.5 1517.2,351.0 Z" stroke="#000"/>
      <path className="draw" id="Orbit1" fill="#fff" fillOpacity="0.0" strokeWidth="5.5" d="M1593.1,815.9 C1547.8,981.6 1242.6,1042.4 911.4,951.8 C580.1,861.2 348.4,653.5 393.7,487.9 C439.0,322.2 744.2,261.4 1075.4,352.0 C1406.7,442.6 1638.4,650.3 1593.1,815.9 Z" stroke="#000"/>
      <path className="fade-in" id="RedOrb" fill="#f90500" stroke="#000" strokeWidth="1.0" d="M523.0,460.0 C523.0,512.5 480.5,555.0 428.0,555.0 C375.6,555.0 333.1,512.5 333.1,460.0 C333.1,407.6 375.6,365.1 428.0,365.1 C480.5,365.1 523.0,407.6 523.0,460.0 Z"/>
      <path className="fade-in" id="RedOrbSpot" fill="#26002c" stroke="#000" strokeWidth="1.0" d="M510.2,448.4 C510.2,487.4 479.2,519.0 441.0,519.0 C402.7,519.0 371.7,487.4 371.7,448.4 C371.7,409.4 402.7,377.8 441.0,377.8 C479.2,377.8 510.2,409.4 510.2,448.4 Z"/>
      <path className="fade-in" id="YellowOrb" fill="#f7da00" stroke="#000" strokeWidth="1.0" d="M1669.6,770.1 C1669.6,813.8 1634.1,849.3 1590.4,849.3 C1546.6,849.3 1511.2,813.8 1511.2,770.1 C1511.2,726.3 1546.6,690.8 1590.4,690.8 C1634.1,690.8 1669.6,726.3 1669.6,770.1 Z"/>
      <path className="fade-in" id="YellowOrbSpot" fill="#000" stroke="#000" strokeWidth="1.0" d="M1654.3,773.1 C1654.3,808.6 1624.4,837.5 1587.5,837.5 C1550.6,837.5 1520.7,808.6 1520.7,773.1 C1520.7,737.5 1550.6,708.6 1587.5,708.6 C1624.4,708.6 1654.3,737.5 1654.3,773.1 Z"/>
      <path className="fade-in" id="GreenOrb" fill="#18774c" stroke="#000" strokeWidth="1.0" d="M1087.1,1194.7 C1087.1,1233.8 1055.3,1265.4 1016.0,1265.4 C976.6,1265.4 944.8,1233.8 944.8,1194.7 C944.8,1155.7 976.6,1124.0 1016.0,1124.0 C1055.3,1124.0 1087.1,1155.7 1087.1,1194.7 Z"/>
      <path className="fade-in" id="GreenOrbSpot" fill="#2217dc" stroke="#000" strokeWidth="1.0" d="M1073.4,1197.4 C1073.4,1229.2 1046.5,1254.9 1013.4,1254.9 C980.2,1254.9 953.4,1229.2 953.4,1197.4 C953.4,1165.6 980.2,1139.9 1013.4,1139.9 C1046.5,1139.9 1073.4,1165.6 1073.4,1197.4 Z"/>
      <path className="fade-in o80" id="WCirOuter" opacity="0.8" fill="#e7ffff" fillOpacity="0.9" d="M1418.0,638.2 C1418.0,864.2 1234.5,1047.4 1008.1,1047.4 C781.7,1047.4 598.2,864.2 598.2,638.2 C598.2,412.2 781.7,229.0 1008.1,229.0 C1234.5,229.0 1418.0,412.2 1418.0,638.2 Z" style={{strokeWidth: 8, stroke: '#5F5F5F'}}/>
      <g mask="url(#Mask-1)">
        <path className="fade-in o80" id="WCirMid" opacity="0.8" fill="#e7ffff" stroke="#000" strokeWidth="0.0" d="M1418.0,626.5 C1418.0,846.0 1240.9,1024.0 1022.5,1024.0 C804.1,1024.0 627.0,846.0 627.0,626.5 C627.0,407.0 804.1,229.0 1022.5,229.0 C1240.9,229.0 1418.0,407.0 1418.0,626.5 Z"/>
        <path className="fade-in o90" id="WCirInner" opacity="0.9" fill="#e7ffff" stroke="#000" strokeWidth="0.0" d="M1372.0,638.2 C1372.0,839.6 1209.1,1002.8 1008.1,1002.8 C807.1,1002.8 644.1,839.6 644.1,638.2 C644.1,436.8 807.1,273.6 1008.1,273.6 C1209.1,273.6 1372.0,436.8 1372.0,638.2 Z"/>
      </g>
      <text className="title-text" id="TitleText" x="677.027" y="698.584" style={{fontfamily: 'Baumans', fontSize: '182px', fontWeight: 'bold', letterSpacing: '24px', whiteSpace: 'pre'}}>Legato</text>
    </svg>
  )
}

Logo.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string,
}

export default Logo
