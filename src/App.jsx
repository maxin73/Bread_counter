import React, { useState } from 'react';
import Counter from "./components/counter.jsx";
import ScreenshotCapture from './components/screenshot_capture.jsx';

function App() {
  const today = new Date();
  const month = today.getMonth() +1;
  const date = today.getDate();
  const dayOfWeek = today.getDay();

  const breadDisplayRules1 = {
    0: ['メロンパン - CC', 'メロンパン - ほうじ'],
    3: ['メロンパン - CC'],
    5: ['メロンパン - ほうじ'],
    6: ['メロンパン - CC', 'メロンパン - ほうじ'],
  };

  const breadDisplayRulesMocha = {
    0: ['メロンパン - モカ'],
    4: ['メロンパン - モカ'],
    6: ['メロンパン - モカ'],
  };

    const breadDisplayRules2 = {
    6: [
    'フルーツサンド(土曜限定)',
    'たまごサンド(土曜限定)',
    'ゆず七味(土曜限定)',
    'カツサンド(土曜限定)',
    'えびカツサンド(土曜限定)',
    ],
  };

  const initialBreadData = [
    { name: 'カレーパン(牛肉)', count: 0, genre: '1' },
    { name: 'カレーパン(野菜)', count: 0, genre: '1' },
    { name: 'コロッケパン', count: 0, genre: '1' },
    { name: 'ソーセージパン', count: 0, genre: '1' },
    { name: 'ハムマヨパン', count: 0, genre: '1' },
    { name: 'コーンマヨパン', count: 0, genre: '1' },
    { name: 'たこ焼きパン', count: 0, genre: '1' },
    { name: 'メロンパン - バニラ', count: 0, genre: '1' },
    { name: 'メロンパン - 抹茶', count: 0, genre: '1' },
    { name: 'メロンパン - モカ', count: 0, },
    { name: 'メロンパン - EG', count: 0, genre: '2' },
    { name: 'メロンパン - CC', count: 0, },
    { name: 'メロンパン - ほうじ', count: 0, },
    { name: 'コロネ', count: 0, genre: '3' },
    { name: 'あんぱん', count: 0, genre: '3' },
    { name: 'メープルローフ', count: 0, genre: '3' },
    { name: 'ビーガン食パン', count: 0, genre: '3' },
    { name: 'ディナーロール', count: 0, genre: '3' },
    { name: 'くまぱん', count: 0, genre: '3' },
    { name: 'とりおやこ', count: 0, genre: '3' },
    { name: 'ピザツイスト', count: 0, genre: '4' },
    { name: 'ガーリックチーズ', count: 0, genre: '4' },
    { name: 'みそハバーティ', count: 0, genre: '4' },
    { name: 'ゆずねぎチーズ', count: 0, genre: '4' },
    { name: 'アップルシナモン', count: 0, genre: '4' },
    { name: 'ゆず抹茶スワール', count: 0, genre: '4' },
    { name: 'オレンジチョコスワール', count: 0, genre: '4' },
    { name: 'ゆずデニッシュ', count: 0, genre: '4' },
    { name: 'もちあんこパイ', count: 0, genre: '4' },
    { name: 'もちケーキプレーン', count: 0, genre: '5' },
    { name: 'もちケーキ抹茶', count: 0, genre: '5' },
    { name: 'ミニもち 抹茶', count: 0, genre: '5' },
    { name: 'ミニもち 黒ゴマ', count: 0, genre: '5' },
    { name: 'ミニもち EG', count: 0, genre: '5' },
    { name: 'ミニもち チョコ', count: 0, genre: '5' },
    { name: 'ミニもち コーヒー', count: 0, genre: '5' },
    { name: 'ミニもち あんこ', count: 0, genre: '5' },
    { name: 'たまごコッペ', count: 0, genre: '5' },
    { name: 'フルーツサンド(土曜限定)', count: 0, },
    { name: 'たまごサンド(土曜限定)', count: 0, },
    { name: 'ゆず七味(土曜限定)', count: 0, },
    { name: 'カツサンド(土曜限定)', count: 0, },
    { name: 'えびカツサンド(土曜限定)', count: 0, },
    { name: 'モンブランタルト', count: 0, genre: '6' },
    { name: 'イチゴショート', count: 0, genre: '6' },
    { name: 'イチゴ大福', count: 0, genre: '6' },
    { name: 'どら焼き', count: 0, genre: '6' },
    { name: 'ナナイモバー抹茶', count: 0, genre: '6' },
    { name: 'ナナイモバー黒ゴマ', count: 0, genre: '6' },
    { name: '柚子レモンバー', count: 0, genre: '6' },
    { name: 'ケーキポップ', count: 0, genre: '6' },
    { name: 'プリン', count: 0, genre: '6' },
    { name: 'チーズスフレ', count: 0, genre: '6' },
    { name: 'Day Old MCR', count: 0, genre: '6' },
    { name: 'Day Old 山食', count: 0, genre: '6' },
    { name: 'Day Old ディナーロール', count: 0, genre: '6' },
  ];
  
  const [breadData, setBreadData] = useState(initialBreadData);

  const screenshotRef = React.useRef();

  const updateBreadCount = (breadName, increment) => {
    setBreadData((prevBreadData) => 
      prevBreadData.map((bread) => 
      bread.name === breadName
        ? {...bread, count: bread.count + increment }
        : bread
      )
    );
  };

  const genre1 = breadData.filter((bread) => bread.genre === "1");
  const genre2 = breadData.filter((bread) => bread.genre === "2");
  const genre3 = breadData.filter((bread) => bread.genre === "3");
  const genre4 = breadData.filter((bread) => bread.genre === "4");
  const genre5 = breadData.filter((bread) => bread.genre === "5");
  const genre6 = breadData.filter((bread) => bread.genre === "6");

  const filteredBreadData1 = breadDisplayRules1[dayOfWeek]
    ? breadData.filter((bread) => breadDisplayRules1[dayOfWeek].includes(bread.name))
    : [];

  const filteredBreadDataMocha = breadDisplayRulesMocha[dayOfWeek]
    ? breadData.filter((bread) => breadDisplayRulesMocha[dayOfWeek].includes(bread.name))
    : [];

  const filteredBreadData2 = breadDisplayRules2[dayOfWeek]
    ? breadData.filter((bread) => breadDisplayRules2[dayOfWeek].includes(bread.name))
    : [];

  return (
    <>
    <div ref={screenshotRef} className="bg-white">
      <h2 className="date mt-5 ml-3 text-xl underline">
        {month}月{date}日
      </h2>
      <section className="flex">
        <div className="genre-left">
          <div className="genre1">
          {genre1.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
          </div>
          <div className="genre2">
            {filteredBreadDataMocha.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
            {genre2.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
            {filteredBreadData1.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
          </div>
          <div className="genre3">
            {genre3.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
          </div>
          <div className="genre4">
            {genre4.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
          </div>
        </div>
        <div className="genre-right">
          <div className="genre5">
            {genre5.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
            {filteredBreadData2.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
          </div>
          <div className="genre6">
            {genre6.map((bread) => (
              <Counter 
                key={bread.name}
                bread={bread.name}
                count={bread.count}
                onIncrement={() => updateBreadCount(bread.name, 1)}
                onDecrement={() => updateBreadCount(bread.name, -1)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <ScreenshotCapture screenshotRef={screenshotRef} /> */}
    </div>
    </>
  );
}

export default App
