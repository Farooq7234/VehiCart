const products = [
    {
        id: `product_${Date.now()}_1`,
        popularity: "best selling",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13d29001ce92a4de7/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Cars",
        productName: "Suzuki Swift",
        price: 90
    },
    {
        id: `product_${Date.now()}_2`,
        popularity: "best selling",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13c80001ef1696f58/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Cars",
        productName: "Honda City",
        price: 20
    },
    {
        id: `product_${Date.now()}_3`,
        popularity: "best selling",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13cee0039618acfc2/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Cars",
        productName: "Honda Innova Crysta",
        price: 50
    },
    {
        id: `product_${Date.now()}_4`,
        popularity: "best selling",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13d1d001426a90f4d/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Cars",
        productName: "Mahindra XUV700",
        price: 90
    },
    {
        id: `product_${Date.now()}_5`,
        popularity: "trending products",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13d340039441545ec/view?project=66c0e45b0025da8c44ea&mode=admin ',
        category: "Cars",
        productName: "Nisson Magnite",
        price: 80
    },
    {
        id: `product_${Date.now()}_6`,
        popularity: "trending products",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13d4b0010e50b5f9d/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Cars",
        productName: "Tata Nexon",
        price: 15
    },
    {
        id: `product_${Date.now()}_7`,
        popularity: "trending products",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13dfb001ee82e7c38/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bicycles",
        productName: "Btwin 300",
        price: 56
    },
    {
        id: `product_${Date.now()}_8`,
        popularity: "trending products",
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13cc7000d37936488/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Cars",
        productName: "Ford EcoSport",
        price: 10
    },
    {
        id: `product_${Date.now()}_9`,
        productImage: 'https://images.unsplash.com/photo-1626120032630-b51c96a544f5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Apple juice",
        price: 90
    },
    {
        id: `product_${Date.now()}_10`,
        productImage: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Orange juice",
        price: 45
    },
    {
        id: `product_${Date.now()}_11`,
        productImage: 'https://images.unsplash.com/photo-1473115209096-e0375dd6b3b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Coconut juice",
        price: 80
    },
    {
        id: `product_${Date.now()}_12`,
        productImage: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Strawberry juice",
        price: 25
    },
    {
        id: `product_${Date.now()}_13`,
        productImage: 'https://images.unsplash.com/photo-1603028769268-94e389e60414?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Pomegranate juice",
        price: 100
    },
    {
        id: `product_${Date.now()}_14`,
        productImage: 'https://images.unsplash.com/photo-1567587407679-8187b3b972aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Watermelon juice",
        price: 35
    },
    {
        id: `product_${Date.now()}_15`,
        productImage: 'https://images.unsplash.com/photo-1619898804188-e7bad4bd2127?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Mango juice",
        price: 10
    },
    {
        id: `product_${Date.now()}_16`,
        productImage: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Pineapple juice",
        price: 65
    },
    {
        id: `product_${Date.now()}_17`,
        productImage: 'https://images.unsplash.com/photo-1473348229220-66f5e48021f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Kiwi juice",
        price: 95
    },
    {
        id: `product_${Date.now()}_18`,
        productImage: 'https://images.unsplash.com/photo-1699294899842-c59b12cc0249?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Muskmelon juice",
        price: 70
    },
];



const serviceData = [
    {
        value1: "Free Maintenance",
        value2: "On All Rentals"
    },
    {
        value1: "Verified Vehicles",
        value2: "Quality Assured"
    },
    {
        value1: "Flexible Pricing",
        value2: "Best Rates Guaranteed"
    },
    {
        value1: "Easy Cancellation",
        value2: "Hassle-Free Process"
    },
];


const featuresData = [{
    title: "Farm Fresh Fruits",
    content: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    featuredImage: "https://cdn.pixabay.com/photo/2016/03/23/04/44/fruits-and-vegetables-1274079_1280.png"
}, {
    title: "Fresh Vegetables",
    content: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    featuredImage: "https://cdn.pixabay.com/photo/2016/02/23/17/44/apple-1218166_1280.png"
}, {
    title: "Organic Legume",
    content: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    featuredImage: "https://cdn.pixabay.com/photo/2018/04/17/23/04/grilled-vegetables-3329075_1280.png"
}]


const customerReviews = [
    {
        custName: "Mila Kunis",
        custImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        clientId: "client01",
        review: "I highly recommend organic store for your next shopping!!"
    },
    {
        custName: "Loki",
        custImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        clientId: "client02",
        review: "The organic store is excellent website having the best user experience as well as the service they provide"
    },
    {
        custName: "Alex",
        custImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1vZGVsfGVufDB8fDB8fHww",
        clientId: "client01",
        review: "The organic store is fantastic!"
    },
]

const logos = [
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
    }
]





export { products, customerReviews, logos, featuresData, serviceData }
