export = PathPattern;

declare class PathPattern {
    /**
     * Pattern of form 'path/*'.
     */
    public pattern: string;

    /**
     * Notice: Transforms given path to absolute.
     * @see pattern
     */
    constructor(pattern: string);

    /**
     * Last part of a path of form 'first/second/last'
     */
    public getLastPart(): string;

    /**
     * Array of parts of a path of form 'part1/part2/part3'
     */
    public getParts(): string[];
}