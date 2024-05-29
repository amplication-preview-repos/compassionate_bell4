export type Episode = {
  createdAt: Date;
  description: string | null;
  id: string;
  liveFrom: Date | null;
  speakers?: Array<"Option1">;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
