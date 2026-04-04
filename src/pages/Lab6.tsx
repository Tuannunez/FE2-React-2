import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, message, Spin } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUpdateStory from "../hooks/useUpdateStory";

export default function EditStory() {
  const { id } = useParams();
  const { mutate: update, isPending: isUpdating } = useUpdateStory();
  const nav = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      if (!id) return;
      const res = await fetch(`http://localhost:3000/stories/${id}`);
      return res.json();
    },
    enabled: Boolean(id),
  });

  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const onFinish = (value: any) => {
    if (!id) return;
    update(
      { id, data: value },
      {
        onSuccess: () => {
          message.success("Cập nhật thành công!");
          nav("/list");
        },
      }
    );
  };

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải thông tin truyện</p>;

  return (
    <Form onFinish={onFinish} form={form} layout="vertical">
      <Form.Item
        label="Ten truyen"
        name="title"
        rules={[{ required: true, message: "Tiêu đề không được để trống" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tác giả"
        name="author"
        rules={[{ required: true, message: "Tác giả không được để trống" }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" loading={isUpdating}>Submit</Button>
    </Form>
  );
}
