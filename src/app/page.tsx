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
        { name: '企業A', data: ["20/50", "50/50", "0/50", "28/50", "27/50", "29/50", "24/50", "22/50", "26/50", "27/50", "24/50", "29/50"] },
        { name: '企業B', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業C', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業D', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業E', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] }
      ]
    },
    {
      regionName: '関西',
      companies: [
        { name: '企業G', data: ["28/40", "25/40", "24/40", "21/40", "29/40", "32/40", "17/40", "24/40", "19/40", "17/40", "24/40", "25/40"] },
        { name: '企業H', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業I', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業J', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] }
      ]
    },
    {
      regionName: '北陸',
      companies: [
        { name: '企業K', data: ["33/55", "23/55", "27/55", "29/55", "31/55", "27/55", "33/55", "31/55", "26/55", "22/55", "24/55", "29/55"] },
        { name: '企業L', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業M', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業N', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] },
        { name: '企業O', data: ["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"] }
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
    return { colorClass, text: `残り${remaining}`, fraction: `${numerator}/${denominator}` };
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
        <table className="table-bordered table-auto border-collapse m-6">
          <tbody>
            <tr ><td></td><td></td><td>1月1日</td><td>1月2日</td><td>1月3日</td><td>1月4日</td><td>1月5日</td><td>1月6日</td><td>1月7日</td><td>1月8日</td><td>1月9日</td><td>1月10日</td><td>1月11日</td><td>1月12日</td></tr>
            {regions.map(region => (
              <>
                <tr className="region-row">
                  <td>{region.regionName}</td>
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
                    <td></td>
                    <td>{company.name}</td>
                    {company.data.map((data, index) => {
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
                ))}
              </>
            ))}
            {/* <tr className="region-row"><td>関東</td><td>企業A</td>
                {["20/50", "50/50", "0/50", "28/50", "27/50", "29/50", "24/50", "22/50", "26/50", "27/50", "24/50", "29/50"].map(data => {
                  const { colorClass, text, fraction } = parseAndStyleCell(data);
                  return (
                    <td key={fraction} className={`${colorClass} relative`}
                        onMouseEnter={(event) => handleMouseEnter(fraction, event)}
                        onMouseLeave={handleMouseLeave}>
                      {text}
                    </td>
                  );
                })}
            </tr>
            <tr><td></td><td>企業b</td>
                {["35/40", "30/40", "8/40", "33/40", "28/40", "26/40", "30/40", "32/40", "27/40", "28/40", "24/40", "30/40"].map(data => {
                  const { colorClass, text, fraction } = parseAndStyleCell(data);
                  return (
                    <td key={fraction} className={`${colorClass} relative`}
                        onMouseEnter={(event) => handleMouseEnter(fraction, event)}
                        onMouseLeave={handleMouseLeave}>
                      {text}
                    </td>
                  );
                })}
            </tr>
            <tr><td></td><td>企業c</td>
                {["28/40", "25/40", "24/40", "21/40", "29/40", "32/40", "17/40", "24/40", "19/40", "17/40", "24/40", "25/40"].map(data => {
                  const { colorClass, text, fraction } = parseAndStyleCell(data);
                  return (
                    <td key={fraction} className={`${colorClass} relative`}
                        onMouseEnter={(event) => handleMouseEnter(fraction, event)}
                        onMouseLeave={handleMouseLeave}>
                      {text}
                    </td>
                  );
                })}
            </tr>
            
            <tr><td></td><td>企業C</td><td>28/40残り12</td><td>25/40残り15</td><td>24/40残り16</td><td>21/40残り19</td><td>29/40残り11</td><td>32/40残り8</td><td>17/40残り23</td><td>24/40残り16</td><td>19/40残り11</td><td>17/40残り23</td><td>24/40残り16</td><td>25/40残り15</td></tr>
            <tr><td></td><td>企業D</td><td>33/55残り22</td><td>23/55残り32</td><td>27/55残り28</td><td>29/55残り26</td><td>31/55残り24</td><td>27/55残り28</td><td>33/55残り22</td><td>31/55残り24</td><td>26/55残り29</td><td>22/55残り33</td><td>24/55残り31</td><td>29/55残り26</td></tr>
            <tr><td></td><td>企業E</td><td>17/45残り28</td><td>22/45残り23</td><td>27/45残り18</td><td>25/45残り20</td><td>23/45残り22</td><td>31/45残り31</td><td>22/45残り23</td><td>26/45残り19</td><td>18/45残り27</td><td>12/45残り33</td><td>19/45残り26</td><td>25/45残り20</td></tr>
            <tr className="region-row"><td>関西</td><td>企業F</td><td>1/40残り39</td><td>7/40残り33</td><td>36/40残り4</td><td>34/40残り6</td><td>31/40残り9</td><td>28/40残り12</td><td>21/40残り19</td><td>29/40残り11</td><td>36/40残り4</td><td>38/40残り2</td><td>34/40残り6</td><td>32/40残り8</td></tr>
            <tr><td></td><td>企業G</td><td>5/55残り50</td><td>46/55残り9</td><td>40/55残り15</td><td>37/55残り18</td><td>32/55残り23</td><td>46/55残り9</td><td>41/55残り14</td><td>7/55残り48</td><td>39/55残り16</td><td>48/55残り7</td><td>46/55残り9</td><td>41/55残り14</td></tr>
            <tr><td></td><td>企業H</td><td>5/45残り40</td><td>32/45残り13</td><td>33/45残り12</td><td>31/45残り14</td><td>9/45残り36</td><td>37/45残り8</td><td>25/45残り20</td><td>23/45残り22</td><td>33/45残り12</td><td>36/45残り9</td><td>8/45残り37</td><td>31/45残り14</td></tr>
            <tr><td></td><td>企業I</td><td>3/50残り47</td><td>41/50残り9</td><td>33/50残り17</td><td>38/50残り12</td><td>30/50残り20</td><td>37/50残り13</td><td>44/50残り6</td><td>9/50残り41</td><td>47/50残り3</td><td>39/50残り11</td><td>35/50残り15</td><td>36/50残り14</td></tr>
            <tr><td></td><td>企業J</td><td>3/55残り52</td><td>41/55残り14</td><td>49/55残り6</td><td>7/55残り48</td><td>43/55残り12</td><td>41/55残り14</td><td>45/55残り10</td><td>39/55残り16</td><td>38/55残り17</td><td>40/55残り15</td><td>47/55残り8</td><td>5/55残り50</td></tr>
            <tr className="region-row"><td>北陸</td><td>企業K</td><td>3/45残り42</td><td>36/45残り9</td><td>39/45残り6</td><td>38/45残り7</td><td>40/45残り5</td><td>37/45残り8</td><td>6/45残り39</td><td>5/45残り40</td><td>41/45残り4</td><td>33/45残り12</td><td>37/45残り8</td><td>32/45残り13</td></tr>
            <tr><td></td><td>企業L</td><td>5/40残り35</td><td>32/40残り8</td><td>30/40残り10</td><td>29/40残り11</td><td>7/40残り33</td><td>24/40残り16</td><td>25/40残り15</td><td>28/40残り12</td><td>30/40残り10</td><td>9/40残り31</td><td>33/40残り7</td><td>29/40残り11</td></tr>
            <tr><td></td><td>企業M</td><td>7/35残り28</td><td>20/35残り15</td><td>19/35残り16</td><td>22/35残り13</td><td>24/35残り11</td><td>25/35残り10</td><td>2/35残り33</td><td>10/35残り25</td><td>27/35残り8</td><td>24/35残り11</td><td>19/35残り16</td><td>23/35残り12</td></tr>
            <tr><td></td><td>企業N</td><td>5/35残り30</td><td>28/35残り7</td><td>10/35残り25</td><td>22/35残り13</td><td>19/35残り16</td><td>17/35残り18</td><td>20/35残り15</td><td>26/35残り9</td><td>28/35残り7</td><td>21/35残り14</td><td>27/35残り8</td><td>19/35残り16</td></tr>
            <tr><td></td><td>企業O</td><td>7/60残り53</td><td>41/60残り19</td><td>48/60残り12</td><td>43/60残り7</td><td>39/60残り21</td><td>45/60残り15</td><td>32/60残り28</td><td>37/60残り23</td><td>19/60残り41</td><td>48/60残り12</td><td>45/60残り15</td><td>51/60残り9</td></tr> */}
          </tbody>
        </table>
      </div>
    </>
    
  );
}
