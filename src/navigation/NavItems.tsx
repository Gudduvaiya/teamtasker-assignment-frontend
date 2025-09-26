import { MenuProps } from "antd";
import { NavigateFunction } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  SendOutlined,
  BranchesOutlined,
  // ProfileOutlined,
  // AlertOutlined,
  WarningOutlined,
  // CoffeeOutlined,
  // FileDoneOutlined,
  // SafetyOutlined,
  // TrophyOutlined,
  // IssuesCloseOutlined,
  // SnippetsOutlined,
  // HddOutlined,
  AimOutlined,
  AlertOutlined,
  SkinOutlined,
  // FormatPainterOutlined,
  // CheckCircleOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { LocaleStringConverter } from "../lib/helper";
import { UserDataType } from "../lib/types";

export const GetSideBarItems = (
  navigate: NavigateFunction
): MenuProps["items"] => {
  let loggedInUser: UserDataType = JSON.parse(
    sessionStorage.getItem("userData")
  );
  const checkedList = loggedInUser?.PageList.split(",");
  console.log(checkedList);

  return [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Dashboard",
      onClick: () => {
        navigate("/");
      },
    },
    (checkedList.includes("master-page") ||
      checkedList.includes("user-management") ||
      checkedList.includes("observation") ||
      checkedList.includes("contractor-uploader") ||
      checkedList.includes("company-uploader") ||
      checkedList.includes("injury-master") ||
      checkedList.includes("email") ||
      checkedList.includes("delete") ||
      checkedList.includes("ppe-master")) && {
      key: "masterGrp",
      label: "Masters",
      type: "group",
      children: [
        (checkedList.includes("master-page") ||
          checkedList.includes("user-management") ||
          checkedList.includes("observation") ||
          checkedList.includes("contractor-uploader") ||
          checkedList.includes("company-uploader") ||
          checkedList.includes("injury-master") ||
          checkedList.includes("email") ||
          checkedList.includes("delete") ||
          checkedList.includes("ppe-master")) && {
          key: "10",
          label: "Admin",
          icon: <AimOutlined />,
          children: [
            checkedList.includes("user-management") && {
              key: "user-management",
              label: "User Management",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/user-management");
              },
            },
            checkedList.includes("delete") && {
              key: "delete",
              label: "Delete",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/delete");
              },
            },
            (checkedList.includes("admin-injury-reports") ||
              checkedList.includes("admin-pp-reports") ||
              checkedList.includes("admin-induction-reports") ||
              checkedList.includes("admin-reporting-reports") ||
              checkedList.includes("admin-sop-reports") ||
              checkedList.includes("admin-format-reports") ||
              checkedList.includes("event-reports") ||
              checkedList.includes("admin-standard-bureau-reports")) && {
              key: "reports-admin",
              label: "Reports",
              icon: <TeamOutlined />,
              // onClick: () => {
              //   navigate("/delete");
              // },
              children: [
                checkedList.includes("admin-injury-reports") && {
                  key: "admin-injury-reports",
                  label: "Injury",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/admin-injury-reports");
                  },
                },
                checkedList.includes("admin-ppe-reports") && {
                  key: "admin-ppe-reports",
                  label: "PPE",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/admin-ppe-reports");
                  },
                },
                checkedList.includes("admin-induction-reports") && {
                  key: "admin-induction-reports",
                  label: "Induction",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/admin-induction-reports");
                  },
                },
                checkedList.includes("admin-reporting-reports") && {
                  key: "admin-reporting-reports",
                  label: "Reporting",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/admin-reporting-reports");
                  },
                },
                checkedList.includes("admin-format-reports") && {
                  key: "admin-format-reports",
                  label: "Format",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/admin-format-reports");
                  },
                },
                checkedList.includes("admin-sop-reports") && {
                  key: "admin-sop-reports",
                  label: "SOP",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/admin-sop-reports");
                  },
                },
                checkedList.includes("admin-standard-bureau-reports") && {
                  key: "admin-standard-bureau-reports",
                  label: "Standard Bureau",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/admin-standard-bureau-reports");
                  },
                },
                checkedList.includes("event-reports") && {
                  key: "event-reports",
                  label: "Events",
                  icon: <UserOutlined />,
                  onClick: () => {
                    navigate("/event-reports");
                  },
                },
              ],
            },
            checkedList.includes("master-page") && {
              key: "master-page",
              label: "Master",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/master-page");
              },
            },
            checkedList.includes("observation") && {
              key: "categories",
              label: "Categories",
              icon: <FileAddOutlined />,
              onClick: () => {
                navigate("/categories");
              },
            },
            checkedList.includes("contractor-uploader") && {
              key: "contractor-uploader",
              label: "Contractor Uploader",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/contractor-uploader");
              },
            },
            checkedList.includes("company-uploader") && {
              key: "company-uploader",
              label: "Company Uploader",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/company-uploader");
              },
            },

            checkedList.includes("injury-master") && {
              key: "injury-master",
              label: LocaleStringConverter("INJURY MASTER"),
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/injury-master");
              },
            },
            checkedList.includes("email") && {
              key: "email",
              label: "Email",
              icon: <SendOutlined />,
              onClick: () => {
                navigate("/email");
              },
            },
            checkedList.includes("ppe-master") && {
              key: "ppe-master",
              label: "PPE Master",
              icon: <SkinOutlined />,
              onClick: () => {
                navigate("/ppe-master");
              },
            },
          ],
        },
        // {
        //   key: "15",
        //   label: LocaleStringConverter("Standards Bureau"),
        //   icon: <CheckCircleOutlined />,
        // },
        // {
        //   key: "16",
        //   label: "SOPS",
        //   icon: <UserOutlined />,
        // },
        // {
        //   key: "17",
        //   label: "Formats",
        //   icon: <FormatPainterOutlined />,
        // },
        // {
        //   key: "18",
        //   label: "SSML Certifications",
        //   icon: <FileDoneOutlined />,
        // },
      ],
    },

    (checkedList.includes("employees-of-the-month") ||
      checkedList.includes("daily-event")) && {
      key: "eventManagementGrp",
      label: "HSE Initiatives",
      type: "group",
      children: [
        {
          key: "event",
          label: "Events",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("employees-of-the-month") && {
              key: "employees-of-the-month",
              label: "Employees Of The Month",
              title: "Employees Of The Month",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/employees-of-the-month");
              },
            },
            checkedList.includes("major-event") && {
              key: "major-event",
              label: "Major Event",
              title: "Major Event",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/major-event");
              },
            },
            checkedList.includes("daily-event") && {
              key: "daily-event",
              label: "Daily Event",
              title: "Daily Event",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/daily-event");
              },
            },
          ],
        },
      ],
    },

    (checkedList.includes("contacts") ||
      checkedList.includes("employees") ||
      checkedList.includes("employeeEmails")) && {
      key: "emerManageGrp",
      label: LocaleStringConverter("Employee MANAGEMENT"),
      type: "group",
      children: [
        {
          key: "20",
          label: "Employee",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("contacts") && {
              key: "contacts",
              label: "Contact Number",
              title: "Emergency Contact Number",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/contacts");
              },
            },
            checkedList.includes("employees") && {
              key: "employees",
              label: "Employees",
              title: "Employees",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/employees");
              },
            },
            checkedList.includes("employeeEmails") && {
              key: "employee-emails",
              label: "Employee Emails",
              title: "Employees Emails",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/employee-emails");
              },
            },
          ],
        },
      ],
    },

    (checkedList.includes("injury-dashboard") ||
      checkedList.includes("injury-entry") ||
      checkedList.includes("injury-reports")) && {
      key: "InjuryManagementGrp",
      label: LocaleStringConverter("Incident MANAGEMENT"),
      type: "group",
      children: [
        (checkedList.includes("injury-dashboard") ||
          checkedList.includes("injury-entry") ||
          checkedList.includes("injury-reports")) && {
          key: "injury",
          label: "Injury",
          icon: <AlertOutlined />,
          children: [
            checkedList.includes("injury-dashboard") && {
              key: "injury-dashboard",
              label: "Dashboard",
              title: "Dashboard",
              icon: <UserOutlined />,
              onClick: () => navigate("/injury-dashboard"),
            },
            checkedList.includes("injury-entry") && {
              key: "injury-entry",
              label: "OHC Reporting",
              title: "OHC Reporting",
              icon: <UserOutlined />,
              onClick: () => navigate("/injury-entry"),
            },
            checkedList.includes("injury-reports") && {
              key: "injury-reports",
              label: "Reports",
              title: "OVERALL INCIDENT REPORT".toLocaleLowerCase(),
              onClick: () => navigate("/injury-reports"),
              icon: <UserOutlined />,
            },
          ],
        },
      ],
    },

    // {
    //   key: "comiteeGrp",
    //   label: "Commitees",
    //   type: "group",
    //   children: [
    //     {
    //       key: "30",
    //       label: "Commitees",
    //       icon: <TeamOutlined />,
    //       children: [
    //         {
    //           key: "31",
    //           label: LocaleStringConverter("CENTERAL SAFETY"),
    //           title: "CENTERAL SAFETY COMMITTEE",
    //           icon: <UserOutlined />,
    //         },
    //         {
    //           key: "32",
    //           label: LocaleStringConverter("SAFETY SUB"),
    //           title: "SAFETY SUB COMMITTEE",
    //           icon: <UserOutlined />,
    //         },
    //       ],
    //     },
    //   ],
    // },

    // {
    //   key: "resourcesGrp",
    //   label: "Resources",
    //   type: "group",
    //   children: [
    //     {
    //       key: "40",
    //       label: "Resources",
    //       icon: <ProfileOutlined />,
    //       children: [
    //         {
    //           key: "41",
    //           label: LocaleStringConverter("LEADERSHIP TALKS"),
    //           title: "LEADERSHIP TALKS",
    //           icon: <UserOutlined />,
    //         },
    //         {
    //           key: "42",
    //           label: LocaleStringConverter("NOTICE/CIRCULAR/ADVISORY"),
    //           title: "NOTICE/CIRCULAR/ADVISORY",
    //           icon: <UserOutlined />,
    //         },
    //         {
    //           key: "43",
    //           label: LocaleStringConverter("SAFETY ALERT"),
    //           title: "SAFETY ALERT",
    //           icon: <UserOutlined />,
    //         },
    //         {
    //           key: "44",
    //           label: LocaleStringConverter("E-LEARNING CONTENT"),
    //           title: "E-LEARNING CONTENT",
    //           icon: <UserOutlined />,
    //         },
    //       ],
    //     },
    //   ],
    // },

    (checkedList.includes("ppe-dashboard") ||
      checkedList.includes("ppe-issue") ||
      checkedList.includes("ppe-report")) && {
      key: "PPEGrp",
      label: "PPE Management",
      type: "group",
      children: [
        (checkedList.includes("ppe-dashboard") ||
          checkedList.includes("ppe-issue") ||
          checkedList.includes("ppe-report")) && {
          key: "50",
          label: "PPE",
          icon: <SkinOutlined />,
          children: [
            checkedList.includes("ppe-dashboard") && {
              key: "ppe-dashboard",
              label: "Dashboard",
              title: "Dashboard",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/ppe-dashboard");
              },
            },
            checkedList.includes("ppe-issue") && {
              key: "ppe-issue",
              label: "Issue",
              title: "PPE ISSUE",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/ppe-issue");
              },
            },
            checkedList.includes("ppe-reports") && {
              key: "ppe-reports",
              label: LocaleStringConverter("Reports"),
              title: "PPE Reports",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/ppe-reports");
              },
            },
          ],
        },
      ],
    },

    // {
    //   key: "performanceGrp",
    //   label: "Performance Management",
    //   type: "group",
    //   children: [
    //     {
    //       key: "60",
    //       label: "Legal & Statutory",
    //       icon: <SnippetsOutlined />,
    //       children: [
    //         {
    //           key: "61A",
    //           label: LocaleStringConverter("Dashboard"),
    //           title: "Legal Dashboard",
    //           icon: <UserOutlined />,
    //         },
    //         {
    //           key: "61",
    //           label: LocaleStringConverter("LEGALATION"),
    //           title: "LEGALATION",
    //           icon: <UserOutlined />,
    //         },
    //       ],
    //     },
    //     {
    //       key: "63",
    //       label: "Toolbox Talk",
    //       icon: <HddOutlined />,
    //       children: [
    //         {
    //           key: "64",
    //           label: "Dashboard".toLocaleLowerCase(),
    //           title: "Dashboard".toLocaleLowerCase(),
    //           icon: <UserOutlined />,
    //         },
    //         {
    //           key: "65",
    //           label: "TBT ENTRY".toLocaleLowerCase(),
    //           title: "TBT ENTRY".toLocaleLowerCase(),
    //           icon: <UserOutlined />,
    //         },
    //       ],
    //     },
    //   ],
    // },

    (checkedList.includes("reporting-dashboard") ||
      checkedList.includes("reporting") ||
      checkedList.includes("reporting-reports")) && {
      key: "safetyGrp",
      label: "Safety",
      type: "group",
      children: [
        (checkedList.includes("reporting-dashboard") ||
          checkedList.includes("reporting") ||
          checkedList.includes("reporting-reports") ||
          checkedList.includes("induction-entry") ||
          checkedList.includes("induction-dashboard") ||
          checkedList.includes("induction-report")) && {
          key: "76",
          label: LocaleStringConverter("Audit Management"),
          icon: <WarningOutlined />,
          children: [
            checkedList.includes("reporting-dashboard") && {
              key: "reporting-dashboard",
              label: "Dashboard",
              title: "Dashboard",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/reporting-dashboard");
              },
            },
            checkedList.includes("reporting") && {
              key: "reporting",
              label: "Reporting/Pending",
              title: "Reporting Entry",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/reporting");
              },
            },
            checkedList.includes("reporting-reports") && {
              key: "reporting-reports",
              label: "Reports",
              title: "Reports",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/reporting-reports");
              },
            },
          ],
        },
        (checkedList.includes("induction-dashboard") ||
          checkedList.includes("induction-entry") ||
          checkedList.includes("induction-report")) && {
          key: "induction",
          label: "Induction",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("induction-dashboard") && {
              key: "induction-dashboard",
              label: "Dashboard",
              title: "Induction Dashboard",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/induction-dashboard");
              },
            },
            checkedList.includes("induction-entry") && {
              key: "induction-entry",
              label: "Entry/Re-Entry",
              title: "Induction Entry",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/induction-entry");
              },
            },
            // checkedList.includes("induction-update") && {
            //   key: "induction-update",
            //   label: LocaleStringConverter("Re-Entry"),
            //   title: "Induction Update",
            //   icon: <UserOutlined />,
            //   onClick: () => {
            //     navigate("/induction-update");
            //   },
            // },
            checkedList.includes("induction-report") && {
              key: "induction-report",
              label: LocaleStringConverter("Reports"),
              title: "Induction Report",
              icon: <UserOutlined />,
              onClick: () => {
                navigate("/induction-report");
              },
            },
          ],
        },
      ],
    },

    (checkedList.includes("compliance-dashboard") ||
      checkedList.includes("compliance-upload-tpi") ||
      checkedList.includes("compliance-tpi-renewals") ||
      checkedList.includes("compliance-reports") ||
      checkedList.includes("instrument-reports") ||
      checkedList.includes("instrument-dashboard") ||
      checkedList.includes("instrument-renewals") ||
      checkedList.includes("instrument-upload")) && {
      key: "compliancesGrp",
      label: "Compliances",
      type: "group",
      children: [
        (checkedList.includes("compliance-dashboard") ||
          checkedList.includes("compliance-upload-tpi") ||
          checkedList.includes("compliance-tpi-renewals") ||
          checkedList.includes("compliance-reports")) && {
          key: "complianceTPI",
          label: "TPI",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("compliance-dashboard") && {
              key: "compliance-dashboard",
              label: "Dashboard",
              title: "Dashboard",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/compliance-dashboard");
              },
            },
            checkedList.includes("compliance-upload-tpi") && {
              key: "compliance-upload-tpi",
              label: "Add TPI",
              title: "Upload TPI",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/compliance-upload-tpi");
              },
            },
            checkedList.includes("compliance-tpi-renewals") && {
              key: "compliance-tpi-renewals",
              label: "Renew",
              title: "Renew",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/compliance-tpi-renewals");
              },
            },
            checkedList.includes("compliance-reports") && {
              key: "compliance-reports",
              label: "Reports",
              title: "Reports",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/compliance-reports");
              },
            },
          ],
        },
        (checkedList.includes("instrument-dashboard") ||
          checkedList.includes("instrument-upload") ||
          checkedList.includes("instrument-renewals") ||
          checkedList.includes("instrument-reports")) && {
          key: "complianceInstrument",
          label: "Instrument",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("instrument-dashboard") && {
              key: "instrument-dashboard",
              label: "Dashboard",
              title: "Dashboard",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/instrument-dashboard");
              },
            },
            checkedList.includes("instrument-upload") && {
              key: "instrument-upload",
              label: "Add",
              title: "Upload",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/instrument-upload");
              },
            },
            checkedList.includes("instrument-renewals") && {
              key: "instrument-renewals",
              label: "Renew",
              title: "Renew",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/instrument-renewals");
              },
            },
            checkedList.includes("instrument-reports") && {
              key: "instrument-reports",
              label: "Reports",
              title: "Reports",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/instrument-reports");
              },
            },
          ],
        },
      ],
    },

    (checkedList.includes("SOP-entry") ||
      checkedList.includes("SOP-reports") ||
      checkedList.includes("format-entry") ||
      checkedList.includes("format-reports") ||
      checkedList.includes("standard-bureau-entry") ||
      checkedList.includes("standard-bureau-report")) && {
      key: "resourcesGrp",
      label: "Resources",
      type: "group",
      children: [
        (checkedList.includes("standard-bureau-entry") ||
          checkedList.includes("standard-bureau-report")) && {
          key: "standardBureau",
          label: "Standard Bureau",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("standard-bureau-entry") && {
              key: "standard-bureau-entry",
              label: "Entry",
              title: "Entry",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/standard-bureau-entry");
              },
            },
            checkedList.includes("standard-bureau-report") && {
              key: "standard-bureau-report",
              label: "Reports",
              title: "Reports",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/standard-bureau-report");
              },
            },
          ],
        },

        (checkedList.includes("SOP-entry") ||
          checkedList.includes("SOP-reports")) && {
          key: "SOPGrp",
          label: "SOP",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("SOP-entry") && {
              key: "SOP-entry",
              label: "Entry",
              title: "Entry",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/SOP-entry");
              },
            },
            checkedList.includes("SOP-reports") && {
              key: "SOP-reports",
              label: "Reports",
              title: "Reports",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/SOP-reports");
              },
            },
          ],
        },

        (checkedList.includes("format-entry") ||
          checkedList.includes("format-reports")) && {
          key: "format",
          label: "Format",
          icon: <BranchesOutlined />,
          children: [
            checkedList.includes("format-entry") && {
              key: "format-entry",
              label: "Entry",
              title: "Entry",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/format-entry");
              },
            },
            checkedList.includes("format-reports") && {
              key: "format-reports",
              label: "Reports",
              title: "Reports",
              icon: <TeamOutlined />,
              onClick: () => {
                navigate("/format-reports");
              },
            },
          ],
        },
      ],
    },
  ];
};

export default GetSideBarItems;
