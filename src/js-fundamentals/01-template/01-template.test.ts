import { emailTemplate } from './01-template';

describe('js-foundation/01-template.ts', () => {
    test('Email template should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi, ');
        expect(emailTemplate).toContain('Thank u for your order.');
    })

    test('Email Template Should contain name and order ID', () => {
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
        expect(emailTemplate).toMatch(/{{product.name}}/);
    })
});