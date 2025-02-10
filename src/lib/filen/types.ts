export type FileNameType = string | string[];

export type FileContentType = string;

export interface WriteFileOptions {
  noWarnings?: boolean;
}

export interface ReadFileOptions {
  parseToJson?: boolean;
}

export interface MakeDirsOptions extends WriteFileOptions {};
