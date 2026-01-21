import { test, expect, APIRequestContext } from '@playwright/test';
import { getApiContext } from '../ContextHooks';
import URLConstants from '../../utils/constants/URLConstants';
import logger from '../../utils/utility/logger';

let apiContext: APIRequestContext;
const authUrl = new URLConstants().authenticate;

test.beforeAll(async () => {
    apiContext = await getApiContext();
});

test('Creates a new auth token to use for access to the PUT and DELETE /booking @token @smoke', async () => {
    const userData = {
        username: 'admin',
        password: 'password123',
    };
    console.log('auth url :  ' + authUrl);
    logger.info('auth url :  ' + authUrl);
    const response = await apiContext.post(authUrl, {
        data: JSON.stringify(userData),
    });

    const responseBody = await response.json();
    const requestInfo =
        '\nPOST: ' +
        response.url() +
        '\nRequest Body: ' +
        JSON.stringify(userData) +
        '\nResponse Body: ' +
        JSON.stringify(responseBody);

    expect(response.status(), requestInfo).toBe(200);
    expect(responseBody, requestInfo).toHaveProperty('token');
});

test('GET all booking IDs @smoke', async () => {
    const response = await apiContext.get('/booking');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const requestInfo = '\nPOST: ' + response.url() + '\nResponse Body: ' + JSON.stringify(response);

    expect(Array.isArray(responseBody), requestInfo).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
    expect(responseBody[0]).toHaveProperty('bookingid');
    console.log('responseBody[0] : ' + (await responseBody[0].bookingid));
    logger.info('responseBody[0] : ' + (await responseBody[0].bookingid));
});

test.afterEach(async () => {
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);
    logger.info(`Finished ${test.info().title} with status ${test.info().status}`);
});
