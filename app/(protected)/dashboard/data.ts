export const salesData = [
    {
        id: 1,
        name: "Bangladesh",
        amount: "$12k",
        sales_rate: "14.8%",
        image: "/images/all/bangladesh.png",
        isUp: true
    },
    {
        id: 2,
        name: "Australia",
        amount: "$22k",
        sales_rate: "15.8%",
        image: "/images/all/australia.png",
        isUp: true
    },
    {
        id: 3,
        name: "Canada",
        amount: "$32k",
        sales_rate: "25.8%",
        image: "/images/all/canada.png",
        isUp: false
    },
    {
        id: 4,
        name: "French",
        amount: "$42k",
        sales_rate: "35.8%",
        image: "/images/all/french.png",
        isUp: true
    },
    {
        id: 5,
        name: "Germany",
        amount: "$432k",
        sales_rate: "15.8%",
        image: "/images/all/germany.png",
        isUp: true
    }
]

export const revinueData = [
    {
        id: 1,
        name: "Facebook",
        amount: "30,567",
        isIncrease: true
    },
    {
        id: 2,
        name: "Google",
        amount: "20,567",
        isIncrease: true
    },
    {
        id: 3,
        name: "Twitter",
        amount: "40,567",
        isIncrease: true
    },
    {
        id: 4,
        name: "Instagram",
        amount: "50,567",
        isIncrease: false
    },
    {
        id: 5,
        name: "Linkedin",
        amount: "60,567",
        isIncrease: true
    },
    {
        id: 6,
        name: "Youtube",
        amount: "70,567",
        isIncrease: true
    },
    {
        id: 7,
        name: "Github",
        amount: "80,567",
        isIncrease: false
    }
]

export const campaignData = [
    {
        id: 1,
        name: "Emails",
        amount: "14,253k",
        isIncrease: true,
        rate: "9.8",
        icon: "heroicons:envelope",
        color: "primary"
    },
    {
        id: 2,
        name: "Calls",
        amount: "15,253k",
        isIncrease: false,
        rate: "9.8",
        icon: "heroicons:phone-arrow-up-right",
        color: "success"
    },
    {
        id: 5,
        name: "Linkedin",
        amount: "14,753k",
        isIncrease: true,
        rate: "9.8",
        icon: "basil:linkedin-outline",
        color: "danger"
    },
    {
        id: 6,
        name: "Pinterest",
        amount: "18,253k",
        isIncrease: false,
        rate: "9.8",
        icon: "hugeicons:pinterest",
        color: "danger"
    },
    {
        id: 7,
        name: "Twitter",
        amount: "64,253k",
        isIncrease: true,
        rate: "9.8",
        icon: "arcticons:x-twitter",
        color: "danger"
    }
]

export const activityData = [
    {
        id: 1,
        title: "New Message",
        time: "5 min ago",
        icon: "lets-icons:message-light",
        color: "primary"
    },
    {
        id: 2,
        title: "Team Meeting",
        time: "10 min ago",
        icon: "heroicons:user-group",
        color: "info"
    },
    {
        id: 3,
        title: "Sales Report",
        time: "2 hour ago",
        icon: "solar:chart-2-line-duotone",
        color: "warning"
    },
    {
        id: 4,
        title: "Client Meeting",
        time: "3 days ago",
        icon: "ei:user",
        color: "success"
    },
    {
        id: 5,
        title: "Design Meetup",
        time: "5 days ago",
        icon: "fluent:design-ideas-20-regular",
        color: "danger"
    }
]

export type Product = {
    id: number;
    productName: string;
    area: string;
    price: number;
    sales: number
}
export const products: Product[] = [
    {
      id: 1,
      productName: "Smartphone X",
      area: "North America",
      price: 799,
      sales: 1200
    },
    {
      id: 2,
      productName: "Tablet Pro",
      area: "Europe",
      price: 999,
      sales: 850
    },
    {
      id: 3,
      productName: "Laptop Elite",
      area: "Asia",
      price: 1499,
      sales: 600
    },
    {
      id: 4,
      productName: "Smartwatch 2",
      area: "South America",
      price: 299,
      sales: 1500
    },
    {
      id: 5,
      productName: "Gaming Console Z",
      area: "Australia",
      price: 499,
      sales: 900
    }
  ];
  
  // Define the type for an Order
export type Order = {
    orderId: number;
    date: string;
    amount: number;
    status: "Shipped" | "Pending" | "Delivered" | "Cancelled" | "Processing";
  };
  

 export const orders: Order[] = [
    {
      orderId: 101,
      date: "2024-09-01",
      amount: 250.75,
      status: "Shipped"
    },
    {
      orderId: 102,
      date: "2024-09-03",
      amount: 150.00,
      status: "Pending"
    },
    {
      orderId: 103,
      date: "2024-09-05",
      amount: 350.50,
      status: "Delivered"
    },
    {
      orderId: 104,
      date: "2024-09-06",
      amount: 99.99,
      status: "Cancelled"
    },
    {
      orderId: 105,
      date: "2024-09-07",
      amount: 500.00,
      status: "Processing"
    }
  ];
  
