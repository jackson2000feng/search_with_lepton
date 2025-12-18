/**
 * Represents a search result source with metadata
 */
export type Source = {
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly isFamilyFriendly: boolean;
  readonly displayUrl: string;
  readonly snippet: string;
  readonly deepLinks: ReadonlyArray<{
    readonly snippet: string;
    readonly name: string;
    readonly url: string;
  }>;
  readonly dateLastCrawled: string;
  readonly cachedPageUrl: string;
  readonly language: string;
  readonly primaryImageOfPage?: {
    readonly thumbnailUrl: string;
    readonly width: number;
    readonly height: number;
    readonly imageId: string;
  };
  readonly isNavigational: boolean;
};
