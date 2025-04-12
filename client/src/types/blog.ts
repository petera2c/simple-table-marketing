import React from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlushImageConfig {
  style: string;
  seed: string;
  width: number;
  height: number;
  bgColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export interface UnDrawImageConfig {
  name: string;
  primaryColor?: string;
  width?: number;
  height?: number;
}

export interface OpenPeepsImageConfig {
  name: string;
  skinColor?: string;
  hairColor?: string;
  shirtColor?: string;
  pantsColor?: string;
  width?: number;
  height?: number;
}

export interface BlogPost {
  title: string;
  description: string;
  content: string;
  slug: string;
  tags: string[];
  author?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogIndex {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}

export interface BlogSearchResult {
  item: BlogPost;
  refIndex: number;
  score?: number;
}

export interface BlogSearchOptions {
  keys: string[];
  threshold?: number;
  distance?: number;
  includeScore?: boolean;
}
