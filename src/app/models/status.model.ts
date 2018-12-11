export interface Status {
  description: string;
  title: string;
}

export interface StatusWithId extends Status {
  id: string;
}
