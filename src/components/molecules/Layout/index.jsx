import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineMotionPhotosOn } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaIdeal } from "react-icons/fa";
import { PiStoolLight } from "react-icons/pi";
import { BiMapPin } from "react-icons/bi";
import { Layout, Menu } from "antd";
import Header from "@molecules/Header";
import { TbCategoryFilled } from "react-icons/tb";
import { siteConfig } from "@constants/siteVersion";
import "./layout.css";
const { Content, Footer, Sider } = Layout;

const items2 = [
  {
    icon: <TbCategoryFilled size={16} />,
    label: "Label 1",
    route: "route1",
  },
  {
    icon: <BiMapPin size={16} />,
    label: "label2",
    route: "route2",
  },
  {
    icon: <PiStoolLight size={16} />,
    label: "label 3",
    route: "route3",
  },
  {
    icon: <MdOutlineMotionPhotosOn size={16} />,
    label: "label4",
    route: "route4",
  },
  { icon: <FaIdeal size={16} />, label: "Top Deals", route: "topdeals" },
].map((ele) => {
  return {
    key: `${ele.route}`,
    icon: ele.icon,
    label: <p className="sider_label">{ele.label}</p>,
    route: ele.route,
  };
});

const AppLayout = ({ children }) => {
  const history = useNavigate();
  const location = useLocation();
  //   const [title, setTitle] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const [selectedKey, setSelectedKey] = useState();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const path = location.pathname;
    // Filter the matching item based on the route and set it as the selected key
    const selectedItem = items2.filter(
      (item) => item.route === path.substring(1)
    );
    if (selectedItem) {
      setSelectedKey(selectedItem[0]?.key);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Header />
      <Content>
        <Layout className="py-10">
          <Sider
            width={250}
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            className={"custom-collapsed-sider"}
          >
            <div className="sidebar_wrapper">
              {collapsed ? (
                <AiOutlineMenuUnfold
                  size={30}
                  onClick={toggleCollapsed}
                  className="pointer"
                />
              ) : (
                <AiOutlineMenuFold
                  size={30}
                  onClick={toggleCollapsed}
                  className="pointer"
                />
              )}
            </div>
            <Menu
              mode="inline"
              className="h_100"
              selectedKeys={[selectedKey]}
              items={items2}
              onClick={(item) => {
                // setTitle(item.key);
                history(`/${item.key.toLowerCase().split(" ").join("")}`);
              }}
            />
          </Sider>
          <Content className="content_container">{children}</Content>
        </Layout>

        <Footer
          style={{
            background: "#ffffff",
            textAlign: "center",
            borderTop: "1px solid #ededed",
          }}
        >
          {siteConfig.footerText}
        </Footer>
      </Content>
    </Layout>
  );
};
export default AppLayout;
