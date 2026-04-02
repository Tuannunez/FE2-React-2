import { Table} from 'antd';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Lab2() {
    // Bai 1
    // const columns = [
    //     {title: "ID", dataIndex: "id"},
    //     {title: "Name", dataIndex: "name"},
    //     {title: "Age", dataIndex: "age"},
    //     {title: "Major", dataIndex: "major"},
    // ]

    // const data = [
    //     {key: 1, id:1, name: "Nam", age: 20, major: "IT"},
    //     {key: 2, id:2, name: "Linh", age: 21, major: "Business"},
    //     {key: 3, id:3, name: "Hà", age: 19, major: "Design"},
    // ]


    //Bai 2
    const columns = [
        {title: "ID", dataIndex: "id"},
        {title: "Product Name", dataIndex: "productName"},
        {title: "Price", dataIndex: "price"},
        {title: "Category", dataIndex: "category"},
    ]

    const data = [
        {key: 1, id:1, productName: "Kem Danh Rang", price: 20000, category: "Do ve sinh ca nhan"},
        {key: 2, id:2, productName: "Bim Bim", price: 5000, category: "Do an vat"},
        {key: 3, id:3, productName: "Hop To Mau", price: 10000, category: "Dung cu hoc tap"},
        {key: 4, id:4, productName: "But Chi", price: 3000, category: "Dung cu hoc tap"},
        {key: 5, id:5, productName: "Nuoc Uong", price: 15000, category: "Do uong"},
        {key: 6, id:6, productName: "Sach Tieng Anh", price: 50000, category: "Sach giao khoa"},
    ]


    // Bai 3
    // const columns = [
    //     {title: "ID", dataIndex: "id"},
    //     {title: "Name", dataIndex: "name"},
    //     {title: "Email", dataIndex: "email"},
    //     {title: "Status", dataIndex: "status", render: (status: string) => (
    //         <Tag style={{color: status === "active" ? "green" : "red"}}>{status}</Tag>
    //     )},
    //     {title: "Action", render: (_:any, record:any) => (
    //         <>
    //         <button className='bg-blue-200 rounded-2xl px-2 hover:bg-blue-700'>Edit</button>
    //         <button className='bg-blue-200 rounded-2xl px-2 hover:bg-blue-700'>Delete</button>
    //         </>
    //     )},
    // ]

    // const data = [
    //     {key: 1, id:1, name: "Nguyen Van A", email: "email@email.com", status: "active"},
    //     {key: 2, id:2, name: "Tran Thi B", email: "email@email.com", status: "inactive"},
    //     {key: 3, id:3, name: "Ly Thuong K", email: "email@email.com", status: "inactive"},
    //     {key: 4, id:4, name: "Mai Thanh T", email: "email@email.com", status: "active"},
    //     {key: 5, id:5, name: "Lai Cong V", email: "email@email.com", status: "inactive"},
    //     {key: 6, id:6, name: "Dao Minh T", email: "email@email.com", status: "active"},
    // ]

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <Table columns={columns} dataSource={data} pagination={{pageSize:3}} />
      </div>

      <Toaster />
    </>
  );
}

export default Lab2