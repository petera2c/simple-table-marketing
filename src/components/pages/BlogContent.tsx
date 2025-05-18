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
import Link from "next/link";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import CodeBlock from "../CodeBlock";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import PerformanceDemo from "../PerformanceDemo";
import { Theme } from "simple-table-core";
import { useThemeContext } from "@/providers/ThemeProvider";

library.add(far, fas);

const { Title, Paragraph, Text } = Typography;

// Add this helper function after imports but before renderContent
function getTableWinnerRenderer() {
  return (winner: string) => {
    if (winner === "simple-table") {
      return {
        type: "tag",
        colorClassName: "green",
        text: "Simple Table",
        className: "flex items-center justify-center",
      };
    } else if (winner === "ag-grid") {
      return {
        type: "tag",
        colorClassName: "blue",
        text: "AG Grid",
        className: "flex items-center justify-center",
      };
    }
    return {
      type: "tag",
      colorClassName: "orange",
      text: "Tie",
      className: "flex items-center justify-center",
    };
  };
}

/**
 * Pre-processes blog content to handle special cases like table renderers
 */
export function processBlogContent(content: BlogContentItem[]): BlogContentItem[] {
  // Create a deep copy to avoid modifying the original
  const processedContent = JSON.parse(JSON.stringify(content));

  // Process the content
  processedContent.forEach((section: BlogContentItem) => {
    if (section.type === "section" && section.children) {
      section.children.forEach((child: BlogContentItem) => {
        if (child.type === "table" && child.columns) {
          // Find the winner column if it exists
          const winnerColumn = child.columns.find((col: any) => col.dataIndex === "winner");
          if (winnerColumn) {
            winnerColumn.render = getTableWinnerRenderer();
          }

          // Process any other special column renderers here
        }
      });
    }
  });

  return processedContent;
}

// Export the renderContent function so it can be used by other components
const renderContent = (content: BlogContentItem[], theme: Theme) => {
  if (!content) return null;

  return content.map((item: BlogContentItem, index: number) => {
    const className = `${
      item.align ? `flex w-full justify-${item.align} text-${item.align}` : ``
    } ${item.className ?? ""}`;

    const commonProps = {
      className,
      id: item.id,
      style: item.style,
    };

    // Handle component type
    if (item.type === "performanceDemo") {
      return (
        <PerformanceDemo
          buttonColors={item.buttonColors}
          buttonVariants={item.buttonVariants}
          className={item.demoClassName}
          dataCategories={item.dataCategories}
          description={item.description}
          headers={item.headers}
          height={item.height}
          hideTable={item.hideTable}
          initialRowCount={item.initialRowCount}
          key={index}
          maxDealValue={item.maxDealValue}
          maxProfit={item.maxProfit}
          minDealValue={item.minDealValue}
          minProfit={item.minProfit}
          showGenerationTime={item.showGenerationTime}
          theme={theme}
          title={item.title}
        />
      );
    }

    if (item.type === "title" && item.level) {
      return (
        <Title {...commonProps} key={index} level={item.level}>
          {item.icon && renderContent([item.icon], theme)}
          {item.text}
        </Title>
      );
    } else if (item.type === "text") {
      return (
        <Text {...commonProps} key={index} type={item.textType} strong={item.strong}>
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
        <div key={index} id={item.id} className={`mb-8 ${item.className || ""}`}>
          {item.title && (
            <Title className={className} level={item.titleLevel || 2}>
              {item.title}
            </Title>
          )}
          {item.children && renderContent(item.children, theme)}
        </div>
      );
    } else if (item.type === "row") {
      return (
        <Row key={index} gutter={item.gutter} {...commonProps}>
          {item.children && renderContent(item.children, theme)}
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
          {...commonProps}
        >
          {item.children && renderContent(item.children, theme)}
        </Col>
      );
    } else if (item.type === "card") {
      const cardTitle = item.titleContent ? (
        <div>{renderContent([item.titleContent], theme)}</div>
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
          }}
        >
          {item.children && renderContent(item.children, theme)}
        </Card>
      );
    } else if (item.type === "list") {
      return (
        <List
          key={index}
          dataSource={item.items}
          {...commonProps}
          renderItem={(listItem: string) => (
            <List.Item>
              <Text>{listItem}</Text>
            </List.Item>
          )}
          style={{
            border: "none",
          }}
        />
      );
    } else if (item.type === "space") {
      return (
        <Space key={index} direction={item.direction} size={item.size} {...commonProps}>
          {item.children && renderContent(item.children, theme)}
        </Space>
      );
    } else if (item.type === "divider") {
      return <Divider key={index} {...commonProps} />;
    } else if (item.type === "alert") {
      return (
        <Alert
          key={index}
          message={item.message}
          description={item.description}
          type={item.alertType}
          showIcon={item.showIcon}
          {...commonProps}
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
                    return renderContent([renderOutput], theme);
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
            {...commonProps}
            rowClassName={item.rowClassName || ""}
            scroll={item.scroll}
          />
        </div>
      );
    } else if (item.type === "tag") {
      return (
        <Tag key={index} color={item.colorClassName} {...commonProps}>
          <div className="flex items-center gap-2">
            {item.icon && renderContent([item.icon], theme)}
            {item.text}
          </div>
        </Tag>
      );
    } else if (item.type === "button") {
      return (
        <Button
          key={index}
          type={item.buttonType}
          size={item.size}
          target={item.target}
          {...commonProps}
          onClick={item.onClick}
          block={item.block}
          ghost={item.ghost}
          href={item.isNextLink ? undefined : item.href}
        >
          {item.href && item.isNextLink ? <Link href={item.href}>{item.text}</Link> : item.text}
        </Button>
      );
    } else if (item.type === "codeBlock") {
      return (
        <CodeBlock
          key={index}
          className={`bg-gray-800 text-white p-3 md:p-4 rounded-md overflow-auto ${
            item.className || ""
          }`}
          code={item.code}
        />
      );
    } else if (item.type === "icon") {
      if (item.iconType === "antd") {
        return (
          <span key={index} {...commonProps}>
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
        if (item.name) {
          return (
            <span key={index} {...commonProps}>
              <FontAwesomeIcon
                icon={["fas", item.name as IconName]}
                className={item.iconClassName || ""}
              />
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
            />
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
          {item.children && renderContent(item.children, theme)}
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
          {item.children && renderContent(item.children, theme)}
        </div>
      );
    } else if (item.type === "featureItem") {
      return (
        <div key={index} className={`flex items-start ${item.className || ""}`}>
          {item.icon && typeof item.icon !== "string" && renderContent([item.icon], theme)}
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
        <div key={index} {...commonProps}>
          {item.title && <Text strong>{item.title}</Text>}
          {item.children && renderContent(item.children, theme)}
        </div>
      );
    } else {
      return null;
    }
  });
};

export default function BlogPostContent({ slug }: { slug: string }) {
  const { theme } = useThemeContext();
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      </div>
    );
  }

  if (postError || !post) {
    return (
      <div className="text-center py-12 scroll-mt-10">
        <Title level={2} className="dark:text-white">
          Blog post not found
        </Title>
        <Text type="secondary" className="dark:text-gray-400">
          The blog post you're looking for doesn't exist or has been removed.
        </Text>
      </div>
    );
  }

  // Process the blog content to handle special rendering cases
  const processedContent = processBlogContent(post.content);

  return <>{renderContent(processedContent, theme)}</>;
}
