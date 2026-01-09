# E2E Tests for QUAL-10197: GenAI - Login Functionality

## Overview

This directory contains comprehensive end-to-end tests for the login functionality using Playwright. The tests cover positive scenarios, negative scenarios, edge cases, security tests, and accessibility tests.

## Test File

- `qual_10197.spec.ts` - Main test suite with 32 comprehensive test cases

## Running Tests

### Prerequisites

```bash
# Install dependencies
npm install

# Install Playwright browsers (if not already installed)
npx playwright install chromium
```

### Run All Tests

```bash
# Run all tests (headless mode)
npm run test:e2e

# Run tests with UI mode (interactive)
npm run test:e2e:ui

# Run tests in headed mode (see browser)
npm run test:e2e:headed

# Debug tests
npm run test:e2e:debug
```

### Run Specific Tests

```bash
# Run only smoke tests
npx playwright test --grep "@smoke: true"

# Run tests by keyword
npx playwright test --grep "login"

# Run specific test file
npx playwright test tests/e2e/qual_10197.spec.ts
```

## Test Annotations

Each test includes special annotations for Story to Stable integration:

- **@smoke**: Boolean indicating if this is a critical smoke test
- **@confidence**: 0.0-1.0 confidence score for smoke test classification
- **@covers**: Source files covered by this test
- **@keywords**: Keywords for smart test selection
- **@reason**: Explanation of why this test is important (for smoke tests)

### Example Annotation

```typescript
// @smoke: true
// @confidence: 0.95
// @covers: src/components/Login/Login.tsx, src/api/auth.ts
// @keywords: login, authentication, core-flow
// @reason: Core authentication flow - application is unusable without working login
test('should allow user to login with valid credentials', async ({ page }) => {
  // test implementation
});
```

## Test Coverage

### Smoke Tests (Critical)
- TC-001: Successful login with valid credentials
- TC-005: Remember Me session persistence
- TC-019: Successful logout
- TC-022: Error handling for invalid credentials

### Positive Test Cases (15 tests)
- Successful login scenarios
- Password visibility toggle
- Remember Me functionality
- Logout functionality
- Dashboard display

### Negative Test Cases (15 tests)
- Invalid credentials
- Wrong password
- Invalid email format
- Short password
- Empty fields
- Multiple validation errors

### Edge Cases (10 tests)
- Whitespace handling
- Special characters in email
- Case sensitivity
- Very long inputs
- Multiple @ symbols
- Email without domain
- Keyboard navigation

### Security Tests (4 tests)
- XSS prevention
- SQL injection prevention
- Session security
- Password masking

### Accessibility Tests (6 tests)
- Screen reader compatibility
- ARIA attributes
- Keyboard navigation
- Focus indicators
- Autocomplete attributes

## Test Data

Valid test users (configured in `src/api/auth.ts`):

```javascript
{
  email: 'test@example.com',
  password: 'password123',
  name: 'Test User'
},
{
  email: 'admin@example.com',
  password: 'Admin@123',
  name: 'Admin User'
},
{
  email: 'john.doe@example.com',
  password: 'SecurePass123!',
  name: 'John Doe'
}
```

## Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Debugging Failed Tests

### View Traces

```bash
# Run with trace on
npx playwright test --trace on

# View trace
npx playwright show-trace trace.zip
```

### Screenshots

Screenshots are automatically captured on test failure and saved in `test-results/` directory.

### Debug Mode

```bash
# Run in debug mode with Playwright Inspector
npm run test:e2e:debug
```

## CI/CD Integration

The tests are configured to run in CI environments with:
- Retry on failure (2 retries)
- Sequential execution (1 worker)
- Automatic dev server startup
- HTML report generation

## Related Documentation

- [User Stories](../../QUAL_10197_USER_STORIES.md) - Detailed user stories for this feature
- [Manual Test Cases](../../QUAL_10197_TEST_CASES.md) - 40 detailed manual test cases
- [Playwright Documentation](https://playwright.dev/)

## Test Maintenance

### Adding New Tests

1. Add test to `qual_10197.spec.ts`
2. Include all required annotations
3. Use data-testid attributes for selectors
4. Follow existing test structure
5. Update this README if needed

### Updating Test Data

Test data is managed in `src/api/auth.ts`. Update the `validUsers` array to add/modify test accounts.

### Best Practices

- Use descriptive test names starting with "should"
- Group related tests in describe blocks
- Clear storage before each test
- Use data-testid for stable selectors
- Add appropriate wait conditions
- Mark critical paths as smoke tests
- Include accessibility checks

## Troubleshooting

### Tests Timeout

- Ensure dev server is running on port 5173
- Increase timeout in playwright.config.ts
- Check for infinite loading states

### Element Not Found

- Verify data-testid attributes exist in components
- Check if element is visible/enabled
- Add appropriate wait conditions

### Flaky Tests

- Add explicit waits for async operations
- Check for race conditions
- Use stable selectors (data-testid)
- Ensure clean state between tests

## Contact

For questions or issues with these tests, refer to:
- JIRA: QUAL-10197
- Feature: GenAI - Login Functionality
