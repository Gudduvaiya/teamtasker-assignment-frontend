import { notification } from "antd";
// import { IconType } from "antd/es/notification/interface";

// The notification alert boxes that rendered on the top-right is defined here.
export const notificationBox = (
  message: string,
  description: string,
  type: any
) => {
  notification.open({
    message: message,
    description: description,
    placement: "topRight",
    type: type,
    duration: 2.5,
  });
};
