export const getProducts = (req, res) => {
    const mockProducts = [
        { id: 1, name: "Wireless Headphones", price: 1299, image: "https://via.placeholder.com/200" },
        { id: 2, name: "Bluetooth Speaker", price: 899, image: "https://via.placeholder.com/200" },
        { id: 3, name: "Smart Watch", price: 1999, image: "https://via.placeholder.com/200" },
        { id: 4, name: "Gaming Mouse", price: 599, image: "https://via.placeholder.com/200" },
        { id: 5, name: "Keyboard", price: 499, image: "https://via.placeholder.com/200" }
    ];
    res.json(mockProducts);
};