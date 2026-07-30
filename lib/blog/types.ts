export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | {
      type: "table";
      headers: [string, string];
      rows: [string, string][];
    }
  | {
      type: "faq";
      items: { question: string; answer: string }[];
    }
  | {
      type: "links";
      items: { label: string; href: string; external?: boolean }[];
    };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO date YYYY-MM-DD
  lede: string;
  blocks: BlogBlock[];
};
