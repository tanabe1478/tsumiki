# 9.2 学習コマンドのクイックスタート

## 基本的な使い方

学習支援コマンドは、Claude Codeのスラッシュコマンドとして実行します。各コマンドは独立して使用できますが、組み合わせることでより効果的な学習が可能です。

## シナリオ別の使い方

### シナリオ1: 新しい概念を理解したい

**例**: 「機械学習のニューラルネットワーク」を学ぶ

```bash
# 1. まず関係性を整理
/learn-relation-type ニューロン 層 活性化関数 重み バイアス

# 2. 段階的に理解を深める
/learn-zoom-summary ニューラルネットワーク 初心者 比喩OK

# 3. 全体構造を把握
/learn-concept-map ニューラルネットワーク 10
```

### シナリオ2: 実践的に技術を習得したい

**例**: 「写真のRAW現像」を学ぶ

```bash
# 1. 最小実験で体験
/learn-minimal-experiment RAW現像 15分以内 自宅PC

# 2. 用語や概念の関係を整理
/learn-relation-type RAW JPEG 色空間 露出補正

# 3. 学んだ内容を定着
/learn-externalization 今日のRAW現像学習
```

### シナリオ3: 資格試験の勉強

**例**: 「基本情報技術者試験」の対策

```bash
# 1. 試験範囲の全体像を把握
/learn-concept-map 基本情報技術者試験 12 中級

# 2. 重要概念の関係を理解
/learn-relation-type アルゴリズム データ構造 計算量

# 3. 問題演習用のクイズを生成
/learn-externalization アルゴリズムとデータ構造の学習 クイズのみ
```

### シナリオ4: 研究・調査を行いたい

**例**: 「コーヒーの抽出方法」を研究

```bash
# 1. 情報の信頼性を評価
/learn-evidence-classification コーヒー抽出の最適温度 詳細 5

# 2. 流派や方言を確認
/learn-orchestration コーヒー抽出方法 方言重視

# 3. 実験計画を立てる
/learn-minimal-experiment コーヒー抽出温度の影響 30分 キッチン
```

## 統合セッションの実行

複数のテクニックを組み合わせた体系的な学習セッションを実行：

```bash
/learn-orchestration 量子コンピューティング 2時間 自宅 基礎理解
```

このコマンドは以下を自動的に実行：
1. 関係分類
2. 段階的要約
3. 概念マップ
4. 実験設計
5. 証拠評価
6. 知識の外部化

## 効果的な学習のコツ

### 1. 小さく始める

```bash
# まずは30秒要約から
/learn-zoom-summary Docker 初心者 30秒のみ

# 理解できたら3分版へ
/learn-zoom-summary Docker 初心者 3分版
```

### 2. 実験を重視する

```bash
# 概念を学んだら必ず実験
/learn-minimal-experiment Git基本操作 15分 ターミナル

# 結果を記録して振り返り
/learn-externalization Gitの実験結果と学び
```

### 3. 定期的に外部化する

```bash
# 毎日の学習後に実行
/learn-externalization 今日の学習内容

# 生成されたクイズで復習
# 翌日、3日後、1週間後に確認
```

### 4. 関係性から始める

```bash
# 複雑なトピックは関係整理から
/learn-relation-type TCP IP OSI参照モデル

# 理解した関係を基に深掘り
/learn-concept-map ネットワークプロトコル
```

## パラメータの使い方

### learn-relation-type
```bash
/learn-relation-type <概念1> <概念2> [概念3...]
# 例: /learn-relation-type 関数 メソッド プロシージャ
```

### learn-zoom-summary
```bash
/learn-zoom-summary <トピック> [前提知識] [出力形式]
# 例: /learn-zoom-summary React 初心者 図表推奨
```

### learn-concept-map
```bash
/learn-concept-map <トピック> [ノード数] [詳細度]
# 例: /learn-concept-map 機械学習 12 中級
```

### learn-minimal-experiment
```bash
/learn-minimal-experiment <概念> [制約] [環境]
# 例: /learn-minimal-experiment CSS_Grid 10分 ブラウザ
```

### learn-evidence-classification
```bash
/learn-evidence-classification <トピック> [深度] [出典数]
# 例: /learn-evidence-classification 断続的断食の効果 詳細 5
```

### learn-externalization
```bash
/learn-externalization <学習内容> [形式] [難易度]
# 例: /learn-externalization 今日のPython学習 クイズのみ 中級
```

### learn-orchestration
```bash
/learn-orchestration <対象> [時間] [環境] [目標]
# 例: /learn-orchestration TypeScript 90分 VSCode 基礎習得
```

## よくある質問

### Q: どのコマンドから始めるべき？
A: `learn-zoom-summary` で全体像を掴んでから、`learn-relation-type` で詳細を理解するのがおすすめです。

### Q: 実験が思いつかない場合は？
A: `learn-minimal-experiment` に概念名だけ入力すれば、AIが適切な実験を提案してくれます。

### Q: 覚えられない場合は？
A: `learn-externalization` で生成したクイズやカードを、間隔を空けて繰り返し復習してください。

### Q: 情報が正しいか不安な場合は？
A: `learn-evidence-classification` で信頼性を評価し、A級・B級の情報を優先してください。