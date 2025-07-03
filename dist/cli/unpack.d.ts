interface UnpackOptions {
    dxtPath: string;
    outputDir?: string;
    silent?: boolean;
}
export declare function unpackExtension({ dxtPath, outputDir, silent, }: UnpackOptions): Promise<boolean>;
export {};
