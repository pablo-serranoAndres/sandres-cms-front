import type { Content } from "@models";

export interface Movie extends Content {
  scenes: string[];
}
