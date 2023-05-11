export default {
    moneySymbol: '₫',
    tableForm: {
      search: 'Tìm kiếm',
      reset: 'Làm lại',
      submit: 'Gửi đi',
      collapsed: 'Mở rộng',
      expand: 'Thu gọn',
      inputPlaceholder: 'nhập dữ liệu',
      selectPlaceholder: 'Vui lòng chọn',
    },
    alert: {
      clear: 'Xóa',
      selected: 'đã chọn',
      item: 'mục',
    },
    pagination: {
      total: {
        range: ' ',
        total: 'trên',
        item: 'mặt hàng',
      },
    },
    tableToolBar: {
      leftPin: 'Ghim trái',
      rightPin: 'Ghim phải',
      noPin: 'Bỏ ghim',
      leftFixedTitle: 'Cố định trái',
      rightFixedTitle: 'Cố định phải',
      noFixedTitle: 'Chưa cố định',
      reset: 'Làm lại',
      columnDisplay: 'Cột hiển thị',
      columnSetting: 'Cấu hình',
      fullScreen: 'Chế độ toàn màn hình',
      exitFullScreen: 'Thoát chế độ toàn màn hình',
      reload: 'Làm mới',
      density: 'Mật độ hiển thị',
      densityDefault: 'Mặc định',
      densityLarger: 'Mặc định',
      densityMiddle: 'Trung bình',
      densitySmall: 'Chật',
    },
  };
  /* 
import { ProTable } from '@ant-design/pro-table';

const dataSource = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

const columns = [
  { title: 'ID', dataIndex: 'id' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
];

const tableForm = {
  search: 'Search',
  reset: 'Reset',
  submit: 'Submit',
  collapsed: 'Show filters',
  expand: 'Hide filters',
  inputPlaceholder: 'Enter name',
  selectPlaceholder: 'Select age',
};

function Student() {
    <ProTable
    columns={columns}
    dataSource={dataSource}
    search={false}
    tableForm={tableForm}
  />
}
export default Student

  */


/*
import { EllipsisOutlined } from "@ant-design/icons"
import {
    LightFilter,
    ProFormDatePicker,
    ProTable
} from "@ant-design/pro-components"
import { Button, Table } from "antd"
import { useState } from "react"
 

const tableListDataSource = [
    {
        name: "Lê Bùi Văn",
        dob: "22/06/2002",
        gender: "Nam",
        class: "A",
        phone: "0123456789",
        hometown: "Hà Nội",
        subjects: ["Toán", "Vật lý", "Tiếng Anh"]
    },
    {
        name: "Nguyễn Thị Kim Ngân",
        dob: "09/03/2003",
        gender: "Nữ",
        class: "B",
        phone: "0112345678",
        hometown: "Bắc Ninh",
        subjects: ["Văn", "Hóa học", "Lịch sử"]
    },
    {
        name: "Trần Văn Minh",
        dob: "05/11/2002",
        gender: "Nam",
        class: "C",
        phone: "0109876543",
        hometown: "Thái Bình",
        subjects: ["Toán", "Vật lý", "Sinh học"]
    },
    {
        name: "Phạm Thị Thu",
        dob: "17/02/2002",
        gender: "Nữ",
        class: "A",
        phone: "0198765432",
        hometown: "Hải Phòng",
        subjects: ["Văn", "Địa lí", "Tiếng Anh"]
    },
    {
        name: "Nguyễn Văn Hoàn",
        dob: "12/09/2003",
        gender: "Nam",
        class: "B",
        phone: "0187654321",
        hometown: "Hưng Yên",
        subjects: ["Toán", "Vật lý", "Hóa học"]
    },
    {
        name: "Bùi Ngọc Ánh",
        dob: "08/06/2002",
        gender: "Nữ",
        class: "C",
        phone: "0176543210",
        hometown: "Nghệ An",
        subjects: ["Toán", "Hóa học", "Sinh học"]
    }
]
for (let i = 0; i < 6; i++) {
    tableListDataSource[i].index = i + 1;
}


const columns = [
    {
        title: "Index",
        dataIndex: "index",
        width: 60,
        align: "center"
    },
    {
        title: "Name",
        dataIndex: "name",
        width: 200,
        align: "left",
        render: _ => <a>{_}</a>
    },
    {
        title: "Day of birth",
        dataIndex: "dob",
        align: "center",
        width: 120,

    },
    {
        title: "Gender",
        dataIndex: "gender",
        align: "center",
        width: 100,

    },
    {
        title: "Class",
        dataIndex: "class",
        align: "center",
        width: 100,

    },
    {
        title: "Hometown",
        dataIndex: "hometown",
        align: "center",
        width: 120,

    },
    {
        title: "Phone Number",
        dataIndex: "phone",
        align: "center",
        width: 120,

    },
    {
        title: "Subject",
        dataIndex: "subjects",
        align: "center",
        render: (subjects) => (
            <>
                {

                    subjects.join(' - ')
                }
            </>
        )
    },
    {
        title: "Action",
        align: "center",
        key: "option",
        width: 120,
        valueType: "option",
        render: () => [
            <a key="edit">Edit</a>,
            <a key="delete">Delete</a>,
        ]
    }
]

function Student() {
    const [searchText, setSearchText] = useState("");
    // const request = async (params = {}) => {
    //     const response = await fetch('/api/products', {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(params),
    //     });
      
    //     // const result = await response.json();
    //     const result = tableListDataSource;
      
    //     return {
    //       data: tableListDataSource,
    //       success: true,
    //       total: tableListDataSource.length,
    //     };
    //   };

    return (

        <ProTable
            columns={columns}
            // dataSource={tableListDataSource}
            request={(params, sorter, filter) => {
                return Promise.resolve({
                  data: tableListDataSource.filter((item)=> {
                    //  item.name = item.name.replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, "a")
                    //                         .replace(/[èéẻẽẹêềếểễệ]/g, "e")
                    //                         .replace(/[ìíỉĩị]/g, "i")
                    //                         .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, "o")
                    //                         .replace(/[ùúủũụưừứửữự]/g, "u")
                    //                         .replace(/[ỳýỷỹỵ]/g, "y")
                    //                         .replace(/[đ]/g, "d")
                    //                         .replace(/\s+/g, " ")
                    //                         .replace(/[^A-Za-z0-9 ]/g, "");
                    console.log(tableListDataSource)     
                    return item.name.toLowerCase().replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, "a")
                    .replace(/[èéẻẽẹêềếểễệ]/g, "e")
                    .replace(/[ìíỉĩị]/g, "i")
                    .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, "o")
                    .replace(/[ùúủũụưừứửữự]/g, "u")
                    .replace(/[ỳýỷỹỵ]/g, "y")
                    .replace(/[đ]/g, "d")
                    .replace(/\s+/g, " ")
                    .replace(/[^A-Za-z0-9 ]/g, "").includes(searchText);
                    
                                        }),
                  success: true,
                });
              }}
             
            toolbar={{
                search: {
                    placeholder: "Search in here...",
                    onSearch: (value) => {
                        value = value.toLowerCase();
                        value = value.replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, "a")
                            .replace(/[èéẻẽẹêềếểễệ]/g, "e")
                            .replace(/[ìíỉĩị]/g, "i")
                            .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, "o")
                            .replace(/[ùúủũụưừứửữự]/g, "u")
                            .replace(/[ỳýỷỹỵ]/g, "y")
                            .replace(/[đ]/g, "d")
                            .replace(/\s+/g, " ")
                            .replace(/[^A-Za-z0-9 ]/g, "");
                            setSearchText(value)
                            console.log(searchText);


                    }
                },

                actions: [
                    <Button
                        key="primary"
                        onClick={() => {
                            alert("add")
                        }}
                    >
                        Add
                    </Button>
                ]

            }}

            pagination={{
                // show total number page
                showTotal: (total, range) => ` ${range[0]}-${range[1]}/ Tổng ${total}`,
                defaultPageSize: 5, // số dòng mỗi trang
                // // showSizeChanger: true, // hiển thị dropdown chọn số dòng
                // pageSizeOptions: ["5", "10", "20"] //  danh sách số dòng mỗi trang


            }}


            // attribute turn off search bar in toolbar
            search={false}
        // define format day data
        // dateFormatter="number"

        />
    )
}
export default Student
*/