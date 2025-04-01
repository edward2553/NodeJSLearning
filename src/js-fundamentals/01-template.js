const emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p>Thank u for your order.</p>
    <p>Your order details are: {{orderId}} {{product.name}}</p>
</div>
`;

module.exports = {
    emailTemplate
}
