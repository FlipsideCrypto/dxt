import type { DxtSignatureInfo } from "../types.js";
/**
 * Signs a DXT file with the given certificate and private key using PKCS#7
 *
 * @param dxtPath Path to the DXT file to sign
 * @param certPath Path to the certificate file (PEM format)
 * @param keyPath Path to the private key file (PEM format)
 * @param intermediates Optional array of intermediate certificate paths
 */
export declare function signDxtFile(dxtPath: string, certPath: string, keyPath: string, intermediates?: string[]): void;
/**
 * Verifies a signed DXT file using OS certificate store
 *
 * @param dxtPath Path to the signed DXT file
 * @returns Signature information including verification status
 */
export declare function verifyDxtFile(dxtPath: string): Promise<DxtSignatureInfo>;
/**
 * Extracts the signature block from a signed DXT file
 */
export declare function extractSignatureBlock(fileContent: Buffer): {
    originalContent: Buffer;
    pkcs7Signature?: Buffer;
};
/**
 * Verifies certificate chain against OS trust store
 */
export declare function verifyCertificateChain(certificate: Buffer, intermediates?: Buffer[]): Promise<boolean>;
/**
 * Removes signature from a DXT file
 */
export declare function unsignDxtFile(dxtPath: string): void;
