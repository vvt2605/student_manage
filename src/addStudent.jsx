
import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import tableListStudent from "./listStudent";

function AddStudent() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Form submitted:', values);
        setIsModalVisible(false);
    };


        return (
            <> <div className="absolute top-0 right-0 left-0 bottom-0 backdrop-filter backdrop-blur-sm flex justify-center items-center h-screen ">

               
                <Button type="primary" onClick={showModal}>
                    Open Form
                </Button>
                <Modal
                    title="My Form"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="cancel" onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" form="myForm" htmlType="submit">
                            Submit
                        </Button>,
                    ]}
                >
                    <Form id="myForm" onFinish={onFinish}>
                        <p>Register New Student</p>
                        <Form.Item className="w-10/12 my-1" name="name">
                            Name
                            <Input placeholder="Name" type="text" />
                        </Form.Item>
                        <Form.Item className="w-10/12 my-1" name="dob">
                            Day of birthday
                            <Input placeholder="Day of birthday " type="date" />
                        </Form.Item>
                        <Form.Item className="w-10/12 my-1" name="gender">
                            Gender
                            <Input placeholder="Gender" />
                        </Form.Item>
                        <Form.Item className="w-10/12 my-1" name="class">Class
                            <Input placeholder="Class" />
                        </Form.Item>
                        <Form.Item className="w-10/12 my-1" name="phone">Phone Number
                            <Input placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item className="w-10/12 my-1" name="hometown">Hometown
                            <Input placeholder="Hometown" />
                        </Form.Item>
                        <Form.Item className="w-10/12 my-1" name="subject">Subject 
                            <Input placeholder="Subject" />
                        </Form.Item>
                        {/* <Form.Item>
                            <Button className="my-1.5 "  htmlType="submit ">Submit</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button className="my-1.5 "  >Cancel</Button>
                        </Form.Item> */}
                    </Form>
                </Modal>
            </div>

            </>
        );

}
export default AddStudent;
