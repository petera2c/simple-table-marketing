"use client";

import { useQuery } from "@tanstack/react-query";
import { BlogContentItem, BlogPost } from "@/types/BlogPost";
import { API_URL } from "@/constants/global";
import { use } from "react";
import { Typography, Card, Row, Col, List, Space } from "antd";

const { Title, Paragraph, Text } = Typography;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const renderContent = (content: BlogContentItem[]) => {
  if (!content) return null;

  return content.map((item: BlogContentItem, index: number) => {
    if (item.type === "title" && item.level) {
      return (
        <Title key={index} level={item.level}>
          {item.text}
        </Title>
      );
    } else if (item.type === "text") {
      return (
        <Text key={index} type={item.textType}>
          {item.text}
        </Text>
      );
    } else if (item.type === "paragraph") {
      return <Paragraph key={index}>{item.text}</Paragraph>;
    } else if (item.type === "section") {
      return (
        <div key={index} className="mb-8">
          <Title level={2}>{item.title}</Title>
          {item.children && renderContent(item.children)}
        </div>
      );
    } else if (item.type === "row") {
      return (
        <Row key={index} gutter={item.gutter}>
          {item.children && renderContent(item.children)}
        </Row>
      );
    } else if (item.type === "col") {
      return (
        <Col key={index} span={item.span}>
          {item.children && renderContent(item.children)}
        </Col>
      );
    } else if (item.type === "card") {
      return (
        <Card key={index} title={item.title} className="h-full">
          {item.children && renderContent(item.children)}
        </Card>
      );
    } else if (item.type === "list") {
      return (
        <List
          key={index}
          dataSource={item.items}
          renderItem={(listItem: string) => (
            <List.Item>
              <Text>{listItem}</Text>
            </List.Item>
          )}
        />
      );
    } else if (item.type === "space") {
      return (
        <Space key={index} direction={item.direction} size={item.size}>
          {item.children && renderContent(item.children)}
        </Space>
      );
    } else {
      return null;
    }
  });
};

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const { slug } = use(params);

  const {
    data: post,
    isLoading: isLoadingPost,
    error: postError,
  } = useQuery<BlogPost>({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/api/blog/${slug}`);
      if (!res.ok) throw new Error("Failed to fetch blog post");
      return res.json();
    },
  });

  if (isLoadingPost) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (postError || !post) {
    return (
      <div className="text-center py-12">
        <Title level={2}>Blog post not found</Title>
        <Text type="secondary">
          The blog post you're looking for doesn't exist or has been removed.
        </Text>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">{renderContent(post.content)}</div>
    </>
  );
};

export default BlogPostPage;
