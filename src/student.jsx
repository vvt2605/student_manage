import { Button, Modal, Form, Input, Table, Popconfirm, Typography, InputNumber } from "antd";
import { AudioOutlined } from '@ant-design/icons';
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import AddStudent from "./addStudent";
import tableListStudent from "./listStudent";


function Student() {
    const { Search } = Input;

    // let listStudent = tableListStudent;
    let totalStudent = tableListStudent.length
    for (let i = 0; i < tableListStudent.length; i++) {
        tableListStudent[i].index = i + 1;

    }
    // edit activiti
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === "number" ? <InputNumber /> : <Input />

        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`
                            }
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        )
    }
    const [editingKey, setEditingKey] = useState('');

    const isEditing = record => record.index === editingKey

    const edit = record => {
        form.setFieldsValue({ name: "", dob: "", gender: "", class: "", hometown: "", phone: "", ...record })
        setEditingKey(record.index)
    }

    const cancel = () => {
        setEditingKey('');
    };

    const save = async key => {
        try {
            const row = await form.validateFields()

            const newData = [...tableListStudentArray]
            const index = newData.findIndex(item => key === item.index)
            if (index > -1) {
                const item = newData[index]
                newData.splice(index, 1, {
                    ...item,
                    ...row
                })
                settableListStudent(newData)
                setEditingKey("")
                form.resetFields();
            } else {
                newData.push(row)
                settableListStudent(newData)
                setEditingKey("")
                form.resetFields();
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo)
        }
    }

    // seetting for search
    const suffix = (
        <AudioOutlined
            style={{

                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );


    const columns = [

        {
            title: "Name",
            dataIndex: "name",
            width: 170,
            align: "left",
            editable: true

            // render: _ => <a>{_}</a>,
        },
        {
            title: "Day of birth",
            dataIndex: "dob",
            align: "center",
            width: 150,
            editable: true

        },
        {
            title: "Gender",
            dataIndex: "gender",
            align: "center",
            width: 150,
            editable: true
        },
        {
            title: "Class",
            dataIndex: "class",
            align: "center",
            width: 150,
            editable: true
        },
        {
            title: "Hometown",
            dataIndex: "hometown",
            align: "center",
            width: 150,
            editable: true
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            align: "center",
            width: 150,
            editable: true
        },

        {
            title: "Actions",
            align: "center",
            key: "option",
            width: 150,
            valueType: "option",
            render: (text, record) => [

                listStudent.length >= 1 ? (
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record.index)}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,

            ]
        },
        {title: "Actions",
            render: (_, record) => {
                const editable = isEditing(record)
                return editable ? (
                  <span>
                    <Typography.Link
                      onClick={() => save(record.index)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </Typography.Link>
                    <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                      <a>Cancel</a>
                    </Popconfirm>
                  </span>
                ) : (
                  <Typography.Link
                    disabled={editingKey !== ""}
                    onClick={() => edit(record)}
                  >
                    Edit
                  </Typography.Link>
                )
              }

        }
    ]
    // action delete
    const handleDelete = (index) => {

        const newData = tableListStudentArray.filter(item => item.index !== index)
        settableListStudent(newData);

    }
    const [form] = Form.useForm();
    const [form1] = Form.useForm();

    const [searchText, setSearchText] = useState('');
    const [listStudent, setListStudent] = useState(tableListStudent)


    const [tableListStudentArray, settableListStudent] = useState(listStudent)





    // active modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isError, setIsError] = useState(false)
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form1.submit();
        form1.resetFields();
        setIsError(false);
    };

    const handleCancel = () => {
        form1.resetFields();
        setIsError(false);
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log("finish success");
        if (values.name === undefined || values.dob === undefined || values.gender === undefined || values.class === undefined || values.phone === undefined || values.hometown === undefined) {
            console.log("Error");
            setIsError(true);
            setIsModalVisible(true);
        } else {
            const newStudent = {
                ...values,
                index: totalStudent + 1
            }

            tableListStudentArray.push(newStudent);
            settableListStudent(tableListStudentArray);
            totalStudent = totalStudent + 1;
            console.log("PASS");
            setIsError(false);
            form.resetFields();
            setIsModalVisible(false);
        }



    };
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col
        }
        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            })
        }
    })
    return (
        <div classname="studentContainer">

            <div className="justify-between flex">



                {/* search activities */}
                <Search className="w-80"
                    placeholder="Search in here..."
                    enterButton={
                        <Button
                            style={{
                                color: "#fff",
                                backgroundColor: "#1677ff",
                                boxShadow: "0 2px 0 rgba(5, 145, 255, 0.1)"
                            }} >
                            Search
                        </Button>

                    }
                    value={searchText}
                    onChange={(e) => {
                        var text = e.target.value;

                        return setSearchText(text)
                    }}
                    onPressEnter={(value) => setSearchText(value)}

                    size="large"
                    suffix={suffix}
                />

                {/* add new student button */}
                <Button className="mr-12" onClick={showModal}>
                    Add New Student
                </Button>


            </div>
            <Modal
                title="Register New Student"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}

                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" onClick={() => form1.submit()}>
                        Submit
                    </Button>,
                ]}
            >
                <Form form={form1} onFinish={onFinish} >
                    <Form.Item name="name" label="Name" rules={[
                            {
                                required: true,
                                message: `Please Input name!`
                            }
                        ]}>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item name="dob" label="Day of birthday"rules={[
                            {
                                required: true,
                                message: `Please Input dOb!`
                            }
                        ]}>
                        <Input placeholder="Day of birthday" />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[
                            {
                                required: true,
                                message: `Please Input gender!`
                            }
                        ]}>
                        <Input placeholder="Gender" />
                    </Form.Item>
                    <Form.Item name="class" label="Class"rules={[
                            {
                                required: true,
                                message: `Please Input class!`
                            }
                        ]}>
                        <Input placeholder="Class" />
                    </Form.Item>
                    <Form.Item name="hometown" label="Hometown"rules={[
                            {
                                required: true,
                                message: `Please Input hometown!`
                            }
                        ]}>
                        <Input placeholder="Hometown" />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone Number"rules={[
                            {
                                required: true,
                                message: `Please Input phone!`
                            }
                        ]}>
                        <Input placeholder="Phone Number" />
                    </Form.Item>

                </Form>
                {isError && (<p className="text-red-500" >Vui lòng nhập đầy đủ  thông tin!!</p>)}


            </Modal>
            {/* table student */}
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell
                        }
                    }}
                    columns={mergedColumns}
                    onDelete={(index) => handleDelete(index)}
                    rowClassName="editable-row"

                    dataSource={tableListStudentArray.filter((item) => item.name.toLowerCase().replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, "a")
                        .replace(/[èéẻẽẹêềếểễệ]/g, "e")
                        .replace(/[ìíỉĩị]/g, "i")
                        .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, "o")
                        .replace(/[ùúủũụưừứửữự]/g, "u")
                        .replace(/[ỳýỷỹỵ]/g, "y")
                        .replace(/[đ]/g, "d")
                        .replace(/\s+/g, " ")
                        .replace(/[^A-Za-z0-9 ]/g, "").includes(searchText.toLowerCase().replace(/[àáảãạâầấẩẫậăằắẳẵặ]/g, "a")
                            .replace(/[èéẻẽẹêềếểễệ]/g, "e")
                            .replace(/[ìíỉĩị]/g, "i")
                            .replace(/[òóỏõọôồốổỗộơờớởỡợ]/g, "o")
                            .replace(/[ùúủũụưừứửữự]/g, "u")
                            .replace(/[ỳýỷỹỵ]/g, "y")
                            .replace(/[đ]/g, "d")
                            .replace(/\s+/g, " ")
                            .replace(/[^A-Za-z0-9 ]/g, "")))}
                    pagination={{
                        showTotal: (total, range) => ` ${range[0]}-${range[1]}/ Tổng ${total}`,
                        defaultPageSize: 6,
                    }}
                    



                />
            </Form>






        </div>



    )
}
export default Student
