"use client"
import Header from "@/app/components/Header";
import React, { useState } from 'react';

export default function Home() {
  const [hoverText, setHoverText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const regions = [
    {
      regionName: '関東',
      companies: [
        { name: '企業A', data: ["20/50", "50/50", "0/50", "28/50", "27/50", "29/50", "24/50", "22/50", "26/50", "27/50"] },
        { name: '企業B', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業C', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業D', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業E', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] }
      ]
    },
    {
      regionName: '関西',
      companies: [
        { name: '企業G', data: ["28/40", "25/40", "24/40", "21/40", "29/40", "32/40", "17/40", "24/40", "19/40", "17/40"] },
        { name: '企業H', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業I', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業J', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] }
      ]
    },
    {
      regionName: '北陸',
      companies: [
        { name: '企業K', data: ["33/55", "23/55", "27/55", "29/55", "31/55", "27/55", "33/55", "31/55", "26/55", "22/55"] },
        { name: '企業L', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業M', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業N', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] },
        { name: '企業O', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40"] }
      ]
    }
  ];

  const getColorClass = (numerator, denominator) => {
    const ratio = numerator / denominator;
    if (ratio <= 0.4) {
      return 'bg-blue-700 text-white';
    } else if (ratio >= 0.7) {
      return 'bg-rose-600 text-white';
    }
    return 'bg-white';
  };

  // 分数を解析してスタイルと表示テキストを返す関数
  const parseAndStyleCell = (cellData) => {
    const [numerator, denominator] = cellData.split('/').map(Number);
    const remaining = denominator - numerator;
    const colorClass = getColorClass(numerator, denominator);
    return { colorClass, text: `${remaining}`, fraction: `${numerator}/${denominator}` };
  };

  const handleMouseEnter = (fraction, event) => {
    setHoverText(fraction);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoverText('');
  };

  return (
    <>
      <Header />
      <div className="tooltip bg-white text-black text-xl rounded-md p-2 shadow-md" style={{ position: 'fixed', left: tooltipPosition.x, top: tooltipPosition.y, zIndex: 1000 }}>
          {hoverText}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <table className="table-bordered table-auto border-collapse m-6 md:w-2/3 md:text-base text-xs text-center">
          <tbody>
            <tr ><td></td><td></td><td>1月1日</td><td>1月2日</td><td>1月3日</td><td>1月4日</td><td>1月5日</td><td>1月6日</td><td>1月7日</td><td>1月8日</td><td>1月9日</td><td>1月10日</td></tr>
            {regions.map(region => (
              <>
                <tr className="region-row">
                  <td rowSpan={region.companies.length}>{region.regionName}</td>
                  <td>{region.companies[0].name}</td>
                  {region.companies[0].data.map((data, index) => {
                    const { colorClass, text, fraction } = parseAndStyleCell(data);
                    return (
                      <td key={index} className={`${colorClass} relative`}
                          onMouseEnter={(event) => handleMouseEnter(fraction, event)}
                          onMouseLeave={handleMouseLeave}>
                        {text}
                      </td>
                    );
                  })}
                </tr>
                {region.companies.slice(1).map(company => (
                  <tr key={company.name}>
                    <td>{company.name}</td>
                    {company.data.map((data, index) => {
                      const { colorClass, text, fraction } = parseAndStyleCell(data);
                      return (
                        <td key={index} className={`${colorClass} relative text-center`}
                            onMouseEnter={(event) => handleMouseEnter(fraction, event)}
                            onMouseLeave={handleMouseLeave}>
                          {text}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
