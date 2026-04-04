import { Button, Image, Popconfirm, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import useCRUDStory from "../hooks/useCRUDStory";

export function StoryList() {
  const { list, remove } = useCRUDStory();

  const columns = [
    {
      title: "Ten truyen",
      dataIndex: "title",
    },
    {
      title: "Tac gia",
      dataIndex: "author",
    },
    {
      title: "Hinh anh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },
    {
      title: "Ngay phat hanh",
      dataIndex: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Popconfirm
            title="Xoa truyen"
            description="Ban co chac la xoa ko?"
            okText="Xóa"
            cancelText="Suy nghĩ thêm"
            onConfirm={() => remove(record.id)}
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
          <Link to={`/edit/${record.id}`}>
            <Button>Sửa</Button>
          </Link>
        </>
      ),
    },
  ];

  if (list.isLoading) return <Spin />;
  if (list.isError) return <p>Lỗi khi tải danh sách</p>;

  return <Table columns={columns} dataSource={list.data} pagination={{ pageSize: 5 }} rowKey="id" />;
}
