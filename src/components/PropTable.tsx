"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Table, Tag, Space, Button, Typography } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const { Text } = Typography;

export interface PropInfo {
  key: string;
  name: string;
  required: boolean;
  description: string;
  type?: string;
  enumValues?: string[];
  example?: string;
  link?: string;
}

interface PropTableProps {
  props: PropInfo[];
  title: string;
}

const PropTable = ({ props, title }: PropTableProps) => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const columns: ColumnsType<PropInfo> = [
    {
      title: "Property",
      dataIndex: "name",
      key: "name",
      width: "auto",
      render: (name: string, record: PropInfo) => (
        <Space direction="vertical" size={2}>
          <Text
            className="whitespace-nowrap"
            code
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#1890ff",
            }}
          >
            {name}
          </Text>
          {record.type &&
            (record.link ? (
              <Link
                href={record.link}
                style={{
                  fontSize: "11px",
                  fontStyle: "italic",
                  color: "#1890ff",
                  textDecoration: "underline",
                }}
              >
                {record.type}
              </Link>
            ) : (
              <Text
                type="secondary"
                style={{
                  fontSize: "11px",
                  fontStyle: "italic",
                }}
              >
                {record.type}
              </Text>
            ))}
        </Space>
      ),
    },
    {
      title: "Required",
      dataIndex: "required",
      key: "required",
      width: 100,
      align: "center",
      render: (required: boolean) => (
        <Tag color={required ? "blue" : "green"}>{required ? "Required" : "Optional"}</Tag>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string, record: PropInfo) => (
        <Space direction="vertical" size={4}>
          <Text>{description}</Text>
          {record.enumValues && (
            <Space direction="vertical" size={2}>
              <Text strong style={{ fontSize: "12px" }}>
                Options:
              </Text>
              <Space wrap>
                {record.enumValues.map((value) => (
                  <Tag key={value} style={{ fontSize: "11px" }}>
                    {value}
                  </Tag>
                ))}
              </Space>
            </Space>
          )}
        </Space>
      ),
    },
    {
      title: "Example",
      key: "example",
      width: 80,
      align: "center",
      render: (_, record: PropInfo) =>
        record.example ? (
          <Button
            type="text"
            size="small"
            icon={expandedRows.includes(record.key) ? <DownOutlined /> : <RightOutlined />}
            onClick={() => {
              if (expandedRows.includes(record.key)) {
                setExpandedRows(expandedRows.filter((key) => key !== record.key));
              } else {
                setExpandedRows([...expandedRows, record.key]);
              }
            }}
          />
        ) : null,
    },
  ];

  const expandedRowRender = (record: PropInfo) => {
    if (!record.example) return null;
    return (
      <div style={{ margin: "16px 0" }}>
        <Text strong style={{ marginBottom: 8, display: "block" }}>
          Example Usage:
        </Text>
        <CodeBlock code={record.example} language="tsx" />
      </div>
    );
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
      <Table<PropInfo>
        columns={columns}
        dataSource={props}
        pagination={false}
        expandable={{
          expandedRowKeys: expandedRows,
          expandedRowRender,
          showExpandColumn: false,
        }}
        size="middle"
        bordered
      />
    </motion.div>
  );
};

export default PropTable;
