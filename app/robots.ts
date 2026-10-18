import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://www.tryplany.com";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            },
            {
                // AI Search Engines & Scrapers (GPT, Claude, Perplexity, etc.)
                userAgent: [
                    "GPTBot",         // OpenAI ChatGPT crawler
                    "OAI-SearchBot",  // OpenAI search crawler
                    "ClaudeBot",      // Anthropic Claude
                    "PerplexityBot",  // Perplexity AI
                    "Google-Extended",// Google Gemini AI training crawler
                    "Bytespider"      // TikTok / ByteDance crawler
                ],
                allow: "/",
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}