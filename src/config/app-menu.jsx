import React, { createContext, useState, useContext, useEffect } from "react";
import { axiosPost } from "../utils/Axios Utils/Utils";

const initialMenuData = [
  { is_header: true, title: "ناوبری" },
  { path: "/dashboard", icon: "bi bi-cpu", title: "داشبورد" },
  { path: "/analytics", icon: "bi bi-bar-chart", title: "آمار" },
  {
    path: "/email",
    icon: "bi bi-envelope",
    title: "ایمیل",
    children: [
      { path: "/email/inbox", title: "صندوق ورودی" },
      { path: "/email/compose", title: "ارسال" },
      { path: "/email/detail", title: "جزئیات" },
    ],
  },
  { is_divider: true },
  { is_header: true, title: "اجزاء" },
  { path: "/widgets", icon: "bi bi-columns-gap", title: "ابزارک‌ها" },
  {
    path: "/ai",
    icon: "bi bi-stars",
    title: "هوش مصنوعی",
    children: [
      { path: "/ai/chat", title: "گفت و گو" },
      { path: "/ai/image-generator", title: "تولید تصویر" },
    ],
  },
  {
    path: "/pos",
    icon: "bi bi-bag-check",
    title: "سیستم پوز",
    highlight: true,
    children: [
      { path: "/pos/customer-order", title: "سفارش مشتری" },
      { path: "/pos/kitchen-order", title: "سفارش آشپزخانه" },
      { path: "/pos/counter-checkout", title: "پیشخوان پرداخت" },
      { path: "/pos/table-booking", title: "رزرو میز" },
      { path: "/pos/menu-stock", title: "موجودی انبار" },
    ],
  },
  {
    path: "/ui",
    icon: "fa fa-heart",
    title: "جعبه‌ابزار رابط کاربری",
    children: [
      { path: "/ui/bootstrap", title: "Bootstrap" },
      { path: "/ui/buttons", title: "دکمه‌ها" },
      { path: "/ui/card", title: "کارت‌ها" },
      { path: "/ui/icons", title: "آیکون‌ها" },
      { path: "/ui/modal-notifications", title: "مودال و اطلاعیه" },
      { path: "/ui/typography", title: "نوشتار" },
      { path: "/ui/tabs-accordions", title: "تب و آکاردئون" },
    ],
  },
  {
    path: "/form",
    icon: "bi bi-pen",
    title: "فرم‌ها",
    children: [
      { path: "/form/elements", title: "اجزاء فرم" },
      { path: "/form/plugins", title: "افزودنی‌های فرم" },
      { path: "/form/wizards", title: "نصب‌کننده‌ها" },
    ],
  },
  {
    path: "/table",
    icon: "bi bi-grid-3x3",
    title: "جداول",
    children: [
      { path: "/table/elements", title: "اجزاء جدول" },
      { path: "/table/plugins", title: "افزودنی‌های جدول" },
    ],
  },
  {
    path: "/chart",
    icon: "bi bi-pie-chart",
    title: "نمودارها",
    children: [
      { path: "/chart/chart-js", title: "Chart.js" },
      { path: "/chart/chart-apex", title: "Apexcharts.js" },
    ],
  },
  { path: "/map", icon: "bi bi-compass", title: "نقشه" },
  {
    path: "/layout",
    icon: "bi bi-layout-sidebar",
    title: "چیدمان",
    children: [
      { path: "/layout/starter-page", title: "صفحه شروع" },
      { path: "/layout/fixed-footer", title: "Fixed Footer" },
      { path: "/layout/full-height", title: "Full Height" },
      { path: "/layout/full-width", title: "Full Width" },
      { path: "/layout/boxed-layout", title: "Boxed Layout" },
      { path: "/layout/collapsed-sidebar", title: "Collapsed Sidebar" },
      { path: "/layout/top-nav", title: "Top Nav" },
      { path: "/layout/mixed-nav", title: "Mixed Nav" },
      {
        path: "/layout/mixed-nav-boxed-layout",
        title: "Mixed Nav Boxed Layout",
      },
    ],
  },
  {
    path: "/pages",
    icon: "bi bi-collection",
    title: "صفحات",
    children: [
      { path: "/pages/scrum-board", title: "اسکرام بورد" },
      { path: "/pages/products", title: "محصولات" },
      { path: "/pages/product-details", title: "جزئیات محصول" },
      { path: "/pages/orders", title: "سفارشات" },
      { path: "/pages/order-details", title: "جزئیات سفارش" },
      { path: "/pages/gallery", title: "گالری" },
      { path: "/pages/search-results", title: "نتایج جستجو" },
      { path: "/pages/coming-soon", title: "به زودی" },
      { path: "/pages/error", title: "خطای ۴۰۴" },
      { path: "/pages/login", title: "ورود" },
      { path: "/pages/register", title: "ثبت‌نام" },
      { path: "/pages/messenger", title: "پیام‌رسان" },
      { path: "/pages/data-management", title: "مدیریت داده" },
      { path: "/pages/file-manager", title: "مدیریت فایل" },
      { path: "/pages/pricing", title: "قیمت" },
    ],
  },
  { path: "/landing", icon: "bi bi-diagram-3", title: "صفحه فرود" },
  { is_divider: true },
  { is_header: true, title: "کاربران" },
  { path: "/profile", icon: "bi bi-people", title: "پروفایل" },
  { path: "/calendar", icon: "bi bi-calendar4", title: "تقویم" },
  { path: "/settings", icon: "bi bi-gear", title: "تنظیمات" },
  { path: "/helper", icon: "bi bi-gem", title: "راهنما" },
];

// Function to map API data to Menu format
const mapApiDataToMenu = (apiData) => {
  return apiData.map((item) => {
    const menuItem = {
      path: item.path,
      icon: item.icon,
      title: item.title,
    };

    // Add children if they exist and are not empty
    if (item.children && item.children.length > 0) {
      menuItem.children = item.children.map((child) => ({
        path: child.path,
        title: child.title,
        icon: child.icon,
        // Recursively handle nested children if needed
        ...(child.children &&
          child.children.length > 0 && {
            children: child.children.map((grandChild) => ({
              path: grandChild.path,
              title: grandChild.title,
            })),
          }),
      }));
    }

    return menuItem;
  });
};

// Get Menu Data from API
async function getMenu() {
  const result = await axiosPost("/api/menus/sidebar/", {
    url: "/users/config/test",
  });

  const apiMenuItems = mapApiDataToMenu(result.data);

  console.log(apiMenuItems);
  return apiMenuItems;
}

getMenu();

// Create Menu Context
const MenuContext = createContext();

// Menu Provider Component
export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(initialMenuData);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const menuData = await getMenu();
        setMenu(menuData);
      } catch (error) {
        console.error("Failed to load menu:", error);
        // Fallback to initial menu data on error
        setMenu(initialMenuData);
      }
    }

    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

// Custom hook to use menu
export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}

// Default export for backward compatibility (returns initial data)
export default initialMenuData;
