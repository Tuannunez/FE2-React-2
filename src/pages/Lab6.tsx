import { useQuery, useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStory() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      if (!id) return;
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });

  const nav = useNavigate();

  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: async (value: any) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, value);
      return res.data;
    },
    onSuccess: () => {
      message.success("Cập nhật thành công!");
      nav("/list");
    },
  });

  const onFinish = (value: any) => {
    mutation.mutate(value);
  };
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
      <Button htmlType="submit" loading={mutation.isPending}>
        Submit
      </Button>
    </Form>
  );
}
