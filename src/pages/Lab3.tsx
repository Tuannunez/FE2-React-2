import { Button, Input, Layout, Select } from "antd";
import { Form } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

function Lab3() {
  const onFinish = (values: any) => {
    console.log("Du lieu san pham: ", values);
  };
  return (
    <div>
      <Layout>
        <Header style={{ color: "white" }}>Header</Header>
        <Content style={{ padding: 20 }}>
          <h1 className="text-4xl">Bài 1</h1>
          {/* Bai1 */}
          <Form
            layout="vertical"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
          >
            <Form.Item label="Email" name="email">
              <Input placeholder="email" required />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password placeholder="password" required />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>

          <h1 className="text-4xl">Bài 2</h1>
          {/* Bai 2 */}
          <Form
            layout="vertical"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
          >
            <Form.Item label="Name" name="name">
              <Input placeholder="name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input placeholder="email" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input type={"number"} placeholder="phone" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Mật khẩu không được để trống" },
                { min: 6, message: "Password tối thiểu 6 ký tự" },
              ]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>
            <Form.Item label="rePassword" name="re-password">
              <Input.Password placeholder="re-password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>

          <h1 className="text-4xl">Bài 3</h1>
          {/* Bai 3 */}
          <Form
            layout="vertical"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
          >
            <Form.Item label="Tên sản phẩm" name="name">
              <Input placeholder="Tên sản phẩm" />
            </Form.Item>
            <Form.Item label="Giá" name="price">
              <Input type={"number"} placeholder="Giá" />
            </Form.Item>
            <Form.Item label="Số lượng" name="quantity">
              <Input type={"number"} placeholder="Số lượng" />
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
              <Input.TextArea placeholder="Mô tả" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Thêm
              </Button>
            </Form.Item>
          </Form>

          <h1 className="text-4xl">Bài 4</h1>
          {/* Bai 4 */}
          <Form
            layout="vertical"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
          >
            <Form.Item label="Tiêu đề" name="title">
              <Input placeholder="Tiêu đề" />
            </Form.Item>
            <Form.Item label="Danh mục" name="category">
              <Select
                placeholder="Chọn danh mục"
                options={[
                  { label: "Laptop", value: "laptop" },
                  { label: "Điện thoại", value: "phone" },
                  { label: "Tablet", value: "tablet" },
                  { label: "Phụ kiện", value: "accessory" },
                ]}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Thêm
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer></Footer>
      </Layout>
      ;
    </div>
  );
}

export default Lab3;
