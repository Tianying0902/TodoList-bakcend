export type SqlConnection = () => Object;
export type QueryPromise = (query: string, fn: Function) => Promise<void>;
