export type ResourceContent = ArrayBuffer | string;

export interface EitherContentOrError {
  content?: ResourceContent;
  error?: Error;
}

export interface IResourceResolver {
  resolve(url: string): Promise<EitherContentOrError>;
}
