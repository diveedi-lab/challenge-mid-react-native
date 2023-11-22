import type { AxiosInstance, AxiosResponse } from 'axios';
import type { EitherContentOrError, IResourceResolver } from './IResourceResolver';

export class SimpleResourceResolver implements IResourceResolver {
  constructor(private httpClient: AxiosInstance) {
  }

  async resolve(url: string): Promise<EitherContentOrError> {
    try {
      const response: AxiosResponse<ArrayBuffer | string> = await this.httpClient.get(url, {
        responseType: 'arraybuffer',
      });

      return { content: response.data };
    } catch (error: any) {
      return { error };
    }
  }
}
