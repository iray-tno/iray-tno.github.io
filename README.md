# iray-tno.github.io

[iray-tno](https://github.com/iray-tno) の GitHub Pages ユーザールート（ポータル）サイトです。

- **URL**: https://iray-tno.github.io/
- **Framework**: [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Package Manager**: pnpm

## 特徴と設計方針

- **GitHub Pages のユーザールート提供**:
  - `https://iray-tno.github.io/` にポータルを配置し、SEO/検索エンジン向けに適切なサイト名（`iray-tno`）やメタデータ・JSON-LD 構造化データを配信します。
  - Google 検索で各プロジェクトが「GitHub Pages Documentation」と表示されてしまう事象を防止します。
- **他プロジェクトへの非干渉**:
  - `envarly` や `hozo` など、各プロジェクトの GitHub Pages（`iray-tno.github.io/<project>/`）へ影響を与えないよう、ルート側には同名のディレクトリ/ルートを一切含めず独立してビルドされます。
- **Git リポジトリに HTML をコミットしない設計**:
  - ソースコードのみを管理し、`main` ブランチへの push 時に GitHub Actions でビルド & Artifact アップロードを行い GitHub Pages へ自動デプロイします。

## 開発・ビルドコマンド

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# 本番ビルド
pnpm build

# プレビュー
pnpm preview
```

## プロジェクトの追加・編集

掲載するプロジェクト情報は [`src/data/projects.ts`](src/data/projects.ts) で管理しています。
新しいプロジェクトやリンクを追加する場合は、この配列にオブジェクトを追加してください。
