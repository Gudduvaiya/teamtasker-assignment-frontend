import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Empty,
  Badge,
} from "antd";
import { PlusOutlined, BellOutlined } from "@ant-design/icons";
import {
  CreateProjectAPI,
  CreateTaskAPI,
  GetAllProjectsAPI,
  GetAllUsersAPI,
  GetMyNotificationsAPI,
  GetMySeachedTasksAPI,
  GetMyTasksAPI,
  GetProjectAPI,
  MarkAsReadStatusAPI,
  RemoveCommentsAPI,
  UpdateTaskStatusAPI,
} from "../lib/services/APIServices";
import { notificationBox } from "../lib/helper";
import AddCommentSection from "../component/AddComment";

const { Title } = Typography;

type Project = {
  id: number;
  title: string;
  description: string;
  owner: number;
};
interface Task {
  id: number;
  project_id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee_id: number;
  due_date: null;
  Project: Project;
  Comments: Comment[];
}

interface Comment {
  id: number;
  content: string;
  task_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  User: User;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const Home = () => {
  const currentUser = JSON.parse(
    sessionStorage.getItem("userData") || "{}"
  ).user;
  const [projects, setProjects] = useState<Project[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [taskForm] = Form.useForm();
  const [taskDetailModalOpen, setTaskDetailModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [notificationModalOpen, setNotificationModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const getMyProjects = () => {
    GetProjectAPI().then(({ data }) => setProjects(data));
  };

  const getMyTasks = () => {
    GetMyTasksAPI().then(({ data }) => setTasks(data));
  };

  const getAllProjects = () => {
    GetAllProjectsAPI().then(({ data }) => setAllProjects(data));
  };

  const getAllUsers = () => {
    GetAllUsersAPI().then(({ data }) => setUsers(data));
  };

  const getAllNotifications = () => {
    GetMyNotificationsAPI().then(({ data }) => setNotifications(data));
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        CreateProjectAPI(values).then(() => {
          form.resetFields();
          setIsModalOpen(false);
          getMyProjects();
          notificationBox("Success", "Project created successfully", "success");
          //   message.success("Project added!");
        });
      })
      .catch(() => {});
  };

  const handleTaskModalOk = () => {
    taskForm
      .validateFields()
      .then((values) => {
        CreateTaskAPI(values).then(() => {
          taskForm.resetFields();
          setIsTaskModalOpen(false);
          getMyTasks();
          notificationBox("Success", "Task created successfully", "success");
        });
      })
      .catch(() => {});
  };

  const handleStatusChange = (taskId: number, status: string) => {
    UpdateTaskStatusAPI({ id: taskId, status }).then(() => {
      getMyTasks();
      notificationBox("Success", "Task status updated", "success");
      setSelectedTask((prev) =>
        prev && prev.id === taskId ? { ...prev, status } : prev
      );
    });
  };
  useEffect(() => {
    getMyProjects();
    getMyTasks();
    getAllUsers();
    getAllProjects();
    getAllNotifications();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-2">
      <div className="flex justify-between items-center mb-6">
        <Title level={1} className="!text-blue-600">
          Hello, {currentUser?.name || "User"}
        </Title>
        <div className="flex items-center gap-4">
          <Badge count={notifications.filter((item) => !item.is_read).length}>
            <Button
              type="text"
              icon={<BellOutlined style={{ fontSize: 22 }} />}
              onClick={() => setNotificationModalOpen(true)}
            ></Button>
          </Badge>
          <Button
            type="primary"
            danger
            onClick={() => {
              sessionStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </div>
      </div>

     
      <div className="flex items-center justify-between mb-4">
        <Title level={2} className="mb-0">
          My Projects
        </Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Add Project
        </Button>
      </div>
      <Row gutter={[16, 16]} className="mb-8">
        {!projects?.length ? (
          <Empty />
        ) : (
          projects?.map((project) => (
            <Col xs={24} sm={12} md={8} key={project.id}>
              <Card
                title={project.title}
                className="shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <p>{project.description}</p>
              </Card>
            </Col>
          ))
        )}
      </Row>

      <div className="flex items-center justify-between mb-4">
        <Title level={2} className="mb-0">
          My Tasks
        </Title>
        <div className="flex gap-2 items-center">
          <Input.Search
            placeholder="Search tasks..."
            allowClear
            onChange={e => GetMySeachedTasksAPI(e.target.value).then(({data}) => setTasks(data))}
            style={{ width: 250 }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsTaskModalOpen(true)}
          >
            Add Task
          </Button>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {!tasks?.length ? (
          <Empty />
        ) : (
          tasks.map((task) => (
            <Col xs={24} sm={12} md={8} key={task.id}>
              <Card
                title={task.title}
                className="shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => {
                  setSelectedTask(task);
                  setTaskDetailModalOpen(true);
                }}
              >
                <p className="mb-1 text-gray-500 italic">{task.description}</p>
                <p className="mb-1 text-gray-500">
                  Project: {task.Project.title}
                </p>
                <div className="mb-1 flex items-center gap-2">
                  <span>Status:</span>
                  <span className="font-semibold">{task.status}</span>
                </div>
                <p className="mb-0">
                  Due Date:{" "}
                  <span className="font-semibold">{new Date(task.due_date).toLocaleDateString()}</span>
                </p>
              </Card>
            </Col>
          ))
        )}
      </Row>

 {/* Notification Modal */}
      <Modal
        title="Notifications"
        open={notificationModalOpen}
        onCancel={() => setNotificationModalOpen(false)}
        footer={null}
      >
        {notifications.length === 0 ? (
          <div className="text-gray-400">No notifications.</div>
        ) : (
          <ul>
            {notifications.map((n) => (
              <li
                key={n.id}
                className={`p-4 ${
                  n.is_read ? "text-gray-600" : "text-black font-bold"
                }`}
              >
                <div>
                  <span>{n.message}</span>
                </div>

                <div className="text-gray-600 italic">
                  <span>{n.createdAt}</span>
                  <Button
                    onClick={() =>
                      MarkAsReadStatusAPI(n.id).then(() =>
                        getAllNotifications()
                      )
                    }
                    className={`${n.is_read ? "!hidden" : "block"}`}
                    type="dashed"
                  >
                    Mark As Read
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      {/* Task Details Modal */}
      <Modal
        title={selectedTask ? selectedTask.title : "Task Details"}
        open={taskDetailModalOpen}
        onCancel={() => setTaskDetailModalOpen(false)}
        footer={null}
      >
        {selectedTask && (
          <div>
            <p>
              <b>Description:</b> {selectedTask.description}
            </p>
            <p>
              <b>Project:</b> {selectedTask.Project.title}
            </p>
            <p>
              <b>Priority:</b> {selectedTask.priority}
            </p>
            <p>
              <b>Assigned To:</b>{" "}
              {users.find((u) => u.id === selectedTask.assignee_id)?.name ||
                selectedTask.assignee_id}
            </p>
            <p>
              <b>Due Date:</b> {selectedTask.due_date}
            </p>
            <div className="mb-2">
              <b>Status:</b>{" "}
              <Select
                value={selectedTask.status}
                style={{ minWidth: 120 }}
                onChange={(value) => handleStatusChange(selectedTask.id, value)}
                options={[
                  { value: "Pending", label: "Pending" },
                  { value: "In Progress", label: "In Progress" },
                  { value: "Completed", label: "Completed" },
                ]}
                size="small"
              />
            </div>
            <div className="mt-4">
              <b>Comments:</b>
              <div
                style={{
                  maxHeight: 150,
                  overflowY: "auto",
                  marginBottom: 8,
                  border: "1px solid #eee",
                  borderRadius: 4,
                  padding: 8,
                }}
              >
                {selectedTask.Comments && selectedTask.Comments.length > 0 ? (
                  selectedTask.Comments.map((comment, idx) => {
                    return (
                      <div
                        key={idx}
                        className="mb-2 flex items-center justify-between"
                      >
                        <span>
                          <span className="font-semibold">
                            {comment.User?.name || "User"}:
                          </span>{" "}
                          {comment.content}
                        </span>
                        {comment.user_id === currentUser.id && (
                          <Button
                            type="text"
                            danger
                            size="small"
                            onClick={() => {
                              RemoveCommentsAPI(comment.id).then(() => {
                                getMyTasks();
                              });
                            }}
                            style={{ marginLeft: 8 }}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <span className="text-gray-400">No comments yet.</span>
                )}
              </div>
              <AddCommentSection
                taskId={selectedTask.id}
                onCommentAdded={() => {
                  getMyTasks();
                }}
              />
            </div>
          </div>
        )}
      </Modal>

      {/* Create Task Modal */}
      <Modal
        title="Add New Task"
        open={isTaskModalOpen}
        onOk={handleTaskModalOk}
        onCancel={() => {
          setIsTaskModalOpen(false);
          taskForm.resetFields();
        }}
        okText="Create"
        cancelText="Cancel"
      >
        <Form form={taskForm} layout="vertical">
          <Form.Item
            name="title"
            label="Task Title"
            rules={[{ required: true, message: "Please enter a task title" }]}
          >
            <Input placeholder="Enter task title" />
          </Form.Item>
          <Form.Item
            name="project_id"
            label="Project"
            rules={[
              {
                required: true,
                message: "Please enter the project name or id",
              },
            ]}
          >
            <Select
              showSearch
              options={allProjects?.map((item) => {
                return { value: item.id, label: item.title };
              })}
              placeholder="Enter project name or id"
            />
          </Form.Item>
          <Form.Item
            name="priority"
            label="Priority"
            rules={[{ required: true, message: "Please select a priority" }]}
          >
            <Input placeholder="Enter priority (e.g. High, Medium, Low)" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <Input.TextArea placeholder="Enter task description" />
          </Form.Item>
          <Form.Item
            name="assignee_id"
            label="Assign To"
            rules={[{ required: true, message: "Please enter the assignee" }]}
          >
            <Select
              showSearch
              options={users?.map((item) => {
                return { value: item.id, label: item.name };
              })}
              placeholder="Enter User name or id"
            />
          </Form.Item>
          <Form.Item
            name="due_date"
            label="Due Date"
            rules={[{ required: true, message: "Please select a due date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>

      {/* Create Project Modal */}
      <Modal
        title="Add New Project"
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        okText="Create"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Project Title"
            rules={[
              { required: true, message: "Please enter a project title" },
            ]}
          >
            <Input placeholder="Enter project title" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <Input.TextArea placeholder="Enter project description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Home;
