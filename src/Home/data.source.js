import React from "react";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo",
    children:
      "https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg",
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item0",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>产品服务</p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Ant Design",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "企业级 UI 设计体系",
                },
              ],
            },
          },
          {
            name: "sub1",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Ant Design",
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "企业级 UI 设计体系",
                },
              ],
            },
          },
        ],
      },
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>价格</p>
                    </span>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>客户</p>
                  </span>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item3",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <span>
                  <p>关于我们</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item4",
        className: "header3-item",
        children: {
          href: "http://localhost:4000/",
          children: [
            {
              children: (
                <span>
                  <p>博客</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner40DataSource = {
  wrapper: { className: "home-page-wrapper banner4" },
  page: { className: "home-page banner4-page" },
  childWrapper: {
    className: "banner4-title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>InsightMon</p>
          </span>
        ),
        className: "banner4-title",
      },
      {
        name: "content",
        className: "banner4-content",
        children: (
          <span>
            <p>打造一个以数字驱动为中心的下一代监控运维解决方案服务平台</p>
          </span>
        ),
      },
      {
        name: "button",
        children: {
          href: "http://www.insightmon.com",
          type: "primary",
          children: "开始使用",
        },
      },
    ],
  },
  image: {
    className: "banner4-image",
    children:
      "https://www.manpingou.com/uploads/allimg/190111/25-1Z1111ASU36.jpg",
  },
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: "产品与服务" }],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <span>
                    <p>一站式监控运维解决方案</p>
                  </span>
                </span>
              ),
            },
            { name: "content", children: "支付、结算、核算接入产品效率翻四倍" },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>指标、日志和追踪 &amp; AIOps</p>
                </span>
              ),
            },
            {
              name: "content",
              children: "在所有需求配置环节事前风险控制和质量控制能力",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: (
                <span>
                  <p>开箱即用的监控运维体系</p>
                </span>
              ),
            },
            {
              name: "content",
              children: "沉淀产品接入效率和运营小二工作效率数据",
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png",
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: { className: "content1-title", children: "企业资源管理" },
  content: {
    className: "content1-content",
    children:
      "云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。",
  },
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>InsightMon提供专业的服务</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: "基于阿里云强大的基础资源",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "企业资源管理" },
          content: {
            className: "content3-content",
            children:
              "云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。",
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "云安全" },
          content: {
            className: "content3-content",
            children:
              "按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。",
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "云监控" },
          content: {
            className: "content3-content",
            children:
              "分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。",
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "移动" },
          content: {
            className: "content3-content",
            children:
              "一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。",
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "分布式中间件" },
          content: {
            className: "content3-content",
            children:
              "金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。",
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png",
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "大数据" },
          content: {
            className: "content3-content",
            children:
              "一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。",
          },
        },
      },
    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: "home-page-wrapper content6-wrapper" },
  OverPack: { className: "home-page content6" },
  textWrapper: { className: "content6-text", xs: 24, md: 10 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <p>InsightMon</p>
            </span>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: (
          <span>
            <p>一个以数字驱动为中心的下一代监控运维解决方案服务平台</p>
          </span>
        ),
      },
    ],
  },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png",
    className: "content6-img",
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: "block0",
        img: {
          children:
            "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          className: "content6-icon",
        },
        title: {
          className: "content6-title",
          children: (
            <span>
              <span>
                <p>一站式监控运维解决方案</p>
              </span>
            </span>
          ),
        },
        content: {
          className: "content6-content",
          children: (
            <span>
              <span>
                <span>
                  <p>
                    为企业在公有云、私有云或者混合云；以及多方云服务供应商业务提供统一监控平台。从指标、事件和追踪的多维度可视化，到异常告警通知，到全量服务监控和调查，以及大规模云服务治理和运维的工具，InsightMon都为您提供
                  </p>
                </span>
              </span>
            </span>
          ),
        },
      },
      {
        name: "block1",
        img: {
          className: "content6-icon",
          children:
            "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
        },
        title: {
          className: "content6-title",
          children: (
            <span>
              <span>
                <span>
                  <p>指标、日志和追踪 &amp; AIOps</p>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: "content6-content",
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>
                                指标的仪表盘可视化，链路追踪的动态视图，海量日志信息秒级获取。提供企业一套完整、直观和易用的服务信息量化平台。基于上述数据，提供标准化AI模型以及AIOps流程，为企业弯道超车，跨越数字化直接来到智能化时代
                              </p>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
      },
      {
        name: "block2",
        img: {
          className: "content6-icon",
          children:
            "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
        },
        title: {
          className: "content6-title",
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>来自行业头部最佳实践的布道者</p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: "content6-content",
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>
                      在海量的运维信息以及复杂的概率统计公式下，需要迅速对线上事故或者服务异常情况作出正确的反应，对开发/运维者有非常高的门槛。InsightMon为用户提供来自于行业最前沿的运维理念和经验，大幅度降低开发/运维者的门槛
                    </p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
      },
      {
        name: "block~l8mhytv9qia",
        img: {
          className: "content6-icon",
          children:
            "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
        },
        title: {
          className: "content6-title",
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>开箱即用的监控运维体系，为企业发展保驾护航</p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: "content6-content",
          children: (
            <span>
              <span>
                <span>
                  <p>
                    数字化企业，面对负责业务架构，市面上的云服务供应商已无法满足企业快速发展的需求。InsightMon就是为企业快速发展保驾护航的骑士
                  </p>
                </span>
              </span>
            </span>
          ),
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: "home-page-wrapper teams1-wrapper" },
  page: { className: "home-page teams1" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: "团队成员" }],
  },
  block: {
    className: "block-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title",
              children: (
                <span>
                  <p>高铭谦</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "teams1-job",
              children: (
                <span>
                  <p>创始人&amp;首席执行官</p>
                </span>
              ),
            },
            {
              name: "content1",
              className: "teams1-content",
              children: (
                <span>
                  <p>
                    前AWS
                    CloudWatch核心模块开发负责人。负责监控数据的存储分布式开发和运维。爱尔兰绿卡。曾担任腾讯云AI应用产品业务负责人。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title",
              children: (
                <span>
                  <span>
                    <p>邵明杰</p>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              className: "teams1-job",
              children: (
                <span>
                  <span>
                    <p>联合创始人&amp;首席技术官</p>
                  </span>
                </span>
              ),
            },
            {
              name: "content1",
              className: "teams1-content",
              children: (
                <span>
                  <p>
                    前AWS
                    CloudWatch核心开发人员。负责监控指标的上报、拉取及API开发，拥有每秒千万级请求的分布式开发和运维经验。领导的项目上线后每年持续为公司创收600万美元。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
            },
            {
              name: "title",
              className: "teams1-title",
              children: (
                <span>
                  <span>
                    <p>尹海涛</p>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              className: "teams1-job",
              children: (
                <span>
                  <span>
                    <p>合伙人&amp;首席产品官</p>
                  </span>
                </span>
              ),
            },
            {
              name: "content1",
              className: "teams1-content",
              children: (
                <span>
                  <p>
                    毕业于爱尔兰科克大学，拥有海内外创业经历，连续创业者，7年互联网行业经验。曾在阿里云云效担任核心前端开发。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children:
            "https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: "Animation specification and components of Ant Design.",
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "产品" },
        childWrapper: {
          children: [
            { name: "link0", href: "#", children: "产品更新记录" },
            { name: "link1", href: "#", children: "API文档" },
            { name: "link2", href: "#", children: "快速入门" },
            { name: "link3", href: "#", children: "参考指南" },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "关于" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "FAQ" },
            { href: "#", name: "link1", children: "联系我们" },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "资源" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "Ant Design" },
            { href: "#", name: "link1", children: "Ant Motion" },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <span>
          ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
          Reserved
        </span>
      </span>
    ),
  },
};
