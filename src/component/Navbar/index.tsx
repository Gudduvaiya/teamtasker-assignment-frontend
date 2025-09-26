import { Suspense, useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  FloatButton,
  Image,
  Layout,
  Menu,
  MenuProps,
  Typography,
  theme,
} from "antd";
import {
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  CaretRightFilled,
  CaretLeftFilled,
  FileTextFilled,
  QuestionOutlined,
} from "@ant-design/icons";
import GetSideBarItems from "../../navigation/NavItems";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ConvertPathToLoacalString, notificationBox } from "../../lib/helper";
import {
  GetNotificationsEmployeeEditAPI,
  NotificationAcceptOrRejectEmployeeEditAPI,
} from "../../lib/services/APIServices";
import type { UserDataType } from "../../lib/types";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Navbar = () => {
  let loggedInUser: UserDataType = JSON.parse(
    sessionStorage.getItem("userData")
  );
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const [headerTitle, setHeaderTitle] = useState("");
  const [editNotifications, setEditNotifications] = useState<any[]>();

  useEffect(() => {
    // console.log(window.scrollY);
    window.addEventListener("scroll", () =>
      setCurrentScrollPosition(window.scrollY)
    );
  }, [window.scrollY]);

  useEffect(() => {
    console.log(location);
    if (location.pathname === "/ppe-master") {
      setHeaderTitle("Personal Protective Equipment");
    } else if (location.pathname === "/ppe-dashboard") {
      setHeaderTitle("PPE Dashboard");
    } else if (location.pathname === "/ppe-issue") {
      setHeaderTitle("PPE Issue");
    } else if (location.pathname === "/ppe-reports") {
      setHeaderTitle("PPE Reports");
    } else if (location.pathname.includes("/view-all-events/")) {
      setHeaderTitle("Events");
    } else {
      setHeaderTitle(ConvertPathToLoacalString(location.pathname));
    }
  }, [location]);

  useEffect(() => {
    notificationBox(
      `Hello`,
      "Welcome to the HSE Connect",
      "success"
    );
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link to={"/my-profile"}>
          <p className="text-lg font-bold">{loggedInUser?.UserName}</p>
          <p className="text-md text-gray-400 tracking-wide">
            {loggedInUser?.Description}
          </p>
        </Link>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <div>Log Out</div>,
      danger: true,
      icon: <LogoutOutlined />,
      onClick: () => {
        sessionStorage.removeItem("userData");
        notificationBox("Done!", "Logged out Successfully!", "success");
        navigate("/signin");
      },
    },
  ];
  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="!bg-[#222866]"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          width={275}
        >
          <div className="flex justify-center pt-2">
            {!collapsed ? (
              <div className="flex flex-col items-center">
                <Image
                  preview={false}
                  src={brandLogoOnly}
                  className="!h-[55px] !w-[60px]"
                />
                <h1 className="text-white font-bold tracking-[3px] text-[16px] mt-1 mb-1">
                  Teamtasker
                </h1>
              </div>
            ) : (
              <Image
                preview={false}
                src={brandLogoOnly}
                className="!h-[60px] !w-[70px]"
              />
            )}
          </div>

          {/* <div className="flex justify-center items-center pt-3 mb-7">
            <Image
              preview={false}
              src={brandLogoOnly}
              className="!h-[60px] !w-[65px]"
            />
            {!collapsed ? (
              <Title level={5} className="!text-white !mb-0 ml-2">
                Shyam Steel Manufacturing Ltd.
              </Title>
            ) : null}
          </div> */}

          <Menu
            theme="dark"
            mode="vertical"
            selectedKeys={[location.pathname.slice(1)]}
            defaultSelectedKeys={["1"]}
            items={GetSideBarItems(navigate)}
            // style={{ width: "500px !important" }}
          />
        </Sider>
        <Layout style={{ marginLeft: collapsed ? 82 : 275, height: "100vh" }}>
          <Header
            style={{
              background: "white",
              position: "sticky",
              margin: "0px 20px",
              marginTop: 18,
              zIndex: "99",
              width: "calc(100%-250px)",
              top: 15,
              display: "flex",
              justifyContent: "space-between",
            }}
            className={`!px-4 ${
              currentScrollPosition > 20
                ? "!bg-gradient-to-l from-[#222866] rounded-lg"
                : "bg-white"
            } shadow-lg`}
          >
            <div className="flex items-center ">
              <Button
                type="text"
                icon={!collapsed ? <CaretLeftFilled /> : <CaretRightFilled />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 34,
                  height: 64,
                }}
              />
              <Title level={4} className="!m-0">
                {headerTitle}
              </Title>
            </div>
            <div>
              <Dropdown
                dropdownRender={() => (
                  <>
                    <NotificationBoxComponent
                      editNotifications={editNotifications}
                      onApproveEdit={ApproveRequestForEmployeeEdit}
                      onRejectEdit={RejectRequestForEmployeeEdit}
                    />
                  </>
                )}
                trigger={["click"]}
                className="!p-0"
                // menu={{ items: notificationItems }}
                // overlayStyle={{ width: "250px" }}
              >
                <Badge count={editNotifications?.length} className="mr-3">
                  <Avatar
                    icon={<BellOutlined />}
                    style={{
                      backgroundColor:
                        currentScrollPosition > 20 ? "white" : "#222866",
                      color: currentScrollPosition > 20 ? "#222866" : "white",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </Dropdown>

              <Dropdown
                menu={{
                  items,
                }}
                overlayStyle={{ width: "250px" }}
              >
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor:
                      currentScrollPosition > 20 ? "white" : "#222866",
                    color: currentScrollPosition > 20 ? "#222866" : "white",
                    cursor: "pointer",
                  }}
                  src={loggedInUser?.ImgPath ?? profilePicturePath}
                ></Avatar>
              </Dropdown>
            </div>
          </Header>
          {/* <Alert
            banner
            closable
            className="absolute top-0"
            style={{
              width: "calc(100%-200px)"
            }}
            message={
              <Marquee pauseOnHover gradient={true} 
              >
                This is a beta Release Final version will be Coming soon.
              </Marquee>
            }
          /> */}
          <Content
            style={{
              borderRadius: borderRadiusLG,
              overflowY: "initial",
            }}
          >
            <div
              style={{
                padding: 24,
                // height: "100%",
                // background: "gray",
                borderRadius: borderRadiusLG,
              }}
              className="bg-gray-100"
            >
              <>
                <Suspense>
                  <Outlet />
                  {/* <FloatButton.BackTop
                    type="default"
                    style={{ right: 25, bottom: 130 }}
                    icon={<ArrowUpOutlined />}
                    visibilityHeight={200}
                  /> */}

                  <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ bottom: 80 }}
                    icon={<QuestionOutlined />}
                  >
                    <FloatButton
                      tooltip="Read Documentation"
                      icon={<FileTextFilled />}
                      //  href="https://ssml.zservicedesk.com/"
                      // target="_blank"
                    />
                    <FloatButton
                      href="https://ssml.zservicedesk.com/"
                      target="_blank"
                      tooltip="Need Support"
                      // icon={<Ticket />}
                    />
                  </FloatButton.Group>

                  {/* <FloatButton.Group
                    trigger="click"
                    type="primary"
                    style={{ insetInlineEnd: 50 }}
                    icon={<QuestionOutlined />}
                  >
                  <FloatButton />
                  <FloatButton icon={<QuestionOutlined />} />
                  
                  </FloatButton.Group> */}
                </Suspense>
              </>
            </div>
          </Content>
          {/* <Footer
            style={{
              background: "white",
              position: "fixed",
              // margin: "20px 0px",
              marginTop: 18,
              zIndex: "99",
              width: collapsed ? "92%":"80%",
              // width: "calc(100%-250px)",
              bottom: 15,
              display: "flex",
              justifyContent: "center",
            }}
            className={`!mx-4
            ${
              currentScrollPosition > 20
                ? "border-4 border-yellow-300"
                : "border-4 border-white"
            }
           shadow-lg font-bold rounded-lg`}
          >
            SHYAM STEEL LTD. ©{new Date().getFullYear()} Build in India ❤
          </Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default Navbar;
