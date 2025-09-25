# Tsumiki - AI駆動開発支援＆学習フレームワーク

TsumikiはAI駆動開発と学習支援のためのフレームワークです。開発プロセスの自動化に加え、一般的な学習活動を体系的にサポートする機能を提供します。

基本的にClaude Codeをサポートしますが、それ以外のツールでも使用できます。[Claude Code以外のツールでtsumikiを使用する](#claude-code以外のツールでtsumikiを使用する) を参照してください。

## インストール

Tsumikiを使用するには、次のnpxコマンドでインストールしてください：

```bash
npx tsumiki install
```

このコマンドを実行すると、`.claude/commands/` にTsumikiのClaude Codeスラッシュコマンドがインストールされます。

## 概要

Tsumikiは以下の3つの機能群で構成されています：

- **kairo** - 要件定義から実装までの包括的な開発フロー
- **tdd** - テスト駆動開発（TDD）の個別実行
- **learn** - 一般的な学習活動を支援する学習フレームワーク

### Kairoコマンド

Kairoは要件定義から実装までの開発プロセスを自動化・支援します。以下の開発フローを支援します：

1. **要件定義** - 概要から詳細な要件定義書を生成
2. **設計** - 技術設計文書を自動生成
3. **タスク分割** - 実装タスクを適切に分割・順序付け
4. **TDD実装** - テスト駆動開発による品質の高い実装

### 学習支援コマンド

学習フレームワークは、プログラミング以外の一般的な学習活動を体系的にサポートします：

1. **関係分析** - 概念間の関係を7つのタイプで分類
2. **段階的理解** - 30秒/3分/30分の3段階で知識を構築
3. **概念マップ** - 学習領域の全体構造を可視化
4. **実験設計** - 15分以内で実施可能な検証実験
5. **証拠評価** - 情報の信頼性をA〜D級で分類
6. **知識の外部化** - クイズやカードで記憶を定着
7. **統合セッション** - すべてのテクニックを組み合わせた体系的学習

## 利用可能なコマンド

- `init-tech-stack` - 技術スタックの特定

### Kairoコマンド（包括的開発フロー）
- `kairo-requirements` - 要件定義
- `kairo-design` - 設計文書生成
- `kairo-tasks` - タスク分割
- `kairo-implement` - 実装実行

### TDDコマンド（個別実行）
- `tdd-requirements` - TDD要件定義
- `tdd-testcases` - テストケース作成
- `tdd-red` - テスト実装（Red）
- `tdd-green` - 最小実装（Green）
- `tdd-refactor` - リファクタリング
- `tdd-verify-complete` - TDD完了確認

### リバースエンジニアリングコマンド
- `rev-tasks` - 既存コードからタスク一覧を逆生成
- `rev-design` - 既存コードから設計文書を逆生成
- `rev-specs` - 既存コードからテスト仕様書を逆生成
- `rev-requirements` - 既存コードから要件定義書を逆生成

### 学習支援コマンド（Learn）
- `learn-relation-type` - 概念間の関係を分類
- `learn-zoom-summary` - 30秒/3分/30分の段階的要約
- `learn-concept-map` - 概念マップの作成
- `learn-minimal-experiment` - 最小実験の設計
- `learn-evidence-classification` - 根拠の信頼性評価
- `learn-externalization` - 学習内容の外部化（クイズ・カード）
- `learn-orchestration` - 統合学習セッション

## クイックスタート

### 包括的な開発フロー

```bash
# 1. 技術スタック初期化
/init-tech-stack

# 2. 要件定義
/kairo-requirements

# 3. 設計
/kairo-design

# 4. タスク分割
/kairo-tasks

# 5. 実装
/kairo-implement
```

### 個別TDDプロセス

```bash
/tdd-requirements
/tdd-testcases
/tdd-red
/tdd-green
/tdd-refactor
/tdd-verify-complete
```

### リバースエンジニアリング

```bash
# 1. 既存コードからタスク構造を分析
/rev-tasks

# 2. 設計文書の逆生成（タスク分析後推奨）
/rev-design

# 3. テスト仕様書の逆生成（設計文書後推奨）
/rev-specs

# 4. 要件定義書の逆生成（全分析完了後推奨）
/rev-requirements
```

### 学習セッション

```bash
# 新しい概念を学ぶ
/learn-zoom-summary Docker 初心者
/learn-relation-type コンテナ 仮想マシン Docker
/learn-concept-map Docker技術 10

# 実践的に学ぶ
/learn-minimal-experiment Git基本操作 15分
/learn-externalization 今日のGit学習

# 体系的な学習セッション
/learn-orchestration 機械学習基礎 2時間 自宅 理論と実践
```

### 開発環境のクリーンアップ

```bash
# 開発環境をクリーンアップ
/clear
```

## Claude Code以外のツールでtsumikiを使用する

[rulesync](https://github.com/dyoshikawa/rulesync)を組み合わせて使用することで、Claude Code以外のツールでもtsumikiのコマンドを使用できます。

`tsumiki install` 後、プロジェクトルートで以下のコマンドを実行します。

```
npx -y rulesync init
npx -y rulesync config --init
npx -y rulesync import \
  --targets claudecode \
  --features commands,subagents

# Gemini CLIのカスタムスラッシュコマンドを出力する場合は以下のようになります。
# （`--targets` には `claudecode`, `geminicli`, `roo` の指定が可能です）
npx -y rulesync generate \
  --targets geminicli \
  --features commands

# カスタムスラッシュコマンドの仕様が存在しない（または仕様的な制限のある）AIコーディングツールでも、 `--experimental-simulate-commands` フラグによりいくつかのツールではコマンドファイルを出力できます。
# Cursorのカスタムスラッシュコマンドを出力する場合は以下のようになります。
# （`--targets` には `cursor`, `copilot`, `codexcli` の指定が可能です）
npx -y rulesync generate \
  --targets cursor \
  --features commands
  --experimental-simulate-commands
```

詳しくは[rulesync](https://github.com/dyoshikawa/rulesync)のREADMEを参照してください。

## 詳細なマニュアル

使用方法の詳細、ディレクトリ構造、ワークフロー例、トラブルシューティングについては [MANUAL.md](./MANUAL.md) を参照してください。
