// 方案一：站名合併標示
    const BUS_ROUTES = [
      {
        id: "route-1", 
        name: "一、湖口線", 
        color: "#2563eb", 
        note: "06:10 發車",
        stops: [
          { name: "1. 湖口火車站<br>(前屈臣氏/火車站)", time: "06:10", coords: [24.9023, 121.0442], direction: 'left' },
          { name: "2. 成功路全家", time: "06:12", coords: [24.904570, 121.042995], direction: 'left' },
          { name: "3. 新豐麥當勞", time: "06:20", coords: [24.869053249466198, 120.99523784698553], direction: 'left' },
          { name: "4. 竹北口<br>(新信遊覽車/田記烤鴨)", time: "06:30", coords: [24.838660208533096, 121.0054614256968], direction: 'left' },
          { name: "5. 中正東路<br>(85度C/億客來)", time: "06:35", coords: [24.835160754234426, 121.01438506373573], direction: 'left' },
          { name: "6. 水瀧路-H Motel", time: "06:42", coords: [24.834613397970802, 121.02267222325816], direction: 'left' },
          { name: "7. 高山村茶行", time: "06:45", coords: [24.83077630667305, 121.03641054839333], direction: 'left' },
          { name: "8. 新埔鎮公所", time: "06:55", coords: [24.825474017138664, 121.07403698093012], direction: 'left' },
          { name: "9. 芎林文山路萊爾富", time: "07:10", coords: [24.77337040037082, 121.08484007722681], direction: 'left' },
        ]
      },
      {
        id: "route-2", 
        name: "二、新竹六家線", 
        color: "#dc2626", 
        note: "06:30 發車",
        stops: [
          { name: "1. 新竹火車站", time: "06:30", coords: [24.8019, 120.9713], direction: 'left' },
          { name: "2. 新竹高工全家", time: "06:32", coords: [24.8089, 120.9826], direction: 'left' },
          { name: "3. 中華賓士(對向)", time: "06:35", coords: [24.81755089896848, 120.99455104304471], direction: 'left' },
          { name: "4. 下斗崙公車站牌", time: "06:40", coords: [24.828174196135, 120.99907052140776], direction: 'left' },
          { name: "5. 福興公園", time: "06:45", coords: [24.823221563970684, 121.0098187177413], direction: 'left' },
          { name: "6. 自強南路<br>(麥當勞/渣打銀行)", time: "06:52", coords: [24.819226616885373, 121.02771029892014], direction: 'left' },
          { name: "7. 東海國小", time: "07:00", coords: [24.80535928949755, 121.04945989628948], direction: 'left' },
          { name: "8. 上山村綠獅水車", time: "07:05", coords: [24.78374254173332, 121.07462352584508], direction: 'left' },
          { name: "9. 芎林文林閣", time: "07:10", coords: [24.773308136502777, 121.08242877907753], direction: 'left' },
        ]
      },
      {
        id: "route-3", 
        name: "三、新竹東區線", 
        color: "#059669", 
        note: "06:40 發車",
        stops: [
          { name: "1. 光復高中公車站牌", time: "06:40", coords: [24.7985, 120.9950], direction: 'bottom' },
          { name: "2. 埔頂二路123號(惠宇青雲)", time: "06:45", coords: [24.7932, 121.0125], direction: 'top' },
          { name: "3. 關埔國小", time: "06:50", coords: [24.7895, 121.0165], direction: 'bottom' },
          { name: "4. 玉山銀行", time: "06:53", coords: [24.7877, 121.0191], direction: 'right' },
          { name: "5. 關東橋渣打銀行對向", time: "06:55", coords: [24.7828, 121.0238], direction: 'bottom' },
          { name: "6. 二重埔郵局", time: "07:05", coords: [24.7758, 121.0535], direction: 'bottom' },
        ]
      }
    ];
