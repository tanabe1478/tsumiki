# Tsumiki - AI駆動開発支援フレームワーク

TsumikiはAI駆動開発のためのフレームワークです。要件定義から実装まで、AIを活用した効率的な開発プロセスを提供します。

## 概要

Tsumikiは以下の2つのコマンドで構成されています：

- **kairo** - 要件定義から実装までの包括的な開発フロー
- **tdd** - テスト駆動開発（TDD）の個別実行

### Kairoコマンド

Kairoは要件定義から実装までの開発プロセスを自動化・支援します。以下の開発フローを支援します：

1. **要件展開** - 概要から詳細な要件定義書を生成
2. **設計** - 技術設計文書を自動生成
3. **タスク分割** - 実装タスクを適切に分割・順序付け
4. **TDD実装** - テスト駆動開発による品質の高い実装

## 利用可能なコマンド

### Kairoコマンド（包括的開発フロー）
- `kairo-requirements` - 要件展開
- `kairo-design` - 設計文書生成
- `kairo-tasks` - タスク分割
- `kairo-implement` - 実装実行

### TDDコマンド（個別実行）
- `tdd-requirements` - TDD要件定義
- `tdd-testcases` - テストケース作成
- `tdd-red` - テスト実装（Red）
- `tdd-green` - 最小実装（Green）
- `tdd-refactor` - リファクタリング
- `tdd-verify-complete` - 品質確認

## クイックスタート

### 包括的な開発フロー

```bash
# 1. 要件定義
/kairo-requirements

# 2. 設計
/kairo-design

# 3. タスク分割
/kairo-tasks

# 4. 実装
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

## 詳細なマニュアル

使用方法の詳細、ディレクトリ構造、ワークフロー例、トラブルシューティングについては [MANUAL.md](./MANUAL.md) を参照してください。
