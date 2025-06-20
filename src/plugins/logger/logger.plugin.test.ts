import { buildLogger, logger as winstonLogger } from './logger.plugin';

describe('plugins/logger.plugin.ts', () => {
  test('buildLogger should return a logger function', () => {
    const logger = buildLogger('');

    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  });

  test('logger log a message', () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
    const message = 'test message';
    const service = 'test Service';

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      })
    );
  });
});
