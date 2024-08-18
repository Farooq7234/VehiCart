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
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13cbb0036d3c4cf1d/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "Honda",
        price: 90
    },
    {
        id: `product_${Date.now()}_10`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13c490030609036c9/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "Aprilla",
        price: 45
    },
    {
        id: `product_${Date.now()}_11`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13cbb0036d3c4cf1d/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "Jupiter",
        price: 80
    },
    {
        id: `product_${Date.now()}_12`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13dcc003d336c92b8/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bicycles",
        productName: "heroSprint",
        price: 25
    },
    {
        id: `product_${Date.now()}_13`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13c30001c720d98d2/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "Blue Unicorn",
        price: 100
    },
    {
        id: `product_${Date.now()}_14`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c0e6a70033071f7bee/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "Rafgnor 170",
        price: 35
    },
    {
        id: `product_${Date.now()}_15`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13d5700103a8f5aac/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "Black Monster",
        price: 10
    },
    {
        id: `product_${Date.now()}_16`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c0e63f003b76e4988f/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "BSA LadyBird",
        price: 65
    },
    {
        id: `product_${Date.now()}_17`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13c490030609036c9/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bikes",
        productName: "Red Thunder 100 ",
        price: 95
    },
    {
        id: `product_${Date.now()}_18`,
        productImage: 'https://cloud.appwrite.io/v1/storage/buckets/66c0e4820009a5f98c53/files/66c13dcc003d336c92b8/view?project=66c0e45b0025da8c44ea&mode=admin',
        category: "Bicycles",
        productName: "Hercules R1",
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
        custName: "John Doe",
        custImage: "https://images.unsplash.com/photo-1603415526960-e7d2f82d7da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        clientId: "client01",
        review: "I highly recommend this rental service for your next trip!!"
    },
    {
        custName: "Sarah Lee",
        custImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        clientId: "client02",
        review: "The rental platform offers the best experience and outstanding service!"
    },
    {
        custName: "Michael Smith",
        custImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1vZGVsfGVufDB8fDB8fHww",
        clientId: "client01",
        review: "This vehicle rental site is fantastic!"
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
