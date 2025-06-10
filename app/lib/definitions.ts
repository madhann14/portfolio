export type Experience = {
  id: Number;
  role: string;
  company: string;
  start: Date;
  end?: Date;
  currentJob: boolean;
  description: string;
  contributions: Array<string>;
  skills: Array<string>;
};