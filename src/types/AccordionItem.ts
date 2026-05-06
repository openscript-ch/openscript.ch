export type AccordionItem = {
  class?: string;
  title: string;
  name?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "default" | "chevron";
  open?: boolean;
  children?: unknown;
} & Record<string, unknown>;
