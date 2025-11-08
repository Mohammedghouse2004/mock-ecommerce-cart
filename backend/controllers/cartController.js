let cart = [];

export const getCart = (req, res) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    res.json({ items: cart, total });
};

export const addToCart = (req, res) => {
    const { id, name, price, qty } = req.body;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, name, price, qty });
    res.json(cart);
};

export const removeFromCart = (req, res) => {
    const id = parseInt(req.params.id);
    cart = cart.filter(item => item.id !== id);
    res.json(cart);
};

export const checkout = (req, res) => {
    const { cartItems, name, email } = req.body;
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const receipt = {
        user: { name, email },
        total,
        timestamp: new Date().toLocaleString()
    };
    cart = [];
    res.json(receipt);
};