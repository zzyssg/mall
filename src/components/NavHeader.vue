<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视s</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" />
            <a href="javascript"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
};
</script>
<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      width: 1226px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      width: 1126px;
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo {
        height: 55px;
        width: 55px;
        display: inline-block;
        background-color: #ff6600;
        a {
          display: inline-block;
          height: 55px;
          width: 110px;
          &:before {
            content: " ";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
            transition: margin 0.3s;
          }
          &:after {
            content: " ";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.3s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px;
          display: flex;
          align-items: center;
          input {
            //   border: none;
            box-sizing: border-box;
            border: 1px solid #e0e0e0;
            width: 264;
            height: 50px;
            padding-left: 14px;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url("/imgs/icon-search.png");
            background-size: contain;
            margin-left: 17px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>