describe('App', () => {
  it('should be true', () => {

    // 1. Arrange => preparar el escenario
    const num1 = 10;
    const num2 = 20;

    // 2. Act => aplicando algun tipo de estimulo
    const result = num1 + num2;

    // 3. Assert => verificar el resultado
    expect(result).toBe(30);
  });
});
