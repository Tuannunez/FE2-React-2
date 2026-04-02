import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

interface Category {
  title: string;
  description: string;
  active: boolean;
}

export default function StoryForm() {
  const mutation = useMutation({
    mutationFn: async (data: Category) => {
      await axios.post("http://localhost:3000/categories", data);
    },

    onSuccess: () => {
      toast.success("Them thanh cong");
    },
    onError: () => {
      toast.error("Them that bai");
    },
  });
  const onFinish = (data: Category) => {
    mutation.mutate(data);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Name" rules={[
        {required:true}
      ]}>
        <Input placeholder="title"></Input>
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea placeholder="description"></Input.TextArea>
      </Form.Item>

      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Active</Checkbox>
        
      </Form.Item>

      <Button htmlType="submit" loading={mutation.isPending}>
        Submit
      </Button>
      {mutation.isSuccess && (
        <div style={{ color: "green" }}>Story created successfully!</div>
      )}
    </Form>
  );
}
