import * as path from "node:path";
import * as fs from "fs-extra";
import { Box, Newline, render, Text } from "ink";
import React, { useEffect, useState } from "react";

type InstallStatus =
  | "starting"
  | "checking"
  | "copying"
  | "completed"
  | "error";

const InstallComponent: React.FC = () => {
  const [status, setStatus] = useState<InstallStatus>("starting");
  const [copiedFiles, setCopiedFiles] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const performInstall = async (): Promise<void> => {
      try {
        setStatus("checking");

        // 現在のディレクトリを取得
        const currentDir = process.cwd();
        const targetDir = path.join(currentDir, ".claude", "commands");

        // tsumikiのcommandsディレクトリを取得
        const tsumikiDir = path.resolve(__dirname, "..", "..", "commands");

        // .claude/commandsディレクトリが存在しない場合は作成
        await fs.ensureDir(targetDir);

        setStatus("copying");

        // commandsディレクトリ内のすべての.mdファイルを取得
        const files = await fs.readdir(tsumikiDir);
        const mdFiles = files.filter((file) => file.endsWith(".md"));

        const copiedFilesList: string[] = [];

        for (const file of mdFiles) {
          const sourcePath = path.join(tsumikiDir, file);
          const targetPath = path.join(targetDir, file);

          await fs.copy(sourcePath, targetPath);
          copiedFilesList.push(file);
        }

        setCopiedFiles(copiedFilesList);
        setStatus("completed");

        // 2秒後に終了
        setTimeout(() => {
          process.exit(0);
        }, 2000);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
        setStatus("error");

        setTimeout(() => {
          process.exit(1);
        }, 3000);
      }
    };

    performInstall();
  }, []);

  if (status === "starting") {
    return (
      <Box>
        <Text color="cyan">🚀 Tsumiki インストールを開始します...</Text>
      </Box>
    );
  }

  if (status === "checking") {
    return (
      <Box>
        <Text color="yellow">📋 環境をチェック中...</Text>
      </Box>
    );
  }

  if (status === "copying") {
    return (
      <Box>
        <Text color="blue">📝 コマンドテンプレートをコピー中...</Text>
      </Box>
    );
  }

  if (status === "error") {
    return (
      <Box flexDirection="column">
        <Text color="red">❌ エラーが発生しました:</Text>
        <Text color="red">{error}</Text>
      </Box>
    );
  }

  if (status === "completed") {
    return (
      <Box flexDirection="column">
        <Text color="green">✅ インストールが完了しました!</Text>
        <Newline />
        <Text>コピーされたファイル ({copiedFiles.length}個):</Text>
        {copiedFiles.map((file) => (
          <Text key={file} color="gray">
            {" "}
            • {file}
          </Text>
        ))}
        <Newline />
        <Text color="cyan">
          Claude Codeで以下のようにコマンドを使用できます:
        </Text>
        <Text color="white"> /tdd-requirements</Text>
        <Text color="white"> /kairo-design</Text>
        <Text color="white"> ...</Text>
      </Box>
    );
  }

  return null;
};

export const installCommand = (): void => {
  render(React.createElement(InstallComponent));
};
