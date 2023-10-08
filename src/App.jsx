import React, { useState } from 'react';
import Counter from "./components/Counter.jsx";
import ScreenshotCapture from './components/ScreenshotCapture.jsx';

function App() {
  const today = new Date();
  const month = today.getMonth() +1;
  const date = today.getDate();

  const initialBreadData = [
    { name: 'カレーパン(牛肉)', count: 0, genre: '1' },
    { name: 'カレーパン(野菜)', count: 0, genre: '1' },
    { name: 'コロッケパン', count: 0, genre: '1' },
    { name: 'ソーセージパン', count: 0, genre: '1' },
    { name: 'ハムマヨパン', count: 0, genre: '1' },
    { name: 'コーンマヨパン', count: 0, genre: '1' },
    { name: 'たこ焼きパン', count: 0, genre: '1' },
    { name: 'メロンパン - バニラ', count: 0, genre: '2' },
    { name: 'メロンパン - 抹茶', count: 0, genre: '2' },
    { name: 'メロンパン - モカ', count: 0, genre: '2' },
    { name: 'メロンパン - EG', count: 0, genre: '2' },
    { name: 'メロンパン - CC', count: 0, genre: '2' },
    { name: 'メロンパン - ほうじ', count: 0, genre: '2' },
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
    { name: 'アップルシナモン', count: 0, genre: '5' },
    { name: 'もちロールきなこ', count: 0, genre: '5' },
    { name: 'もちロール黒ゴマ', count: 0, genre: '5' },
    { name: 'ゆず抹茶スワール', count: 0, genre: '5' },
    { name: 'オレンジチョコスワール', count: 0, genre: '5' },
    { name: 'ゆずデニッシュ', count: 0, genre: '5' },
    { name: 'もちあんこパイ', count: 0, genre: '5' },
    { name: 'もちケーキプレーン', count: 0, genre: '5' },
    { name: 'もちケーキ抹茶', count: 0, genre: '5' },
    { name: 'ミニもち 抹茶', count: 0, genre: '5' },
    { name: 'ミニもち 黒ゴマ', count: 0, genre: '5' },
    { name: 'ミニもち EG', count: 0, genre: '5' },
    { name: 'ミニもち チョコ', count: 0, genre: '5' },
    { name: 'ミニもち コーヒー', count: 0, genre: '5' },
    { name: 'ミニもち あんこ', count: 0, genre: '5' },
    { name: 'たまごコッペ', count: 0, genre: '6' },
    { name: 'コロッケコッペ', count: 0, genre: '6' },
    { name: 'フルーツサンド(土曜限定)', count: 0, genre: '6' },
    { name: 'たまごサンド(土曜限定)', count: 0, genre: '6' },
    { name: 'ゆず七味(土曜限定)', count: 0, genre: '6' },
    { name: 'カツサンド(土曜限定)', count: 0, genre: '6' },
    { name: 'えびカツサンド(土曜限定)', count: 0, genre: '6' },
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

  return (
    <>
    <div ref={screenshotRef}>
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
            {genre2.map((bread) => (
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
      <ScreenshotCapture screenshotRef={screenshotRef} />
    </div>
    </>
  );
}

export default App
