export declare type Position = {
    x: number;
    y: number;
};
export declare type Rect = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export declare function cleanResult(result: any, targetType: any): any;
export declare type RegExp = {
    contains?: string;
    startsWith?: string;
    endsWith?: string;
};
export declare class TitleBuilder {
    data: Array<string>;
    constructor();
    class(value: string | RegExp, caseless?: boolean): TitleBuilder;
    title(title: string | RegExp, caseless?: boolean): TitleBuilder;
    some(id: "TITLE" | "CLASS", some: string | RegExp, caseless?: boolean): TitleBuilder;
    last(): TitleBuilder;
    active(): TitleBuilder;
    instance(instance: number): TitleBuilder;
    build(): string;
}
export declare function titleBuilder(): TitleBuilder;
