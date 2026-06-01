// キャラクター追加用データファイル
const CUSTOM_CHARACTERS = [
    {
        id: 101,
        name: "迷いネコ基本型",
        rarity: "基本",
        cost: 20,
        description: "どこにでもいる普通の白いネコ。足が速く、とりあえず数を出して前線を維持するのに最適。",
        bHp: 50, bAtk: 12, speed: 1.8, range: 25, size: 20,
        // グラフィックの描画とアニメーションの定義
        draw: (ctx, x, y, size, tick, state) => {
            let walkCycle = Math.sin(tick * 0.2) * 4; // 歩行時の上下の揺れ
            if (state === 'attack') walkCycle = -8; // 攻撃時はちょっと飛び跳ねる
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x - size/2, y - size + walkCycle, size, size);
            // 耳
            ctx.beginPath();
            ctx.moveTo(x - size/2, y - size + walkCycle);
            ctx.lineTo(x - size/4, y - size - 6 + walkCycle);
            ctx.lineTo(x, y - size + walkCycle);
            ctx.fill();
            // 目
            ctx.fillStyle = "#000000";
            ctx.fillRect(x - size/3, y - size + 6 + walkCycle, 3, 3);
        }
    },
    {
        id: 102,
        name: "ダンボール肉壁",
        rarity: "基本",
        cost: 40,
        description: "拾ったダンボールを被った強固なネコ。攻撃力は皆無だが、圧倒的なタフさで敵の進軍を阻む。",
        bHp: 220, bAtk: 3, speed: 0.9, range: 20, size: 24,
        draw: (ctx, x, y, size, tick, state) => {
            let shuffle = (tick % 20 < 10) ? 1 : 0; // ずりずり歩くアニメーション
            ctx.fillStyle = "#cd853f"; // ダンボール色
            ctx.fillRect(x - size/2, y - size, size, size);
            ctx.fillStyle = "#8b5a2b";
            ctx.strokeRect(x - size/2, y - size, size, size);
            // のぞき穴
            ctx.fillStyle = "#000";
            ctx.fillRect(x - size/3, y - size + 6 + shuffle, 6, 4);
        }
    },
    {
        id: 103,
        name: "トリレンジャー・スナイプ",
        rarity: "レア",
        cost: 70,
        description: "長いクチバシからビームを放つ進化した鳥。射程が非常に長く、肉壁の後ろから安全に攻撃できる。",
        bHp: 40, bAtk: 22, speed: 1.2, range: 140, size: 18,
        draw: (ctx, x, y, size, tick, state) => {
            let bob = Math.sin(tick * 0.1) * 2;
            ctx.fillStyle = "#00e5ff"; // レアカラー
            ctx.beginPath();
            ctx.arc(x, y - size/2 + bob, size/2, 0, Math.PI * 2);
            ctx.fill();
            // 長いクチバシ（左を向いて攻撃するので左側に伸ばす）
            ctx.fillStyle = "#ffeb3b";
            ctx.beginPath();
            ctx.moveTo(x - size/2, y - size/2 + bob - 3);
            ctx.lineTo(x - size - 8, y - size/2 + bob);
            ctx.lineTo(x - size/2, y - size/2 + bob + 3);
            ctx.fill();
        }
    },
    {
        id: 104,
        name: "DJマサラ・ビート",
        rarity: "レア",
        cost: 60,
        description: "常に爆音を鳴らすファンキーなやつ。攻撃速度がとにかく早く、敵をハメるのが得意。",
        bHp: 70, bAtk: 9, speed: 1.6, range: 30, size: 20,
        draw: (ctx, x, y, size, tick, state) => {
            let bounce = Math.abs(Math.sin(tick * 0.3)) * 6; // ノリノリの縦揺れ
            ctx.fillStyle = "#ff4081";
            ctx.fillRect(x - size/2, y - size + bounce, size, size);
            // ヘッドホン
            ctx.fillStyle = "#fff";
            ctx.fillRect(x - size/2 - 3, y - size + 4 + bounce, 4, 10);
            ctx.fillRect(x + size/2 - 1, y - size + 4 + bounce, 4, 10);
        }
    },
    {
        id: 105,
        name: "ガジェットコタツ",
        rarity: "激レア",
        cost: 110,
        description: "最新のルンバの上にコタツを搭載したサイボーグ。移動は遅いが、近づく敵をコタツ布団で叩き潰す。",
        bHp: 350, bAtk: 18, speed: 0.8, range: 35, size: 28,
        draw: (ctx, x, y, size, tick, state) => {
            ctx.fillStyle = "#4a148c"; // 激レアパープル
            ctx.fillRect(x - size/2, y - size/2, size, size/2); // ルンバ土台
            ctx.fillStyle = "#ff1744"; // コタツ布団
            ctx.fillRect(x - size/2 - 4, y - size, size + 8, size/2);
            // 天板
            ctx.fillStyle = "#ffeb3b";
            ctx.fillRect(x - size/2, y - size, size, 4);
        }
    },
    {
        id: 106,
        name: "飛脚ネコ・ソニック",
        rarity: "激レア",
        cost: 80,
        description: "限界まで足を鍛え上げた韋駄天。異常な移動速度で前線へ駆けつけ、敵の遠距離キャラを奇襲する。",
        bHp: 90, bAtk: 28, speed: 3.2, range: 25, size: 20,
        draw: (ctx, x, y, size, tick, state) => {
            let legSwing = Math.sin(tick * 0.5) * 6; // 超高速足振り
            ctx.fillStyle = "#aa00ff";
            ctx.fillRect(x - size/2, y - size, size, size - 4);
            // 残像エフェクト（移動中）
            ctx.fillStyle = "rgba(170, 0, 255, 0.3)";
            ctx.fillRect(x - size/2 + 8, y - size + 2, size, size - 4);
        }
    },
    {
        id: 107,
        name: "古代ロボ・オメガ",
        rarity: "超激レア",
        cost: 220,
        description: "超古代遺跡から発掘された巨大決戦兵器。圧倒的な一撃を放ち、広範囲の敵を消滅させる神話級の機体。",
        bHp: 950, bAtk: 120, speed: 0.6, range: 80, size: 45,
        draw: (ctx, x, y, size, tick, state) => {
            ctx.fillStyle = "#ffea00"; // ゴールド
            ctx.fillRect(x - size/2, y - size, size, size); // 巨体
            // モノアイ（攻撃時に赤く光る）
            ctx.fillStyle = (state === 'attack') ? "#ff1744" : "#00ff00";
            ctx.fillRect(x - size/3, y - size + 10, 8, 8);
            // 肩のキャノン
            ctx.fillStyle = "#757575";
            ctx.fillRect(x - 5, y - size - 12, 18, 12);
        }
    },
    {
        id: 108,
        name: "魔王ダーク・スクウェア",
        rarity: "超激レア",
        cost: 200,
        description: "異次元の闇を統べる立方体の王。攻撃を当てるたびに、冷酷な波動で敵を怯ませて後退させる力を持つ。",
        bHp: 750, bAtk: 95, speed: 1.1, range: 60, size: 40,
        draw: (ctx, x, y, size, tick, state) => {
            ctx.fillStyle = "#212121"; // 漆黒
            ctx.fillRect(x - size/2, y - size, size, size);
            ctx.strokeStyle = "#ffea00";
            ctx.lineWidth = 3;
            ctx.strokeRect(x - size/2, y - size, size, size); // 金のオーラ枠
            // 邪悪な目
            ctx.fillStyle = "#ff1744";
            ctx.fillRect(x - size/3, y - size + 12, 6, 6);
            ctx.fillRect(x + size/6, y - size + 12, 6, 6);
        }
    },
    {
        id: 109,
        name: "にゃんこバルーン",
        rarity: "レア",
        cost: 65,
        description: "風船を体に括り付けて浮遊したネコ。地面のデコボコを無視してふわふわと安定した速度で前進する。",
        bHp: 60, bAtk: 15, speed: 1.4, range: 40, size: 20,
        draw: (ctx, x, y, size, tick, state) => {
            let floatAnim = Math.sin(tick * 0.08) * 8; // ふわふわ浮遊
            // 風船
            ctx.fillStyle = "#ff1744";
            ctx.beginPath();
            ctx.arc(x, y - size - 15 + floatAnim, 10, 0, Math.PI*2);
            ctx.fill();
            // 紐
            ctx.strokeStyle = "#fff";
            ctx.beginPath();
            ctx.moveTo(x, y - size - 5 + floatAnim);
            ctx.lineTo(x, y - size + floatAnim);
            ctx.stroke();
            // 本体
            ctx.fillStyle = "#fff";
            ctx.fillRect(x - size/2, y - size + floatAnim, size, size);
        }
    },
    {
        id: 110,
        name: "クリティカル・ニンジャ",
        rarity: "激レア",
        cost: 95,
        description: "影に生きる暗殺にゃんこ。攻撃モーションが非常に素早く、低確率で大ダメージの会心の一撃をくり出す。",
        bHp: 110, bAtk: 40, speed: 2.2, range: 30, size: 22,
        draw: (ctx, x, y, size, tick, state) => {
            ctx.fillStyle = "#37474f"; // 忍び装束
            ctx.fillRect(x - size/2, y - size, size, size);
            // 赤いマフラー
            ctx.fillStyle = "#ff1744";
            ctx.fillRect(x - size/2 - 4, y - size + 12, size + 4, 4);
            // 鋭い眼光
            ctx.fillStyle = "#fff";
            ctx.fillRect(x - size/3, y - size + 4, 12, 3);
        }
    }
];
