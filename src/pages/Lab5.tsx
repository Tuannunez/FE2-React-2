import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

export function StoryList() {
  const { data } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const qc = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (id: number) =>
      await axios.delete(`http://localhost:3000/stories/${id}`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["stories"] });
    },
  });

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
            onConfirm={() => mutate(record.id)}
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
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
  );
}
