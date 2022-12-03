export type FileTree =
  | {
      isDir: false;
    }
  | {
      isDir: true;
      files: { [filename: string]: FileTree };
    };
