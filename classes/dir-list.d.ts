export = DirList;

declare class DirList {
    /**
     * Array of paths to dirs.
     */
    public list: string[];
    
    /**
     * @see list
     */
    constructor(list: string[]);

    /**
     * Finds all subdirs in all self dirs.
     */
    public findAllSubdirs(): string[];

    /**
     * Finds all subdirs with the defined name in all self dirs.
     */
    public findSubdirsByName(dirname: string): string[];

    /**
     * Finds all subdirs in all self dirs with the pattern.
     * As pattern can be strict name of the dir or ** for the
     * all dirs.
     */
    public findSubdirsByPattern(pattern: string): string[];

    /**
     * Finds all files in all self dirs with the pattern.
     * As pattern can be strict name of the file or * in
     * places where can be any symbol(s).
     */
    public findFilesByPattern(pattern: string): string[];
}