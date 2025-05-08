"use client";

import { useQuery } from "@tanstack/react-query";
import { BlogContentItem, BlogPost } from "@/types/BlogPost";
import { API_URL } from "@/constants/global";
import { Typography, Card, Row, Col, List, Space, Table, Tag, Button, Alert, Divider } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  CodeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import {
  faBalanceScale,
  faRocket,
  faLightbulb,
  faCube,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

const { Title, Paragraph, Text } = Typography;

// Export the renderContent function so it can be used by other components
export const renderContent = (content: BlogContentItem[]) => {
  if (!content) return null;

  return content.map((item: BlogContentItem, index: number) => {
    const className = `${
      item.align ? `flex w-full justify-${item.align} text-${item.align}` : ``
    } ${item.className ?? ""}`;

    if (item.type === "title" && item.level) {
      return (
        <Title className={className} key={index} level={item.level}>
          {item.text}
        </Title>
      );
    } else if (item.type === "text") {
      return (
        <Text className={className} key={index} type={item.textType} strong={item.strong}>
          {item.text}
        </Text>
      );
    } else if (item.type === "paragraph") {
      return (
        <Paragraph className={className} key={index}>
          {item.text}
        </Paragraph>
      );
    } else if (item.type === "section") {
      return (
        <div key={index} className={`mb-8 ${item.className || ""}`}>
          {item.title && (
            <Title className={className} level={item.titleLevel || 2}>
              {item.title}
            </Title>
          )}
          {item.children && renderContent(item.children)}
        </div>
      );
    } else if (item.type === "row") {
      return (
        <Row key={index} gutter={item.gutter} className={item.className || ""}>
          {item.children && renderContent(item.children)}
        </Row>
      );
    } else if (item.type === "col") {
      return (
        <Col
          key={index}
          xs={item.xs}
          sm={item.sm}
          md={item.md}
          lg={item.lg}
          xl={item.xl}
          className={item.className || ""}
        >
          {item.children && renderContent(item.children)}
        </Col>
      );
    } else if (item.type === "card") {
      const cardTitle = item.titleContent ? (
        <div>{renderContent([item.titleContent])}</div>
      ) : (
        item.title
      );

      return (
        <Card
          key={index}
          title={cardTitle}
          className={item.className || "h-full"}
          styles={{
            header: item.headStyle,
            body: { border: item.bordered === false ? "none" : "1px solid #f0f0f0" },
          }}
        >
          {item.children && renderContent(item.children)}
        </Card>
      );
    } else if (item.type === "list") {
      return (
        <List
          key={index}
          dataSource={item.items}
          className={item.className || ""}
          renderItem={(listItem: string) => (
            <List.Item>
              <Text>{listItem}</Text>
            </List.Item>
          )}
        />
      );
    } else if (item.type === "space") {
      return (
        <Space
          key={index}
          direction={item.direction}
          size={item.size}
          className={item.className || ""}
        >
          {item.children && renderContent(item.children)}
        </Space>
      );
    } else if (item.type === "divider") {
      return <Divider key={index} className={item.className || ""} />;
    } else if (item.type === "alert") {
      return (
        <Alert
          key={index}
          message={item.message}
          description={item.description}
          type={item.alertType}
          showIcon={item.showIcon}
          className={item.className || ""}
        />
      );
    } else if (item.type === "table") {
      return (
        <div key={index} className={`${item.wrapperClassName || ""}`}>
          <Table
            dataSource={item.dataSource}
            columns={item.columns?.map((column) => {
              // Handle custom render functions for columns
              if (column.render && typeof column.render === "function") {
                // Clone the column
                const newColumn = { ...column };

                // Replace render function with one that processes the output through renderContent
                newColumn.render = (value: any, record: any, rowIndex: number) => {
                  const renderOutput = column.render(value, record, rowIndex);
                  // If result is an object with BlogContentItem structure, process it
                  if (renderOutput && typeof renderOutput === "object" && renderOutput.type) {
                    return renderContent([renderOutput]);
                  }
                  return renderOutput;
                };

                return newColumn;
              }
              return column;
            })}
            pagination={
              item.pagination === true ? {} : item.pagination === false ? false : item.pagination
            }
            bordered={item.bordered}
            className={item.className || ""}
            rowClassName={item.rowClassName || ""}
            scroll={item.scroll}
          />
        </div>
      );
    } else if (item.type === "tag") {
      return (
        <Tag key={index} color={item.colorClassName} className={item.className || ""}>
          {item.icon && (
            <>
              {item.icon === "check" && <CheckOutlined />}
              {item.icon === "close" && <CloseOutlined />}
            </>
          )}
          {item.text}
        </Tag>
      );
    } else if (item.type === "button") {
      return (
        <Button
          key={index}
          type={item.buttonType}
          size={item.size}
          href={item.href}
          target={item.target}
          className={item.className || ""}
          onClick={item.onClick}
          block={item.block}
          ghost={item.ghost}
        >
          {item.href && item.isNextLink ? <Link href={item.href}>{item.text}</Link> : item.text}
        </Button>
      );
    } else if (item.type === "codeBlock") {
      return (
        <div
          key={index}
          className={`bg-gray-800 text-white p-3 md:p-4 rounded-md overflow-auto ${
            item.className || ""
          }`}
        >
          <pre
            className={`${
              item.preClassName || "whitespace-pre-wrap md:whitespace-pre"
            } text-xs md:text-sm`}
          >
            {item.code}
          </pre>
        </div>
      );
    } else if (item.type === "icon") {
      if (item.iconType === "antd") {
        return (
          <span key={index} className={item.className || ""}>
            {item.name === "thunderbolt" && (
              <ThunderboltOutlined className={item.iconClassName || ""} />
            )}
            {item.name === "dollar" && <DollarOutlined className={item.iconClassName || ""} />}
            {item.name === "code" && <CodeOutlined className={item.iconClassName || ""} />}
            {item.name === "fileText" && <FileTextOutlined className={item.iconClassName || ""} />}
            {item.name === "check" && <CheckOutlined className={item.iconClassName || ""} />}
            {item.name === "close" && <CloseOutlined className={item.iconClassName || ""} />}
          </span>
        );
      } else if (item.iconType === "fontAwesome") {
        let icon;
        if (item.name) {
          switch (item.name) {
            case "balance-scale":
              icon = faBalanceScale;
              break;
            case "rocket":
              icon = faRocket;
              break;
            case "lightbulb":
              icon = faLightbulb;
              break;
            case "cube":
              icon = faCube;
              break;
            case "code":
              icon = faCode;
              break;
            default:
              icon = faCode;
          }
          return (
            <span key={index} className={item.className || ""}>
              <FontAwesomeIcon icon={icon} className={item.iconClassName || ""} />
            </span>
          );
        }
      }
      return null;
    } else if (item.type === "progressBar") {
      return (
        <div key={index} className={`${item.className || ""}`}>
          <div className={`bg-gray-200 rounded-full h-3 md:h-4 mt-2 ${item.barClassName || ""}`}>
            <div
              className={`${item.colorClassName || "bg-blue-500"} h-3 md:h-4 rounded-full`}
              style={{ width: item.percentage }}
            ></div>
          </div>
        </div>
      );
    } else if (item.type === "heroSection") {
      return (
        <div
          key={index}
          className={`${
            item.className ||
            "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-8 mb-8 md:mb-12"
          }`}
        >
          {item.children && renderContent(item.children)}
        </div>
      );
    } else if (item.type === "callToAction") {
      return (
        <div
          key={index}
          className={`${
            item.className ||
            "bg-gradient-to-r from-purple-800 to-violet-800 rounded-xl p-4 md:p-8 text-center shadow-lg"
          }`}
        >
          {item.children && renderContent(item.children)}
        </div>
      );
    } else if (item.type === "featureItem") {
      return (
        <div key={index} className={`flex items-start ${item.className || ""}`}>
          {item.icon && typeof item.icon !== "string" && renderContent([item.icon])}
          <div>
            {item.title && <Text strong>{item.title}</Text>}
            {item.description && (
              <Paragraph
                className={item.descriptionClassName || "text-gray-600 mt-1 text-sm md:text-base"}
              >
                {item.description}
              </Paragraph>
            )}
          </div>
        </div>
      );
    } else if (item.type === "container") {
      return (
        <div key={index} className={item.className || ""} style={item.style || {}}>
          {item.title && <Text strong>{item.title}</Text>}
          {item.children && renderContent(item.children)}
        </div>
      );
    } else {
      return null;
    }
  });
};

export default function BlogPostContent({ slug }: { slug: string }) {
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
    enabled: !!slug,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 bg-white">
        {renderContent(post.content)}
      </div>
    </>
  );
}
